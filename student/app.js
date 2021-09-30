const http = require("http");
const app = http.createServer();
const port = 3000;
require("./model/connect");
app.on("request", (req, res) => {
  res.end("ok");
});
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
