function getData(callback) {
  callback("123");
  //callback is a function being passed to function getData as a parameter
  //more parameters can also being passed to callback function while callback is being passed
}

getData(function (n) {
  console.log("callback function is being called");
  console.log(n);
});
