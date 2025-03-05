const Education = require("../models/Education");

exports.getEducations = async (req, res) => {
  try {
    const educations = await Education.find().sort({ createdAt: 1 });
    res.json(educations);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


exports.newEducation = async (req, res) => {
  try {
        const educations = new Education(req.body)
        await educations.save();
        res.status(201).json(educations);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(req.params.id, req.body);
    if (!education) {
      return res.status(404).json({ error: "Education not found" });
    }
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) {
      return res.status(404).json({ error: "Education not found" });
    }
    res.json({ message: "Education deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
