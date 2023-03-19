const { HostAddress } = require('mongodb');
const holidays = require('../models/holidays.models.js');
const logger = require('morgan');
const cors = require('cors');
const app = require('../index.js');
const make = require('../index.js');
const jwt = require('jsonwebtoken');
 

// add new holiday request

exports.create = function(req, res) {

let holidayfrom = req.params.holidayfrom; 
let holidayto = req.params.holidayto;
let firstname = req.params.firstname;
let lastname = req.params.lastname;
let approved = false;


let userModel = new holidays({
    holidayfrom: holidayfrom,
    holidayto: holidayto,
    firstname: firstname,
    lastname: lastname,
    approved: approved,
});

    userModel.save()
    .then ((holidays) =>{
    })
    .catch((err)=>{
        console.log(err);
res.status(500).send({message: "Some error occurred whilecreating."});
    })

};

// display all holiday requests
exports.findAll = function(req, res) {
    holidays.find()
        .then ((holidays)=>{
            res.send(holidays); 
    console.log(holidays);
        })
        .catch ((err)  => {
            console.log(err);  
    res.status(500).send({message: "Some error occurred while retrieving blogs"});
        } )};


 // Approve holiday requests
exports.isApproved = function(req, res) {
    const holiday = req.params.holiday;
    console.log(holiday)
    holidays.updateOne({_id: holiday},{$set:{approved:true}})
        .then ((holidays)=>{
            res.send(holidays); 
    console.log(holidays);
        })
        .catch ((err)  => {
            console.log(err);  
    res.status(500).send({message: "Some error occurred while retrieving "});
        } )};


 // decline holiday request
 exports.isDeclined = function(req, res) {
    const holiday = req.params.holiday;
    console.log(holiday)
    holidays.updateOne({_id: holiday},{$set:{approved:false}})
        .then ((holidays)=>{
            res.send(holidays); 
    console.log(holidays);
        })
        .catch ((err)  => {
            console.log(err);  
    res.status(500).send({message: "Some error occurred while retrieving "});
        } )};


// display all approved holiday
exports.findAllApproved = function(req, res) {
    holidays.find({approved : true})
        .then ((holidays)=>{
            res.send(holidays); 
    console.log(holidays);
        })
        .catch ((err)  => {
            console.log(err);  
    res.status(500).send({message: "Some error occurred while retrieving blogs"});
        } )};
