const mongoose = require("mongoose");
const Faculty = require("../models/Faculty");
const Donor = require('../models/Donor');
const College = require('../models/College');

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
     {
         "firstName": "Bill",
         "lastName": "Baggins",
         "Department": "Architecture"
     },
     {
         "firstName": "Greg",
         "lastName": "Gandalf",
         "Department": "Game Design"
     },
     {
         "firstName": "John",
         "lastName": "Snow",
         "Department": "Graphic Design"
     },
     {
         "firstName": "Dana",
         "lastName": "Scully",
         "Department": "Nursing"
     },
     {
         "firstName": "Natasha",
         "lastName": "Romanoff",
         "Department": "Molecular & Cell Biology"
     },
     {
         "firstName": "Mulder",
         "lastName": "Fox",
         "Department": "Physics"
     },
     {
         "firstName": "Sarah",
         "lastName": "Connor",
         "Department": "Psychology"
     },
     {
         "firstName": "Angela",
         "lastName": "Ramonda",
         "Department": "Media Communication"
     },
     {
         "firstName": "Nelson",
         "lastName": "Babbage",
         "Department": "Computer Science"
     },
     {
         "firstName": "Marya",
         "lastName": "Jane",
         "Department": "Chemical Biology"
     },
     {
         "firstName": "Jackie",
         "lastName": "Brown",
         "Department": "Chemistry"
     },
     {
         "firstName": "Jane",
         "lastName": "Foster",
         "Department": "Business Administration"
     }, 
     {
         "firstName": "Robin",
         "lastName": "Hodd",
         "Department": "Finance"
     },
     {
         "firstName": "Natalie",
         "lastName": "Emmanuel",
         "Department": "Information Technology"
    },
    {
         "firstName": "Darcy",
         "lastName": "Lewis",
         "Department": "Biomedical Engineering"
    },
    {
         "firstName": "Carl",
         "lastName": "Drogo",
         "Department": "Electrical Engineering"
    },
    {
         "firstName": "Clint",
         "lastName": "Barton",
         "Department": "Civil Engineering"
    },
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

  const seedThree = [
      {
          name: "Business",
          majors: ["Accounting", "Economics", "Finance", "Management"]
      },
      {
        name: "Science",
        majors: ["Biology", "Physics", "Quantitative Risk Analytics", "Zoology"]
    },
    {
        name: "Computer Science",
        majors: ["Computer Science", "Data Science", "Information Science"]
    },
    {
        name: "Medicine",
        majors: ["Global Health", "Nursing", "Veterinary Nursing", "X-Ray Technician"]
    },
    {
        name: "Social Science",
        majors: ["History", "Urban Planning", "Youth Development"]
    },
    {
        name: "Arts",
        majors: ["Journalism", "Linguistics", "Online Teaching", "Rhetoric and Writing", "Literasy", "Spanish", "Theater", "Women's and Gender Studies"]
    },
    {
        name: "Education",
        majors: ["K-12 Education"]
    },
  ]

  College.remove({})
  .then(() => College.collection.insertMany(seedThree))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });