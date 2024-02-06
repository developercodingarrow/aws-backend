const express = require("express");
const app = express();

const cors = require("cors");

// Midelwears
app.use(cors());
app.use(express.json());

app.get("/", (res, res) => {
  res.statusCode(200).json({
    status: "Succes",
  });
});
// global Error Control

module.exports = app;
