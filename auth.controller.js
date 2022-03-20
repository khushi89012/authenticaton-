
const { findOne, create } = require("../models/user.model")
const User = require("../models/user.model")
var jwt = require('jsonwebtoken');
require('dotenv').config()
const newToken =(user)=>{

  return  jwt.sign({user}, process.env.secret_key);
}





// lets check signin process and check email exist and new then cretae one 


const register = async(req,res)=>{

try {

  let  user = await User.findOne({email : req.body.email})

    if(user){
        return res.status(400).send("Email alredy exist")

    }

    user = await User.create({email: req.body})


    const token = newToken(user)
        
    return res.status(200).json({user,token})
    
} catch (e) {

    return res.status(500).send(e.message)
}

}
const login = async(req,res)=>{

    try {
        const user = await User.findOne({email: req.body.email})

        if(!user){
            return res.status(400).send("Wrong password or Email")

        }
        // checking the password if match

        const match = user.checkPassword(req.body.password)

        if(!match){
            return res.status(400).send("Something went wrong")
        }
        const token = newToken(user)
        
        return res.status(200).json({user,token})
     
    } catch (e) {
        return res.status(500).send("failed login ", e.message)
    }
    
    }

    module.exports = {register,login}