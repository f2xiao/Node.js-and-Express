const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const User = require("./model/user");

const app = http.createServer();
console.log(User);
app.on("request", (req, res) => {
  if (req.method == "GET") {
    res.end("Hello");
  } else if (req.method == "POST") {
  } else {
    res.end("Not found");
  }
});
app.listen(port, hostname, () => {
  console.log(`server is running at http://${hostname}:${port}/`);
});
