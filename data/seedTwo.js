const mongoose = require("mongoose");
const Donor = require('../models/Donor');

mongoose.connect(
  process.env.mongoURI || "mongodb://localhost/dashboard"
);


const seedTwo = [
    {
        "name": "Bill Entryways",
        "amount": "50000"
    },
     {
         "name": "Elon Musket",
         "amount": "20000"
     },
     {
         "name": "Rosemary Bell",
         "amount": "23000"
     },
     {
         "name": "Elmer Jennings",
         "amount": "2500"
     },
     {
         "name": "Megan Ruth",
         "amount": "26500"
     },
     {
         "name": "Vincent Barret",
         "amount": "15000"
     },
     {
         "name": "Abel Tesfaye",
         "amount": "21000"
     },
     {
         "name": "Ramon Seguro",
         "amount": "19400"
     },
     {
         "name": "Jaques Webster",
         "amount": "30500"
     },
     {
         "name": "Jonathan Kirk",
         "amount": "19500"
     },
     {
         "name": "Amelia Kelly",
         "amount": "15000"
     },
     {
         "name": "Stephanie Allen",
         "amount": "22000"
     },
     {
         "name": "Jeffrey Williams",
         "amount": "16000"
     },
     {
         "name": "Shawn Carter",
         "amount": "60000"
     },
     {
         "name": "Aubrey Graham",
         "amount": "55000"
     },
     {
         "name": "Joseph Adenuga",
         "amount": "42000"
     },
     {
         "name": "Sean Anderson",
         "amount": "46000"
     },
     {
         "name": "Melissa Jefferson",
         "amount": "45000"
     },
]

Donor.remove({})
  .then(() => Donor.collection.insertMany(seedTwo))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

