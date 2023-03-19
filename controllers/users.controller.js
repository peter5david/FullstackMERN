const { HostAddress } = require('mongodb');
const users = require('../models/users.models.js');
const logger = require('morgan');
const cors = require('cors');
const app = require('../index.js');
const make = require('../index.js');
const jwt = require('jsonwebtoken');
 

// Add new user to the database all users is getting active and with Staff status when sign up
// when they are signed up, the admin can change the access if someone is manager or admin

exports.create = function(req, res) {

let title = req.params.title; 
let firstname = req.params.firstname;
let lastname = req.params.lastname;
let email = req.params.email;
let password = req.params.password;
let access = "Staff";
let active = true;


let userModel = new users({
    title: title,
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    access: access,
    active: active,
});

    userModel.save()
    .then ((users) =>{
    })
    .catch((err)=>{
        console.log(err);
res.status(500).send({message: "Some error occurred whilecreating."});
    })

};

// sign in, display all users where the email, pass is matching and the status is true(active), if the details are correct make a token 
exports.findAllUser = function(req, res) {
    let user = req.body;
    let email = user.newEmail;
    let pass = user.newPassword;
    users.findOne({email: email, password: pass, active: true})
        .then ((user)=>{
           if (user) {
            const token = jwt.sign(JSON.stringify(user.id), "thisIsSecret", {algorithm: "HS256"});
            
            res.send({"user":user, "token":token}) ;
            
            }else {
                res.send(null)
            }
        })
        .catch ((err)  => {
            console.log(err);  
    res.status(500).send({message: "Some error occurred while retrieving blogs"});
        } )};

// add details to user
exports.addDetailsToDB = function(req, res) {
    let address = req.params.address;
    let town = req.params.town;
    let postcode = req.params.postcode;
    let phonenumber = req.params.phonenumber;
    let email = req.params.email;
    users.updateOne({email: email},{$set: {address: address, town: town, postcode: postcode, phonenumber : phonenumber}})
    .then ((user)=>{
        res.send(user); 
            console.log(user);
    })
    .catch ((err)  => {
        console.log(err);  
    res.status(500).send({message: "Some error occurred while retrieving "});
    } )};

// display all staff who is active (status is true)
exports.findAllStaff = function(req, res) {
    users.find({active: true})
        .then ((users)=>{
            res.send(users); 
    console.log(users);
        })
        .catch ((err)  => {
            console.log(err);  
    res.status(500).send({message: "Some error occurred while retrieving blogs"});
        } )};

// change status from active to inactive (status set to false)
exports.isActive = function(req, res) {
            const user = req.params.user;
            //console.log(user)
            users.updateOne({_id: user},{$set:{active:false}})
                .then ((users)=>{
                    res.send(users); 
            console.log(users);
                })
                .catch ((err)  => {
                    console.log(err);  
            res.status(500).send({message: "Some error occurred while retrieving "});
                } )};

 // display all inactive staff
exports.findAllInactive = function(req, res) {
    users.find({active: false})
        .then ((users)=>{
            res.send(users); 
            //console.log(res);
    console.log(users);
        })
        .catch ((err)  => {
            console.log(err);  
    res.status(500).send({message: "Some error occurred while retrieving blogs"});
        } )};

// Change address
exports.changeAddress = function(req, res) {
    let address = req.params.address;
    let town = req.params.town;
    let postcode = req.params.postcode;
    let email = req.params.email;
    users.updateOne({email: email},{$set: {address: address, town: town, postcode: postcode}})
    .then ((user)=>{
        res.send(user); 
            console.log(user);
    })
    .catch ((err)  => {
        console.log(err);  
    res.status(500).send({message: "Some error occurred while retrieving "});
    } )};

// Change phonenumber
exports.changePhone = function(req, res) {
    let phone = req.params.phonenumber;
    let email = req.params.email;
    users.updateOne({email: email},{$set: {phonenumber: phone}})
    .then ((user)=>{
        res.send(user); 
            console.log(user);
    })
    .catch ((err)  => {
        console.log(err);  
    res.status(500).send({message: "Some error occurred while retrieving "});
    } )};

// display logged in staff
exports.findLoggedIn = function(req, res) {
    let email = req.params.email
    users.find({email:email})
        .then ((users)=>{
            res.send(users); 
            //console.log(res);
    console.log(users);
        })
        .catch ((err)  => {
            console.log(err);  
    res.status(500).send({message: "Some error occurred while retrieving blogs"});
        } )};

// check if the user is active or inactive
 exports.isActive = function(req, res) {
            const user = req.params.user;
            //console.log(user)
            users.updateOne({_id: user},{$set:{active:false}})
                .then ((users)=>{
                    res.send(users); 
            console.log(users);
                })
                .catch ((err)  => {
                    console.log(err);  
            res.status(500).send({message: "Some error occurred while retrieving "});
                } )};

// Change access (Staff, Manager or Admin)
 exports.changeAccess = function(req, res) {
    const email = req.params.email;
    const access = req.params.access
    users.updateOne({email: email},{$set:{access:access}})
        .then ((users)=>{
            res.send(users); 
    console.log(users);
        })
        .catch ((err)  => {
            console.log(err);  
    res.status(500).send({message: "Some error occurred while retrieving "});
        } )};
