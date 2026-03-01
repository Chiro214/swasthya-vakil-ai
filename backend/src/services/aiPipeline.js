async function stage1Structure(text) {
  return {
    incident_type: "Healthcare Corruption",
    severity: "High",
    jurisdiction: "Mumbai, Maharashtra",
    raw_input: text
  };
}

async function stage2RiskAnalysis(data) {
  return {
    ...data,
    risk_score: 8.7,
    requires_immediate_attention: true
  };
}

async function stage3Escalation(data) {
  return {
    ...data,
    escalation_level: "State Anti-Corruption Bureau",
    recommended_action: "Initiate Formal Inquiry"
  };
}

async function runPipeline(text) {
  const s1 = await stage1Structure(text);
  const s2 = await stage2RiskAnalysis(s1);
  const s3 = await stage3Escalation(s2);

  return s3;
}

module.exports = {
  runPipeline
};