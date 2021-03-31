const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: String,
  age: Number,
  account: String,
  gender: String,
  email: String,
  phone: String,
  teamId: String,
  username: String,
  password: String,
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
});

module.exports = mongoose.model("Player", playerSchema);
