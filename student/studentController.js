require("./model/connect");
const Student = require("./model/student");

const path = require("path");

const views = path.join(__dirname, "views");

const router = require("router");
const studentController = router();
const template = require("art-template");
const getAllStudents = async (req, res) => {
  let students = await Student.find();
  let view = path.join(views, "students");
  let list = template(view, students);
  res.end(list);
};
const createStudent = async (req, res) => {};
studentController.get("/", getAllStudents);
studentController.post("/", createStudent);

module.exports = studentController;
