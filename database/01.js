//import mongoose
const mongoose = require("mongoose");

//connect to mongodb databaase
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("connect to the database successfully"))
  .catch((error) => console.log(error, "sth is wrong"));
