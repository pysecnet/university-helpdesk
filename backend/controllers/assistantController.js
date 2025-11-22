import AssistantQA from "../models/assistantModel.js";

// Ask AI (Database-based)
export const askAI = async (req, res) => {
  try {
    const { question } = req.body;
    if (!question)
      return res.status(400).json({ message: "Question is required" });

    const result = await AssistantQA.find(
      { $text: { $search: question } },
      { score: { $meta: "textScore" } }
    )
      .sort({ score: { $meta: "textScore" } })
      .limit(1);

    if (result.length)
      return res.status(200).json({ answer: result[0].answer });

    res.status(200).json({
      answer:
        "Sorry, I couldn’t find an answer for that. Please contact support.",
    });
  } catch (error) {
    console.error("Assistant Controller Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Add new Q&A (Admin only)
export const addQA = async (req, res) => {
  try {
    const { question, answer, tags } = req.body;
    if (!question || !answer)
      return res.status(400).json({ message: "Both fields are required" });

    const newQA = new AssistantQA({ question, answer, tags });
    await newQA.save();

    res.status(201).json({ message: "FAQ added successfully", newQA });
  } catch (error) {
    console.error("Assistant Controller Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
