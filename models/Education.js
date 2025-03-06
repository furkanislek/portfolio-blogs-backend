const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  trTitle: { type: String, required: true },
  description: { type: String, required: false },
  trDescription: { type: String, required: true },
  company: { type: String, required: true },
  trCompany: { type: String, required: true },
  time: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Education = mongoose.model("Education", EducationSchema);
module.exports = Education;
