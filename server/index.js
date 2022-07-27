const express = require("express");
const mongoose = require('mongoose');
const Properties = require("./model/Properties");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json())

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}


//Code that sends json to from mongodb to react app

app.get('/record', async(req, res)=>{
  const allProperties = await Properties.find({});
  res.json({allProperties});
})

app.post('/record/add', async(req, res)=>{
 res.redirect('http//localhost/3000');
 console.log(req.body)

})






//end



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});