const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
});

module.exports = mongoose.model("Card", cardSchema);