const { analyzeLegalViolations } = require("./legalAIAnalyzer");

async function generateComplaintRecord(text, aiResult, escalation) {

  const violations = await analyzeLegalViolations(text);

  return {
    complaint_metadata: {
      complaint_id: `CMP-${Date.now()}`,
      date_filed: new Date().toISOString(),
      jurisdiction: aiResult.jurisdiction,
      source: "voice"
    },

    complainant: {
      name: "Citizen",
      contact: null,
      anonymous: true
    },

    incident_details: {
      incident_type: aiResult.incident_type,
      location: aiResult.jurisdiction,
      date_of_incident: null,
      institution: null,
      description: text
    },

    allegations: [text],

    legal_analysis: {
      severity: aiResult.severity,
      risk_score: aiResult.risk_score,
      risk_explanation: aiResult.risk_explanation
    },

    possible_violations: violations,

    evidence: [
      {
        type: "audio",
        source: "voice complaint",
        location: null
      }
    ],

    recommended_escalation: escalation,

    system_analysis: {
      confidence: "medium",
      ai_pipeline_version: "1.0"
    }
  };
}

module.exports = { generateComplaintRecord };