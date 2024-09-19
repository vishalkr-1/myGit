const {handleSignUp,handleLogin,validateLogin,validateSignUp,upload} =require("../controller/user")
const express=require('express')

// const {restrictToLoggedInUserOnly}=require("../middleware/auth")
const router=express.Router()
router.post('/signup',upload.single('uploadFile'),validateSignUp,handleSignUp)
router.post('/login',validateLogin,handleLogin)






module.exports={
    signUpRouter:router,
}