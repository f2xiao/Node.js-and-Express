require("../model/connect");
const Student = require("../model/student");

const router = require("router");
const studentController = router();
const getAllStudents = async (req, res) => {
  let students = await Student.find();
  let list = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>用户列表</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
        </head>
        <body>
            <div class="container">
                <h6>
                    <a href="/add" class="btn btn-primary">添加用户</a>
                </h6>
                <table class="table table-striped table-bordered">
                    <tr>
                        <td>用户名</td>
                        <td>年龄</td>
                        <td>爱好</td>
                        <td>邮箱</td>
                        <td>操作</td>
                    </tr>`;
  students.forEach((item) => {
    list += `<tr>
          <td>${item.name}</td>
          <td>${item.age}</td>
          <td>
         `;
    item.hobbies.forEach((item) => {
      list += `<span>${item}</span>`;
    });

    list += ` </td>
            <td>${item.email}</td>
            <td>
                <a href="/delete?id=${item.id}" class="btn btn-danger btn-xs">删除</a>
                <a href="/modify?id=${item.id}" class="btn btn-success btn-xs">修改</a>
            </td>
        </tr>`;
  });

  list += `</table>
        </div>
    </body>
    </html>`;
  res.end(list);
  next();
};
const createStudent = async (req, res) => {};
studentController.get("/", getAllStudents);
studentController.post("/", createStudent);

module.exports = studentController;
