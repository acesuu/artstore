const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const DB = process.env.MONGO_URI;
const app = express();
app.get("/", (req, res) => {
  res.send("Hello I am node.js application");
});

mongoose.connect(
  DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection : " + err);
    }
  }
);
// App Port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on ${port} port`);
});
