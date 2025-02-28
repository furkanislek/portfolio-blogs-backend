const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  company: { type: String, required: true },
  time:{type:String, required:true},
  createdAt: { type: Date, default: Date.now },
});

const Education = mongoose.model("Education", EducationSchema);
module.exports = Education;
