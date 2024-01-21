const BadRequestError = require("../lib/errors/bad-request-error");
const { passwordStrength } = require("../lib/helpers/userControllerFunctions");
const { succesResponse } = require("../lib/helpers/utility");
const { validateSignup } = require("../lib/validation/userValidation");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const error = await validateSignup(req.body);
  if (error) {
    throw new BadRequestError(error);
  }

  const {
    fullName,
    OGSBno,
    address,
    localGovernment,
    email,
    dateOfBirth,
    board_department,
    phone,
    password,
  } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new BadRequestError("Email already exists");
  }

  const phoneExists = await User.findOne({ phone });
  if (phoneExists) {
    throw new BadRequestError("Phone number already exists");
  }
  const strongPassword = passwordStrength(password);
  console.log("strongpassword = ", strongPassword);
  if (!strongPassword) {
    throw new BadRequestError("Weak password");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    fullName,
    OGSBno,
    address,
    localGovernment,
    email,
    dateOfBirth,
    board_department,
    phone,
    password: hashedPassword,
  });
  await user.save();

  return succesResponse(res, "signup succesfull");
};

module.exports = { signup };
