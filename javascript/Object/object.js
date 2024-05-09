console.log("=========== object 3-nov-2023============");

// object literals
console.log("===========object literals =============");
let obj1={
    name:"Tasneem Aamir",
    eid:"qj12",
   esal:12000
}
console.log(obj1);





// object constructor
console.log("===========object constructor =============");
let obj2=new Object();
obj2.name="Tasneem Aamir";
obj2.eid="qj12";
obj2.esal="123000";
console.log(obj2);







// constructor function
console.log("===========constructor function =============");

function employee(name,eid,esal) {
    this.name=name;
    this.eid=eid;
    this.esal=esal;
}

let aamir=new employee("Tasneem","23IUL",12300);
console.log(aamir);
aamir.adhar=1234321;
console.log(aamir);