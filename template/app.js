const http = require("http");
const url = require("url");
const path = require("path");
const template = require("art-template");
const User = require("./models/user");

require("./models/connect");
// server app
const app = http.createServer();

// add request events to the server app
app.on("request", async (req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  if (req.method == "GET") {
    if (pathname == "/") {
      let users = await User.find();
      let view = path.join(__dirname, "views", "test.art");
      let html = template(view, { users });
      res.end(html);
    }
  }
});
// open request services listening
app.listen(3000);
console.log("server is running at port 3000");
