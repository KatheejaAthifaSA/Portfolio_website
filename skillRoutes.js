import express from "express";
import Skill from "../models/Skill.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
});

router.post("/", async (req, res) => {
  const skill = new Skill(req.body);
  await skill.save();
  res.json(skill);
});

export default router;
