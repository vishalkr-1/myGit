
const express=require('express')
const mongoose=require('mongoose')
const app=express()
const port=5000
app.use(express.json())
const userSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
        
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true,
        
    }
   

}

)
const user=mongoose.model("user",userSchema)
mongoose.connect('mongodb://127.0.0.1:27017/public_database')
.then(()=>{
    console.log('mongo db connected')

}).catch((err)=>{
   console.log(err)
})

app.get("/api",(req,res)=>{
    return res.send("home page")
})
app.get("/api/users",async(req,res)=>{
    const allDbUsers=await user.find({})

    return res.json(allDbUsers)
})
app.post("/api/users",async(req,res)=>{
    const body=req.body
    const result=await user.create({
        first_name: body.first_name,
        last_name:body.last_name,
        email:body.email,
        gender:body.gender,
        
    }).then((res)=>{
        return res.status(201).json({msg:"success"})
    }).catch((err)=>{
        return err
        
    })
    

})
app.listen(port,()=>{
    console.log(`server started at ${port}`)
})