const express=require('express')
const {noteModel}=require('../model/note.model')
const noteRouter=express.Router()
const jwt =require('jsonwebtoken')
noteRouter.post('/add',async(req,res)=>{
       try{
        const note=new noteModel(req.body)
        await note.save()
        res.status(200).send({"msg":"a new note is added"})
       }catch(err){
        res.status(400).send({"msg":err.message})

       }
})
noteRouter.get('/',async(req,res)=>{
      const token=req.headers.authorization
      const decoded=jwt.verify(token,"masai")
    try{
      if(decoded){
        const notes=await noteModel.find({'userID':decoded.userID})
        if(notes){
          res.status(200).send(notes)
        }
      }else{
        res.status(400).send({"msg":"no notes created by this user"})
      }
    
      
      
    }catch(err){
     res.status(400).send({"msg":err.message})

    }
})

noteRouter.patch('/update/:noteID',(req,res)=>{
    
})
noteRouter.delete('/delete/:noteID',(req,res)=>{
    
})
module.exports={
    noteRouter
}