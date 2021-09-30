const http = require("http");
const url = require("url");
const path = require("path");
const template = require("art-template");
const User = require("./models/user");
const serveStatic = require("serve-static");
const dateformat = require("dateformat");

require("./models/connect");

const serve = serveStatic(path.join(__dirname, "public"));
// server app
const app = http.createServer(function onRequest(req, res) {
  serve(req, res, () => {}); // use static resources
});

template.defaults.imports.dateformat = dateformat;
// add request events to the server app
app.on("request", async (req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  if (req.method == "GET") {
    if (pathname == "/") {
      let users = await User.find();
      let view = path.join(__dirname, "views", "list.art");
      let html = template(view, { users });
      res.end(html);
    }
  }
});
// open request services listening
app.listen(3000);
console.log("server is running at port 3000");
