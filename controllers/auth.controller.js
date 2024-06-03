const authModel = require("../models/auth.model");
const { findOne } = require("../models/url.model");
const {generateHashAndSalt} = require("../services/auth.services")

function showLogInPage(req, res) {
    res.render("login")
}

function showSignUpPage(req, res) {
    res.render("signup")
}

async function handleSignUp(req, res) {

    
   const user =  await authModel.findOne({userName: req.body.email})

    if(user) {
     res.json({error: "this user is already exist "})
    }else{
        const hashAndSalt = generateHashAndSalt(req.body.password)
        const user = await authModel.create({
            name: req.body.name,
            userName: req.body.email,
            hash: hashAndSalt.hash,
            salt: hashAndSalt.salt,
            
        })
    
        res.redirect("/logIn")
    }
   
}

function handleLogIn(req, res) {
     res.redirect("/home/url")
}




module.exports = {showLogInPage, showSignUpPage, handleSignUp, handleLogIn};