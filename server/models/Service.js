const mongoose = require('mongoose');

// setting up variables in schema
const serviceSchema = new mongoose.Schema({
    name: String,
    type: String,
    address: String,
    coordinates: {
        lat: Number,
        lng: Number
    }
});

module.exports = mongoose.model('Service', serviceSchema);