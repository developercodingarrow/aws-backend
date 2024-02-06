const express = require("express");
const app = express();

const cors = require("cors");

// Midelwears
app.use(cors());
app.use(express.json());

console.log("file running");

app.get("/aws", (req, res) => {
  console.log("runing api");
  res.status(200).json({
    status: "Succes",
  });
});

module.exports = app;
