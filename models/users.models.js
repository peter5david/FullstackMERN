const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
    title: {
        type:String,
    },
    firstname:{
        type:String,
        required:true ,
    },
    lastname:{
        type:String, 
        required:true ,
    },
    email:{
        type:String,
        required:true ,
    },
    address: {
        type:String,
    },
    town: {
        type:String,
    },
    postcode: {
        type:String,
    },
    phonenumber: {
        type:String,
    },
    password:{
        type:String, 
        required:true ,
    },
    access: {
        type:String,
    },
    active: {
        type:Boolean,
    }
    });

    
    module.exports = mongoose.model('users', userSchema);