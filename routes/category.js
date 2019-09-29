const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const _ = require("lodash");

const Product = require("../models/products");

router.get("/category/:categoryName", function(req, res) {
  //const requestedName = _.lowerCase(req.params.categoryName);
  Product.find({category: req.params.categoryName}, function(err, products){
    if (err) {
      console.log("Error connecting to db in the index.ejs");
    }
    else {
      res.render("categoryProducts.ejs", {products:products});
    }
  });
});





module.exports = router;
