const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => {
    console.log("successfully connect to the database");
  })
  .catch((error) => {
    console.log(error);
  });

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  hobbies: [String],
  email: String,
  password: String,
});
const User = mongoose.model("user", userSchema);
module.exports = User;
