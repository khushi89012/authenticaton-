
const express = require("express")
const connect = require("./config/db")
const userControllers = require("./controllers/user.controllers")
const {register,login} = require("./controllers/auth.controller")
const productcontroller = require("./controllers/product.controller")
const app = express()

app.use(express.json())

app.use("users",userControllers)
app.post("/register",register)
app.post("/login",login)
app.post("/product", productcontroller)



app.listen(8000,async()=>{
    try{
        await connect()
        console.log("Listening on port 8000")

    }
    catch(e){
        console.log(e.message)
    }
})