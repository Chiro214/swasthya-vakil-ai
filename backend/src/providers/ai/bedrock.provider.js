const { BedrockRuntimeClient, InvokeModelCommand } =
require("@aws-sdk/client-bedrock-runtime");

const client = new BedrockRuntimeClient({
 region: "ap-south-1"
});

async function analyzeComplaint(text) {

 const prompt = `
Analyze the following healthcare complaint and return JSON:

Complaint:
${text}

Return JSON with:
incident_type
severity
jurisdiction
risk_score
escalation_level
`;

 const body = JSON.stringify({
  anthropic_version: "bedrock-2023-05-31",
  max_tokens: 500,
  messages: [
   {
    role: "user",
    content: prompt
   }
  ]
 });

 const command = new InvokeModelCommand({
  modelId: "anthropic.claude-3-sonnet-20240229-v1:0",
  contentType: "application/json",
  accept: "application/json",
  body: body
 });

 const response = await client.send(command);

 const result = JSON.parse(
  new TextDecoder().decode(response.body)
 );

 return result;
}

module.exports = { analyzeComplaint };