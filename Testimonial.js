import mongoose from "mongoose";
const testimonialSchema = new mongoose.Schema({
  name: String,
  designation: String,
  message: String,
  image: String,
});
export default mongoose.model("Testimonial", testimonialSchema);
