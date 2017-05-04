var restful = require('node-restful');
var mongoose = restful.mongoose;

// Payment Schema

var paymentSchema = new mongoose.Schema({
	amount : Number,
	paid : Boolean
});

// Flight and Seat Schema

var classSchema = new mongoose.Schema({
	name: String,
	price_multiplier : Number,
});

var seatSchema = new mongoose.Schema({
	row : Number,
	number: String,
	class: {type: classSchema}
});

var flightSchema = new mongoose.Schema({
	flight_no: String,
	plane_model: String,
	seats: [seatSchema]
});

// Reservation Schema

var passengerSchema = new mongoose.Schema({
	passport_no: String,
	name : String
});

var reservationSchema = new mongoose.Schema({
	seat: Number,
	created_at : { type : Date, default: Date.now },
	lifetime : {type: Number, default: 60*3},
	payment : {type: paymentSchema},
	passenger : [passengerSchema],
	seat : {type: seatSchema}
});

// declare Models
var reservationModel = restful.model('Reservations', reservationSchema);
var flightModel = restful.model('Flights', flightSchema);

module.exports = {
	reservationModel,
	flightModel
};
