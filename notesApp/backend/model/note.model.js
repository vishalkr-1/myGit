const mongoose=require('mongoose')
// user schema
const noteSchema=mongoose.Schema({
    title:String,
    body:String,
    sub:String,
    userID:String
   
},{
    versionKey:false
})
const noteModel=mongoose.model("note",noteSchema)
module.exports={
    noteModel
}