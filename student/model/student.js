const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  college: String,
  email: String,
  hobbies: [String],
  enterDate: {
    type: Date,
    default: Date.now(),
  },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
