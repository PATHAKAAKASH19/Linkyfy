const express = require("express");
const router = express();
const {handleHomePage, generateUrl, redirectUrl} = require("../controllers/url.controller");


router.get( "/url",   handleHomePage)

router.post("/url" , generateUrl)

router.get("/:shortId" , redirectUrl)

module.exports = router














