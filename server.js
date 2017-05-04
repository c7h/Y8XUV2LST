var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Mongodb
mongoose.connect('mongodb://localhost/seat_reservation')

// Express Framework
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
app.use('/api', require('./routes/api'));


// Start my Server
app.listen(8080);
console.log("test is running....");