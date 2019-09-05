//jshint esversion:6


const mongoose=require("mongoose");
const bodyParser=require("body-parser");

mongoose.connect("mongodb://localhost:27017/shopDB", {useNewUrlParser: true});

const Product=require("../models/products");


// Product.deleteMany({}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document");
//   }
// });

const products= [
    new Product({
        imagePath:"https://images-na.ssl-images-amazon.com/images/I/61BvCiYVOKL._SX575._SX._UX._SY._UY_.jpg",
        name:"Lacoste Men's Bayliss Vulc PRM Casual Shoe Fashion Sneaker",
        brand:"Lacoste",
        description:"Men's Lacoste, Bayliss Lace up Shoe Ramp up your casual style with these shoes Leather upper with logo ornament for added appeal Lace up closure for a secure fit Smooth manmade and fabric lining Cushioned footbed for added comfort Rubber outsole",
        category:"Shoes",
        price:113
    }),
    new Product({
        imagePath:"https://images-na.ssl-images-amazon.com/images/I/81KaR6fwJ9L._UX569_.jpg",
        name:"Calvin Klein Men's Monogram Logo T-Shirt",
        brand:"Calvin Klein",
        description:"This contemporary short sleeve t-shirt is made with soft cotton for breathable comfort, a crewneck, a monogram logo block design, a straight hem and seaming details.",
        category:"Clothes",
        price:35
    }),
    new Product({
        imagePath:"https://images-na.ssl-images-amazon.com/images/I/81LYwnx3lJL._UX575_.jpg",
        name:"Adidas Mens Questar Ride Running",
        brand:"Adidas",
        description:"adidas is a global designer and developer of athletic footwear, apparel and accessories with the mission to be the best sports brand in the world. As an innovation and design leader, adidas engineers the best in high-performance products to make athletes better, faster and stronger. Midsole drop: 11.5 mm (heel: 24.5 mm / forefoot: 13 mm).",
        category:"Shoes",
        price:152
    }),
    new Product({
        imagePath:"https://images-na.ssl-images-amazon.com/images/I/71Q4dt7KWvL._UY741_.jpg",
        name:"Tommy Hilfiger Mens Outerwear Packable Down Jacket",
        brand:"Tommy Hilfiger",
        description:"Real down packable jacket.",
        category:"Clothes",
        price:255
    }),
    new Product({
        imagePath:"https://images-na.ssl-images-amazon.com/images/I/71SxkMhgYzL._UX522_.jpg",
        name:"Adidas Women's Team Issue Fleece Pullover Logo Hoodie",
        brand:"Adidas",
        description:"An easy extra layer for warming up or cooling down, this men's hoodie is made of soft fleece with climawarm for breathable warmth. Monochrome stripes add subtle style, and an adidas Badge of Sport completes the look.",
        category:"Clothes",
        price:85
    }),
    new Product({
        imagePath:"https://images-na.ssl-images-amazon.com/images/I/61FJvuHWslL._UY625_.jpg",
        name:"Taos Women's Crave Boot",
        brand:"Taos",
        description:"Effortlessly slip into the Crave boot by Taos. Designed with a lace entry with a medial-zipper. It will provide a secure and snug fit for everyday wear.",
        category:"Shoes",
        price:268
    }),

] ;
for(var i=0;i<products.length;i++){
    products[i].save(function(err,item){
        if(err){
            console.log(err);
        }
        else {
            console.log("Added a product!");
        }
    });
}
