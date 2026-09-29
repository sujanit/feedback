const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Feedback Server Running");
});

// Feedback route
app.post("/api/feedback", (req, res) => {
  const feedbackData = req.body;

  console.log("Received Feedback:", feedbackData);

  res.status(200).json({
    message: "Feedback received successfully!",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});