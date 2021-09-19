const mongoose = require("mongoose");
// data model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
  },
  age: {
    type: Number,
    min: 18,
    max: 80,
  },
  password: String,
  email: String,
  hobbies: [String],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
