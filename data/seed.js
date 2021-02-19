const mongoose = require("mongoose");
const Faculty = require("../models/Faculty");
const Donor = require('../models/Donor');

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.mongoURI || "mongodb://localhost/dashboard"
);

const seedOne = [
    {
        "firstName": "Becky",
        "lastName": "Pedagogy",
        "Department": "Chemical Engineering"
    },
    // {
    //     "firstName": "Joe",
    //     "lastName": "Teacher",
    //     "Department": "Computer Science"
    // },
    // {
    //     "firstName": "Joe",
    //     "lastName": "Teacher",
    //     "Department": "Computer Science"
    // },
    // {
    //     "firstName": "Joe",
    //     "lastName": "Teacher",
    //     "Department": "Computer Science"
    // },
    // {
    //     "firstName": "Joe",
    //     "lastName": "Teacher",
    //     "Department": "Computer Science"
    // },
    // {
    //     "firstName": "Joe",
    //     "lastName": "Teacher",
    //     "Department": "Computer Science"
    // },
    // {
    //     "firstName": "Joe",
    //     "lastName": "Teacher",
    //     "Department": "Computer Science"
    // },
    // {
    //     "firstName": "Joe",
    //     "lastName": "Teacher",
    //     "Department": "Computer Science"
    // },
    // {
    //     "firstName": "Joe",
    //     "lastName": "Teacher",
    //     "Department": "Computer Science"
    // },
    // {
    //     "firstName": "Joe",
    //     "lastName": "Teacher",
    //     "Department": "Computer Science"
    // },
    // {
    //     "firstName": "Joe",
    //     "lastName": "Teacher",
    //     "Department": "Computer Science"
    // },
    // {
    //     "firstName": "Joe",
    //     "lastName": "Teacher",
    //     "Department": "Computer Science"
    // },
    // {
    //     "firstName": "Joe",
    //     "lastName": "Teacher",
    //     "Department": "Computer Science"
    // },
]



Faculty.remove({})
  .then(() => Faculty.collection.insertMany(seedOne))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


const seedTwo = [
    {
        "name": "Bill Entryways",
        "amount": "50000"
    },
    // {
    //     "name": "Elon Musket",
    //     "amount": "20000"
    // },
    // {
    //     "name": "Elon Musket",
    //     "amount": "20000"
    // },
    // {
    //     "name": "Elon Musket",
    //     "amount": "20000"
    // },
    // {
    //     "name": "Elon Musket",
    //     "amount": "20000"
    // },
    // {
    //     "name": "Elon Musket",
    //     "amount": "20000"
    // },
    // {
    //     "name": "Elon Musket",
    //     "amount": "20000"
    // },
    // {
    //     "name": "Elon Musket",
    //     "amount": "20000"
    // },
    // {
    //     "name": "Elon Musket",
    //     "amount": "20000"
    // },
    // {
    //     "name": "Elon Musket",
    //     "amount": "20000"
    // },
    // {
    //     "name": "Elon Musket",
    //     "amount": "20000"
    // },
    // {
    //     "name": "Elon Musket",
    //     "amount": "20000"
    // },
    // {
    //     "name": "Elon Musket",
    //     "amount": "20000"
    // },
    // {
    //     "name": "Elon Musket",
    //     "amount": "20000"
    // },
    // {
    //     "name": "Elon Musket",
    //     "amount": "20000"
    // },
    // {
    //     "name": "Elon Musket",
    //     "amount": "20000"
    // },
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