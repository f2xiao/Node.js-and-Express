const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => {
    console.log("Successfully connect to the database");
  })
  .catch((error) => {
    console.log(error);
  });
