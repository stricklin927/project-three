const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');;
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

const users = require('./routes/api/users');
const facultyDonors = require('./routes/api/facultyDonors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
  }

mongoose.connect(
    process.env.mongoURI || "mongodb://localhost/dashboard",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
).then(() => {
    console.log("Connected to MongoDB database! Nice work!")
})
.catch(err => {
    console.log(err);
});

app.use(passport.initialize());

require('./config/passport')(passport);

app.use('/api/users', users);
app.use('/api/people', facultyDonors);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log("Server is running on " + port + " , nice work!")
});