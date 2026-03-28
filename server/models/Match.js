const mongoose = require("mongoose");

const MatchSchema = new mongoose.Schema({
  team1: String,
  team2: String,
  date: String,
  stadium: String
});

module.exports = mongoose.model("Match", MatchSchema);