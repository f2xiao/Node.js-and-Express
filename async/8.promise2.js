const fs = require("fs");
function P(n) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${n}.txt`, "utf8", (error, result) => {
      resolve(result);
    });
  });
}
P(1)
  .then((r1) => {
    console.log(r1);
    return P(2);
  })
  .then((r2) => {
    console.log(r2);
    return P(3);
  })
  .then((r3) => {
    console.log(r3);
  });
