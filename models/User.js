const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String, unique: true }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
