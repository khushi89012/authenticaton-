const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
email :{type:Object,required:true,unique:true},

password : {type:String,required:true}
},
{
   timestamps:true,
   versionKey:false

 

})

userSchema.pre("save",function(next){

   // hashing with the password  and the no. of rounds hash + salt/rounds
   let hashpassword = bcrypt.hashSync(this.password,salt,5)
   this.password = hashpassword

 return next()
})

 userSchema.method.checkPassword = (password)=>{
    return bcrypt.compareSync(password,this.password)

}


const User = mongoose.model("koop",userSchema)
module.exports = User