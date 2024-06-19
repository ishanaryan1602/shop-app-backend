const express = require("express");
const ownerModel = require("../models/ownerModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from owner");
});

router.post("/create", async (req, res) => {
  let owners = await ownerModel.find();
  if(owners.length > 0) {
    res.status(400).send("owner already exists");
  }
  let {fullName , email , password, gstin} = req.body;
  let newOwner = await ownerModel.create({
    fullName,
    email,
    password,
    gstin
  })
  res.send(newOwner);
});

module.exports = router;