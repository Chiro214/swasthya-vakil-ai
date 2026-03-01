# Design Document: Swasthya-Vakil

## Overview

Swasthya-Vakil is a serverless WhatsApp-based AI Legal Agent that processes voice grievances from Ayushman Bharat beneficiaries and generates legally-grounded notices. The system uses a monolithic Lambda architecture with FastAPI for optimal cold-start performance and simplified deployment.

## Architecture

### High-Level Architecture

```
User (WhatsApp) 
    ↓
Twilio Webhook
    ↓
AWS API Gateway (HTTP API)
    ↓
AWS Lambda (FastAPI Monolith)
    ├── WhatsApp Handler
    ├── ASR Service (OpenAI Whisper)
    ├── Translation Service (GPT-4o)
    ├── RAG Engine (LangChain + Pinecone)
    ├── PDF Generator (ReportLab)
    └── Delivery Service (WhatsApp + SES)
    ↓
External Services:
    ├── DynamoDB (Grievance Records + DGNO Lookup + Audit Logs)
    ├── S3 (Ephemeral PDF Storage - 1 day lifecycle)
    ├── Pinecone (Vector Database - NHA Guidelines)
    ├── AWS SES (Email Delivery)
    └── OpenAI API (Whisper + GPT-4o)
```

### Component Design

#### 1. Lambda Monolith (FastAPI)

**Rationale**: Single Lambda function reduces cold starts, simplifies deployment, and minimizes inter-service latency for MVP.

**Structure**:
```
src/
├── main.py                 # FastAPI app entry point
├── handlers/
│   └── whatsapp_handler.py # Webhook endpoint
├── services/
│   ├── asr_service.py      # Whisper transcription
│   ├── translation_service.py # GPT-4o translation
│   ├── rag_service.py      # LangChain + Pinecone RAG
│   ├── pdf_service.py      # ReportLab PDF generation
│   └── delivery_service.py # WhatsApp + SES delivery
├── models/
│   └── grievance.py        # Data models
├── utils/
│   ├── pii_redactor.py     # PII redaction logic
│   └── validators.py       # Input validation
└── config.py               # Environment configuration
```

**Lambda Configuration**:
- Runtime: Python 3.11
- Memory: 2048 MB (for ML model inference)
- Timeout: 60 seconds
- Ephemeral Storage: 1024 MB
- Environment Variables: API keys, DB table names, S3 bucket

#### 2. API Gateway (HTTP API)

**Endpoint**: `POST /webhook/whatsapp`

**Features**:
- Twilio signature validation
- Request/response logging
- CORS configuration
- Rate limiting (1000 req/min)

#### 3. DynamoDB Tables

**Table 1: Grievances**
```
PK: grievance_id (UUID)
SK: timestamp
Attributes:
- user_phone_number (encrypted)
- audio_url (S3 presigned URL)
- transcription
- translated_text
- identified_clause
- pdf_url (S3)
- status (processing|completed|failed)
- created_at
- updated_at
```

**Table 2: DGNO_Lookup**
```
PK: district_code
Attributes:
- dgno_email
- dgno_name
- district_name
- state
```

**Table 3: Audit_Logs**
```
PK: log_id (UUID)
SK: timestamp
Attributes:
- grievance_id
- action (transcription|translation|rag_query|pdf_generated|email_sent)
- status (success|failure)
- metadata (JSON)
- error_message (if failed)
```

#### 4. S3 Bucket (Ephemeral Storage)

**Bucket**: `swasthya-vakil-pdfs-{env}`

**Lifecycle Policy**: Delete objects after 1 day

**Structure**:
```
/grievances/{grievance_id}/
    ├── notice.pdf
    └── notice_redacted.pdf (for DGNO)
```

#### 5. Pinecone Vector Database

**Index**: `nha-guidelines-2025`

**Configuration**:
- Dimension: 3072 (text-embedding-3-large)
- Metric: Cosine similarity
- Pods: 1 (p1.x1 for MVP)

**Metadata Schema**:
```json
{
  "clause_number": "4.2",
  "section_title": "Cashless Service Obligations",
  "page_number": 42,
  "text": "Full clause text...",
  "category": "service_denial"
}
```

## Data Flow

### End-to-End Processing Pipeline

```
1. Receive WhatsApp Voice Note
   ↓
2. Validate Twilio Signature
   ↓
3. Download Audio from Twilio
   ↓
4. Create Grievance Record (DynamoDB)
   ↓
5. Transcribe Audio (Whisper API)
   ↓ (Log to Audit_Logs)
6. Detect Language & Translate (GPT-4o)
   ↓ (Log to Audit_Logs)
7. Query Vector DB (Pinecone + LangChain)
   ↓ (Log to Audit_Logs)
8. Identify Violated Clause (RAG)
   ↓
9. Generate PDF Notice (ReportLab)
   ↓ (Upload to S3, Log to Audit_Logs)
10. Redact PII for DGNO Copy
   ↓
11. Send PDF to User (WhatsApp)
   ↓ (Log to Audit_Logs)
12. Lookup DGNO Email (DynamoDB)
   ↓
13. Send Email to DGNO (SES)
   ↓ (Log to Audit_Logs)
14. Update Grievance Status (DynamoDB)
   ↓
15. Send Confirmation to User (WhatsApp)
```

## Correctness Properties

### Property 1: Audio Transcription Accuracy
**Validates: Requirement 1**

**Property**: For any valid audio input in a supported language, the transcription must contain recognizable words from that language's vocabulary.

**Test Strategy**:
- Generate synthetic audio samples in 10 Indic languages
- Verify transcription is non-empty and contains valid Unicode characters
- Check language detection matches input language

**Hypothesis Test**:
```python
@given(audio=valid_audio_samples(), language=supported_languages())
def test_transcription_produces_valid_text(audio, language):
    result = asr_service.transcribe(audio, language)
    assert len(result.text) > 0
    assert is_valid_unicode(result.text)
    assert result.detected_language == language
```

### Property 2: Translation Preserves Meaning
**Validates: Requirement 2**

**Property**: For any transcribed text, the English translation must preserve key entities (hospital names, amounts, dates) and sentiment.

**Test Strategy**:
- Use back-translation to verify semantic equivalence
- Extract named entities from original and translated text
- Compare entity overlap (>80% match required)

**Hypothesis Test**:
```python
@given(text=indic_language_text(), language=supported_languages())
def test_translation_preserves_entities(text, language):
    translated = translation_service.translate(text, language, "en")
    back_translated = translation_service.translate(translated, "en", language)
    
    original_entities = extract_entities(text)
    preserved_entities = extract_entities(back_translated)
    
    overlap = entity_overlap(original_entities, preserved_entities)
    assert overlap >= 0.8
```

### Property 3: RAG Grounding (Zero Hallucination)
**Validates: Requirement 3, Requirement 12**

**Property**: For any grievance query, the identified clause must exist in the NHA Guidelines with a similarity score ≥ 0.75, or the system must return "no match found".

**Test Strategy**:
- Query with known clause violations (positive cases)
- Query with nonsensical inputs (negative cases)
- Verify all returned clauses exist in source document
- Verify similarity scores meet threshold

**Hypothesis Test**:
```python
@given(query=grievance_descriptions())
def test_rag_only_returns_grounded_clauses(query):
    result = rag_service.identify_clause(query)
    
    if result.clause_found:
        assert result.similarity_score >= 0.75
        assert clause_exists_in_guidelines(result.clause_number)
        assert result.clause_text in nha_guidelines_corpus
    else:
        assert result.similarity_score < 0.75
        assert result.clause_number is None
```

### Property 4: PII Redaction Completeness
**Validates: Requirement 7**

**Property**: For any PDF sent to DGNO, all PII patterns (phone numbers, Ayushman card numbers, names, addresses) must be redacted.

**Test Strategy**:
- Generate PDFs with synthetic PII
- Scan redacted PDFs for PII patterns using regex
- Verify zero PII leakage

**Hypothesis Test**:
```python
@given(grievance=grievances_with_pii())
def test_pii_redaction_is_complete(grievance):
    pdf_bytes = pdf_service.generate_notice(grievance)
    redacted_pdf = pii_redactor.redact(pdf_bytes)
    
    extracted_text = extract_text_from_pdf(redacted_pdf)
    
    assert not contains_phone_numbers(extracted_text)
    assert not contains_ayushman_card_numbers(extracted_text)
    assert not contains_personal_names(extracted_text)
    assert not contains_addresses(extracted_text)
```

### Property 5: End-to-End Latency
**Validates: Requirement 6**

**Property**: For any valid voice input, the system must complete processing (transcription → PDF delivery) within 60 seconds.

**Test Strategy**:
- Measure wall-clock time for complete pipeline
- Test with various audio lengths (10s, 30s, 60s, 180s)
- Verify 95th percentile latency < 60s

**Hypothesis Test**:
```python
@given(audio=valid_audio_samples(duration=st.integers(10, 180)))
def test_end_to_end_latency_under_60_seconds(audio):
    start_time = time.time()
    
    result = process_grievance_pipeline(audio)
    
    end_time = time.time()
    latency = end_time - start_time
    
    assert latency < 60.0
    assert result.status == "completed"
```

### Property 6: Delivery Idempotency
**Validates: Requirement 5**

**Property**: For any grievance, retrying delivery must not create duplicate emails or WhatsApp messages.

**Test Strategy**:
- Simulate delivery failures
- Retry delivery multiple times
- Verify DGNO receives exactly one email
- Verify user receives exactly one WhatsApp message

**Hypothesis Test**:
```python
@given(grievance_id=st.uuids(), retry_count=st.integers(1, 5))
def test_delivery_is_idempotent(grievance_id, retry_count):
    email_count = 0
    whatsapp_count = 0
    
    for _ in range(retry_count):
        delivery_service.deliver_notice(grievance_id)
    
    email_count = count_emails_sent(grievance_id)
    whatsapp_count = count_whatsapp_messages_sent(grievance_id)
    
    assert email_count == 1
    assert whatsapp_count == 1
```

### Property 7: Audit Log Completeness
**Validates: Requirement 7 (Compliance)**

**Property**: For any grievance, every processing step must have a corresponding audit log entry.

**Test Strategy**:
- Process grievances through pipeline
- Query audit logs for grievance_id
- Verify all expected actions are logged

**Hypothesis Test**:
```python
@given(grievance=valid_grievances())
def test_all_actions_are_audited(grievance):
    process_grievance_pipeline(grievance)
    
    logs = audit_service.get_logs(grievance.id)
    actions = [log.action for log in logs]
    
    required_actions = [
        "transcription", "translation", "rag_query",
        "pdf_generated", "email_sent", "whatsapp_sent"
    ]
    
    for action in required_actions:
        assert action in actions
```

### Property 8: DGNO Email Resolution
**Validates: Requirement 5**

**Property**: For any valid district code, the system must resolve a valid DGNO email address, or fail gracefully.

**Test Strategy**:
- Test with known district codes
- Test with invalid district codes
- Verify email format validation

**Hypothesis Test**:
```python
@given(district_code=district_codes())
def test_dgno_email_resolution(district_code):
    result = delivery_service.resolve_dgno_email(district_code)
    
    if result.found:
        assert is_valid_email(result.email)
        assert result.district_name is not None
    else:
        assert result.email is None
        # System should notify user of missing DGNO
```

## Testing Strategy

### Unit Tests (pytest)
- Test individual service functions
- Mock external API calls (OpenAI, Pinecone, Twilio)
- Focus on business logic and error handling

### Property-Based Tests (Hypothesis)
- Implement all 8 correctness properties above
- Use custom strategies for domain-specific data (audio samples, grievance text, PII patterns)
- Run with 100 examples per property

### Integration Tests
- Test FastAPI endpoints with test client
- Use LocalStack for AWS services (DynamoDB, S3, SES)
- Verify end-to-end data flow

### Load Tests (Optional for MVP)
- Simulate concurrent WhatsApp messages
- Measure Lambda cold start times
- Verify auto-scaling behavior

## Security & Privacy

### PII Redaction Algorithm

**Patterns to Redact**:
1. Phone Numbers: `\+91[6-9]\d{9}` → `[PHONE_REDACTED]`
2. Ayushman Card: `\d{14}` → `[CARD_REDACTED]`
3. Names: Use NER model (spaCy) → `[NAME_REDACTED]`
4. Addresses: Use NER model → `[ADDRESS_REDACTED]`

**Implementation**:
```python
def redact_pii(text: str) -> str:
    # Regex-based redaction
    text = re.sub(r'\+91[6-9]\d{9}', '[PHONE_REDACTED]', text)
    text = re.sub(r'\b\d{14}\b', '[CARD_REDACTED]', text)
    
    # NER-based redaction
    doc = nlp(text)
    for ent in doc.ents:
        if ent.label_ in ['PERSON', 'GPE', 'LOC']:
            text = text.replace(ent.text, f'[{ent.label_}_REDACTED]')
    
    return text
```

### Encryption

**At Rest**:
- DynamoDB: Enable encryption with AWS KMS
- S3: Enable SSE-S3 encryption
- Environment Variables: Use AWS Secrets Manager

**In Transit**:
- All API calls use HTTPS/TLS 1.3
- Twilio webhook uses HTTPS
- OpenAI API uses HTTPS

### Authentication

**Twilio Webhook Validation**:
```python
def validate_twilio_signature(request):
    signature = request.headers.get('X-Twilio-Signature')
    url = request.url
    params = request.form
    
    validator = RequestValidator(TWILIO_AUTH_TOKEN)
    return validator.validate(url, params, signature)
```

## Error Handling

### Error Categories

1. **Transient Errors** (Retry with exponential backoff):
   - OpenAI API rate limits
   - Pinecone timeout
   - SES throttling
   - Network errors

2. **Permanent Errors** (Fail fast, notify user):
   - Invalid audio format
   - Unsupported language
   - No clause match found (confidence < 0.75)
   - Invalid district code

3. **Critical Errors** (Alert ops team):
   - Lambda timeout
   - DynamoDB unavailable
   - S3 write failure

### User-Facing Error Messages

**Language-Specific Templates**:
```python
ERROR_MESSAGES = {
    "hi": "क्षमा करें, आपकी शिकायत प्रोसेस करने में समस्या हुई। कृपया पुनः प्रयास करें।",
    "en": "Sorry, there was an issue processing your grievance. Please try again.",
    "mr": "माफ करा, तुमची तक्रार प्रक्रिया करताना समस्या आली. कृपया पुन्हा प्रयत्न करा।"
}
```

## Deployment

### Infrastructure as Code (AWS CDK)

**Stack Components**:
- Lambda Function (with FastAPI layer)
- API Gateway HTTP API
- DynamoDB Tables (3)
- S3 Bucket (with lifecycle policy)
- IAM Roles & Policies
- CloudWatch Log Groups
- Secrets Manager (API keys)

### CI/CD Pipeline

**GitHub Actions Workflow**:
1. Run pytest (unit + property tests)
2. Build Lambda deployment package
3. Deploy to staging environment
4. Run integration tests
5. Deploy to production (manual approval)

### Environment Variables

```
OPENAI_API_KEY=<secret>
PINECONE_API_KEY=<secret>
PINECONE_INDEX_NAME=nha-guidelines-2025
TWILIO_ACCOUNT_SID=<secret>
TWILIO_AUTH_TOKEN=<secret>
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
AWS_REGION=ap-south-1
DYNAMODB_GRIEVANCES_TABLE=swasthya-vakil-grievances
DYNAMODB_DGNO_TABLE=swasthya-vakil-dgno-lookup
DYNAMODB_AUDIT_TABLE=swasthya-vakil-audit-logs
S3_BUCKET=swasthya-vakil-pdfs-prod
SES_SENDER_EMAIL=noreply@swasthya-vakil.gov.in
```

## Performance Optimization

### Cold Start Mitigation
- Use Lambda SnapStart (Python 3.11)
- Lazy-load heavy dependencies (ReportLab, spaCy)
- Cache Pinecone client connection
- Reuse HTTP connections (requests.Session)

### Memory Optimization
- Stream audio downloads (don't load into memory)
- Generate PDFs in chunks
- Use generators for large data processing

### Cost Optimization
- Use S3 lifecycle policy (1-day deletion)
- Optimize Lambda memory (2048 MB for ML, 512 MB for API)
- Use Pinecone serverless (pay-per-query)
- Batch DynamoDB writes

## Monitoring & Observability

### CloudWatch Metrics
- Lambda invocations, errors, duration
- API Gateway 4xx/5xx errors
- DynamoDB read/write capacity
- S3 storage usage

### Custom Metrics
- Grievances processed per hour
- Average end-to-end latency
- RAG accuracy (similarity scores)
- Delivery success rate

### Alarms
- Lambda error rate > 5%
- End-to-end latency > 60s (P95)
- DynamoDB throttling
- SES bounce rate > 10%

## Phase 1 Implementation Priority

### Core Deliverables (Hackathon MVP)

1. **RAG Accuracy** (Highest Priority)
   - Ingest NHA Guidelines into Pinecone
   - Implement LangChain RAG pipeline
   - Test with 20 sample grievances
   - Achieve >90% clause identification accuracy

2. **PDF Generation** (Highest Priority)
   - Design legal notice template
   - Implement ReportLab PDF generator
   - Add PII redaction logic
   - Generate sample PDFs

3. **WhatsApp Integration** (Medium Priority)
   - Set up Twilio webhook
   - Implement audio download
   - Test voice note reception

4. **ASR + Translation** (Medium Priority)
   - Integrate OpenAI Whisper API
   - Implement GPT-4o translation
   - Test with Hindi/Marathi samples

5. **Delivery** (Lower Priority for MVP)
   - Implement WhatsApp PDF sending
   - Set up SES email delivery
   - Test end-to-end flow

## Success Metrics

### Technical Metrics
- End-to-end latency: <60s (P95)
- RAG accuracy: >90% (clause identification)
- PII redaction: 100% (zero leakage)
- System uptime: >99.5%

### Business Metrics
- Grievances processed per day
- User satisfaction (WhatsApp feedback)
- DGNO response rate
- Legal notice acceptance rate

