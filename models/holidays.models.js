const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
    holidayfrom: {
        type:String,
    },
    holidayto:{
        type:String,
        required:true ,
    },
    firstname:{
        type:String, 
        required:true ,
    },
    lastname:{
        type:String,
        required:true ,
    },
    approved:{
        type:Boolean, 
        required:true ,
    }
    });

    
    module.exports = mongoose.model('holidays', userSchema);