const express=require('express')
const {connection}=require('./db')
const { userRouter } = require('./routes/user.routes')
const {noteRouter}=require('./routes/notes.routes')
const {auth}=require("./middleWare/auth.middleware")
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())
app.use('/users',userRouter)
app.use(auth)
app.use('/notes',noteRouter)
app.listen(4500,async()=>{
    try{
        await connection
        console.log('db is connected to server')
    }catch(err){
        console.log('db is not connected')
        console.log(err)
    }
    console.log('Server is running on 4500 port')
})
