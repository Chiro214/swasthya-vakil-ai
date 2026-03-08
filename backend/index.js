const express = require("express");
const cors = require("cors");
require("dotenv").config();

const asyncHandler = require("./src/core/utils/asyncHandler");
const errorMiddleware = require("./src/core/utils/errorMiddleware");
const { successResponse } = require("./src/core/utils/responseHandler");

const { processComplaint } = require("./src/modules/complaints/complaint.service");
const { runPipeline } = require("./src/services/aiPipeline");

const {
  startTranscription,
  getTranscriptionResult,
  extractTranscript
} = require("./src/services/transcribeExtractor");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Swasthya Vakil Backend Running" });
});


/*
-----------------------------------
TEXT COMPLAINT API
-----------------------------------
*/

app.post(
  "/generate",
  asyncHandler(async (req, res) => {

    const { text, transcriptJson } = req.body;

    let complaintText;

    if (transcriptJson) {
      complaintText = extractTranscript(transcriptJson);
    } else {
      complaintText = text;
    }

    if (!complaintText || typeof complaintText !== "string") {
      const error = new Error("Invalid complaint input");
      error.statusCode = 400;
      throw error;
    }

    const aiResult = await runPipeline(complaintText);

    const finalResult = await processComplaint(complaintText, aiResult);

    return successResponse(res, finalResult);

  })
);


/*
-----------------------------------
VOICE COMPLAINT API
-----------------------------------
*/

app.post(
  "/voice",
  asyncHandler(async (req, res) => {

    const { s3Uri } = req.body;

    if (!s3Uri) {
      const error = new Error("Audio file missing");
      error.statusCode = 400;
      throw error;
    }

    // Start transcription job
    const jobName = await startTranscription(s3Uri);

    let transcription;

    // Wait for AWS Transcribe to finish
    while (true) {

      const job = await getTranscriptionResult(jobName);

      const status = job.TranscriptionJob.TranscriptionJobStatus;

      if (status === "COMPLETED") {
        transcription = job;
        break;
      }

      if (status === "FAILED") {
        throw new Error("Transcription failed");
      }

      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    // Extract transcript
    const transcriptText = extractTranscript(transcription.TranscriptionJob);

    // Run AI pipeline
    const aiResult = await runPipeline(transcriptText);

    // Generate complaint
    const finalResult = await processComplaint(transcriptText, aiResult);

    return successResponse(res, {
      transcript: transcriptText,
      complaint: finalResult
    });

  })
);


app.use(errorMiddleware);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});