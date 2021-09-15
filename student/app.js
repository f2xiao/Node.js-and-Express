const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "/public/list.html"));
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
