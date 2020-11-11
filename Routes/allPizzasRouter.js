const express = require('express')
const Router = express.Router();
const pizzassSchema = require('../Models/Pizzas')




Router.post("/api/addnew/pizzas",async (req,res)=>{
    const pizza = pizzassSchema({
        name : req.body.name,
        type : req.body.type,
        imageUrl : req.body.url,
        size : req.body.size,
        fav:req.body.isfav,
        oldprice:req.body.oldprice,
        newprice : req.body.newprice
    });
    const response = await pizza.save()
    res.send(response)
})

// //Get all pizzas
Router.get("/api/getallpizzas",(req,res)=>{
    pizzassSchema.find({},(err,pizzas)=>{
        if(!err)
        {
            res.send(pizzas)
        }
    })
})


module.exports = Router
