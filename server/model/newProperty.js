const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const newPropertySchema = new Schema({
    location: {
        address: String,
        zip: Number,
        state: String
    },
    details: {
        price: Number,
        bedroom: Number,
        bathroom: Number,
        sqft: Number,
        lotSqft: Number
    },
    description: String,
    overview: String,
    amenities: [{
        type: String
    }]
})

module.exports = mongoose.model('NewProperty', newPropertySchema);