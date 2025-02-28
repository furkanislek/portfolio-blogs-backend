const express = require("express");
const {
  createSocial,
  deleteSocial,
  updateSocial,
  getAllSocials,
} = require("../controller/socialController");
const router = express.Router();

router.get("/", getAllSocials);
router.post("/", createSocial);
router.put("/:id", updateSocial);
router.delete("/:id", deleteSocial);

module.exports = router;
