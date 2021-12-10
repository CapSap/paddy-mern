const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// bodyparser middleware
app.use(bodyParser.json());

const port = 5000;

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log("app running"));
}
