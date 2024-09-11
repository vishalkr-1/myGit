const {mongoose}=require('mongoose')
const detailSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
     }
},
{timeStamps:true}
)
const userDetails=mongoose.model("userDetails",detailSchema)
module.exports={
    userDetails
}