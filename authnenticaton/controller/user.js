const {userDetails}=require('../model/signUp')
const { setUser } = require('../service/auth')
const {v4:uuidv4}=require("uuid")
async function handleSignUp(req,res){
    const {first_name,email,password}=req.body
    await userDetails.create({
        first_name,
        email,
        password
    })
    return res.render("home")
}
async function handleLogin(req, res) {
    const { email, password } = req.body;
    
    console.log('Email from request:', email);
    console.log('Password from request:', password);
    
    // Find the user with the provided email
    const user = await userDetails.findOne({ email });
    
    if (!user) {
        console.log("No user found with this email");
        return res.render('login', {
            error: "Invalid username or password"
        });
    }
    
    console.log('User from DB:', user);
    console.log('Password from DB:', user.password);

    // Check if the passwords match
    if (user.password !== password) {
        return res.render('login', {
            error: "Invalid username or password"
        });
    }
     const sessionId=uuidv4();
     setUser(sessionId,user)
     res.cookie("uid",sessionId)
     
     
    // Successful login
    return res.render("home");
}
module.exports={
    handleSignUp,
    handleLogin
}