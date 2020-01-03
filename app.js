//jshint esversion:6

const express = require("express");

const bodyParser = require("body-parser");
const ejs = require("ejs");

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin-janmeet:Janmeet46@cluster0-gg9zf.mongodb.net/shopDB", {useNewUrlParser: true});

//Require routes
var index = require('./routes/index');
var product = require('./routes/product');
var category = require('./routes/category');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//Set up routes
app.use("/", index);
app.use("/", product);
app.use("/", category);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);

app.listen(port, function() {
  console.log("Server started Successfully");
});

module.exports = app;
