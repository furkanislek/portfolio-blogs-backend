const express = require("express");
const router = express.Router();
const {getAllTechStacks,createTechStack,updateTechStack,deleteTechStack} = require("../controller/techStackController");

router.get("/", getAllTechStacks);
router.post("/", createTechStack);
router.put("/:id", updateTechStack);
router.delete("/:id", deleteTechStack);

module.exports = router;