const express = require("express");
const router = express.Router();
const Match = require("../models/Match");

router.get("/", async (req, res) => {
  const matches = await Match.find();
  res.json(matches);
});

router.post("/", async (req, res) => {
  const match = new Match(req.body);
  await match.save();
  res.json(match);
});

module.exports = router;