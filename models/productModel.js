const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  image : {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  bgColor: {
    type: String,
    required: true,
    default : lightgray,
  },
  panelColor: {
    type: String,
    required: true,
    default : darkgray,
  },
  textColor: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);
