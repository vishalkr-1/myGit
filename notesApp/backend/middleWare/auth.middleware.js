const jwt=require("jsonwebtoken")
const auth=(req,res,next)=>{
    const token=req.headers.authorization
    console.log(token)
    if(token){
    const decoded=jwt.verify(token,"masai")
    console.log(decoded)
    req.body.userID=decoded.userID
    if(decoded){
        next()
    }else{
        res.status(400).send({"msg":"please login first"})
    }
    }else{
        res.status(400).send({"msg":"no token"})
    }

}
module.exports={
    auth
}