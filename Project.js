import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  liveDemo: String,
  githubLink: String,
});
export default mongoose.model("Project", projectSchema);
