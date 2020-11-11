
const foodTypesSchema = require('../..//Models/FoodTypes')

module.exports.getFoodTypes = (req,res)=>{
    
    foodTypesSchema.find({},(err,foodtype)=>{
        if(!err)
        {
            res.send(foodtype)
        }
    })

}

module.exports.addFoodTypes = async (req,res)=>{
    const foodType = foodTypesSchema({
        name:req.body.name,
        type : req.body.type
    })
    const response = await foodType.save()
    res.send(response)
}