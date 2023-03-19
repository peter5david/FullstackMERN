const { HostAddress } = require('mongodb');
const complaints = require('../models/complaints.models.js');
const logger = require('morgan');
const cors = require('cors');
const app = require('../index.js');
const make = require('../index.js');
const jwt = require('jsonwebtoken');
 

// Create new complaint

exports.create = function(req, res) {

let name = req.params.name; 
let phone = req.params.phone;
let email = req.params.email;
let date = req.params.date;
let time = req.params.time;
let incident = req.params.incident;


let userModel = new complaints({
    name: name,
    phone: phone,
    email: email,
    date: date,
    time: time,
    incident: incident,
});

    userModel.save()
    .then ((complaints) =>{
       
    })
    .catch((err)=>{
        console.log(err);
res.status(500).send({message: "Some error occurred whilecreating."});
    })

};

// display all complaints
exports.findAllComplaints = function(req, res) {
    complaints.find()
        .then ((complaints)=>{
            res.send(complaints); 
            
    console.log(complaints);
        })
        .catch ((err)  => {
            console.log(err);  
    res.status(500).send({message: "Some error occurred while retrieving blogs"});
        } )};

//mark as contacted
exports.isContacted = function(req, res) {
    const customer = req.params.email;
    console.log(customer)
    complaints.updateOne({email: customer},{$set:{isContacted:true}})
        .then ((complaints)=>{
            res.send(complaints); 
    console.log(complaints);
        })
        .catch ((err)  => {
            console.log(err);  
    res.status(500).send({message: "Some error occurred while retrieving "});
        } )};

