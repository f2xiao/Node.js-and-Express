//Synchronous: can get the result from keyword return
function sum(n1, n2) {
  return n1 + n2;
}

const result = sum(10, 20);
console.log(result);

//Asynchronous: cannot get the result from keyword return
function getMsg(callback) {
  // callback is xingcan(argument)
  setTimeout(function () {
    callback({
      msg: "Hello node.js",
    }); // {msg: "Hello node.js"} is shican(parameter)
  }, 2000); // return undefined by default if there's no return
}

let msg;
getMsg(function (data) {
  msg = data;
  console.log(msg);
});
console.log(msg);
