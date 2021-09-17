const mongoose = require("mongoose");
// database
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => {
    console.log("connect to the database successfully");
  })
  .catch((error) => {
    console.log("connection failed", error);
  });
