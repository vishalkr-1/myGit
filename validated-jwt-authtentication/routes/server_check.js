const express=require('express')
const router=express.Router()
router.get("/",(req,res)=>{
    return res.send("server is working")
})
module.exports=router