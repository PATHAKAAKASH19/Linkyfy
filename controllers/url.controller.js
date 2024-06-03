const passport = require("passport")
const urlModel = require("../models/url.model")
const shortId = require("short-unique-id")
const uid = new shortId({ length:10 })

async function generateUrl(req , res) {

   if(!req.body.url) return res.json({err: "no url provided"}) 
   
   const shortUrl =  uid.rnd()
    
   console.log("hello world")
    const urlData = await urlModel.create({
        url: req.body.url,
        shortUrl: shortUrl,
        visitedHistory: [],
       
    })
    
    
    res.json({shortUrl: shortUrl})
}



async function redirectUrl(req , res) {
     
     const shortUrl = req.params.shortId

     if(!shortUrl) return res.json({error: "please provide write url"})

     const urlValue = await urlModel.findOne({shortUrl: shortUrl})

     
     res.redirect(urlValue.url)

}

async function handleHomePage(req , res) {
    // if(req.isAuthenticated()){
        // const allUrl = await urlModel.find( {createdBy: req.user._id})
        res.render("url"  )
      
    // }else{
    //     res.redirect("/signUp")
    // }
    
}




module.exports = {generateUrl , redirectUrl, handleHomePage};








