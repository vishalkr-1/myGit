const {handleSignUp,handleLogin} =require("../controller/user")
const express=require('express')
// const {restrictToLoggedInUserOnly}=require("../middleware/auth")
const router=express.Router()
router.post('/signup',handleSignUp)
router.post('/login',handleLogin)

module.exports={
    signUpRouter:router,
    
}