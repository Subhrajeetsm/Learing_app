const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("Feedback received:", {
      name,
      email,
      message,
    });

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    res.status(200).json({
      success: true,
      message: "Feedback submitted successfully ❤️",
    });
  } catch (error) {
    console.error("Feedback error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit feedback",
    });
  }
});

module.exports = router;