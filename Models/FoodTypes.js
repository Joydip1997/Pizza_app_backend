const mongoose = require('mongoose');

const foodTypesSchema  = mongoose.Schema({
    name:String,
    type:Boolean
});

module.exports = mongoose.model("foodtypes",foodTypesSchema)