# Requirements Document: Swasthya-Vakil

## Introduction

Swasthya-Vakil is a WhatsApp-based AI Legal Agent designed to empower illiterate beneficiaries of the Ayushman Bharat (PM-JAY) scheme to fight illegal treatment denial. The system automates the generation of formal legal notices using Generative AI, enabling users to submit grievances via voice notes in local Indian languages and receive legally-grounded notices that are automatically delivered to relevant authorities.

## Glossary

- **System**: The Swasthya-Vakil AI Legal Agent
- **User**: A beneficiary of the Ayushman Bharat (PM-JAY) scheme
- **WhatsApp_Interface**: The WhatsApp Business API integration (Twilio)
- **ASR_Service**: Automatic Speech Recognition service (OpenAI Whisper)
- **Translation_Service**: Language translation service (GPT-4o)
- **RAG_Engine**: Retrieval-Augmented Generation engine using LangChain
- **Vector_Database**: Pinecone vector database containing NHA guidelines
- **PDF_Generator**: ReportLab-based PDF generation service
- **Delivery_Service**: Service for sending PDFs via WhatsApp and email
- **DGNO**: District Grievance Nodal Officer
- **NHA_Guidelines**: National Health Authority Empanelment Guidelines 2025
- **PII**: Personally Identifiable Information
- **Grievance_Notice**: Formal legal notice document citing violated clauses

## Requirements

### Requirement 1: Voice Input Processing

**User Story:** As a user, I want to send a voice note in my local language describing my treatment denial issue, so that I can report my grievance without needing to read or write.

#### Acceptance Criteria

1. WHEN a user sends a voice note via WhatsApp, THE WhatsApp_Interface SHALL receive and forward the audio to the ASR_Service
2. WHEN the audio is received, THE System SHALL support audio formats compatible with WhatsApp (OGG, MP3, AAC)
3. WHEN processing audio, THE ASR_Service SHALL transcribe the audio to text using OpenAI Whisper
4. WHEN transcription is complete, THE System SHALL store the audio ephemerally and delete it after processing
5. THE System SHALL support voice notes in at least 10 Indic languages (Hindi, Marathi, Bengali, Tamil, Telugu, Gujarati, Kannada, Malayalam, Punjabi, Odia)

### Requirement 2: Language Translation

**User Story:** As a user, I want my local language input to be understood by the system, so that I can communicate in my preferred language.

#### Acceptance Criteria

1. WHEN transcribed text is in a non-English language, THE Translation_Service SHALL translate it to English using GPT-4o
2. WHEN translation is complete, THE System SHALL preserve the original meaning and context of the grievance
3. WHEN translation fails, THE System SHALL return an error message to the user in their original language
4. THE Translation_Service SHALL maintain a mapping of supported language codes to language names

### Requirement 3: Legal Clause Identification

**User Story:** As a user, I want the system to identify which specific legal clause was violated, so that my grievance notice has legal grounding.

#### Acceptance Criteria

1. WHEN English text is available, THE RAG_Engine SHALL query the Vector_Database with the grievance description
2. WHEN querying the database, THE RAG_Engine SHALL retrieve relevant sections from the NHA_Guidelines
3. WHEN relevant sections are found, THE RAG_Engine SHALL identify the specific violated clause (e.g., Clause 4.2)
4. WHEN no relevant clause is found, THE System SHALL request clarification from the user
5. THE RAG_Engine SHALL use only the provided NHA_Guidelines context without hallucinating information
6. THE Vector_Database SHALL contain the complete and current NHA Empanelment Guidelines 2025

### Requirement 4: Grievance Notice Generation

**User Story:** As a user, I want to receive a formal legal notice document, so that I have official documentation to support my grievance.

#### Acceptance Criteria

1. WHEN a violated clause is identified, THE PDF_Generator SHALL create a Grievance_Notice document
2. WHEN generating the notice, THE PDF_Generator SHALL include the user's grievance description
3. WHEN generating the notice, THE PDF_Generator SHALL cite the specific violated clause from NHA_Guidelines
4. WHEN generating the notice, THE PDF_Generator SHALL include the clause text and reference
5. WHEN generating the notice, THE PDF_Generator SHALL format the document as a formal legal notice
6. THE PDF_Generator SHALL redact all PII from the generated document before external delivery

### Requirement 5: Notice Delivery

**User Story:** As a user, I want my grievance notice to be automatically sent to the relevant authorities, so that my complaint is officially registered.

#### Acceptance Criteria

1. WHEN a Grievance_Notice is generated, THE Delivery_Service SHALL send the PDF to the user via WhatsApp
2. WHEN a Grievance_Notice is generated, THE Delivery_Service SHALL email the PDF to the DGNO via SMTP
3. WHEN sending email, THE Delivery_Service SHALL include the grievance reference number in the subject line
4. WHEN delivery fails, THE System SHALL retry delivery up to 3 times with exponential backoff
5. WHEN all delivery attempts fail, THE System SHALL notify the user of the delivery failure

### Requirement 6: Performance Requirements

**User Story:** As a user, I want to receive my grievance notice quickly, so that I can take timely action on my treatment denial.

#### Acceptance Criteria

1. THE System SHALL process a complete user request (voice input to PDF delivery) within 60 seconds
2. WHEN the ASR_Service processes audio, THE transcription SHALL complete within 15 seconds
3. WHEN the Translation_Service processes text, THE translation SHALL complete within 5 seconds
4. WHEN the RAG_Engine queries the Vector_Database, THE retrieval SHALL complete within 10 seconds
5. WHEN the PDF_Generator creates a document, THE generation SHALL complete within 5 seconds

### Requirement 7: Data Security and Privacy

**User Story:** As a user, I want my personal information to be protected, so that my privacy is maintained throughout the process.

#### Acceptance Criteria

1. WHEN audio is received, THE System SHALL store it ephemerally in memory only
2. WHEN processing is complete, THE System SHALL delete all audio files immediately
3. WHEN generating external documents, THE System SHALL redact all PII (names, addresses, phone numbers, Ayushman card numbers)
4. WHEN storing data, THE System SHALL encrypt all data at rest using AES-256
5. WHEN transmitting data, THE System SHALL use TLS 1.3 or higher for all network communications
6. THE System SHALL not persist user audio or transcriptions beyond the request lifecycle

### Requirement 8: Error Handling and User Communication

**User Story:** As a user, I want to understand what's happening with my request, so that I know if there are any issues or delays.

#### Acceptance Criteria

1. WHEN processing begins, THE System SHALL send an acknowledgment message to the user via WhatsApp
2. WHEN an error occurs, THE System SHALL send a user-friendly error message in the user's original language
3. WHEN the system is processing, THE System SHALL send status updates if processing exceeds 30 seconds
4. WHEN a Grievance_Notice is successfully delivered, THE System SHALL send a confirmation message with the reference number
5. IF audio quality is insufficient for transcription, THEN THE System SHALL request the user to resend with clearer audio

### Requirement 9: Vector Database Management

**User Story:** As a system administrator, I want the legal guidelines to be kept current, so that users receive accurate legal information.

#### Acceptance Criteria

1. THE Vector_Database SHALL store embeddings of the NHA Empanelment Guidelines 2025
2. WHEN guidelines are updated, THE System SHALL support re-indexing the Vector_Database
3. WHEN querying, THE Vector_Database SHALL return the top 5 most relevant document chunks
4. THE Vector_Database SHALL maintain metadata including clause numbers, section titles, and page references
5. WHEN embeddings are generated, THE System SHALL use a consistent embedding model (text-embedding-3-large or equivalent)

### Requirement 10: WhatsApp Integration

**User Story:** As a user, I want to interact with the system through WhatsApp, so that I can use a familiar platform without installing new apps.

#### Acceptance Criteria

1. THE WhatsApp_Interface SHALL authenticate incoming messages using Twilio webhook signatures
2. WHEN a message is received, THE WhatsApp_Interface SHALL validate the sender's phone number
3. WHEN sending messages, THE WhatsApp_Interface SHALL handle WhatsApp API rate limits gracefully
4. WHEN sending PDFs, THE WhatsApp_Interface SHALL ensure file size is under WhatsApp's 16MB limit
5. THE WhatsApp_Interface SHALL support receiving voice notes up to 3 minutes in duration

### Requirement 11: Serverless Architecture

**User Story:** As a system operator, I want the system to scale automatically with demand, so that all users receive timely service regardless of load.

#### Acceptance Criteria

1. THE System SHALL be deployed on AWS Lambda for serverless execution
2. WHEN request volume increases, THE System SHALL scale automatically up to 1000 concurrent executions
3. WHEN a Lambda function is invoked, THE System SHALL initialize within 3 seconds (cold start)
4. THE System SHALL use AWS API Gateway for HTTP endpoint management
5. WHEN Lambda execution time approaches the timeout, THE System SHALL gracefully handle the timeout and notify the user

### Requirement 12: Hallucination Prevention

**User Story:** As a user, I want to receive legally accurate information, so that my grievance notice is credible and effective.

#### Acceptance Criteria

1. WHEN generating responses, THE RAG_Engine SHALL only use information retrieved from the Vector_Database
2. WHEN no relevant information is found, THE System SHALL not generate speculative legal advice
3. WHEN citing clauses, THE System SHALL include exact clause numbers and text from the NHA_Guidelines
4. THE RAG_Engine SHALL implement strict grounding by requiring minimum similarity scores (>0.75) for retrieved chunks
5. WHEN the confidence score is below threshold, THE System SHALL request human review before sending the notice
