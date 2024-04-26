console.log("======= BOM ===========");
console.log("Windows");


// windows properties
/*
document
screen
history
navigation
location
innerHeight
OuterHeight
outerwidth
*/
console.log(document);
// windows methods
/*
alert()
confirm()
promp()
open()
close()
setTimeOut()
clearTimeOut()
setInterval()
clearInterval()
*/

console.log(alert("OTP: "+Math.trunc(Math.random()*10000)));

// console.log(confirm("Do you want to logout"));

// console.log(prompt("Enter your name:"));

// console.log(open("http://127.0.0.1:5500/Windows.html"));
// console.log(close("http://127.0.0.1:5500/Windows.html"));


var a=setTimeout(()=>{
    console.log("This is setTImeOut");
    },2000);


    // var a=setInterval(()=>{
    //     console.log("This is setInterval")
    // },2000);

    