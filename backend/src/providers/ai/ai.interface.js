const { analyzeComplaint } = require("./bedrock.provider");

async function askAI(prompt) {

  const result = await analyzeComplaint(prompt);

  if (!result || !result.content) {
    return "{}";
  }

  // Claude response format
  const text = result.content[0].text;

  return text;
}

module.exports = { askAI };