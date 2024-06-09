const express = require("express");
const router = express.Router();
const {showLogInPage, showSignUpPage, handleLogIn , handleSignUp , handleLogOut} = require("../controllers/auth.controller");
const passport = require("passport")


router.get("/login" , showLogInPage)

router.post("/login" , passport.authenticate("local" , {failureRedirect: "/logIn"}),handleLogIn)

router.get("/signup" , showSignUpPage)

router.post("/signup", handleSignUp)

router.post("/logout", handleLogOut)
module.exports = router