const express = require("express");
const app = express();

const cors = require("cors");

// Midelwears
app.use(cors());
app.use(express.json());

app.get("/api/aws", (req, res) => {
  res.status(200).json({
    status: "Succes",
  });
});

module.exports = app;
