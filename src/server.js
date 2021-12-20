const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const orders = require("../routes/api/orders");

const app = express();

// bodyparser middleware
app.use(bodyParser.json());

//DB config
const db = require("../config/keys").mongoURI;

//connect to mongodb
mongoose
  .connect(db)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));

//use routes
app.use("/api/orders", orders);

const port = process.env.port || 5000;

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Server started on port ${port}`));
}
