const Social = require("../models/Social");

exports.getAllSocials = async (req, res) => {
  try {
    const socials = await Social.find();
    res.status(200).json(socials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSocial = async (req, res) => {
  const social = new Social({
    img: req.body.img,
    href: req.body.href,
    title: req.body.title,
    address: req.body.address,
  });

  try {
    const newSocial = await social.save();
    res.status(201).json(newSocial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateSocial = async (req, res) => {
  try {
    const social = await Social.findById(req.params.id);
    if (!social) {
      return res.status(404).json({ message: "Social link not found" });
    }

    social.img = req.body.img || social.img;
    social.href = req.body.href || social.href;
    social.title = req.body.title || social.title;
    social.address = req.body.address || social.address;

    const updatedSocial = await social.save();
    res.status(200).json(updatedSocial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteSocial = async (req, res) => {
  try {
    const social = await Social.findByIdAndDelete(req.params.id);
    if (!social) {
      return res.status(404).json({ message: "Social link not found" });
    }
    res.json({ message: "Social link deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
