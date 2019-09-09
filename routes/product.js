const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const Product=require("../models/products");

//Add Product form
router.get("/admin/product/add", function(req, res){
  res.render("addProduct.ejs");

});

//Add a product
router.post("/admin/product/add", function(req, res){
  const newProduct = new Product({
      imagePath: req.body.imageURL,
      name: req.body.name,
      brand: req.body.brand,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price
  });

  newProduct.save(function(err,item){
      if(err){
          console.log(err);
      }
      else {
          console.log("Added a product!");
      }
  });
});

module.exports = router;
