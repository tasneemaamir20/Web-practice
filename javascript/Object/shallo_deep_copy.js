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
