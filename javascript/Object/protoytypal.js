let animal = {
  eat: true,
};
let rabbit = {
  jumps: false,
};
rabbit.__proto__ = animal;
console.log(rabbit.eat);
console.log(rabbit.jumps);
console.log("======================");

