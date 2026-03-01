const express = require("express");
const { processComplaint } = require("./src/modules/complaints/complaint.service");
const { runPipeline } = require("./src/services/aiPipeline");
const asyncHandler = require("./src/core/utils/asyncHandler");
const errorMiddleware = require("./src/core/utils/errorMiddleware");
const { successResponse } = require("./src/core/utils/responseHandler");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Swasthya Vakil Backend Running" });
});

app.post(
  "/generate",
  asyncHandler(async (req, res) => {
    const { text } = req.body;

    if (!text || typeof text !== "string") {
      const error = new Error("Invalid input text");
      error.statusCode = 400;
      throw error;
    }

    const aiResult = await runPipeline(text);

const finalResult = await processComplaint(text, aiResult);

return successResponse(res, finalResult);
  })
);

app.use(errorMiddleware);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});