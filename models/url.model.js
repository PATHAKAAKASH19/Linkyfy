const mongoose = require("mongoose");


const urlSchema = new mongoose.Schema({

    url: {
        type: String,
        required: true
    },

    shortUrl: {
        type: String,
        required: true,
        unique: true
    },

    visitedHistory: [{timestamp : {type: Number}}],

    createdBy: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "User"
    }
}, {timestamps: true});


const urlModel = mongoose.model("url" , urlSchema);

module.exports = urlModel;


