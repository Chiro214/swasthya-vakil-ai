const { askAI } = require("../providers/ai/ai.interface");

async function analyzeLegalViolations(text) {

  const prompt = `
You are an expert in Indian law.

Analyze the complaint and identify possible legal violations.

Complaint:
${text}

Return ONLY valid JSON in this format:

{
 "violations":[
  {
   "law":"law name",
   "section":"section number",
   "description":"short explanation"
  }
 ]
}
`;

  try {

    const response = await askAI(prompt);

    const jsonStart = response.indexOf("{");
const jsonEnd = response.lastIndexOf("}");

const jsonString = response.substring(jsonStart, jsonEnd + 1);

const parsed = JSON.parse(jsonString);

    return parsed.violations || [];

  } catch (error) {

    console.log("LEGAL AI ANALYSIS FAILED:", error);

    return [];

  }
}

module.exports = { analyzeLegalViolations };