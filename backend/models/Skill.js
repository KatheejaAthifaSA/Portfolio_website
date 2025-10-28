import mongoose from "mongoose";
const skillSchema = new mongoose.Schema({
  category: String,
  skills: [String],
});
export default mongoose.model("Skill", skillSchema);
