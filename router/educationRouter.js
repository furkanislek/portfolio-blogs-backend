const express = require("express");
const router = express.Router();
const {getEducations, newEducation, updateEducation, deleteEducation} = require("../controller/educationController");

router.get("/", getEducations);
router.post("/", newEducation);
router.put("/:id", updateEducation);
router.delete("/:id", deleteEducation);

module.exports = router;