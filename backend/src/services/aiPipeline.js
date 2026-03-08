const { calculateRiskScore } = require("../modules/complaints/complaint.scoring");
const { determineEscalation } = require("../modules/complaints/complaint.escalation");
const { deriveSeverity } = require("../modules/complaints/complaint.severity");

// ✅ IMPORT YOUR BEDROCK PROVIDER
const { analyzeComplaint } = require("../providers/ai/bedrock.provider");

/*
-----------------------------------------
Stage 1 — Structure the complaint (FIXED: Powered by AWS Bedrock)
-----------------------------------------
*/
async function stage1Structure(text) {
  try {
    // 1. ACTUALLY CALL AMAZON BEDROCK
    const bedrockResponse = await analyzeComplaint(text);

    // 2. EXTRACT CLAUDE 3 TEXT FROM THE RESPONSE
    const rawText = bedrockResponse.content[0].text;

    // 3. EXTRACT JSON SAFELY (Handles if Claude wraps output in markdown blocks)
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    const parsedData = jsonMatch ? JSON.parse(jsonMatch[0]) : {};

    // 4. RETURN THE DYNAMIC DATA FROM AI
    return {
      incident_type: parsedData.incident_type || "Uncategorized Healthcare Complaint",
      jurisdiction: parsedData.jurisdiction || "Unknown Jurisdiction",
      complaint_text: text,
      ai_severity: parsedData.severity,
      ai_risk_score: parsedData.risk_score,
      ai_escalation: parsedData.escalation_level
    };

  } catch (error) {
    console.error("🚨 Bedrock AI Call Failed:", error);
    
    // Fallback so the pipeline doesn't crash during the demo if AWS fails
    return {
      incident_type: "Healthcare Complaint (Fallback)",
      jurisdiction: "System Error - Manual Review Required",
      complaint_text: text
    };
  }
}

/*
-----------------------------------------
Stage 2 — Risk Scoring
-----------------------------------------
*/
async function stage2Risk(structured) {

  const riskResult = calculateRiskScore(structured.complaint_text);

  return {
    ...structured,
    risk_score: riskResult.score,
    risk_explanation: riskResult.explanation
  };
}

/*
-----------------------------------------
Stage 3 — Severity Derivation
-----------------------------------------
*/
async function stage3Severity(data) {

  const severity = deriveSeverity(data.risk_score);

  return {
    ...data,
    severity
  };
}

/*
-----------------------------------------
Stage 4 — Escalation Authority
-----------------------------------------
*/
async function stage4Escalation(data) {

  const escalation = determineEscalation(data.risk_score);

  return {
    ...data,
    ...escalation
  };
}

/*
-----------------------------------------
Main Pipeline
-----------------------------------------
*/
async function runPipeline(text) {

  if (!text || typeof text !== "string") {
    throw new Error("Invalid complaint text");
  }

  const stage1 = await stage1Structure(text);

  const stage2 = await stage2Risk(stage1);

  const stage3 = await stage3Severity(stage2);

  const stage4 = await stage4Escalation(stage3);

  return stage4;
}

module.exports = {
  runPipeline
};