const TechStacks = require("../models/TechStacks");

exports.getAllTechStacks = async (req, res) => {
  try {
    const techStacks = await TechStacks.find();
    res.status(200).json(techStacks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTechStack = async (req, res) => {
  const techStack = new TechStacks({
    name: req.body.name,
  });

  try {
    const newTechStack = await techStack.save();
    res.status(201).json(newTechStack);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateTechStack = async (req, res) => {
  try {
    const techStack = await TechStacks.findById(req.params.id);
    if (!techStack) {
      return res.status(404).json({ message: "Tech stack not found" });
    }

    techStack.name = req.body.name || techStack.name;

    const updatedTechStack = await techStack.save();
    res.status(200).json(updatedTechStack);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteTechStack = async (req, res) => {
  try {
    const techStack = await TechStacks.findByIdAndDelete(req.params.id);
    if (!techStack) {
      return res.status(404).json({ message: "Tech stack not found" });
    }

    res.json({ message: "Tech stack deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
