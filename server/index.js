const express = require("express");
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

// const kittySchema = new mongoose.Schema({
//     name: String
//   });

//   const Kitten = mongoose.model('Kitten', kittySchema);
//   const silence = new Kitten({ name: 'Silence' });
// console.log(silence.name);


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});