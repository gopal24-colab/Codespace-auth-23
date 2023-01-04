const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  console.log(req.url);
  res.json("Thank you");
});

module.exports = app;
