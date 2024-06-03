const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({


    name: {
        type: String,
        required: true
    },

    userName: {
        type: String,
        required: true,
        unique: true
    },
   
    hash: {
       type: String,
       required: true
    },

    salt: {
       type: String,
       required: true
    }

   
} ,  {timestamps: true});


const authModel = mongoose.model("User" , authSchema);

module.exports = authModel;