const mongoose=require('mongoose')
// user schema
const userSchema=mongoose.Schema({
    email:String,
    pass:String,
    location:String,
    age:Number
},{
    versionKey:false
})
const userModel=mongoose.model("user",userSchema)
module.exports={
 userModel
}