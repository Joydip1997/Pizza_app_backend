const express = require('express')
const Router = express.Router();
const foodTypeControler = require('../Routes/Controlers/foodTypeControler')
const foodTypesSchema = require('../Models/FoodTypes')
const pizzassSchema = require('../Models/Pizzas')


// Add food types
Router.post("/api/addfoodlist",foodTypeControler.addFoodTypes)

// Get food types
Router.get("/api/getfoodlist",foodTypeControler.getFoodTypes)





module.exports = Router
