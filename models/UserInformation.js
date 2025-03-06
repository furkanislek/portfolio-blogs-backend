const mongoose = require("mongoose");

const UserInformationSchema = new mongoose.Schema({
  avatar: { type: String, unique: true },
  mainTitle: { type: String, unique: true },
  description: { type: String, unique: true },
  trDescription: { type: String, unique: true },
});

const UserInformation = mongoose.model("UserInformation", UserInformationSchema);
module.exports = UserInformation;
