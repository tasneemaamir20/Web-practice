console.log("==== promises ===");

let p = new Promise((success, reject) => {
  isPlaced = false;
  if (isPlaced) {
    success("Lets celebrate!!");
  } else {
    reject("Moye Moye");
  }
});
console.log(p);



p.then((data) => {
  console.log(data);
});

p.catch((err) => {
  console.log(err);
});

p.finally(() => {
  console.log("Communicate to your HR");
});


// PROMISE Methods [any,all,allSettled,race]

let raj = new Promise((resolve, reject) => {
  isplaced = true;
  if (isplaced) {
    resolve("raj is placed");
  } else {
    reject("raj is not placed");
  }
});
let vicky = new Promise((resolve, reject) => {
  isplaced = true;
  if (isplaced) {
    resolve("vicky is placed");
  } else {
    reject("vicky is not placed");
  }
});

let bunny = new Promise((resolve, reject) => {
  isplaced = true;
  if (isplaced) {
    resolve("bunny is placed");
  } else {
    reject("bunny is not placed");
  }
});

// any 

Promise.any([raj, vicky, bunny])
  .then((d) => {
    console.log(d);
  })
  .catch((err) => {
    console.log(err);
  });

//   all

Promise.all([raj, vicky, bunny])
  .then((d) => {
    console.log(d);
  })
  .catch((err) => {
    console.log(err);
  });

//   allSettled

Promise.allSettled([raj, vicky, bunny])
  .then((d) => {
    console.log(d);
  })
  .catch((err) => {
    console.log(err);
  });


// promises for performing race method

let raj1 = new Promise((resolve, reject) => {
  isplaced = true;
  if (isplaced) {
    resolve("raj is placed");
  } else {
    reject("raj is not placed");
  }
}, 2000);
let vicky1 = new Promise((resolve, reject) => {
  isplaced = true;
  if (isplaced) {
    resolve("vicky is placed");
  } else {
    reject("vicky is not placed");
  }
}, 1000);

let bunny1 = new Promise((resolve, reject) => {
  isplaced = true;
  if (isplaced) {
    resolve("bunny is placed");
  } else {
    reject("bunny is not placed");
  }
}, 3000);


// race

Promise.race([raj1, vicky1, bunny1])
  .then((d) => {
    console.log(d);
  })
  .catch((err) => {
    console.log(err);
  });
