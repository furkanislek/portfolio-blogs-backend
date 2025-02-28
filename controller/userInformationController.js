const UserInformation = require("../models/UserInformation");

exports.getInformation = async (req, res) => {
  try {
    const userInformation = await UserInformation.find();
    res.json(userInformation);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.createInformation = async (req, res) => {
  try {
    const information = new UserInformation(req.body);
    await information.save();
    res.status(201).json(information);
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
};

exports.updateInformation = async (req, res) => {
  try {
    const information = await UserInformation.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!information) {
      return res.status(404).json({ error: "Information not found" });
    }
    res.json(information);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
