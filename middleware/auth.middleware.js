const passport = require("passport")
const passportLocal = require("passport-local").Strategy;
const authModel = require("../models/auth.model")
const {verifyPassword} = require("../services/auth.services.js")

const customFields = {
    usernameField: "email",
    passwordField: "pass"
}

async function verifyCallBack (username , password , done) {
        
    const user = await authModel.findOne({userName: username})

    if(!user){
       return done(null , false)
    }
    
    const hashTrue = verifyPassword(password , user.salt , user.hash )

    if(hashTrue){
        return done(null , user)
    }else {
        return done(null , false)
    }
}

const strategy = new passportLocal(customFields,verifyCallBack)
passport.use(strategy)


passport.serializeUser((user,done) => {
     done(null,user.id)
})

passport.deserializeUser((userId , done) => {
    authModel.findById(userId)
    .then((user) => {
        done(null , user)
    })
    .catch((err) => {
       done(err)
    }

    )
})

































