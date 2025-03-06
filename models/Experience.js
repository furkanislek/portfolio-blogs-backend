const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    trTitle: { type: String, required: true },
    time: { type: String, required: false },
    trTime: { type: String, required: false },
    company: { type: String, required: true },
    trCompany: { type: String, required: true },
    details: { type: [String], required: true },
    trDetails: { type: [String], required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Experience = mongoose.model("Experience", ExperienceSchema);
module.exports = Experience;