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

  // ---- Phrase Detection (higher priority) ----
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

  // ---- Severity Multiplier ----
  let multiplier = 1;

  if (severity === "High") multiplier = 1.2;
  if (severity === "Low") multiplier = 0.8;

  score = score * multiplier;

  if (multiplier !== 1) {
    explanation.push(`Severity multiplier applied (${multiplier}x)`);
  }

  // ---- Clamp Score 0–10 ----
  score = Math.max(0, Math.min(Math.round(score), 10));

  return {
    score,
    explanation
  };
}

module.exports = { calculateRiskScore };