var express = require('express');
var router = express.Router();

// Models
var models = require('../models/schemas')

var Reservation = models.reservationModel;
var Flight = models.flightModel;


// Routes
Flight.methods(['get', 'post']);
Flight.register(router, '/flights');

Reservation.methods(['get', 'post', 'put']);
Reservation.register(router, '/reservations');


// Export Router
module.exports = router;