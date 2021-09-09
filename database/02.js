//import mongoose
const mongoose = require("mongoose");

//connect to mongodb databaase
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("connect to the database successfully"))
  .catch((error) => console.log(error, "sth is wrong"));

//create Schema for courses collection
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean,
});

//create collection called courses
const Course = mongoose.model("Course", courseSchema);

//create a document
const course = new Course({
  name: "node.js basics",
  author: "heima",
  isPublished: true,
});

//save the document to the database collection
course.save();
