console.log("code starts");
setTimeout(function () {
  console.log("2s after");
}, 2000);
setTimeout(function () {
  console.log("0s after");
}, 0);
console.log("code ends");
