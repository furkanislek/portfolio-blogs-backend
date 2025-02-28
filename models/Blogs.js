const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  summary: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  type: { type: String, required: true },
});

const Blogs = mongoose.model("Blogs", BlogSchema);
module.exports = Blogs;
