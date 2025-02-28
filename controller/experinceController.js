const Experience = require("../models/Experience");

exports.getExperiences = async (req, res) => {
  try {
    const Experiences = await Experience.find();
    res.json(Experiences);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.createExperiences = async (req, res) => {
  try {
    const newExperience = new Experience(req.body);
    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateExperience = async (req, res) => {
  try {
    const Experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!Experience) {
      return res.status(404).json({ error: "Experience not found" });
    }
    res.json(Experience);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateDetails = async (req, res) => {
  try {
    const { action, detail } = req.body;
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ error: "Experience not found" });
    }

    if (action === "add") {
      experience.details.push(detail);
    } else if (action === "remove") {
      experience.details = experience.details.filter((item) => item !== detail);
    } else {
      return res.status(400).json({ error: "Invalid action" });
    }

    await experience.save();
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteExperience = async (req, res) => {
  try {
    const experiences = await Experience.findByIdAndDelete(req.params.id);
    if (!experiences) {
      return res.status(404).json({ error: "Experience not found" });
    }
    res.json({ message: "Experience deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
