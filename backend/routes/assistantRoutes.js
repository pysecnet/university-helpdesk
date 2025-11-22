import express from "express";
import { askAI, addQA } from "../controllers/assistantController.js";
import protect from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/ask", protect, askAI);
router.post("/add", protect, adminOnly, addQA);

export default router;
