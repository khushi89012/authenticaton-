const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
title :{type:String,required:true},

price : {type:Number,required:true},

},
{
   timestamps:true,
   versionKey:false

 

})
const Product = mongoose.model("news",productSchema)
module.exports = Product