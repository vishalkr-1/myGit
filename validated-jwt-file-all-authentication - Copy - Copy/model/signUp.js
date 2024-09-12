const {mongoose}=require('mongoose')
const detailSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
     },
    filename:{
        type:String,
    },
    filepath:{
        type:String
    } 
},

{timestamps:true}
)
const userDetails=mongoose.model("userDetails",detailSchema)
userDetails.syncIndexes();
module.exports={
    userDetails
}