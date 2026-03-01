const keywordWeights = {
  bribe: 3,
  corruption: 4,
  fraud: 3,
  negligence: 2,
  delay: 1,
  threat: 4,
  death: 5,
  fake: 2,
  forged: 3,
  harassment: 3
};

const phraseWeights = {
  "patient died": 5,
  "asked for money": 3,
  "fake report": 4,
  "refused treatment": 4
};

function calculateRiskScore(text, severity = "Medium") {
  // Safety check
  if (!text || typeof text !== "string") {
    return {
      score: 0,
      explanation: ["Invalid or empty text"]
    };
  }

  const lowerText = text.toLowerCase();
  let score = 0;
  const explanation = [];

  // ---- Phrase Detection (Higher Priority) ----
  for (const phrase in phraseWeights) {
    const matches = lowerText.split(phrase).length - 1;
    if (matches > 0) {
      const added = matches * phraseWeights[phrase];
      score += added;
      explanation.push(
        `Phrase "${phrase}" detected (${matches}x) (+${added})`
      );
    }
  }

  // ---- Keyword Detection ----
  for (const keyword in keywordWeights) {
    const matches = lowerText.split(keyword).length - 1;
    if (matches > 0) {
      const added = matches * keywordWeights[keyword];
      score += added;
      explanation.push(
        `Keyword "${keyword}" detected (${matches}x) (+${added})`
      );
    }
  }

  // ---- Severity Minimum Enforcement (Deterministic Model) ----
  let severityMinimum = 0;

  switch (severity?.toLowerCase()) {
    case "critical":
      severityMinimum = 10;
      break;
    case "high":
      severityMinimum = 8;
      break;
    case "medium":
      severityMinimum = 5;
      break;
    case "low":
      severityMinimum = 2;
      break;
    default:
      severityMinimum = 0;
  }

  if (score < severityMinimum) {
    explanation.push(
      `Severity minimum enforced (raised to ${severityMinimum})`
    );
  }

  score = Math.max(score, severityMinimum);

  // ---- Clamp Score 0–10 (Integer Only) ----
  score = Math.max(0, Math.min(score, 10));

  return {
    score,
    explanation
  };
}

module.exports = { calculateRiskScore };