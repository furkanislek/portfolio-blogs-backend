const Projects = require("../models/Projects");

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Projects.find().sort({ point: -1 });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createProject = async (req, res) => {
  const project = new Projects({
    href: req.body.href,
    liveHref: req.body.liveHref,
    imgSrc: req.body.imgSrc,
    title: req.body.title,
    description: req.body.description,
    type: req.body.type,
    point: req.body.point,
    trTitle: req.body.trTitle,
    trDescription: req.body.trDescription,
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Projects.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    project.href = req.body.href || project.href;
    project.liveHref = req.body.liveHref || project.liveHref;
    project.imgSrc = req.body.imgSrc || project.imgSrc;
    project.title = req.body.title || project.title;
    project.trTitle = req.body.trTitle || project.trTitle;
    project.description = req.body.description || project.description;
    project.trDescription = req.body.trDescription || project.trDescription;
    project.type = req.body.type || project.type;
    project.point = req.body.point || project.point;

    const updatedProject = await project.save();
    res.status(200).json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Projects.findByIdAndDelete(req.params.id);
     if (!project) {
       return res.status(404).json({ error: "Projects not found" });
     }
     res.json({ message: "Projects deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};