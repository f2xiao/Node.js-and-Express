const mongoose = require("mongoose");
// create collection rules
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  gender: String,
  email: String,
  hobbies: [String],
  college: String,
  enterDate: {
    type: Date,
    default: Date.now(),
  },
});

// create collection
mongoose.model("Student", studentSchema);
