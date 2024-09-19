const express=require('express')
const serverRouter=require('./routes/server_check')
const {router}=require('./routes/counter')
const fileRouter=require('./routes/fileRoutes')
const {signUpRouter}=require('./routes/user')
const {router:staticRouter} =require('./routes/staticRouter')
const connectDb=require("./connection/connect")
const path=require("path")
const multer = require('multer');
const cookieParser = require('cookie-parser')
const { restrictToLoggedInUserOnly } = require('./middleware/auth')
const { deleteSoftRouter1, getActiveUsersRouter, restoreUserRouter } = require('./routes/softDelete')
const app=express()
const PORT=3000
connectDb("mongodb://127.0.0.1:27017/calculator").then(()=>{
    console.log("db is connected")
})
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.set("view engine","ejs")
// app.set("views",path.resolve("./view"))
app.set("views",path.resolve('./view'))
app.use("/",serverRouter)
// server
app.use("/api",restrictToLoggedInUserOnly,router)
// router =rotes folder ye router html form sa connected hai agar data form sa yahi par aakar jaata hai
app.use("/",staticRouter)
// ye html direct render for first time
// for all signUp,login
// app.use("/static/")
// **********************
app.use("/user",signUpRouter)
app.use("/file",fileRouter)



app.use("/",deleteSoftRouter1)
app.use("/take",getActiveUsersRouter)
app.use("/regain",restoreUserRouter)



 module.exports=app.listen(PORT,()=>{
    return console.log(`server is connected at port ${PORT}`)
})