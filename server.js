const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');;
const cors = require('cors');
const { mongoURI } = require('./config/keys'); 

const app = express();

app.use(cors());

const users = require('./routes/api/users');

//Set up bodyParser middleware with Express
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000/"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

//Connect to the 
mongoose.connect(
    process.env.mongoURI || "mongodb://localhost/dashboard",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
).then(() => {
    console.log("Connected to MongoDB database! Nice work!")
})
.catch(err => {
    console.log(err);
});

// mongoose.connect(mongoURI, { useNewUrlParser: true })
//     .then(() => {
//         console.log("Connected to MongoDB database! Nice work!")
//     })
//     .catch(err => {
//         console.log(err);
//     });

// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
//     { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
// );

app.use(passport.initialize());

require('./config/passport')(passport);

app.use('/api/users', users);

//Set the port
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log("Server is running on " + port + " , nice work!")
});