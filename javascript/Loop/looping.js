console.log("==========Looping  3-nov-2023 ===========")
// for in
console.log("==============for in=============")
var arr=[10,20,30,40,50,60,70,80,90];
console.log(arr);

for(let i in arr)
{
    console.log(i.concat(" "+arr[i]));
    // console.log(arr[i]);
}

// for of
console.log("============for of=============");
var arr=[10,20,30,40,50,60,70,80,90];
console.log(arr);
for(let i of arr)
{
    console.log(i);
}




// forEach
console.log("============forEach=============");
var arr=[10,20,30,40,50,60,70,80,90];
// console.log(arr);
arr.forEach((a,b) => console.log(a,b));
 

// filter
console.log("============filter=============");
var arr=[10,20,30,40,50,60,70,80,90];
console.log(arr);

console.log(arr.filter(i  =>  i>40));




// map
console.log("============map=============");
var arr=[10,20,30,40,50,60,70,80,90];
console.log(arr);

console.log(arr.map(i => i+50));




// reduce
console.log("============reduce=============");
var arr=[10,20,30,40,50,60,70,80,90];
console.log(arr);

console.log(arr.reduce((sum,i) => sum+i));


var arr=["j","a","v","a","s","c","r","i","p","t"];
console.log(arr);
console.log(arr.reduce((sum,i) => sum+i));