let p = new Promise((resolve, rejected) => {
  setTimeout(() => {
    isfinal = true;
    if (isfinal) {
      resolve("this is resolved of promise 1 ");
    } else {
      rejected("this is rejected  of promise 1");
    }
  }, 5000);
});

let p1 = new Promise((resolve, rejected) => {
  setTimeout(() => {
    isfinal = true;
    if (isfinal) {
      resolve("this is resolved of promise 2 ");
    } else {
      rejected("this is rejected  of promise 2");
    }
  }, 10000);
});

async function display() {
  console.log("code before promise");

  let res = await p;
  console.log(res);

  console.log("code in  between  promise");

  let res1 = await p1;
  console.log(res1);

  console.log("code after promise");
}
display();
