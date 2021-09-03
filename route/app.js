//require http module
const http = require("http");
const url = require("url");

//create a server
const app = http.createServer();
//handle requests
app.on("request", (req, res) => {
  if (req.method == "GET") {
    //GET request parameters
    //parameters are in the url, needs to require the url module
    // use url.parse to parse the string into objects
    if (req.url != "/favicon.ico") {
      console.log(req.url);
      let { pathname, query } = url.parse(req.url, true);
      //handle different routes
      if (pathname == "/" || pathname == "/index") {
        res.end("Welcome to homepage");
      } else if (pathname == "/list") {
        res.end("welcome to list page");
      } else {
        res.end("sorry not found");
      }
      //this method is not good for getting static resources
      //better to use fs and path modules and check if there is a real file in the app folder to match it instead of listing all cases of the url cases
    }
  } else if (req.method == "POST") {
    //POST request parameters
    //parameters are transmitted inside the header, needs to use data and end event from res
    //once the parameters are sending through the request, it triggers the data event, and the parameters can be accessed through the callback of the data event
    //once the parameters request is done, it triggers the end event
    let postData = "";
    req.on("data", (paramData) => {
      postData += paramData;
    });
    req.on("end", () => {
      console.log(postData);
    });
    res.end("POST");
  }
});

//listen to port to provide services
app.listen(3000);
//message to show if the server is up and running successfully
console.log("server is up nd running at port 3000");
