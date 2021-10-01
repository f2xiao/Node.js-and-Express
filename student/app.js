const http = require("http");
const port = 3000;

require("./model/connect");
const Student = require("./model/student");
const studentController = require("./controller/studentController");

const app = http.createServer();

// TODO: routes
const routerObj = require("router");
console.log(routerObj);
const router = routerObj();
// console.log(router);
router.use("/api/v1/students", studentController);

// TODO: static assets

// TODO: model controllers
// TODO: views template
app.on("request", (req, res) => {
  router(req, res, () => {
    console.log("ok");
  });
});
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
