console.log("====== JSON ======");

var data={
    studentName:"Aamir",
    id:121,
    course:"java full stack",
    gender:"male"
}

//?m Datatype allowed in JSON
/*
object
Array
String
Number
Boolean
Null
*/

//!Array
var data=["ankit",212];
console.log(data);
console.log(typeof data);

// !object
var data={
    studentName:"anklit",
    id:123
}

//! Array inside array
var data=[
    ["ankit",212],
    ["rehan",321]
];

//! object inside object
var data={
    student1:{
        studentName:"tasnem",
        id:212
    },
    student2:{
        studentName:"abdul",
        id:121
    }
}

//! Array inside object
var data={
    student1:["Tasneem",["java","js","html","css"]],
    student2:["Shahroze",["java","sql","API"]]
}

//! object inside array

var data=[
    {
        studentName:"Tasneem",
        id:324,
        gender:"male"
    },
    {
        studentName:"Abdul",
        id:304,
        gender:"male"
    }
]

console.log(data);
console.log(typeof data);

for(let i of data)
{
    console.log(i.studentName,i.id,i.gender);
}

//! Methods
// JSON.stringify()= It will convert js data into json data
// JSON.parse()= It will convert json data to js data

jsondata=JSON.stringify(data);
console.log(jsondata);

jsdata=JSON.parse(jsondata);
console.log(jsdata);

