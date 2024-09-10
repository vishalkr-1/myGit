const {userDetails}=require('../model/signUp')
const { setUser } = require('../service/auth')
const {v4:uuidv4}=require("uuid")
const bcrypt = require('bcrypt');
const saltRounds = 10;
async function handleSignUp(req, res) {
    const { first_name, email, password } = req.body;
    console.log("first name",first_name)
     try {
         const hashedPassword = await bcrypt.hash(password, saltRounds);
           await userDetails.create({
            first_name,
            email,
            password: hashedPassword
        });
        return res.render("login");
    } catch (error) {
        console.error("Error during signup:", error);
        return res.render('signup', { error: 'An error occurred during signup' });
    }
}
async function handleLogin(req, res) {
    const { email, password } = req.body;

    console.log('Email from request:', email);
    console.log('Password from request:', password);
    
    try {
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

        
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            console.log("Password does not match");
            return res.render('login', {
                error: "Invalid username or password"
            });
        }

      
        const token=setUser(user)
       
        res.cookie('uid', token);

       
        return res.render("home");
    } catch (error) {
        console.error("Error during login:", error);
        return res.render('login', { error: 'An error occurred during login' });
    }
}


module.exports={
    handleSignUp,
    handleLogin
}








