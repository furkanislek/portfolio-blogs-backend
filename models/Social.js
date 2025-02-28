const mongoose = require("mongoose");

const SocialSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    href: { type: String, required: false },
    title: { type: String, required: true },
    address: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Social = mongoose.model("Social", SocialSchema);
module.exports = Social;
