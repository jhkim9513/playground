const promiseResolve = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("good");
  }, 2000);
});

// console.log(promiseResolve); // Promise { <pending> }
// promiseResolve.then((data) =>
//   console.log(`data : ${data}, promiseResolve : ${promiseResolve}`)
// ); // 2초뒤 data : good, promiseResolve : [object Promise]

const promiseReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("error"));
  }, 2000);
});

// console.log(promiseReject); // Promise { <pending> }
// promiseReject.then((data) =>
//   console.log(`data : ${data}, promiseReject : ${promiseReject}`)
// ); // 2초뒤 UnhandledPromiseRejectionWarning: Error: error

promiseResolve
  .then((result) => {
    console.log(result);
  })
  .catch(console.log)
  .finally(() => {
    console.log("endTEST");
    console.log("test3");
  });
