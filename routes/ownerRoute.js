const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("hello from owner");
});

module.exports = router;