const mongoose = require("mongoose");
const Faculty = require("../models/Faculty");

mongoose.connect(
  process.env.mongoURI || "mongodb://localhost/dashboard"
);

const seedOne = [
    {
        firstName: "Becky",
        lastName: "Adjunct",
        Department: "Chemical Engineering"
    },
     {
         firstName: "Bill",
         lastName: "Baggins",
         Department: "Architecture"
     },
     {
         firstName: "Greg",
         lastName: "Gandalf",
         Department: "Game Design"
     },
     {
         firstName: "John",
         lastName: "Snow",
         Department: "Graphic Design"
     },
     {
         firstName: "Dana",
         lastName: "Scully",
         Department: "Nursing"
     },
     {
         firstName: "Natasha",
         lastName: "Romanoff",
         Department: "Molecular & Cell Biology"
     },
     {
         firstName: "Mulder",
         lastName: "Fox",
         Department: "Physics"
     },
     {
         firstName: "Sarah",
         lastName: "Connor",
         Department: "Psychology"
     },
     {
         firstName: "Angela",
         lastName: "Ramonda",
         Department: "Media Communication"
     },
     {
         firstName: "Nelson",
         lastName: "Babbage",
         Department: "Computer Science"
     },
     {
         firstName: "Marya",
         lastName: "Jane",
         Department: "Chemical Biology"
     },
     {
         firstName: "Jackie",
         lastName: "Brown",
         Department: "Chemistry"
     },
     {
         firstName: "Jane",
         lastName: "Foster",
         Department: "Business Administration"
     }, 
     {
         firstName: "Robin",
         lastName: "Hodd",
         Department: "Finance"
     },
     {
         firstName: "Natalie",
         lastName: "Emmanuel",
         Department: "Information Technology"
    },
    {
         firstName: "Darcy",
         lastName: "Lewis",
         Department: "Biomedical Engineering"
    },
    {
         firstName: "Carl",
         lastName: "Drogo",
         Department: "Electrical Engineering"
    },
    {
         firstName: "Clint",
         lastName: "Barton",
         Department: "Civil Engineering"
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


