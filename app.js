const express = require("express");
const app = express();

const cors = require("cors");

// Midelwears
app.use(cors());
app.use(express.json());

console.log("file running");

app.get("/api", (req, res) => {
  console.log("runing api");
  res.status(200).json({
    status: "Succes",
  });
});

app.get("/api/aws", (req, res) => {
  console.log("running api");
  res.status(200).json({
    status: "Success",
  });
});

module.exports = app;
