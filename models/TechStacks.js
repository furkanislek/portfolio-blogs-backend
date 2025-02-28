const mongoose = require("mongoose");

const TechStackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const TechStacks = mongoose.model("TechStacks", TechStackSchema);
module.exports = TechStacks;
