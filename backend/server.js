const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();

app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post("/api/resume/upload", upload.single("resume"), (req, res) => {
  console.log("FILE RECEIVED:", req.file);

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  // Dummy AI response
  res.json({
    score: 85,
    skills: ["JavaScript", "React", "Node.js"],
    suggestions: "Add more projects and improve formatting."
  });
});

app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});