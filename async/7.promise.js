/* let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve({ name: "Pixie" });
    } else {
      reject("failed");
    }
  }, 2000);
});
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  }); */
const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback("This is my error!", undefined);
    let result = callback(undefined, [1, 4, 7]);
    let error = callback("failed my error", undefined);
    console.log(result);
    console.log("-------------");
    console.log(error);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return error;
  } else {
    return result;
  }
});
/* const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("failed");
    resolve([1, 4, 7]);
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  }); */
