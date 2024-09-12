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
     },
    filename:{
        type:String,
    },
    filepath:{
        type:String
    }, deletedAt: {
        type: Date // Field to store the timestamp of deletion
    },isDeleted: {
        type: Boolean,
        default: false // Default to false, meaning the record is not deleted
    }
},
{timeStamps:true}
)
const userDetails=mongoose.model("userDetails",detailSchema)
module.exports={
    userDetails
}