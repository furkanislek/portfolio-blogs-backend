const express = require("express");
const {
  createProject,
  deleteProject,
  updateProject,
  getAllProjects,
} = require("../controller/projectController");
const router = express.Router();

router.get("/", getAllProjects);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

module.exports = router;
