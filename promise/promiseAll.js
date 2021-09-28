const promise1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("one");
    }, 2000);
  });
};

const promise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("two");
    }, 1000);
  });
};

const promise3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("three");
    }, 3000);
  });
};

console.time("time");
Promise.all([promise1(), promise2(), promise3()]).then((result) => {
  console.log(result);
  console.timeEnd("time");
});
