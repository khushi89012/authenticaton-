const express = require("express")
const authenticate = require("../middleware/authentication")
const router = express.Router()
const Product = require("../models/product.model")

router.post("",authenticate,async(req,res)=>{
    try {
        const product = await Product.create(req.body)

        return res.status(201).send({product:product})

    } catch (e) {
        return res.status(400).send(e.message)
        
    }

   
})

module.exports = router