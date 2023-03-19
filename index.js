const express = require('express');
const jwt = require('jsonwebtoken');

//for database
const mongo = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const { Int32 } = require("mongodb");
require("dotenv").config();

// declare the controlles 
const users = require('./controllers/users.controller.js');
const holidays = require('./controllers/holidays.controller.js');
const complaints = require('./controllers/complaints.controller.js')

// declare the router for the menu
const Router = express.Router();

const app = express();

app.use(express.static('public'));
app.use(express.json());

const PORT = process.env.PORT || 3007;

//connect to DB
//mongoose.connect(process.env.MONGO_URI,  {
    mongoose.connect('mongodb+srv://peter5david:PaSsT55@hyperion-dev-task55.cgrtdy4.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB connection error", err))

//middleware
app.use(morgan("dev"));
app.use(cors({origin: true, credentials: true}));


// login
app.post('/login',  (req, res) => {
    const username = req.body.newEmail;
    const pass = req.body.newPassword;
    //console.log(`Username: ${username} Password: ${pass}`);
    users.findAllUser(req,res);

});

// ----------------

// add new user
app.post ("/signUpDB/:title/:firstname/:lastname/:email/:password", function (req, res) {
    users.create(req,res); 
 });

// add new complaint
app.post ("/sendComplaint/:name/:phone/:email/:date/:time/:incident", function (req, res) {
    complaints.create(req,res); 
 });

 // add new holiday
app.post ("/holiday/:holidayfrom/:holidayto/:firstname/:lastname", function (req, res) {
    holidays.create(req,res); 
 });


//l list all holidays
app.get ("/holidays/list", function (req, res) {
    holidays.findAll(req,res);
}) ;

// list all staff
app.get ("/allstaff/list", function (req, res) {
    users.findAllStaff(req,res);
}) ;

// list all complaint
app.get ("/complaints/list", function (req, res) {
    complaints.findAllComplaints(req,res);
}) ;

//list all inactive staff
app.get ("/allstaff/inactive", function (req, res) {
    users.findAllInactive(req,res);
}) ;

// list approved holidays
app.get ("/holidays/approved", function (req, res) {
    holidays.findAllApproved(req,res);
}) ;
// list informations from a logged person
app.get ("/staff/loggedin/:email", function (req, res) {
    users.findLoggedIn(req,res);
}) ;

 // update isContacted
 app.put ("/changeIsContacted/:email", function (req, res) {
    complaints.isContacted(req,res);
}) ;

 // update holiday if approved
 app.put ("/changeapproved/:holiday", function (req, res) {
    holidays.isApproved(req,res);
}) ;

 // update staff access
 app.put ("/modifyAccess/:access/:email", function (req, res) {
    users.changeAccess(req,res);
}) ;

 // set user inactive
 app.put ("/setInactive/:user", function (req, res) {
    users.isActive(req,res);
}) ;

 // update holiday if declined
 app.put ("/changedeclined/:holiday", function (req, res) {
    holidays.isDeclined(req,res);
}) ;

// update details
app.put ("/addDetails/:address/:town/:postcode/:phonenumber/:email", function (req, res) {
    users.addDetailsToDB(req,res);
}) ;

// update adress
app.put ("/modifyAddress/:address/:town/:postcode/:email", function (req, res) {
    users.changeAddress(req,res);
}) ;

// update phonenumber
app.put ("/modifyPhonenumber/:phonenumber/:email", function (req, res) {
    users.changePhone(req,res);
}) ;

app.listen(PORT, function() {
    console.log(`Server running on port ${PORT}`);
});
