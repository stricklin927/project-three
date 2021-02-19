const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DonorSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required"
  },
  amount: {
      type: Number,
      required: "Donation amount is required"
  }
});

DonorSchema.methods.lastUpdatedDate = function() {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};


module.exports = Donor = mongoose.model('donors', DonorSchema);

// const Donor = mongoose.model("Donor", DonorSchema);

// module.exports = Donor;
