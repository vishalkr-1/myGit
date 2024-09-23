const express=require('express')
const userRouter=express.Router()
const {userModel}=require('../model/userModel')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
userRouter.post("/registration",async(req,res)=>{
    const {email,pass,location,age}=req.body
    try{
        bcrypt.hash(pass, 10, async function(err, hash) {
            const user=new userModel({email,pass:hash,location,age})
            await user.save()
            res.status(200).send({"msg":"registration is successful"})
        });
        }catch(err){
         res.status(400).send({"msg":err.message})
         }
    })
// userRouter.post("/login",async(req,res)=>{
//     const {email,pass}=req.body
//     try{
//        const user=await userModel.find({email:email,pass:pass})
//        console.log(user)
//        if(user.length>0){
//         res.status(200).send({"msg":"login successful","token":"abc@123"})
//        }else{
//         res.status(200).send({"msg":"login failed"})
//        }
      

//    }catch(err){
//         res.status(400).send({"msg":err.message})

//    }
// })
// userRouter.get("/details",(req,res)=>{
//     const {token}=req.query
//     if(token==="abc@123"){
//         res.status(200).send("user details")
//     }else{
//         res.status(400).send({"msg":"login required ,cannot access the restricted routes"})
//     }
// })

// we can also make token as static but it is not good way so use jwt give random token
// userRouter.post("/login",async(req,res)=>{
//     const {email,pass}=req.body
//     try{
//        const user=await userModel.find({email:email,pass:pass})
//        console.log(user)
//        if(user.length>0){
//         res.status(200).send({"msg":"login successful","token":jwt.sign({name:"batman"},'bruce')})
//        }else{
//         res.status(200).send({"msg":"login failed"})
//        }
      

//    }catch(err){
//         res.status(400).send({"msg":err.message})

//    }
// })
userRouter.post("/login",async(req,res)=>{
    const {email,pass}=req.body
    try{
       const user=await userModel.findOne({email:email})
       console.log(user)
       if(user){
        bcrypt.compare(pass,user.pass,(err,result)=>{
             if(result){
                res.status(200).send({"msg":"login successful","token":jwt.sign({"userID":user._id},'masai')})
             }else{
                res.status(200).send({"msg":"wrong password"})
             }
        })
       
       }else{
        res.status(200).send({"msg":"login failed ,put correct email"})
       }
      

   }catch(err){
        res.status(400).send({"msg":err.message})

   }
})
userRouter.get("/details",(req,res)=>{
        const token=req.headers.authorization
        // const {token}=req.query
        jwt.verify(token,'masai',(err,decoded)=>{
            decoded?res.status(200).send("user details"):res.status(400).send({"msg":"login required ,cannot access the restricted routes"})
        })
  
    })
userRouter.get("/movieData",(req,res)=>{
    const {token}=req.query
    if(token==="abc@123"){
        res.status(200).send("movie details")
    }else{
        res.status(400).send({"msg":"login required ,cannot access the restricted routes"})
    }
})
module.exports={
    userRouter
}