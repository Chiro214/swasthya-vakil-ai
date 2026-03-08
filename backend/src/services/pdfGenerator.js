const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

function generateComplaintPDF(complaint) {

  const fileName = `${complaint.complaint_metadata.complaint_id}.pdf`;

  const outputPath = path.join(
    __dirname,
    "../../generated",
    fileName
  );

  const doc = new PDFDocument();

  doc.pipe(fs.createWriteStream(outputPath));

  doc.fontSize(18).text("Legal Grievance Notice", { align: "center" });

  doc.moveDown();

  doc.fontSize(12).text(`Complaint ID: ${complaint.complaint_metadata.complaint_id}`);
  doc.text(`Date: ${complaint.complaint_metadata.date_filed}`);
  doc.text(`Jurisdiction: ${complaint.complaint_metadata.jurisdiction}`);

  doc.moveDown();

  doc.text("Complaint Description:");
  doc.text(complaint.incident_details.description);

  doc.moveDown();

  doc.text("Risk Score:");
  doc.text(`${complaint.legal_analysis.risk_score}`);

  doc.moveDown();

  doc.text("Detected Legal Violations:");

  complaint.possible_violations.forEach(v => {
    doc.text(`${v.law} - ${v.section}`);
  });

  doc.moveDown();

  doc.text("Recommended Escalation:");
  doc.text(complaint.recommended_escalation.escalation_level);

  doc.end();

  return outputPath;
}

module.exports = { generateComplaintPDF };