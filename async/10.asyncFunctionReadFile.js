//fs module
const fs = require("fs");
const util = require("util");
//promisify module
const promisify = util.promisify;
//promisify readFile so readFile return a promise object now
const readFile = promisify(fs.readFile);
//async function to read all files
async function run() {
  let r1 = await readFile("./1.txt", "utf8");
  let r2 = await readFile("./2.txt", "utf8");
  let r3 = await readFile("./3.txt", "utf8");
  console.log(r1);
  console.log(r2);
  console.log(r3);
}
run();
