const { calculateRiskScore } = require("./complaint.scoring");
const { determineEscalation } = require("./complaint.escalation");

async function processComplaint(text, aiResult) {

  // 1️⃣ Calculate Risk
  const riskResult = calculateRiskScore(text, aiResult.severity);
  const riskScore = riskResult.score;
  const riskExplanation = riskResult.explanation;

  // 2️⃣ Determine Escalation
  const escalation = determineEscalation(riskScore);

  // 3️⃣ Return Final Structured Response
  return {
    ...aiResult,
    risk_score: riskScore,
    risk_explanation: riskExplanation,
    ...escalation
  };
}

module.exports = { processComplaint };