const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    href: { type: String, required: true },
    liveHref: { type: String, required: false },
    imgSrc: { type: String, required: true },
    title: { type: String, required: true },
    trTitle: { type: String, required: false },
    description: { type: String, required: true },
    trDescription: { type: String, required: false },
    type: { type: String, required: true },
    point: { type: Number, default: 10, required: false },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Projects = mongoose.model("Projects", ProjectSchema);
module.exports = Projects;
