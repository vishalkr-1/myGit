const express=require("express")
const mongoose=require("mongoose")

const app=express()
const port=3000
mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=>{
    console.log("mongo connected")
}).catch((err)=>{
    console.log(err)
})
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String

    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    gender:{
        type:String
    }
},{timestamps:true})
const User=mongoose.model('user',userSchema)

 app.use(express.urlencoded({extended:false}))
//  middle ware data ko object banaya aur body ko diya
// mobile
app.get("/api/users",async(req,res)=>{
    const allDbUsers=await User.find({});
    return res.json(allDbUsers)
})
// mobile 
app.get("/users", async(req, res) => {
    const allDbUsers=await User.find({});
    const html = `
        <ul>
            ${allDbUsers.map(el => `<li>${el.firstName}</li>`).join('')}
        </ul>
    `;
    res.send(html);
});
app.post("/api/users",async(req,res)=>{
    const body=req.body
   const result= await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender
    })
   return res.status(201).json({msg:"success"})
   
        
})
app.get("/api/users/:id",async(req,res)=>{
     const user=await User.findById(req.params.id)
     return res.json(user)
})
app.patch("/api/users/:id", async(req, res) => {
   await User.findByIdAndUpdate(req.params.id,{lastName:"changed"});
   return res.json(
    {status:"success"}
   );
});

app.delete("/api/users/:id", async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json(
     {status:"success"}
    );
 });
 
app.listen(port,()=>{
    console.log(`server is started at${port}`)

})