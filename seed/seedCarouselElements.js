//jshint esversion:6


const mongoose=require("mongoose");
const bodyParser=require("body-parser");

mongoose.connect("mongodb://localhost:27017/shopDB", {useNewUrlParser: true});

const CarouselElement=require("../models/carouselElements");


// CarouselElement.deleteMany({}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document");
//   }
// });

const carouselElements= [
    new CarouselElement({
        imagePath:"https://images.pexels.com/photos/1374542/pexels-photo-1374542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

    }),
    new CarouselElement({
        imagePath:"https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

    }),
    new CarouselElement({
        imagePath:"https://images.pexels.com/photos/371095/pexels-photo-371095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

    }),
    new CarouselElement({
        imagePath:"https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

    }),


] ;
for(var i=0;i<carouselElements.length;i++){
    carouselElements[i].save(function(err,item){
        if(err){
            console.log(err);
        }
        else {
            console.log("Added an element!");
        }
    });
}
