const Blogs = require("../models/Blogs");

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getBlogsById = async (req, res) => {
  try {
    const blogs = await Blogs.findById(req.params.id);
    if (!blogs) {
      return res.status(404).json({ error: "Blogs not found" });
    }
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.createBlogs = async (req, res) => {
  try {
    const blogs = new Blogs(req.body);
    await blogs.save();
    res.status(201).json(blogs);
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
};

exports.updateBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.findByIdAndUpdate(req.params.id, req.body);
    if (!blogs) {
      return res.status(404).json({ error: "Blogs not found" });
    }
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.findByIdAndDelete(req.params.id);
    if (!blogs) {
      return res.status(404).json({ error: "Blogs not found" });
    }
    res.json({ message: "Blogs deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
