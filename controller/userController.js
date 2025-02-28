const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

require("dotenv").config();

exports.register = async (req, res) => {
  try {
    const { username,  password } = req.body;

    const existingUser = await User.findOne({ $or: [{ username }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "The Username is Already in Use!" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({
      username,
      password: hashedPassword
    });

    await user.save();
    res.status(201).json({ message: "User Register Success!", user });
  } catch (error) {
    res.status(500).json({ message: "Fail! User Register", error });
  }
};


exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User Not Found!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Password Incorrect!" });
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      "SECRET_KEY",
      { expiresIn: "1d" }
    );

    res.status(200).json({ message: "Login Success!", token, user });
  } catch (error) {
    res.status(500).json({ message: "Error logging in!", error });
  }
};