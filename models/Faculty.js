const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FacultySchema = new Schema(
    {
    fullName: {
      type: String
    },
    Department: {
      type: String
    },
    Title: {
      type: String
    },
    Email: {
      type: String
    },
    OfficeNumber: {
      type: String
    },
    PhoneNumber: {
      type: String
    },
    Image: {
      type: String
    }
  })
  
FacultySchema.methods.lastUpdatedDate = function() {
  this.lastUpdated = Date.now();

  return this.lastUpdated;
};

module.exports = Faculty = mongoose.model('facultys', FacultySchema);
