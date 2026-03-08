const {
  TranscribeClient,
  StartTranscriptionJobCommand,
  GetTranscriptionJobCommand
} = require("@aws-sdk/client-transcribe");

const client = new TranscribeClient({
  region: "ap-south-1"
});


async function startTranscription(s3Uri) {

  const jobName = `complaint-${Date.now()}`;

  const command = new StartTranscriptionJobCommand({
    TranscriptionJobName: jobName,
    LanguageCode: "en-US",
    Media: {
      MediaFileUri: s3Uri
    },
    MediaFormat: "wav"
  });

  await client.send(command);

  return jobName;
}


async function getTranscriptionResult(jobName) {

  const command = new GetTranscriptionJobCommand({
    TranscriptionJobName: jobName
  });

  const response = await client.send(command);

  return response;
}


function extractTranscript(transcribeJson) {

  if (!transcribeJson) {
    throw new Error("Transcribe JSON missing");
  }

  if (!transcribeJson.results || !transcribeJson.results.transcripts) {
    throw new Error("Invalid Transcribe format");
  }

  const transcripts = transcribeJson.results.transcripts;

  if (!Array.isArray(transcripts) || transcripts.length === 0) {
    throw new Error("No transcript found");
  }

  const transcriptText = transcripts[0].transcript;

  if (!transcriptText) {
    throw new Error("Transcript empty");
  }

  return transcriptText;
}


module.exports = {
  startTranscription,
  getTranscriptionResult,
  extractTranscript
};