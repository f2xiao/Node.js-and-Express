//import mongoose
const mongoose = require("mongoose");

//connect to mongodb databaase
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("connect to the database successfully"))
  .catch((error) => console.log(error, "sth is wrong"));

//create Schema for users collection
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  hobbies: [String],
  email: String,
  password: String,
});

//create collection called courses
const User = mongoose.model("User", userSchema);

//read all documents from the Collection users in the db
/* User.find()
  .then((doc) => console.log(doc))
  .catch((error) => console.log(error)); */

/*  User.findOne()
  .then((doc) => console.log(doc))
  .catch((error) => console.log(error)); */
User.find()
  .select(["name", "email", "-_id"])
  .then((doc) => console.log(doc))
  .catch((error) => {
    console.log(error);
  });

User.find()
  .sort("age")
  .then((doc) => {
    console.log(doc);
  })
  .catch((error) => {
    console.log(error);
  });
User.find()
  .select(["age"])
  .sort("-age")
  .then((doc) => {
    console.log(doc);
  })
  .catch((error) => {
    console.log(error);
  });
