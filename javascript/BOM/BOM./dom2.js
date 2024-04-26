// CRUD on css

let section=document.getElementById("sec");


// create
// Method 1. 

section.style.setProperty("color","red");
section.style.setProperty("background-color","black");
section.style.setProperty("height","100px");
section.style.setProperty("width","200px");
section.style.setProperty("font-size","40px");

// Method 2

// section.style.color="red";
// section.style.backgroundColor="black";
// section.style.height="100px";
// section.style.width="200px";
// section.style.fontSize="40px";


// Method 3

// section.style.cssText= "color:red ; background-color:black ;height:100px;width:200px";


// retrive

console.log(section.style.getPropertyValue("color"));
console.log(section.style.getPropertyValue("background-color"));


// update

section.style.setProperty("background-color","blue");


// deletion

section.style.removeProperty("color");
section.style.removeProperty("width");
section.style.removeProperty("font-size");