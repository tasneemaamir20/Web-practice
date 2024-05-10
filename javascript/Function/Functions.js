console.log("Welcome to js functions");

// ! Named functions

// function sum(a,b)
// {
//     return a+b;
// }

// console.log(sum(10,20));

// !Ananymous functions

// let add= function (a,b)
// {
//     return a+b;
// }

// console.log(add(20,30));


// immediate invoke functions 
// 1. with functions name
// (
//     function add(a,b)
//     {
//         console.log(a+b);
//     }
    
// )
// (20,40);

// without function name

// (
//     function (a,b)
//     {
//         console.log(a-b);
//     }
    
// )
// (80,40);


// ! Arrow function

let cube= (a)=>
{
    return a**3;
}

console.log("Cube of the number is : "+cube(10));


// function calculator(a,b,oper)
// {
//     return oper(a,b);
// }

// function sum(a,b)
// {
//     return a+b;
// }

// function sub(a,b)
// {
//     return a-b;
// }

// console.log(calculator(10,20,sum));
// console.log(calculator(10,20,sub));
// console.log(sum(30,40));
// console.log(sub(30,20));



// Javascript engine


// console.log("Start");

// var a=10;
// var b=20;

// function add()
// {
//     var c=30;
//     var d=40;
//     return c+d;
// }

// console.log(add());
// console.log(a+b);
