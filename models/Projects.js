const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    href: { type: String, required: true },
    liveHref: { type: String, required: false },
    imgSrc: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Projects = mongoose.model("Projects", ProjectSchema);
module.exports = Projects;
