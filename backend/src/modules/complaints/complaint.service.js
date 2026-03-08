const { calculateRiskScore } = require("./complaint.scoring");
const { determineEscalation } = require("./complaint.escalation");
const { generateComplaintRecord } = require("../../services/complaintRecordGenerator");
const { generateComplaintPDF } = require("../../services/pdfGenerator");

async function processComplaint(text, aiResult) {

  // 1️⃣ Calculate Risk
  const riskResult = calculateRiskScore(text, aiResult.severity);
  const riskScore = riskResult.score;

  console.log("FINAL RISK SCORE:", riskScore);

  const riskExplanation = riskResult.explanation;

  // 2️⃣ Determine Escalation
  const escalation = determineEscalation(riskScore);

  // 3️⃣ Generate Legal Complaint Record
  const complaintRecord = await generateComplaintRecord(
    text,
    {
      ...aiResult,
      risk_score: riskScore,
      risk_explanation: riskExplanation
    },
    escalation
  );

  // 4️⃣ Generate PDF Complaint
  const pdfPath = generateComplaintPDF(complaintRecord);

  // 5️⃣ Attach PDF path
  complaintRecord.generated_pdf = pdfPath;

  // 6️⃣ Return Structured Complaint
  return complaintRecord;
}

module.exports = { processComplaint };