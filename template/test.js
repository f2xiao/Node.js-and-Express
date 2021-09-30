const http = require("http");

const template = require("art-template");
const path = require("path");

const views = path.join(__dirname, "views", "test.art");
const Data = {
  content: "<h1>I am h1 heading</h1>",
  data: { name: "Tom", age: 16 },
  fruits: ["apples", "pear", "coconut"],
};
const html = template(views, Data);
// console.log(html);

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(html);
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
