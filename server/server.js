const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const playerRoutes = require("./routes/players");
const matchRoutes = require("./routes/matches");
const pollRoutes = require("./routes/pollRoutes"); // ✅ ADD THIS

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* DB CONNECTION */
mongoose
  .connect("mongodb://127.0.0.1:27017/iplteam")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

/* ROUTES */
app.use("/players", playerRoutes);
app.use("/matches", matchRoutes);
app.use("/api/poll", pollRoutes); // ✅ ADD THIS

/* SERVER */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});