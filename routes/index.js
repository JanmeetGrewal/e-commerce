//jshint esversion:6

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const _ = require("lodash");

var Product=require("../models/products");
var CarouselElement=require("../models/carouselElements");


router.use(bodyParser.urlencoded({extended: true}));
router.use(express.static("public"));

router.get("/", function(req, res){

  CarouselElement.find({}, function(err, carouselElements){
    if (err) {
      console.log("Error connecting to db in the index.ejs");
    }
    else {
      Product.find({}, function(err, products){
        if (err) {
          console.log("Error connecting to db in the index.ejs");
        }
        else {
          res.render("index.ejs", {carouselElements:carouselElements, products:products});
        }
      });

    }
  });


  // Product.find({}, function(err, products){
  //   if (err) {
  //     console.log("Error connecting to db in the index.ejs");
  //   }
  //   else {
  //     res.render("index.ejs", {products:products});
  //   }
  // });


});

router.get("/product/:productName", function(req, res){

  const requestedName = _.lowerCase(req.params.productName);

  Product.find({}, function(err, products){
    if (err) {
      console.log("Error connecting to db in the index.ejs");
    }
    else {
      products.forEach(function(product){
        const storedName = _.lowerCase(product.name);
        if(storedName === requestedName){
        res.render("product.ejs", {name: product.name, description: product.description});
      }
    });

    }
  });
});



module.exports = router;
