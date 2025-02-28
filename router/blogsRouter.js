const express = require("express");
const {
  getBlogs,
  createBlogs,
  updateBlogs,
  deleteBlogs,
  getBlogsById,
} = require("../controller/blogsController");
const router = express.Router();

router.get("/", getBlogs);
router.get("/getById/:id", getBlogsById);
router.post("/", createBlogs);
router.put("/update/:id", updateBlogs);
router.delete("/:id", deleteBlogs);

module.exports = router;
