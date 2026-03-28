import express from "express";
import Poll from "../models/Poll.js";

const router = express.Router();

/* ADD VOTE */
router.post("/vote", async (req, res) => {
  const { option } = req.body;

  const vote = new Poll({ option });
  await vote.save();

  res.json({ message: "Vote saved" });
});

/* GET RESULT */
router.get("/results", async (req, res) => {
  const miVotes = await Poll.countDocuments({ option: "MI" });
  const oppVotes = await Poll.countDocuments({ option: "OPP" });

  const total = miVotes + oppVotes;

  const miPercent = total ? Math.round((miVotes / total) * 100) : 0;
  const oppPercent = total ? Math.round((oppVotes / total) * 100) : 0;

  res.json({
    miVotes,
    oppVotes,
    miPercent,
    oppPercent,
  });
});

export default router;