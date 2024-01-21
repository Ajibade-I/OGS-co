const express = require("express");
const { signup } = require("../controller/usercontroller");
const router = express.Router();

router.post("/signup", signup);

module.exports = router;
