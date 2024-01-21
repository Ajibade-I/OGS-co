const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      minlength: 10,
      maxlength: 45,
      trim: true,
      required: true,
    },
    OGSBno: {
      type: String,
      minlength: 10,
      required: true,
      unique: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    localGovernment: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
      trim: true,
    },
    board_department: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
      maxlength: 15,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamp: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
