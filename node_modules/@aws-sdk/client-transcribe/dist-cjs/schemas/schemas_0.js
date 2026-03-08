"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMedicalVocabularyResponse$ = exports.GetMedicalVocabularyRequest$ = exports.GetMedicalTranscriptionJobResponse$ = exports.GetMedicalTranscriptionJobRequest$ = exports.GetMedicalScribeJobResponse$ = exports.GetMedicalScribeJobRequest$ = exports.GetCallAnalyticsJobResponse$ = exports.GetCallAnalyticsJobRequest$ = exports.GetCallAnalyticsCategoryResponse$ = exports.GetCallAnalyticsCategoryRequest$ = exports.DescribeLanguageModelResponse$ = exports.DescribeLanguageModelRequest$ = exports.DeleteVocabularyRequest$ = exports.DeleteVocabularyFilterRequest$ = exports.DeleteTranscriptionJobRequest$ = exports.DeleteMedicalVocabularyRequest$ = exports.DeleteMedicalTranscriptionJobRequest$ = exports.DeleteMedicalScribeJobRequest$ = exports.DeleteLanguageModelRequest$ = exports.DeleteCallAnalyticsJobResponse$ = exports.DeleteCallAnalyticsJobRequest$ = exports.DeleteCallAnalyticsCategoryResponse$ = exports.DeleteCallAnalyticsCategoryRequest$ = exports.CreateVocabularyResponse$ = exports.CreateVocabularyRequest$ = exports.CreateVocabularyFilterResponse$ = exports.CreateVocabularyFilterRequest$ = exports.CreateMedicalVocabularyResponse$ = exports.CreateMedicalVocabularyRequest$ = exports.CreateLanguageModelResponse$ = exports.CreateLanguageModelRequest$ = exports.CreateCallAnalyticsCategoryResponse$ = exports.CreateCallAnalyticsCategoryRequest$ = exports.ContentRedaction$ = exports.ClinicalNoteGenerationSettings$ = exports.ChannelDefinition$ = exports.CategoryProperties$ = exports.CallAnalyticsSkippedFeature$ = exports.CallAnalyticsJobSummary$ = exports.CallAnalyticsJobSettings$ = exports.CallAnalyticsJobDetails$ = exports.CallAnalyticsJob$ = exports.AbsoluteTimeRange$ = exports.errorTypeRegistries = exports.NotFoundException$ = exports.LimitExceededException$ = exports.InternalFailureException$ = exports.ConflictException$ = exports.BadRequestException$ = exports.TranscribeServiceException$ = void 0;
exports.StartCallAnalyticsJobRequest$ = exports.Settings$ = exports.SentimentFilter$ = exports.RelativeTimeRange$ = exports.NonTalkTimeFilter$ = exports.ModelSettings$ = exports.MedicalTranscriptionSetting$ = exports.MedicalTranscriptionJobSummary$ = exports.MedicalTranscriptionJob$ = exports.MedicalTranscript$ = exports.MedicalScribeSettings$ = exports.MedicalScribePatientContext$ = exports.MedicalScribeOutput$ = exports.MedicalScribeJobSummary$ = exports.MedicalScribeJob$ = exports.MedicalScribeContext$ = exports.MedicalScribeChannelDefinition$ = exports.Media$ = exports.ListVocabularyFiltersResponse$ = exports.ListVocabularyFiltersRequest$ = exports.ListVocabulariesResponse$ = exports.ListVocabulariesRequest$ = exports.ListTranscriptionJobsResponse$ = exports.ListTranscriptionJobsRequest$ = exports.ListTagsForResourceResponse$ = exports.ListTagsForResourceRequest$ = exports.ListMedicalVocabulariesResponse$ = exports.ListMedicalVocabulariesRequest$ = exports.ListMedicalTranscriptionJobsResponse$ = exports.ListMedicalTranscriptionJobsRequest$ = exports.ListMedicalScribeJobsResponse$ = exports.ListMedicalScribeJobsRequest$ = exports.ListLanguageModelsResponse$ = exports.ListLanguageModelsRequest$ = exports.ListCallAnalyticsJobsResponse$ = exports.ListCallAnalyticsJobsRequest$ = exports.ListCallAnalyticsCategoriesResponse$ = exports.ListCallAnalyticsCategoriesRequest$ = exports.LanguageModel$ = exports.LanguageIdSettings$ = exports.LanguageCodeItem$ = exports.JobExecutionSettings$ = exports.InterruptionFilter$ = exports.InputDataConfig$ = exports.GetVocabularyResponse$ = exports.GetVocabularyRequest$ = exports.GetVocabularyFilterResponse$ = exports.GetVocabularyFilterRequest$ = exports.GetTranscriptionJobResponse$ = exports.GetTranscriptionJobRequest$ = void 0;
exports.GetMedicalTranscriptionJob$ = exports.GetMedicalScribeJob$ = exports.GetCallAnalyticsJob$ = exports.GetCallAnalyticsCategory$ = exports.DescribeLanguageModel$ = exports.DeleteVocabularyFilter$ = exports.DeleteVocabulary$ = exports.DeleteTranscriptionJob$ = exports.DeleteMedicalVocabulary$ = exports.DeleteMedicalTranscriptionJob$ = exports.DeleteMedicalScribeJob$ = exports.DeleteLanguageModel$ = exports.DeleteCallAnalyticsJob$ = exports.DeleteCallAnalyticsCategory$ = exports.CreateVocabularyFilter$ = exports.CreateVocabulary$ = exports.CreateMedicalVocabulary$ = exports.CreateLanguageModel$ = exports.CreateCallAnalyticsCategory$ = exports.Rule$ = exports.VocabularyInfo$ = exports.VocabularyFilterInfo$ = exports.UpdateVocabularyResponse$ = exports.UpdateVocabularyRequest$ = exports.UpdateVocabularyFilterResponse$ = exports.UpdateVocabularyFilterRequest$ = exports.UpdateMedicalVocabularyResponse$ = exports.UpdateMedicalVocabularyRequest$ = exports.UpdateCallAnalyticsCategoryResponse$ = exports.UpdateCallAnalyticsCategoryRequest$ = exports.UntagResourceResponse$ = exports.UntagResourceRequest$ = exports.TranscriptionJobSummary$ = exports.TranscriptionJob$ = exports.TranscriptFilter$ = exports.Transcript$ = exports.ToxicityDetectionSettings$ = exports.TagResourceResponse$ = exports.TagResourceRequest$ = exports.Tag$ = exports.Summarization$ = exports.SubtitlesOutput$ = exports.Subtitles$ = exports.StartTranscriptionJobResponse$ = exports.StartTranscriptionJobRequest$ = exports.StartMedicalTranscriptionJobResponse$ = exports.StartMedicalTranscriptionJobRequest$ = exports.StartMedicalScribeJobResponse$ = exports.StartMedicalScribeJobRequest$ = exports.StartCallAnalyticsJobResponse$ = void 0;
exports.UpdateVocabularyFilter$ = exports.UpdateVocabulary$ = exports.UpdateMedicalVocabulary$ = exports.UpdateCallAnalyticsCategory$ = exports.UntagResource$ = exports.TagResource$ = exports.StartTranscriptionJob$ = exports.StartMedicalTranscriptionJob$ = exports.StartMedicalScribeJob$ = exports.StartCallAnalyticsJob$ = exports.ListVocabularyFilters$ = exports.ListVocabularies$ = exports.ListTranscriptionJobs$ = exports.ListTagsForResource$ = exports.ListMedicalVocabularies$ = exports.ListMedicalTranscriptionJobs$ = exports.ListMedicalScribeJobs$ = exports.ListLanguageModels$ = exports.ListCallAnalyticsJobs$ = exports.ListCallAnalyticsCategories$ = exports.GetVocabularyFilter$ = exports.GetVocabulary$ = exports.GetTranscriptionJob$ = exports.GetMedicalVocabulary$ = void 0;
const _ADE = "AllowDeferredExecution";
const _ATR = "AbsoluteTimeRange";
const _BMN = "BaseModelName";
const _BRE = "BadRequestException";
const _C = "Categories";
const _CAJ = "CallAnalyticsJob";
const _CAJD = "CallAnalyticsJobDetails";
const _CAJN = "CallAnalyticsJobName";
const _CAJS = "CallAnalyticsJobStatus";
const _CAJSa = "CallAnalyticsJobSettings";
const _CAJSal = "CallAnalyticsJobSummary";
const _CAJSall = "CallAnalyticsJobSummaries";
const _CASF = "CallAnalyticsSkippedFeature";
const _CASFL = "CallAnalyticsSkippedFeatureList";
const _CCAC = "CreateCallAnalyticsCategory";
const _CCACR = "CreateCallAnalyticsCategoryRequest";
const _CCACRr = "CreateCallAnalyticsCategoryResponse";
const _CD = "ChannelDefinitions";
const _CDU = "ClinicalDocumentUri";
const _CDh = "ChannelDefinition";
const _CE = "ConflictException";
const _CI = "ChannelId";
const _CIT = "ContentIdentificationType";
const _CIh = "ChannelIdentification";
const _CLM = "CreateLanguageModel";
const _CLMR = "CreateLanguageModelRequest";
const _CLMRr = "CreateLanguageModelResponse";
const _CMV = "CreateMedicalVocabulary";
const _CMVR = "CreateMedicalVocabularyRequest";
const _CMVRr = "CreateMedicalVocabularyResponse";
const _CN = "CategoryName";
const _CNGS = "ClinicalNoteGenerationSettings";
const _CP = "CategoryProperties";
const _CPL = "CategoryPropertiesList";
const _CR = "ContentRedaction";
const _CT = "CreationTime";
const _CTo = "CompletionTime";
const _CTr = "CreateTime";
const _CV = "CreateVocabulary";
const _CVF = "CreateVocabularyFilter";
const _CVFR = "CreateVocabularyFilterRequest";
const _CVFRr = "CreateVocabularyFilterResponse";
const _CVR = "CreateVocabularyRequest";
const _CVRr = "CreateVocabularyResponse";
const _DARA = "DataAccessRoleArn";
const _DCAC = "DeleteCallAnalyticsCategory";
const _DCACR = "DeleteCallAnalyticsCategoryRequest";
const _DCACRe = "DeleteCallAnalyticsCategoryResponse";
const _DCAJ = "DeleteCallAnalyticsJob";
const _DCAJR = "DeleteCallAnalyticsJobRequest";
const _DCAJRe = "DeleteCallAnalyticsJobResponse";
const _DIS = "DurationInSeconds";
const _DLM = "DeleteLanguageModel";
const _DLMR = "DeleteLanguageModelRequest";
const _DLMRe = "DescribeLanguageModelRequest";
const _DLMRes = "DescribeLanguageModelResponse";
const _DLMe = "DescribeLanguageModel";
const _DMSJ = "DeleteMedicalScribeJob";
const _DMSJR = "DeleteMedicalScribeJobRequest";
const _DMTJ = "DeleteMedicalTranscriptionJob";
const _DMTJR = "DeleteMedicalTranscriptionJobRequest";
const _DMV = "DeleteMedicalVocabulary";
const _DMVR = "DeleteMedicalVocabularyRequest";
const _DTJ = "DeleteTranscriptionJob";
const _DTJR = "DeleteTranscriptionJobRequest";
const _DU = "DownloadUri";
const _DV = "DeleteVocabulary";
const _DVF = "DeleteVocabularyFilter";
const _DVFR = "DeleteVocabularyFilterRequest";
const _DVR = "DeleteVocabularyRequest";
const _EP = "EndPercentage";
const _ET = "EndTime";
const _F = "First";
const _FR = "FailureReason";
const _Fe = "Feature";
const _Fo = "Formats";
const _GAS = "GenerateAbstractiveSummary";
const _GCAC = "GetCallAnalyticsCategory";
const _GCACR = "GetCallAnalyticsCategoryRequest";
const _GCACRe = "GetCallAnalyticsCategoryResponse";
const _GCAJ = "GetCallAnalyticsJob";
const _GCAJR = "GetCallAnalyticsJobRequest";
const _GCAJRe = "GetCallAnalyticsJobResponse";
const _GMSJ = "GetMedicalScribeJob";
const _GMSJR = "GetMedicalScribeJobRequest";
const _GMSJRe = "GetMedicalScribeJobResponse";
const _GMTJ = "GetMedicalTranscriptionJob";
const _GMTJR = "GetMedicalTranscriptionJobRequest";
const _GMTJRe = "GetMedicalTranscriptionJobResponse";
const _GMV = "GetMedicalVocabulary";
const _GMVR = "GetMedicalVocabularyRequest";
const _GMVRe = "GetMedicalVocabularyResponse";
const _GTJ = "GetTranscriptionJob";
const _GTJR = "GetTranscriptionJobRequest";
const _GTJRe = "GetTranscriptionJobResponse";
const _GV = "GetVocabulary";
const _GVF = "GetVocabularyFilter";
const _GVFR = "GetVocabularyFilterRequest";
const _GVFRe = "GetVocabularyFilterResponse";
const _GVR = "GetVocabularyRequest";
const _GVRe = "GetVocabularyResponse";
const _IDC = "InputDataConfig";
const _IF = "InterruptionFilter";
const _IFE = "InternalFailureException";
const _IL = "IdentifyLanguage";
const _ILS = "IdentifiedLanguageScore";
const _IML = "IdentifyMultipleLanguages";
const _IT = "InputType";
const _JES = "JobExecutionSettings";
const _JNC = "JobNameContains";
const _K = "Key";
const _KMSEC = "KMSEncryptionContext";
const _L = "Last";
const _LC = "LanguageCode";
const _LCAC = "ListCallAnalyticsCategories";
const _LCACR = "ListCallAnalyticsCategoriesRequest";
const _LCACRi = "ListCallAnalyticsCategoriesResponse";
const _LCAJ = "ListCallAnalyticsJobs";
const _LCAJR = "ListCallAnalyticsJobsRequest";
const _LCAJRi = "ListCallAnalyticsJobsResponse";
const _LCI = "LanguageCodeItem";
const _LCL = "LanguageCodeList";
const _LCa = "LanguageCodes";
const _LEE = "LimitExceededException";
const _LIS = "LanguageIdSettings";
const _LISM = "LanguageIdSettingsMap";
const _LLM = "ListLanguageModels";
const _LLMR = "ListLanguageModelsRequest";
const _LLMRi = "ListLanguageModelsResponse";
const _LM = "LanguageModel";
const _LMN = "LanguageModelName";
const _LMSJ = "ListMedicalScribeJobs";
const _LMSJR = "ListMedicalScribeJobsRequest";
const _LMSJRi = "ListMedicalScribeJobsResponse";
const _LMT = "LastModifiedTime";
const _LMTJ = "ListMedicalTranscriptionJobs";
const _LMTJR = "ListMedicalTranscriptionJobsRequest";
const _LMTJRi = "ListMedicalTranscriptionJobsResponse";
const _LMV = "ListMedicalVocabularies";
const _LMVR = "ListMedicalVocabulariesRequest";
const _LMVRi = "ListMedicalVocabulariesResponse";
const _LO = "LanguageOptions";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _LTJ = "ListTranscriptionJobs";
const _LTJR = "ListTranscriptionJobsRequest";
const _LTJRi = "ListTranscriptionJobsResponse";
const _LUT = "LastUpdateTime";
const _LV = "ListVocabularies";
const _LVF = "ListVocabularyFilters";
const _LVFR = "ListVocabularyFiltersRequest";
const _LVFRi = "ListVocabularyFiltersResponse";
const _LVR = "ListVocabulariesRequest";
const _LVRi = "ListVocabulariesResponse";
const _M = "Message";
const _MA = "MaxAlternatives";
const _MF = "MediaFormat";
const _MFU = "MediaFileUri";
const _MN = "ModelName";
const _MR = "MaxResults";
const _MS = "ModelStatus";
const _MSC = "MedicalScribeContext";
const _MSCD = "MedicalScribeChannelDefinition";
const _MSCDe = "MedicalScribeChannelDefinitions";
const _MSCP = "MedicalScribeContextProvided";
const _MSJ = "MedicalScribeJob";
const _MSJN = "MedicalScribeJobName";
const _MSJS = "MedicalScribeJobSummaries";
const _MSJSe = "MedicalScribeJobStatus";
const _MSJSed = "MedicalScribeJobSummary";
const _MSL = "MaxSpeakerLabels";
const _MSO = "MedicalScribeOutput";
const _MSPC = "MedicalScribePatientContext";
const _MSRH = "MediaSampleRateHertz";
const _MSS = "MedicalScribeSettings";
const _MSo = "ModelSettings";
const _MT = "MedicalTranscript";
const _MTJ = "MedicalTranscriptionJob";
const _MTJN = "MedicalTranscriptionJobName";
const _MTJS = "MedicalTranscriptionJobSummaries";
const _MTJSe = "MedicalTranscriptionJobSummary";
const _MTS = "MedicalTranscriptionSetting";
const _Me = "Media";
const _Mo = "Models";
const _N = "Negate";
const _NC = "NameContains";
const _NFE = "NotFoundException";
const _NT = "NoteTemplate";
const _NTTF = "NonTalkTimeFilter";
const _NTe = "NextToken";
const _OBN = "OutputBucketName";
const _OEKMSKI = "OutputEncryptionKMSKeyId";
const _OK = "OutputKey";
const _OL = "OutputLocation";
const _OLT = "OutputLocationType";
const _OSI = "OutputStartIndex";
const _P = "Pronouns";
const _PC = "PatientContext";
const _PET = "PiiEntityTypes";
const _PR = "ParticipantRole";
const _Ph = "Phrases";
const _R = "Rules";
const _RA = "ResourceArn";
const _RC = "ReasonCode";
const _RL = "RuleList";
const _RMFU = "RedactedMediaFileUri";
const _RO = "RedactionOutput";
const _RT = "RedactionType";
const _RTFU = "RedactedTranscriptFileUri";
const _RTR = "RelativeTimeRange";
const _Ru = "Rule";
const _S = "Settings";
const _SA = "ShowAlternatives";
const _SCAJ = "StartCallAnalyticsJob";
const _SCAJR = "StartCallAnalyticsJobRequest";
const _SCAJRt = "StartCallAnalyticsJobResponse";
const _SE = "StatusEquals";
const _SEt = "         StatusEquals";
const _SEta = "StateEquals";
const _SF = "SentimentFilter";
const _SFU = "SubtitleFileUris";
const _SMSJ = "StartMedicalScribeJob";
const _SMSJR = "StartMedicalScribeJobRequest";
const _SMSJRt = "StartMedicalScribeJobResponse";
const _SMTJ = "StartMedicalTranscriptionJob";
const _SMTJR = "StartMedicalTranscriptionJobRequest";
const _SMTJRt = "StartMedicalTranscriptionJobResponse";
const _SO = "SubtitlesOutput";
const _SP = "StartPercentage";
const _SSL = "ShowSpeakerLabels";
const _ST = "StartTime";
const _STJ = "StartTranscriptionJob";
const _STJR = "StartTranscriptionJobRequest";
const _STJRt = "StartTranscriptionJobResponse";
const _SU = "S3Uri";
const _Se = "Sentiments";
const _Sk = "Skipped";
const _Sp = "Specialty";
const _St = "Status";
const _Su = "Summarization";
const _Sub = "Subtitles";
const _T = "Transcript";
const _TC = "ToxicityCategories";
const _TD = "ToxicityDetection";
const _TDS = "ToxicityDetectionSettings";
const _TDSU = "TuningDataS3Uri";
const _TF = "TranscriptFilter";
const _TFT = "TranscriptFilterType";
const _TFU = "TranscriptFileUri";
const _TJ = "TranscriptionJob";
const _TJN = "TranscriptionJobName";
const _TJS = "TranscriptionJobSummaries";
const _TJSr = "TranscriptionJobStatus";
const _TJSra = "TranscriptionJobSummary";
const _TK = "TagKeys";
const _TL = "TagList";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _Ta = "Tags";
const _Tag = "Tag";
const _Tar = "Targets";
const _Th = "Threshold";
const _Ty = "Type";
const _UA = "UpgradeAvailability";
const _UCAC = "UpdateCallAnalyticsCategory";
const _UCACR = "UpdateCallAnalyticsCategoryRequest";
const _UCACRp = "UpdateCallAnalyticsCategoryResponse";
const _UMV = "UpdateMedicalVocabulary";
const _UMVR = "UpdateMedicalVocabularyRequest";
const _UMVRp = "UpdateMedicalVocabularyResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _UV = "UpdateVocabulary";
const _UVF = "UpdateVocabularyFilter";
const _UVFR = "UpdateVocabularyFilterRequest";
const _UVFRp = "UpdateVocabularyFilterResponse";
const _UVR = "UpdateVocabularyRequest";
const _UVRp = "UpdateVocabularyResponse";
const _V = "Vocabularies";
const _VF = "VocabularyFilters";
const _VFFU = "VocabularyFilterFileUri";
const _VFI = "VocabularyFilterInfo";
const _VFM = "VocabularyFilterMethod";
const _VFN = "VocabularyFilterName";
const _VFU = "VocabularyFileUri";
const _VI = "VocabularyInfo";
const _VN = "VocabularyName";
const _VS = "VocabularyState";
const _Va = "Value";
const _W = "Words";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.transcribe";
const _se = "server";
const _tK = "tagKeys";
const n0 = "com.amazonaws.transcribe";
const schema_1 = require("@smithy/core/schema");
const errors_1 = require("../models/errors");
const TranscribeServiceException_1 = require("../models/TranscribeServiceException");
const _s_registry = schema_1.TypeRegistry.for(_s);
exports.TranscribeServiceException$ = [-3, _s, "TranscribeServiceException", 0, [], []];
_s_registry.registerError(exports.TranscribeServiceException$, TranscribeServiceException_1.TranscribeServiceException);
const n0_registry = schema_1.TypeRegistry.for(n0);
exports.BadRequestException$ = [-3, n0, _BRE,
    { [_e]: _c, [_hE]: 400 },
    [_M],
    [0]
];
n0_registry.registerError(exports.BadRequestException$, errors_1.BadRequestException);
exports.ConflictException$ = [-3, n0, _CE,
    { [_e]: _c, [_hE]: 409 },
    [_M],
    [0]
];
n0_registry.registerError(exports.ConflictException$, errors_1.ConflictException);
exports.InternalFailureException$ = [-3, n0, _IFE,
    { [_e]: _se, [_hE]: 500 },
    [_M],
    [0]
];
n0_registry.registerError(exports.InternalFailureException$, errors_1.InternalFailureException);
exports.LimitExceededException$ = [-3, n0, _LEE,
    { [_e]: _c, [_hE]: 429 },
    [_M],
    [0]
];
n0_registry.registerError(exports.LimitExceededException$, errors_1.LimitExceededException);
exports.NotFoundException$ = [-3, n0, _NFE,
    { [_e]: _c, [_hE]: 404 },
    [_M],
    [0]
];
n0_registry.registerError(exports.NotFoundException$, errors_1.NotFoundException);
exports.errorTypeRegistries = [
    _s_registry,
    n0_registry,
];
var Pronouns = [0, n0, _P, 8, 0];
exports.AbsoluteTimeRange$ = [3, n0, _ATR,
    0,
    [_ST, _ET, _F, _L],
    [1, 1, 1, 1]
];
exports.CallAnalyticsJob$ = [3, n0, _CAJ,
    0,
    [_CAJN, _CAJS, _CAJD, _LC, _MSRH, _MF, _Me, _T, _ST, _CT, _CTo, _FR, _DARA, _ILS, _S, _CD, _Ta],
    [0, 0, () => exports.CallAnalyticsJobDetails$, 0, 1, 0, () => exports.Media$, () => exports.Transcript$, 4, 4, 4, 0, 0, 1, () => exports.CallAnalyticsJobSettings$, () => ChannelDefinitions, () => TagList]
];
exports.CallAnalyticsJobDetails$ = [3, n0, _CAJD,
    0,
    [_Sk],
    [() => CallAnalyticsSkippedFeatureList]
];
exports.CallAnalyticsJobSettings$ = [3, n0, _CAJSa,
    0,
    [_VN, _VFN, _VFM, _LMN, _CR, _LO, _LIS, _Su],
    [0, 0, 0, 0, () => exports.ContentRedaction$, 64 | 0, () => LanguageIdSettingsMap, () => exports.Summarization$]
];
exports.CallAnalyticsJobSummary$ = [3, n0, _CAJSal,
    0,
    [_CAJN, _CT, _ST, _CTo, _LC, _CAJS, _CAJD, _FR],
    [0, 4, 4, 4, 0, 0, () => exports.CallAnalyticsJobDetails$, 0]
];
exports.CallAnalyticsSkippedFeature$ = [3, n0, _CASF,
    0,
    [_Fe, _RC, _M],
    [0, 0, 0]
];
exports.CategoryProperties$ = [3, n0, _CP,
    0,
    [_CN, _R, _CTr, _LUT, _Ta, _IT],
    [0, () => RuleList, 4, 4, () => TagList, 0]
];
exports.ChannelDefinition$ = [3, n0, _CDh,
    0,
    [_CI, _PR],
    [1, 0]
];
exports.ClinicalNoteGenerationSettings$ = [3, n0, _CNGS,
    0,
    [_NT],
    [0]
];
exports.ContentRedaction$ = [3, n0, _CR,
    0,
    [_RT, _RO, _PET],
    [0, 0, 64 | 0], 2
];
exports.CreateCallAnalyticsCategoryRequest$ = [3, n0, _CCACR,
    0,
    [_CN, _R, _Ta, _IT],
    [[0, 1], () => RuleList, () => TagList, 0], 2
];
exports.CreateCallAnalyticsCategoryResponse$ = [3, n0, _CCACRr,
    0,
    [_CP],
    [() => exports.CategoryProperties$]
];
exports.CreateLanguageModelRequest$ = [3, n0, _CLMR,
    0,
    [_LC, _BMN, _MN, _IDC, _Ta],
    [0, 0, [0, 1], () => exports.InputDataConfig$, () => TagList], 4
];
exports.CreateLanguageModelResponse$ = [3, n0, _CLMRr,
    0,
    [_LC, _BMN, _MN, _IDC, _MS],
    [0, 0, 0, () => exports.InputDataConfig$, 0]
];
exports.CreateMedicalVocabularyRequest$ = [3, n0, _CMVR,
    0,
    [_VN, _LC, _VFU, _Ta],
    [[0, 1], 0, 0, () => TagList], 3
];
exports.CreateMedicalVocabularyResponse$ = [3, n0, _CMVRr,
    0,
    [_VN, _LC, _VS, _LMT, _FR],
    [0, 0, 0, 4, 0]
];
exports.CreateVocabularyFilterRequest$ = [3, n0, _CVFR,
    0,
    [_VFN, _LC, _W, _VFFU, _Ta, _DARA],
    [[0, 1], 0, 64 | 0, 0, () => TagList, 0], 2
];
exports.CreateVocabularyFilterResponse$ = [3, n0, _CVFRr,
    0,
    [_VFN, _LC, _LMT],
    [0, 0, 4]
];
exports.CreateVocabularyRequest$ = [3, n0, _CVR,
    0,
    [_VN, _LC, _Ph, _VFU, _Ta, _DARA],
    [[0, 1], 0, 64 | 0, 0, () => TagList, 0], 2
];
exports.CreateVocabularyResponse$ = [3, n0, _CVRr,
    0,
    [_VN, _LC, _VS, _LMT, _FR],
    [0, 0, 0, 4, 0]
];
exports.DeleteCallAnalyticsCategoryRequest$ = [3, n0, _DCACR,
    0,
    [_CN],
    [[0, 1]], 1
];
exports.DeleteCallAnalyticsCategoryResponse$ = [3, n0, _DCACRe,
    0,
    [],
    []
];
exports.DeleteCallAnalyticsJobRequest$ = [3, n0, _DCAJR,
    0,
    [_CAJN],
    [[0, 1]], 1
];
exports.DeleteCallAnalyticsJobResponse$ = [3, n0, _DCAJRe,
    0,
    [],
    []
];
exports.DeleteLanguageModelRequest$ = [3, n0, _DLMR,
    0,
    [_MN],
    [[0, 1]], 1
];
exports.DeleteMedicalScribeJobRequest$ = [3, n0, _DMSJR,
    0,
    [_MSJN],
    [[0, 1]], 1
];
exports.DeleteMedicalTranscriptionJobRequest$ = [3, n0, _DMTJR,
    0,
    [_MTJN],
    [[0, 1]], 1
];
exports.DeleteMedicalVocabularyRequest$ = [3, n0, _DMVR,
    0,
    [_VN],
    [[0, 1]], 1
];
exports.DeleteTranscriptionJobRequest$ = [3, n0, _DTJR,
    0,
    [_TJN],
    [[0, 1]], 1
];
exports.DeleteVocabularyFilterRequest$ = [3, n0, _DVFR,
    0,
    [_VFN],
    [[0, 1]], 1
];
exports.DeleteVocabularyRequest$ = [3, n0, _DVR,
    0,
    [_VN],
    [[0, 1]], 1
];
exports.DescribeLanguageModelRequest$ = [3, n0, _DLMRe,
    0,
    [_MN],
    [[0, 1]], 1
];
exports.DescribeLanguageModelResponse$ = [3, n0, _DLMRes,
    0,
    [_LM],
    [() => exports.LanguageModel$]
];
exports.GetCallAnalyticsCategoryRequest$ = [3, n0, _GCACR,
    0,
    [_CN],
    [[0, 1]], 1
];
exports.GetCallAnalyticsCategoryResponse$ = [3, n0, _GCACRe,
    0,
    [_CP],
    [() => exports.CategoryProperties$]
];
exports.GetCallAnalyticsJobRequest$ = [3, n0, _GCAJR,
    0,
    [_CAJN],
    [[0, 1]], 1
];
exports.GetCallAnalyticsJobResponse$ = [3, n0, _GCAJRe,
    0,
    [_CAJ],
    [() => exports.CallAnalyticsJob$]
];
exports.GetMedicalScribeJobRequest$ = [3, n0, _GMSJR,
    0,
    [_MSJN],
    [[0, 1]], 1
];
exports.GetMedicalScribeJobResponse$ = [3, n0, _GMSJRe,
    0,
    [_MSJ],
    [() => exports.MedicalScribeJob$]
];
exports.GetMedicalTranscriptionJobRequest$ = [3, n0, _GMTJR,
    0,
    [_MTJN],
    [[0, 1]], 1
];
exports.GetMedicalTranscriptionJobResponse$ = [3, n0, _GMTJRe,
    0,
    [_MTJ],
    [() => exports.MedicalTranscriptionJob$]
];
exports.GetMedicalVocabularyRequest$ = [3, n0, _GMVR,
    0,
    [_VN],
    [[0, 1]], 1
];
exports.GetMedicalVocabularyResponse$ = [3, n0, _GMVRe,
    0,
    [_VN, _LC, _VS, _LMT, _FR, _DU],
    [0, 0, 0, 4, 0, 0]
];
exports.GetTranscriptionJobRequest$ = [3, n0, _GTJR,
    0,
    [_TJN],
    [[0, 1]], 1
];
exports.GetTranscriptionJobResponse$ = [3, n0, _GTJRe,
    0,
    [_TJ],
    [() => exports.TranscriptionJob$]
];
exports.GetVocabularyFilterRequest$ = [3, n0, _GVFR,
    0,
    [_VFN],
    [[0, 1]], 1
];
exports.GetVocabularyFilterResponse$ = [3, n0, _GVFRe,
    0,
    [_VFN, _LC, _LMT, _DU],
    [0, 0, 4, 0]
];
exports.GetVocabularyRequest$ = [3, n0, _GVR,
    0,
    [_VN],
    [[0, 1]], 1
];
exports.GetVocabularyResponse$ = [3, n0, _GVRe,
    0,
    [_VN, _LC, _VS, _LMT, _FR, _DU],
    [0, 0, 0, 4, 0, 0]
];
exports.InputDataConfig$ = [3, n0, _IDC,
    0,
    [_SU, _DARA, _TDSU],
    [0, 0, 0], 2
];
exports.InterruptionFilter$ = [3, n0, _IF,
    0,
    [_Th, _PR, _ATR, _RTR, _N],
    [1, 0, () => exports.AbsoluteTimeRange$, () => exports.RelativeTimeRange$, 2]
];
exports.JobExecutionSettings$ = [3, n0, _JES,
    0,
    [_ADE, _DARA],
    [2, 0]
];
exports.LanguageCodeItem$ = [3, n0, _LCI,
    0,
    [_LC, _DIS],
    [0, 1]
];
exports.LanguageIdSettings$ = [3, n0, _LIS,
    0,
    [_VN, _VFN, _LMN],
    [0, 0, 0]
];
exports.LanguageModel$ = [3, n0, _LM,
    0,
    [_MN, _CTr, _LMT, _LC, _BMN, _MS, _UA, _FR, _IDC],
    [0, 4, 4, 0, 0, 0, 2, 0, () => exports.InputDataConfig$]
];
exports.ListCallAnalyticsCategoriesRequest$ = [3, n0, _LCACR,
    0,
    [_NTe, _MR],
    [[0, { [_hQ]: _NTe }], [1, { [_hQ]: _MR }]]
];
exports.ListCallAnalyticsCategoriesResponse$ = [3, n0, _LCACRi,
    0,
    [_NTe, _C],
    [0, () => CategoryPropertiesList]
];
exports.ListCallAnalyticsJobsRequest$ = [3, n0, _LCAJR,
    0,
    [_St, _JNC, _NTe, _MR],
    [[0, { [_hQ]: _St }], [0, { [_hQ]: _JNC }], [0, { [_hQ]: _NTe }], [1, { [_hQ]: _MR }]]
];
exports.ListCallAnalyticsJobsResponse$ = [3, n0, _LCAJRi,
    0,
    [_St, _NTe, _CAJSall],
    [0, 0, () => CallAnalyticsJobSummaries]
];
exports.ListLanguageModelsRequest$ = [3, n0, _LLMR,
    0,
    [_SE, _NC, _NTe, _MR],
    [[0, { [_hQ]: _SEt }], [0, { [_hQ]: _NC }], [0, { [_hQ]: _NTe }], [1, { [_hQ]: _MR }]]
];
exports.ListLanguageModelsResponse$ = [3, n0, _LLMRi,
    0,
    [_NTe, _Mo],
    [0, () => Models]
];
exports.ListMedicalScribeJobsRequest$ = [3, n0, _LMSJR,
    0,
    [_St, _JNC, _NTe, _MR],
    [[0, { [_hQ]: _St }], [0, { [_hQ]: _JNC }], [0, { [_hQ]: _NTe }], [1, { [_hQ]: _MR }]]
];
exports.ListMedicalScribeJobsResponse$ = [3, n0, _LMSJRi,
    0,
    [_St, _NTe, _MSJS],
    [0, 0, () => MedicalScribeJobSummaries]
];
exports.ListMedicalTranscriptionJobsRequest$ = [3, n0, _LMTJR,
    0,
    [_St, _JNC, _NTe, _MR],
    [[0, { [_hQ]: _St }], [0, { [_hQ]: _JNC }], [0, { [_hQ]: _NTe }], [1, { [_hQ]: _MR }]]
];
exports.ListMedicalTranscriptionJobsResponse$ = [3, n0, _LMTJRi,
    0,
    [_St, _NTe, _MTJS],
    [0, 0, () => MedicalTranscriptionJobSummaries]
];
exports.ListMedicalVocabulariesRequest$ = [3, n0, _LMVR,
    0,
    [_NTe, _MR, _SEta, _NC],
    [[0, { [_hQ]: _NTe }], [1, { [_hQ]: _MR }], [0, { [_hQ]: _SEta }], [0, { [_hQ]: _NC }]]
];
exports.ListMedicalVocabulariesResponse$ = [3, n0, _LMVRi,
    0,
    [_St, _NTe, _V],
    [0, 0, () => Vocabularies]
];
exports.ListTagsForResourceRequest$ = [3, n0, _LTFRR,
    0,
    [_RA],
    [[0, 1]], 1
];
exports.ListTagsForResourceResponse$ = [3, n0, _LTFRRi,
    0,
    [_RA, _Ta],
    [0, () => TagList]
];
exports.ListTranscriptionJobsRequest$ = [3, n0, _LTJR,
    0,
    [_St, _JNC, _NTe, _MR],
    [[0, { [_hQ]: _St }], [0, { [_hQ]: _JNC }], [0, { [_hQ]: _NTe }], [1, { [_hQ]: _MR }]]
];
exports.ListTranscriptionJobsResponse$ = [3, n0, _LTJRi,
    0,
    [_St, _NTe, _TJS],
    [0, 0, () => TranscriptionJobSummaries]
];
exports.ListVocabulariesRequest$ = [3, n0, _LVR,
    0,
    [_NTe, _MR, _SEta, _NC],
    [[0, { [_hQ]: _NTe }], [1, { [_hQ]: _MR }], [0, { [_hQ]: _SEta }], [0, { [_hQ]: _NC }]]
];
exports.ListVocabulariesResponse$ = [3, n0, _LVRi,
    0,
    [_St, _NTe, _V],
    [0, 0, () => Vocabularies]
];
exports.ListVocabularyFiltersRequest$ = [3, n0, _LVFR,
    0,
    [_NTe, _MR, _NC],
    [[0, { [_hQ]: _NTe }], [1, { [_hQ]: _MR }], [0, { [_hQ]: _NC }]]
];
exports.ListVocabularyFiltersResponse$ = [3, n0, _LVFRi,
    0,
    [_NTe, _VF],
    [0, () => VocabularyFilters]
];
exports.Media$ = [3, n0, _Me,
    0,
    [_MFU, _RMFU],
    [0, 0]
];
exports.MedicalScribeChannelDefinition$ = [3, n0, _MSCD,
    0,
    [_CI, _PR],
    [1, 0], 2
];
exports.MedicalScribeContext$ = [3, n0, _MSC,
    0,
    [_PC],
    [[() => exports.MedicalScribePatientContext$, 0]]
];
exports.MedicalScribeJob$ = [3, n0, _MSJ,
    0,
    [_MSJN, _MSJSe, _LC, _Me, _MSO, _ST, _CT, _CTo, _FR, _S, _DARA, _CD, _MSCP, _Ta],
    [0, 0, 0, () => exports.Media$, () => exports.MedicalScribeOutput$, 4, 4, 4, 0, () => exports.MedicalScribeSettings$, 0, () => MedicalScribeChannelDefinitions, 2, () => TagList]
];
exports.MedicalScribeJobSummary$ = [3, n0, _MSJSed,
    0,
    [_MSJN, _CT, _ST, _CTo, _LC, _MSJSe, _FR],
    [0, 4, 4, 4, 0, 0, 0]
];
exports.MedicalScribeOutput$ = [3, n0, _MSO,
    0,
    [_TFU, _CDU],
    [0, 0], 2
];
exports.MedicalScribePatientContext$ = [3, n0, _MSPC,
    0,
    [_P],
    [[() => Pronouns, 0]]
];
exports.MedicalScribeSettings$ = [3, n0, _MSS,
    0,
    [_SSL, _MSL, _CIh, _VN, _VFN, _VFM, _CNGS],
    [2, 1, 2, 0, 0, 0, () => exports.ClinicalNoteGenerationSettings$]
];
exports.MedicalTranscript$ = [3, n0, _MT,
    0,
    [_TFU],
    [0]
];
exports.MedicalTranscriptionJob$ = [3, n0, _MTJ,
    0,
    [_MTJN, _TJSr, _LC, _MSRH, _MF, _Me, _T, _ST, _CT, _CTo, _FR, _S, _CIT, _Sp, _Ty, _Ta],
    [0, 0, 0, 1, 0, () => exports.Media$, () => exports.MedicalTranscript$, 4, 4, 4, 0, () => exports.MedicalTranscriptionSetting$, 0, 0, 0, () => TagList]
];
exports.MedicalTranscriptionJobSummary$ = [3, n0, _MTJSe,
    0,
    [_MTJN, _CT, _ST, _CTo, _LC, _TJSr, _FR, _OLT, _Sp, _CIT, _Ty],
    [0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0]
];
exports.MedicalTranscriptionSetting$ = [3, n0, _MTS,
    0,
    [_SSL, _MSL, _CIh, _SA, _MA, _VN],
    [2, 1, 2, 2, 1, 0]
];
exports.ModelSettings$ = [3, n0, _MSo,
    0,
    [_LMN],
    [0]
];
exports.NonTalkTimeFilter$ = [3, n0, _NTTF,
    0,
    [_Th, _ATR, _RTR, _N],
    [1, () => exports.AbsoluteTimeRange$, () => exports.RelativeTimeRange$, 2]
];
exports.RelativeTimeRange$ = [3, n0, _RTR,
    0,
    [_SP, _EP, _F, _L],
    [1, 1, 1, 1]
];
exports.SentimentFilter$ = [3, n0, _SF,
    0,
    [_Se, _ATR, _RTR, _PR, _N],
    [64 | 0, () => exports.AbsoluteTimeRange$, () => exports.RelativeTimeRange$, 0, 2], 1
];
exports.Settings$ = [3, n0, _S,
    0,
    [_VN, _SSL, _MSL, _CIh, _SA, _MA, _VFN, _VFM],
    [0, 2, 1, 2, 2, 1, 0, 0]
];
exports.StartCallAnalyticsJobRequest$ = [3, n0, _SCAJR,
    0,
    [_CAJN, _Me, _OL, _OEKMSKI, _DARA, _S, _Ta, _CD],
    [[0, 1], () => exports.Media$, 0, 0, 0, () => exports.CallAnalyticsJobSettings$, () => TagList, () => ChannelDefinitions], 2
];
exports.StartCallAnalyticsJobResponse$ = [3, n0, _SCAJRt,
    0,
    [_CAJ],
    [() => exports.CallAnalyticsJob$]
];
exports.StartMedicalScribeJobRequest$ = [3, n0, _SMSJR,
    0,
    [_MSJN, _Me, _OBN, _DARA, _S, _OEKMSKI, _KMSEC, _CD, _Ta, _MSC],
    [[0, 1], () => exports.Media$, 0, 0, () => exports.MedicalScribeSettings$, 0, 128 | 0, () => MedicalScribeChannelDefinitions, () => TagList, [() => exports.MedicalScribeContext$, 0]], 5
];
exports.StartMedicalScribeJobResponse$ = [3, n0, _SMSJRt,
    0,
    [_MSJ],
    [() => exports.MedicalScribeJob$]
];
exports.StartMedicalTranscriptionJobRequest$ = [3, n0, _SMTJR,
    0,
    [_MTJN, _LC, _Me, _OBN, _Sp, _Ty, _MSRH, _MF, _OK, _OEKMSKI, _KMSEC, _S, _CIT, _Ta],
    [[0, 1], 0, () => exports.Media$, 0, 0, 0, 1, 0, 0, 0, 128 | 0, () => exports.MedicalTranscriptionSetting$, 0, () => TagList], 6
];
exports.StartMedicalTranscriptionJobResponse$ = [3, n0, _SMTJRt,
    0,
    [_MTJ],
    [() => exports.MedicalTranscriptionJob$]
];
exports.StartTranscriptionJobRequest$ = [3, n0, _STJR,
    0,
    [_TJN, _Me, _LC, _MSRH, _MF, _OBN, _OK, _OEKMSKI, _KMSEC, _S, _MSo, _JES, _CR, _IL, _IML, _LO, _Sub, _Ta, _LIS, _TD],
    [[0, 1], () => exports.Media$, 0, 1, 0, 0, 0, 0, 128 | 0, () => exports.Settings$, () => exports.ModelSettings$, () => exports.JobExecutionSettings$, () => exports.ContentRedaction$, 2, 2, 64 | 0, () => exports.Subtitles$, () => TagList, () => LanguageIdSettingsMap, () => ToxicityDetection], 2
];
exports.StartTranscriptionJobResponse$ = [3, n0, _STJRt,
    0,
    [_TJ],
    [() => exports.TranscriptionJob$]
];
exports.Subtitles$ = [3, n0, _Sub,
    0,
    [_Fo, _OSI],
    [64 | 0, 1]
];
exports.SubtitlesOutput$ = [3, n0, _SO,
    0,
    [_Fo, _SFU, _OSI],
    [64 | 0, 64 | 0, 1]
];
exports.Summarization$ = [3, n0, _Su,
    0,
    [_GAS],
    [2], 1
];
exports.Tag$ = [3, n0, _Tag,
    0,
    [_K, _Va],
    [0, 0], 2
];
exports.TagResourceRequest$ = [3, n0, _TRR,
    0,
    [_RA, _Ta],
    [[0, 1], () => TagList], 2
];
exports.TagResourceResponse$ = [3, n0, _TRRa,
    0,
    [],
    []
];
exports.ToxicityDetectionSettings$ = [3, n0, _TDS,
    0,
    [_TC],
    [64 | 0], 1
];
exports.Transcript$ = [3, n0, _T,
    0,
    [_TFU, _RTFU],
    [0, 0]
];
exports.TranscriptFilter$ = [3, n0, _TF,
    0,
    [_TFT, _Tar, _ATR, _RTR, _PR, _N],
    [0, 64 | 0, () => exports.AbsoluteTimeRange$, () => exports.RelativeTimeRange$, 0, 2], 2
];
exports.TranscriptionJob$ = [3, n0, _TJ,
    0,
    [_TJN, _TJSr, _LC, _MSRH, _MF, _Me, _T, _ST, _CT, _CTo, _FR, _S, _MSo, _JES, _CR, _IL, _IML, _LO, _ILS, _LCa, _Ta, _Sub, _LIS, _TD],
    [0, 0, 0, 1, 0, () => exports.Media$, () => exports.Transcript$, 4, 4, 4, 0, () => exports.Settings$, () => exports.ModelSettings$, () => exports.JobExecutionSettings$, () => exports.ContentRedaction$, 2, 2, 64 | 0, 1, () => LanguageCodeList, () => TagList, () => exports.SubtitlesOutput$, () => LanguageIdSettingsMap, () => ToxicityDetection]
];
exports.TranscriptionJobSummary$ = [3, n0, _TJSra,
    0,
    [_TJN, _CT, _ST, _CTo, _LC, _TJSr, _FR, _OLT, _CR, _MSo, _IL, _IML, _ILS, _LCa, _TD],
    [0, 4, 4, 4, 0, 0, 0, 0, () => exports.ContentRedaction$, () => exports.ModelSettings$, 2, 2, 1, () => LanguageCodeList, () => ToxicityDetection]
];
exports.UntagResourceRequest$ = [3, n0, _URR,
    0,
    [_RA, _TK],
    [[0, 1], [64 | 0, { [_hQ]: _tK }]], 2
];
exports.UntagResourceResponse$ = [3, n0, _URRn,
    0,
    [],
    []
];
exports.UpdateCallAnalyticsCategoryRequest$ = [3, n0, _UCACR,
    0,
    [_CN, _R, _IT],
    [[0, 1], () => RuleList, 0], 2
];
exports.UpdateCallAnalyticsCategoryResponse$ = [3, n0, _UCACRp,
    0,
    [_CP],
    [() => exports.CategoryProperties$]
];
exports.UpdateMedicalVocabularyRequest$ = [3, n0, _UMVR,
    0,
    [_VN, _LC, _VFU],
    [[0, 1], 0, 0], 3
];
exports.UpdateMedicalVocabularyResponse$ = [3, n0, _UMVRp,
    0,
    [_VN, _LC, _LMT, _VS],
    [0, 0, 4, 0]
];
exports.UpdateVocabularyFilterRequest$ = [3, n0, _UVFR,
    0,
    [_VFN, _W, _VFFU, _DARA],
    [[0, 1], 64 | 0, 0, 0], 1
];
exports.UpdateVocabularyFilterResponse$ = [3, n0, _UVFRp,
    0,
    [_VFN, _LC, _LMT],
    [0, 0, 4]
];
exports.UpdateVocabularyRequest$ = [3, n0, _UVR,
    0,
    [_VN, _LC, _Ph, _VFU, _DARA],
    [[0, 1], 0, 64 | 0, 0, 0], 2
];
exports.UpdateVocabularyResponse$ = [3, n0, _UVRp,
    0,
    [_VN, _LC, _LMT, _VS],
    [0, 0, 4, 0]
];
exports.VocabularyFilterInfo$ = [3, n0, _VFI,
    0,
    [_VFN, _LC, _LMT],
    [0, 0, 4]
];
exports.VocabularyInfo$ = [3, n0, _VI,
    0,
    [_VN, _LC, _LMT, _VS],
    [0, 0, 4, 0]
];
var __Unit = "unit";
var CallAnalyticsJobSummaries = [1, n0, _CAJSall,
    0, () => exports.CallAnalyticsJobSummary$
];
var CallAnalyticsSkippedFeatureList = [1, n0, _CASFL,
    0, () => exports.CallAnalyticsSkippedFeature$
];
var CategoryPropertiesList = [1, n0, _CPL,
    0, () => exports.CategoryProperties$
];
var ChannelDefinitions = [1, n0, _CD,
    0, () => exports.ChannelDefinition$
];
var LanguageCodeList = [1, n0, _LCL,
    0, () => exports.LanguageCodeItem$
];
var LanguageOptions = 64 | 0;
var MedicalScribeChannelDefinitions = [1, n0, _MSCDe,
    0, () => exports.MedicalScribeChannelDefinition$
];
var MedicalScribeJobSummaries = [1, n0, _MSJS,
    0, () => exports.MedicalScribeJobSummary$
];
var MedicalTranscriptionJobSummaries = [1, n0, _MTJS,
    0, () => exports.MedicalTranscriptionJobSummary$
];
var Models = [1, n0, _Mo,
    0, () => exports.LanguageModel$
];
var Phrases = 64 | 0;
var PiiEntityTypes = 64 | 0;
var RuleList = [1, n0, _RL,
    0, () => exports.Rule$
];
var SentimentValueList = 64 | 0;
var StringTargetList = 64 | 0;
var SubtitleFileUris = 64 | 0;
var SubtitleFormats = 64 | 0;
var TagKeyList = 64 | 0;
var TagList = [1, n0, _TL,
    0, () => exports.Tag$
];
var ToxicityCategories = 64 | 0;
var ToxicityDetection = [1, n0, _TD,
    0, () => exports.ToxicityDetectionSettings$
];
var TranscriptionJobSummaries = [1, n0, _TJS,
    0, () => exports.TranscriptionJobSummary$
];
var Vocabularies = [1, n0, _V,
    0, () => exports.VocabularyInfo$
];
var VocabularyFilters = [1, n0, _VF,
    0, () => exports.VocabularyFilterInfo$
];
var Words = 64 | 0;
var KMSEncryptionContextMap = 128 | 0;
var LanguageIdSettingsMap = [2, n0, _LISM,
    0, 0, () => exports.LanguageIdSettings$
];
exports.Rule$ = [4, n0, _Ru,
    0,
    [_NTTF, _IF, _TF, _SF],
    [() => exports.NonTalkTimeFilter$, () => exports.InterruptionFilter$, () => exports.TranscriptFilter$, () => exports.SentimentFilter$]
];
exports.CreateCallAnalyticsCategory$ = [9, n0, _CCAC,
    { [_h]: ["PUT", "/callanalyticscategories/{CategoryName}", 200] }, () => exports.CreateCallAnalyticsCategoryRequest$, () => exports.CreateCallAnalyticsCategoryResponse$
];
exports.CreateLanguageModel$ = [9, n0, _CLM,
    { [_h]: ["PUT", "/languagemodels/{ModelName}", 200] }, () => exports.CreateLanguageModelRequest$, () => exports.CreateLanguageModelResponse$
];
exports.CreateMedicalVocabulary$ = [9, n0, _CMV,
    { [_h]: ["PUT", "/medicalvocabularies/{VocabularyName}", 200] }, () => exports.CreateMedicalVocabularyRequest$, () => exports.CreateMedicalVocabularyResponse$
];
exports.CreateVocabulary$ = [9, n0, _CV,
    { [_h]: ["PUT", "/vocabularies/{VocabularyName}", 200] }, () => exports.CreateVocabularyRequest$, () => exports.CreateVocabularyResponse$
];
exports.CreateVocabularyFilter$ = [9, n0, _CVF,
    { [_h]: ["POST", "/vocabularyFilters/{VocabularyFilterName}", 201] }, () => exports.CreateVocabularyFilterRequest$, () => exports.CreateVocabularyFilterResponse$
];
exports.DeleteCallAnalyticsCategory$ = [9, n0, _DCAC,
    { [_h]: ["DELETE", "/callanalyticscategories/{CategoryName}", 204] }, () => exports.DeleteCallAnalyticsCategoryRequest$, () => exports.DeleteCallAnalyticsCategoryResponse$
];
exports.DeleteCallAnalyticsJob$ = [9, n0, _DCAJ,
    { [_h]: ["DELETE", "/callanalyticsjobs/{CallAnalyticsJobName}", 204] }, () => exports.DeleteCallAnalyticsJobRequest$, () => exports.DeleteCallAnalyticsJobResponse$
];
exports.DeleteLanguageModel$ = [9, n0, _DLM,
    { [_h]: ["DELETE", "/languagemodels/{ModelName}", 204] }, () => exports.DeleteLanguageModelRequest$, () => __Unit
];
exports.DeleteMedicalScribeJob$ = [9, n0, _DMSJ,
    { [_h]: ["DELETE", "/medicalscribejobs/{MedicalScribeJobName}", 204] }, () => exports.DeleteMedicalScribeJobRequest$, () => __Unit
];
exports.DeleteMedicalTranscriptionJob$ = [9, n0, _DMTJ,
    { [_h]: ["DELETE", "/medicaltranscriptionjobs/{MedicalTranscriptionJobName}", 204] }, () => exports.DeleteMedicalTranscriptionJobRequest$, () => __Unit
];
exports.DeleteMedicalVocabulary$ = [9, n0, _DMV,
    { [_h]: ["DELETE", "/medicalvocabularies/{VocabularyName}", 204] }, () => exports.DeleteMedicalVocabularyRequest$, () => __Unit
];
exports.DeleteTranscriptionJob$ = [9, n0, _DTJ,
    { [_h]: ["DELETE", "/transcriptionjobs/{TranscriptionJobName}", 204] }, () => exports.DeleteTranscriptionJobRequest$, () => __Unit
];
exports.DeleteVocabulary$ = [9, n0, _DV,
    { [_h]: ["DELETE", "/vocabularies/{VocabularyName}", 204] }, () => exports.DeleteVocabularyRequest$, () => __Unit
];
exports.DeleteVocabularyFilter$ = [9, n0, _DVF,
    { [_h]: ["DELETE", "/vocabularyFilters/{VocabularyFilterName}", 204] }, () => exports.DeleteVocabularyFilterRequest$, () => __Unit
];
exports.DescribeLanguageModel$ = [9, n0, _DLMe,
    { [_h]: ["GET", "/languagemodels/{ModelName}", 200] }, () => exports.DescribeLanguageModelRequest$, () => exports.DescribeLanguageModelResponse$
];
exports.GetCallAnalyticsCategory$ = [9, n0, _GCAC,
    { [_h]: ["GET", "/callanalyticscategories/{CategoryName}", 200] }, () => exports.GetCallAnalyticsCategoryRequest$, () => exports.GetCallAnalyticsCategoryResponse$
];
exports.GetCallAnalyticsJob$ = [9, n0, _GCAJ,
    { [_h]: ["GET", "/callanalyticsjobs/{CallAnalyticsJobName}", 200] }, () => exports.GetCallAnalyticsJobRequest$, () => exports.GetCallAnalyticsJobResponse$
];
exports.GetMedicalScribeJob$ = [9, n0, _GMSJ,
    { [_h]: ["GET", "/medicalscribejobs/{MedicalScribeJobName}", 200] }, () => exports.GetMedicalScribeJobRequest$, () => exports.GetMedicalScribeJobResponse$
];
exports.GetMedicalTranscriptionJob$ = [9, n0, _GMTJ,
    { [_h]: ["GET", "/medicaltranscriptionjobs/{MedicalTranscriptionJobName}", 200] }, () => exports.GetMedicalTranscriptionJobRequest$, () => exports.GetMedicalTranscriptionJobResponse$
];
exports.GetMedicalVocabulary$ = [9, n0, _GMV,
    { [_h]: ["GET", "/medicalvocabularies/{VocabularyName}", 200] }, () => exports.GetMedicalVocabularyRequest$, () => exports.GetMedicalVocabularyResponse$
];
exports.GetTranscriptionJob$ = [9, n0, _GTJ,
    { [_h]: ["GET", "/transcriptionjobs/{TranscriptionJobName}", 200] }, () => exports.GetTranscriptionJobRequest$, () => exports.GetTranscriptionJobResponse$
];
exports.GetVocabulary$ = [9, n0, _GV,
    { [_h]: ["GET", "/vocabularies/{VocabularyName}", 200] }, () => exports.GetVocabularyRequest$, () => exports.GetVocabularyResponse$
];
exports.GetVocabularyFilter$ = [9, n0, _GVF,
    { [_h]: ["GET", "/vocabularyFilters/{VocabularyFilterName}", 200] }, () => exports.GetVocabularyFilterRequest$, () => exports.GetVocabularyFilterResponse$
];
exports.ListCallAnalyticsCategories$ = [9, n0, _LCAC,
    { [_h]: ["GET", "/callanalyticscategories", 200] }, () => exports.ListCallAnalyticsCategoriesRequest$, () => exports.ListCallAnalyticsCategoriesResponse$
];
exports.ListCallAnalyticsJobs$ = [9, n0, _LCAJ,
    { [_h]: ["GET", "/callanalyticsjobs", 200] }, () => exports.ListCallAnalyticsJobsRequest$, () => exports.ListCallAnalyticsJobsResponse$
];
exports.ListLanguageModels$ = [9, n0, _LLM,
    { [_h]: ["GET", "/languagemodels", 200] }, () => exports.ListLanguageModelsRequest$, () => exports.ListLanguageModelsResponse$
];
exports.ListMedicalScribeJobs$ = [9, n0, _LMSJ,
    { [_h]: ["GET", "/medicalscribejobs", 200] }, () => exports.ListMedicalScribeJobsRequest$, () => exports.ListMedicalScribeJobsResponse$
];
exports.ListMedicalTranscriptionJobs$ = [9, n0, _LMTJ,
    { [_h]: ["GET", "/medicaltranscriptionjobs", 200] }, () => exports.ListMedicalTranscriptionJobsRequest$, () => exports.ListMedicalTranscriptionJobsResponse$
];
exports.ListMedicalVocabularies$ = [9, n0, _LMV,
    { [_h]: ["GET", "/medicalvocabularies", 200] }, () => exports.ListMedicalVocabulariesRequest$, () => exports.ListMedicalVocabulariesResponse$
];
exports.ListTagsForResource$ = [9, n0, _LTFR,
    { [_h]: ["GET", "/tags/{ResourceArn}", 200] }, () => exports.ListTagsForResourceRequest$, () => exports.ListTagsForResourceResponse$
];
exports.ListTranscriptionJobs$ = [9, n0, _LTJ,
    { [_h]: ["GET", "/transcriptionjobs", 200] }, () => exports.ListTranscriptionJobsRequest$, () => exports.ListTranscriptionJobsResponse$
];
exports.ListVocabularies$ = [9, n0, _LV,
    { [_h]: ["GET", "/vocabularies", 200] }, () => exports.ListVocabulariesRequest$, () => exports.ListVocabulariesResponse$
];
exports.ListVocabularyFilters$ = [9, n0, _LVF,
    { [_h]: ["GET", "/vocabularyFilters", 200] }, () => exports.ListVocabularyFiltersRequest$, () => exports.ListVocabularyFiltersResponse$
];
exports.StartCallAnalyticsJob$ = [9, n0, _SCAJ,
    { [_h]: ["PUT", "/callanalyticsjobs/{CallAnalyticsJobName}", 200] }, () => exports.StartCallAnalyticsJobRequest$, () => exports.StartCallAnalyticsJobResponse$
];
exports.StartMedicalScribeJob$ = [9, n0, _SMSJ,
    { [_h]: ["PUT", "/medicalscribejobs/{MedicalScribeJobName}", 200] }, () => exports.StartMedicalScribeJobRequest$, () => exports.StartMedicalScribeJobResponse$
];
exports.StartMedicalTranscriptionJob$ = [9, n0, _SMTJ,
    { [_h]: ["PUT", "/medicaltranscriptionjobs/{MedicalTranscriptionJobName}", 200] }, () => exports.StartMedicalTranscriptionJobRequest$, () => exports.StartMedicalTranscriptionJobResponse$
];
exports.StartTranscriptionJob$ = [9, n0, _STJ,
    { [_h]: ["PUT", "/transcriptionjobs/{TranscriptionJobName}", 200] }, () => exports.StartTranscriptionJobRequest$, () => exports.StartTranscriptionJobResponse$
];
exports.TagResource$ = [9, n0, _TR,
    { [_h]: ["PUT", "/tags/{ResourceArn}", 200] }, () => exports.TagResourceRequest$, () => exports.TagResourceResponse$
];
exports.UntagResource$ = [9, n0, _UR,
    { [_h]: ["DELETE", "/tags/{ResourceArn}", 204] }, () => exports.UntagResourceRequest$, () => exports.UntagResourceResponse$
];
exports.UpdateCallAnalyticsCategory$ = [9, n0, _UCAC,
    { [_h]: ["PATCH", "/callanalyticscategories/{CategoryName}", 200] }, () => exports.UpdateCallAnalyticsCategoryRequest$, () => exports.UpdateCallAnalyticsCategoryResponse$
];
exports.UpdateMedicalVocabulary$ = [9, n0, _UMV,
    { [_h]: ["PATCH", "/medicalvocabularies/{VocabularyName}", 200] }, () => exports.UpdateMedicalVocabularyRequest$, () => exports.UpdateMedicalVocabularyResponse$
];
exports.UpdateVocabulary$ = [9, n0, _UV,
    { [_h]: ["PATCH", "/vocabularies/{VocabularyName}", 200] }, () => exports.UpdateVocabularyRequest$, () => exports.UpdateVocabularyResponse$
];
exports.UpdateVocabularyFilter$ = [9, n0, _UVF,
    { [_h]: ["PUT", "/vocabularyFilters/{VocabularyFilterName}", 200] }, () => exports.UpdateVocabularyFilterRequest$, () => exports.UpdateVocabularyFilterResponse$
];
