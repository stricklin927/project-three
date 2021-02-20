const mongoose = require("mongoose");
const College = require('../models/College');

mongoose.connect(
  process.env.mongoURI || "mongodb://localhost/dashboard"
);

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