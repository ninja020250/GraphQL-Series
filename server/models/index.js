const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./player");
db.role = require("./role.model");

db.ROLES = ["player", "admin", "moderator"];

module.exports = db;
