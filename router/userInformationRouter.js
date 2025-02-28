const express = require("express");
const {
  getInformation,
  createInformation,
  updateInformation,
} = require("../controller/userInformationController");

const router = express.Router();

router.get("/", getInformation);

router.post("/create", createInformation);

router.put("/:id", updateInformation);

module.exports = router;
