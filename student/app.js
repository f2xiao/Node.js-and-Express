const express = require("express");
const app = express();
const path = require("path");
const querystring = require("querystring");
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.post("/add", (req, res) => {
  let postData = "";
  req.on("data", (chunk) => {
    postData += chunk;
  });
  req.on("end", () => {
    console.log(querystring.parse(postData));
  });
  res.end(querystring.parse(postData));
  // res.sendFile(path.join(__dirname, "/views/list.html"));
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
