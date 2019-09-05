//jshint esversion:6

const mongoose = require("mongoose");

const productSchema=new mongoose.Schema({
   imagePath:String,
   brand:String,
   name:String,
   description:String,
   category:String,
   price:Number
});

module.exports=mongoose.model("Product",productSchema);
