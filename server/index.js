const express = require("express");
const mongoose = require('mongoose');
const newProperty = require("./model/newProperty");

const PORT = process.env.PORT || 3001;

const app = express();


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}


//Code that sends json to from mongodb to react app
app.get("/api", async(req, res) => {
    const property = await newProperty.find({})
    console.log(property)
    res.json({property});
});
//end
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});