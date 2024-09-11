const { body, validationResult } = require('express-validator');
const { userDetails } = require('../model/signUp');
const { setUser } = require('../service/auth');

const bcrypt = require('bcrypt');
const saltRounds = 10;

// Validation Middleware for SignUp
const validateSignUp = [
    body('first_name')
    .isLength({ min: 5 }).withMessage('First name must be at least 5 characters long')
    .matches(/^[a-zA-Z]/).withMessage('First name must not start with a special character'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
        .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
        .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
        .matches(/\d/).withMessage('Password must contain at least one digit')
        .matches(/[\W_]/).withMessage('Password must contain at least one special character'),
];

// Validation Middleware for Login
const validateLogin = [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').not().isEmpty().withMessage('Password cannot be empty'),
];

// Handle SignUp with Validation
async function handleSignUp(req, res) {
    const errors = validationResult(req);
    console.log(req)
    if (!errors.isEmpty()) {
        return res.status(400).render('signup', { error: errors.array()[0].msg });
    }

    const { first_name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        await userDetails.create({
            first_name,
            email,
            password: hashedPassword,
        });

        return res.status(200).render("login");
    } catch (error) {
        console.error("Error during signup:", error);
        return res.status(400).render('signup', { error: 'An error occurred during signup' });
    }
}

// Handle Login with Validation
async function handleLogin(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render('login', { error: errors.array()[0].msg });
    }

    const { email, password } = req.body;

    try {
        const user = await userDetails.findOne({ email });

        if (!user) {
            return res.status(400).render('login', { error: "Invalid username or password" });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).render('login', { error: "Invalid username or password" });
        }

        const token = setUser(user);
        res.cookie('uid', token);

        return res.status(200).render("home");
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(400).render('login', { error: 'An error occurred during login' });
    }
}

module.exports = {
    handleSignUp,
    handleLogin,
    validateSignUp,
    validateLogin,
};
