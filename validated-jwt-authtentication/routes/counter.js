const express=require('express')
const { handleCounter,handleSignUp } = require('../controller/counter')
const router=express.Router()
router.post('/counter',handleCounter)

module.exports={
    router

}