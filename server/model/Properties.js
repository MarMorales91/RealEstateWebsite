const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PropertySchema = new Schema({
    address: String,
    state: String,
    zip: Number,
    img: String,
    price: Number,
    bedroom: Number,
    bathroom: Number,
    sqft: Number,
    lotSqft: Number,
    description: String,
    overview: String,
    amenities: [{
        type: String
    }]
})

module.exports = mongoose.model('Properties', PropertySchema);