const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/shopapp")
  .then(() => console.log("connection succesfull to db"));

const ownerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
    default: [],
  },
  picture: {
    type: String,
  },
  gstin: {
    type: String,
  },
});

module.exports = mongoose.model("Owner", ownerSchema);
