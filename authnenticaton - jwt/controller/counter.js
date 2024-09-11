const {user}=require('../model/useSchema')
async function handleCounter(req,res){
    const body=req.body
    await user.create({
        first_name:body.first_name,
        last_name:body.last_name,
        age:body.age
})
    return res.status(200).render("home",{
        body:body
    })
}


module.exports={
    handleCounter
}