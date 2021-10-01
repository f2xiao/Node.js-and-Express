const http = require("http");

const template = require("art-template");
const path = require("path");

const views = path.join(__dirname, "views");
const Data = {
  content: "<h1>I am h1 heading</h1>",
  data: { name: "Tom", age: 16 },
  fruits: ["apples", "pear", "coconut"],
};
const users = [
  {
    id: 1,
    name: "Tom",
    age: 20,
    hobbies: ["eat", "gaming"],
  },
  {
    id: 2,
    name: "Pixie",
    age: 7,
    hobbies: ["biting", "playing"],
  },
];
const html1 = template(path.join(views, "test1"), Data);
const html2 = template(path.join(views, "test2"), { users });
// console.log(html);

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(html2);
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
