const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("✅ Breakout Scanner Running");
});

app.get("/scan", (req, res) => {
  res.send("🔥 Scan working");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
