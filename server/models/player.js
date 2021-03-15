const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: String,
  age: Number,
  account: String,
  gender: String,
  email: String,
  phone: String,
});

module.exports = mongoose.model("Player", playerSchema);
