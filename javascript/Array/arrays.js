console.log("================ Arrays=================");

var m=[98,55,44,33,22,11];
console.log(m);



var a=new Array(22,44,66,88);
console.log(a);


a.pop();
console.log(a);


a.push(99,11,22,33);
console.log(a);


a.shift();
a.shift();
a.shift();
console.log(a);


a.unshift(1,2,3,4,5);
console.log(a);


a.splice(2,4,40,50,40,30);
console.log(a);



// join()
var c="I love You";
var d=c.split(" ");
console.log(d);


var s=d.join(" ");
console.log(s);

// sort()
// ascending order
var a=[40,100,20,10,50,2000,1000];
console.log(a.sort((a,b) => b-a));


// in descending order
var a=[40,100,20,10,50,2000,1000];
console.log(Array.isArray(a));
console.log(a.sort((a,b) => a-b));
