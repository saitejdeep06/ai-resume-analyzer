const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");
const fs = require("fs");

exports.parseFile = async (filePath, mimetype) => {
  if (mimetype === "application/pdf") {
    const data = await pdfParse(fs.readFileSync(filePath));
    return data.text;
  }

  if (mimetype.includes("word")) {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
  }

  return "";
};