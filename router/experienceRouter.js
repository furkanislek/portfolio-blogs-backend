const express = require("express");
const router = express.Router();
const {
  updateDetails,
  getExperiences,
  deleteExperience,
  updateExperience,
  createExperiences,
} = require("../controller/experinceController");

router.get("/", getExperiences);
router.post("/", createExperiences);
router.put("/:id", updateExperience);
router.delete("/:id", deleteExperience);
router.put("/:id/details", updateDetails);

module.exports = router;
