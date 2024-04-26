console.log("===========Spread and Rest================");

// ! Rest Operator

function add(a, b) {
  return a + b;
}

// console.log(add(10,30));

function add(a, b,c) {
    return a + b+c;
  }

console.log(add(10,30,20));

function add(a, b, c, ...d) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}
add(10, 20, 30, 40, 50, 60, 90, 80);

function sum(...numbers) {
  console.log(numbers);
  var total = 0;
  for (var i of numbers) {
    total += i;
  }
  console.log(total);
}

sum(10, 20, 30, 40, 50, 60);


// !  Destructuring
var numberList = [101, 202, 303, 404, 505, 606];

var [a, b, c, ...d] = numberList;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
