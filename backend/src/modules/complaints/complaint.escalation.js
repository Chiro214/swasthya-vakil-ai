function determineEscalation(score) {
  if (score >= 8) {
    return {
      escalation_level: "State Anti-Corruption Bureau",
      requires_immediate_attention: true
    };
  }

  if (score >= 5) {
    return {
      escalation_level: "District Vigilance Officer",
      requires_immediate_attention: false
    };
  }

  return {
    escalation_level: "Internal Review Board",
    requires_immediate_attention: false
  };
}

module.exports = { determineEscalation };