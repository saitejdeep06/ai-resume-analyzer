const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  text: String,
});

module.exports = mongoose.model("Resume", ResumeSchema);