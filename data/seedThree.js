const mongoose = require("mongoose");
const College = require('../models/College');

mongoose.connect(
  process.env.mongoURI || "mongodb://localhost/dashboard"
);

const seedThree = [
      {
          name: "Business",
          majors: ["Accounting", "Economics", "Finance", "Management"],
          faculty: [
            {
              fullName: "John Snow",
              Department: "Business",
              Title: "Professor"
            },
            {
              fullName: "Greg Gandalf",
              Department: "Business",
              Title: "Dean"
            },     
          ]
      },
      {
        name: "Science",
        majors: ["Biology", "Physics", "Quantitative Risk Analytics", "Zoology"],
        faculty: [
          {
            fullName: "Jackie Brown",
            Department: "Science",
            Title: "Professor"
          },
          {
            fullName: "Marya Jane",
            Department: "Science",
            Title: "Dean"
          },
        ]
    },
    {
        name: "Computer Science",
        majors: ["Computer Science", "Data Science", "Information Science"],
        faculty: [
          {
            fullName: "Dana Scully",
            Department: "Computer Science",
            Title: "Dean"
          },
          {
            fullName: "Natasha Romanoff",
            Department: "Computer Science",
            Title: "Professor"
          },
        ]
    },
    {
        name: "Medicine",
        majors: ["Global Health", "Nursing", "Veterinary Nursing", "X-Ray Technician"],
        faculty: [
          {
            fullName: "Angela Ramonda",
            Department: "Medicine",
            Title: "Dean"
          },
          {
            fullName: "Babbage Nelson",
            Department: "Medicine",
            Title: "Professor"
          },
        ]
    },
    {
        name: "Social Science",
        majors: ["History", "Urban Planning", "Youth Development"],
        faculty: [
          {
            fullName: "Jane Foster",
            Department: "Social Science",
            Title: "Dean"
          },
          {
            fullName: "Natalie Emmanuel",
            Department: "Art",
            Title: "Professor"
          },
          {
            fullName: "Darcy Lewis",
            Department: "Social Science",
            Title: "Professor"
          },
          {
            fullName: "Carl Drogo",
            Department: "Social Science",
            Title: "Professor"
          },
          {
            fullName: "Clint Barton",
            Department: "Social Science",
            Title: "Professor"
          }
        ]
    },
    {
        name: "Arts",
        majors: ["Journalism", "Linguistics", "Online Teaching", "Rhetoric and Writing", "Literasy", "Spanish", "Theater", "Women's and Gender Studies"],
        faculty: [{
          fullName: "Becky Adjunct",
          Department: "Arts",
          Title: "Dean"
        },
        {
          fullName: "Bill Baggins",
          Department: "Arts",
          Title: "Professor"
        }
      ]
    },
    {
        name: "Education",
        majors: ["K-12 Education"],
        faculty: [
          {
            fullName: "Fox Mulder",
            Department: "Education",
            Title: "Dean"
          },
          {
            fullName: "Sarah Connor",
            Department: "Education",
            Title: "Professor"
          },
        ]
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