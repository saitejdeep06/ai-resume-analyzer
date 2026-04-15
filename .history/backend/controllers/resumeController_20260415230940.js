const { parseFile } = require("../utils/parser");

exports.uploadResume = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const text = await parseFile(file.path, file.mimetype);

    const skills = text.match(/JavaScript|Python|React|Node|Java|SQL/gi) || [];

    const score = Math.min(100, skills.length * 10);

    const suggestions =
      skills.length < 5
        ? "Add more relevant skills and projects."
        : "Good resume! Improve formatting.";

    res.json({
      score,
      skills,
      suggestions,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error analyzing resume" });
  }
};