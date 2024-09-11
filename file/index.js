const express=require('express')
const path=require("path")
const multer=require('multer')
const app=express()
const PORT=3000





app.use(express.urlencoded({extended:false}))


app.set("view engine","ejs")
app.set("views",path.resolve('./views'))


const storage=multer.diskStorage({
    destination:function(req,file,cb){
      return cb(null,'./upload')
    },
    filename:function(req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}`)
    }
})
const upload=multer({storage:storage})




  app.get('/',(req,res)=>{
    return res.render("file")
})
app.post("/upload",upload.single("uploadFile"),(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    return res.render("file")
})


app.listen(PORT,()=>{
    return console.log(`server is started at ${PORT}`)
})