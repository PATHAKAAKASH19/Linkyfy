const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoStore = require("connect-mongo");
const path = require("path");

const authRoute = require("./routes/auth.route");
const urlRoute = require("./routes/url.route")
const mongoose = require("mongoose")



const app = express();
const PORT = 3000;



// database start

mongoose.connect("mongodb://localhost:27017/shortly3").then(() => {console.log("database is on")})
// template engine setup
app.set("view engine" , "ejs" )
app.set("views" , path.resolve("./views") )


// middlewares
app.use(express.static("./public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))



// express-sessionconst urlValue = await urlModel.findOne({shortUrl: shortUrl})

     
app.use(session({
    saveUninitialized: true,
    resave: false,
    secret: "akashpathak",
    store:  mongoStore.create({
      mongoUrl: "mongodb://localhost:27017/shortly3",
      collectionName: "userSession"
    })
}))

require("./middleware/auth.middleware")

app.use(passport.initialize())
app.use(passport.session())

app.use("/" , authRoute)
app.use("/home" , urlRoute)

app.listen(PORT , (server) => {
    console.log("server is live now")
})