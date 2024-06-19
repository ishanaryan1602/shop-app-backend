const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const handleUserRegistration = require("../controllers/regUser");

// this is the demo testing route
router.get("/", (req, res) => {
  res.send("hello from user");
});

router.post("/register", handleUserRegistration);

module.exports = router;
