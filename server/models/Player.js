const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: String,
  role: String,
  runs: Number,
  wickets: Number,
  image: String
});

module.exports = mongoose.model("Player", PlayerSchema);