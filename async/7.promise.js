let promise = new Promise((resolve, reject) => {
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
  });
