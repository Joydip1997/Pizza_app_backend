const monsgoose = require('mongoose');

const pizzaSchema = monsgoose.Schema({
    name : String,
    type : Boolean,
    imageUrl:String,
    size : Number,
    fav:Boolean,
    oldprice:Number,
    newprice : Number
});

module.exports = monsgoose.model("pizzas",pizzaSchema)