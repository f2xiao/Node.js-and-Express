//require http module
const http = require("http");
//create a server
const app = http.createServer();
const querystring = require("querystring");
//handle requests
app.on("request", (req, res) => {
  res.writeHead(200, {
    "content-type": "text/html",
  });
  if (req.method == "GET") {
    console.log("GET");
  } else if (req.method == "POST") {
    let postData = "";
    req.on("data", (chunk) => {
      console.log(chunk);
      postData += chunk; // receive buffer data stream
    });
    req.on("end", () => {
      console.log(postData); // strig: name=May&email=li%40cc.com
      console.log(querystring.parse(postData));
    });
  }
  if (req.url == "/" || req.url == "home") {
    res.end("<h1>Welcome to the homepage</h1>");
  } else if (req.url == "/list") {
    res.end("welcome to the list page");
  }
});
//listen to port 3000
app.listen(3000);
//message to show the server is running successfully
console.log(
  "server is up and running at post 3000, please use localhost:3000 to check it out"
);
