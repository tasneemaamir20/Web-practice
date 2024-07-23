console.log("=========== Shallow copy ========");
let employee = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000,
};

console.log("employee=>", employee);
let newEmpolyee = employee;
console.log(newEmpolyee);

console.log("================= after modification  ===========");
newEmpolyee.ename = "osama";

console.log(newEmpolyee);
console.log(employee);
console.log("=========== Deep copy ========");
let employee1 = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000,
};
console.log("employee=>", employee1);
let newEmployee1 = JSON.parse(JSON.stringify(employee1));
console.log("newEmployee1=>", newEmployee1);

console.log("====== afgter modification ============");
newEmployee1.ename = "aamir";
console.log(newEmployee1);
console.log(employee1);