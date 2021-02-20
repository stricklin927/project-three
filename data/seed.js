const mongoose = require("mongoose");
const Faculty = require("../models/Faculty");

mongoose.connect(
  process.env.mongoURI || "mongodb://localhost/dashboard"
);

const seedOne = [
    {
        firstName: "Becky",
        lastName: "Adjunct",
        Department: "Art",
        Title: "Dean"
    },
     {
         firstName: "Bill",
         lastName: "Baggins",
         Department: "Art",
         Title: "Professor"
     },
     {
         firstName: "Greg",
         lastName: "Gandalf",
         Department: "Business",
         Title: "Dean"
     },
     {
         firstName: "John",
         lastName: "Snow",
         Department: "Business",
         Title: "Professor"
     },
     {
         firstName: "Dana",
         lastName: "Scully",
         Department: "Computer Science",
         Title: "Dean"
     },
     {
         firstName: "Natasha",
         lastName: "Romanoff",
         Department: "Computer Science",
         Title: "Professor"
     },
     {
         firstName: "Mulder",
         lastName: "Fox",
         Department: "Education",
         Title: "Dean"
     },
     {
         firstName: "Sarah",
         lastName: "Connor",
         Department: "Education",
         Title: "Professor"
     },
     {
         firstName: "Angela",
         lastName: "Ramonda",
         Department: "Medicine",
         Title: "Dean"
     },
     {
         firstName: "Nelson",
         lastName: "Babbage",
         Department: "Medicine",
         Title: "Professor"
     },
     {
         firstName: "Marya",
         lastName: "Jane",
         Department: "Science",
         Title: "Dean"
     },
     {
         firstName: "Jackie",
         lastName: "Brown",
         Department: "Science",
         Title: "Professor"
     },
     {
         firstName: "Jane",
         lastName: "Foster",
         Department: "Social Science",
         Title: "Dean"
     }, 
     {
         firstName: "Robin",
         lastName: "Hodd",
         Department: "Social Science",
         Title: "Professor"
     },
     {
         firstName: "Natalie",
         lastName: "Emmanuel",
         Department: "Social Science",
         Title: "Professor"
    },
    {
         firstName: "Darcy",
         lastName: "Lewis",
         Department: "Social Science",
         Title: "Professor"
    },
    {
         firstName: "Carl",
         lastName: "Drogo",
         Department: "Social Science",
         Title: "Professor"
    },
    {
         firstName: "Clint",
         lastName: "Barton",
         Department: "Social Science",
         Title: "Professor"
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


