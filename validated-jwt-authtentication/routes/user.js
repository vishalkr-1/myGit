const {handleSignUp,handleLogin,validateLogin,validateSignUp} =require("../controller/user")
const express=require('express')

// const {restrictToLoggedInUserOnly}=require("../middleware/auth")
const router=express.Router()
router.post('/signup',validateSignUp,handleSignUp)
router.post('/login',validateLogin,handleLogin)

module.exports={
    signUpRouter:router,
    
}