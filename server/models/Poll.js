import mongoose from "mongoose";

const pollSchema = new mongoose.Schema({
  option: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Poll", pollSchema);