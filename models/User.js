const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },

  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },

  userType: {
    type: String,
    trim: true,
    required: "User type is Required"
  },

  Faculty: {
    type: String,
    trim: true,
    required: "Faculty is Required"
  },
  
  Department: {
    type: String,
    trim: true,
    required: "Department is Required"
  },

  Major: {
    type: String,
    trim: true,
    required: "Major is Required"
  },

  username: {
    type: String,
    trim: true,
    required: "username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  mobile: {
    trim: true,
    unique: [true, "Mobile Number already available"],
    type: String,
    required: [true, "Mobile Number is required"],
    validate(value) {
      if (value.length !== 10) {
        throw new Error("Mobile Number is invalid!");
      }
    }
  },

  userCreated: {
    type: Date,
    default: Date.now
  },

  lastUpdated: Date,

  fullName: String
});

UserSchema.methods.setFullName = function() {
  this.fullName = `${this.firstName} ${this.lastName}`;

  return this.fullName;
};

UserSchema.methods.lastUpdatedDate = function() {
  this.lastUpdated = Date.now();

  return this.lastUpdated;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
