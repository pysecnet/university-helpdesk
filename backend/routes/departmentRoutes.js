import express from "express";
import Department from "../models/departmentModel.js";
import protect from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Get all departments (publicly accessible for signup)
router.get("/", async (req, res) => {
  try {
    const departments = await Department.find();
    res.json({ departments });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Add new department
router.post("/add", protect, adminOnly, async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Name is required" });
    const exists = await Department.findOne({ name });
    if (exists)
      return res.status(400).json({ message: "Department already exists" });
    const newDept = new Department({ name });
    await newDept.save();
    res.status(201).json({ message: "Department added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Delete department
router.delete("/delete/:id", protect, adminOnly, async (req, res) => {
  try {
    await Department.findByIdAndDelete(req.params.id);
    res.json({ message: "Department deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
