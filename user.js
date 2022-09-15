const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  DOB: { type: Date },
  phoneNumber: {
    type: Number,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v);
      },
      message: "{VALUE} is not a valid 10 digit number!",
    },
    // match: /^\d{10}$/,
  },
  addresses: {
    type: [
      {
        address: {
          type: String,
        },
      },
    ],
  },
});

module.exports = mongoose.model("student", studentSchema);
