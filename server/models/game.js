const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  name: String,
  description: String,
  maxPlayer: Number,
  startDate: String,
  endDate: String,
  logo: String,
  winner: String,
});

module.exports = mongoose.model("Game", gameSchema);
