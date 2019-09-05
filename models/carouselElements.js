//jshint esversion:6

const mongoose = require("mongoose");

const carouselElementSchema=new mongoose.Schema({
   imagePath:String,

});

module.exports=mongoose.model("CarouselElement",carouselElementSchema);
