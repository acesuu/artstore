const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const DB = process.env.MONGO_URI;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello I am node.js application");
});

const authRoute = require("./src/auth/authRoutes");
const productRoute = require("./src/product/routes/productRoute")
const categoryRoute = require("./src/product/routes/categoryRoute")


app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);


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
