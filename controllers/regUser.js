const express = require("express");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const handleUserRegistration = async (req, res) => {
  try {
    let { email, password, fullName } = req.body;

    let existingUser = await userModel.findOne({email});

    if(existingUser) res.send('user already exists')

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.send(err);
        let newUser = await userModel.create({
          email,
          password: hash,
          fullName,
        });
        let token = jwt.sign({ email, id: newUser._id }, "secret_key");
        res.cookie("token", token);
        res.send("user successfully created");
      });
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = handleUserRegistration;
