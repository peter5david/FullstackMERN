const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
    name: {
        type:String,
    },
    phone:{
        type:String,
        required:true ,
    },
    email:{
        type:String, 
        required:true ,
    },
    date:{
        type:String,
        required:true ,
    },
    time:{
        type:String, 
        required:true ,
    },
    incident:{
        type:String, 
        required:true ,
    },
    isContacted: {
        type:Boolean,
    }
    });

    
    module.exports = mongoose.model('complaints', userSchema);