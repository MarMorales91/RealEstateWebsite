const mongoose = require('mongoose');
const NewPoperty = require('../model/newProperty');


mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('MONGOE CONNECTION OPEN');
    })
    .catch((err) => {
        console.log("ERROR, Mongo Connection!");
        console.log(err);
    })


const seedDB = async()=>{
    await NewPoperty.deleteMany({});
    const properties = new NewPoperty({
        location: {
            address: "138 W Colorado Ave",
            zip: 91740,
            city: 'Glendora'
        },
        details: {
            price: 1000000,
            bedroom: 3,
            bathroom: 2,
            sqft: 270,
            lotSqft: 350
        },
        description: "Hello World"

    })
    await properties.save();
}


seedDB()


