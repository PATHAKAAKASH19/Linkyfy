const crypto = require("crypto");



function generateHashAndSalt(password) {
    const salt = crypto.randomBytes(32).toString("hex")
    const hash= crypto.pbkdf2Sync(password , salt , 1000 , 64, "sha512").toString("hex")

    return {
        hash: hash,
        salt: salt
    }
}

function verifyPassword(password , salt, hash){
   
    const hashValue = crypto.pbkdf2Sync(password , salt , 1000, 64, "sha512" ).toString("hex")
    return hash === hashValue

}





module.exports = {verifyPassword , generateHashAndSalt};