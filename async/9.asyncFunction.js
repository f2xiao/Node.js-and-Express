const fs = require("fs");
// const Fn = async () => {
//   console.log("async Fn is being called");
// };

// Fn();
function P(n) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${n}.txt`, "utf8", (error, result) => {
      resolve(result);
    });
  });
}

async function run() {
  let r1 = await P(1);
  let r2 = await P(2);
  let r3 = await P(3);
  console.log(r1);
  console.log(r2);
  console.log(r3);
}
run();
