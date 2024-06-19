const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/shopapp")
  .then(() => console.log("connection succesfull to db"))
  .catch((err) => console.log(err));

module.exports = mongoose.connection;