const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const Product = require("../models/products");

//Add Product form
router.get("/admin/product/add", function(req, res) {
  res.render("addProduct.ejs");

});

//Add a product
router.post("/admin/product/add", function(req, res) {
  const newProduct = new Product({
    imagePath: req.body.imageURL,
    name: req.body.name,
    brand: req.body.brand,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price
  });

  newProduct.save(function(err, item) {
    if (err) {
      console.log(err);
    } else {
      console.log("Added a product!");
    }
  });
});

//Remove product form
router.get("/admin/product/remove", function(req, res) {
  res.render("removeProduct.ejs");

});

//Remove a product
router.post("/admin/product/remove", function(req, res) {

  Product.deleteOne({
    _id: req.body.id
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully deleted the document");
    }
  });
});

//Update Product form
router.get("/admin/product/update", function(req, res) {
  res.render("updateProduct.ejs");

});

//Update product



module.exports = router;
