//jshint esversion:6

const express = require("express");

const bodyParser = require("body-parser");
const ejs = require("ejs");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shopDB", {useNewUrlParser: true});

//Require routes
var index = require('./routes/index');
var product = require('./routes/product');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//Set up routes
app.use("/", index);
app.use("/", product);


app.listen(3000, function() {
  console.log("Server started on port 3000");
});

module.exports = app;
