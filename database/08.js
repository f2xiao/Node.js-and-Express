//import mongoose
const mongoose = require("mongoose");
const { isError } = require("util");

//connect to mongodb databaase
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("connect to the database successfully"))
  .catch((error) => console.log(error, "sth is wrong"));

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  author: {
    type: String,
    validate: {
      validator: (v) => v && v.length > 4,
      message: "length needs to be at least 4",
    },
  },
});

//create Schema for posts collection
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please include the title"],
    minlength: [2, "Title length should be at least 2"],
    maxlength: [50, "Title length should be at most 5"],
    trim: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    enum: ["html", "css", "javaScript", "nodejs"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

//create collection called courses
const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);
// User.create({
//   name: "itheima",
//   age: 18,
//   author: "Pixie",
// });
/* Post.create({
  title: "Day 02",
  age: 18,
  category: "nodejs",
  author: "613fbecaaf7d8067b40bcc31",
})
  .then((doc) => console.log(doc))
  .catch((error) => console.log(error)); */
Post.find()
  .populate("author")
  .then((doc) => console.log(doc))
  .catch((error) => console.log(error));
