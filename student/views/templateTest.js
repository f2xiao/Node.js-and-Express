require("../model/connect");
const Student = require("../model/student");

const path = require("path");

const router = require("router");
const studentController = router();
const template = require("art-template");
Student.find()
  .then((data) => {
    console.log(data);
    let view = path.join(__dirname, "students");
    let html = template(view, data);
    console.log(html);
  })
  .catch((error) => {
    console.log(error);
  });
