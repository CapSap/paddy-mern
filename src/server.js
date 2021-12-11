const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// bodyparser middleware
app.use(bodyParser.json());

//DB config
const db = require("../config/keys").mongoURI;

//connect
mongoose.connect(db).then(() => {
  console.log("db connected");
});

const port = 5000;

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log("app running"));
}
