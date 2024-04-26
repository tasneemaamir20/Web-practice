// crud operation on attribute

// create
let section=document.getElementById("sec");

section.setAttribute("class","sectionclass");
section.setAttribute("title","section tag");


// Retreive

console.log(section.getAttribute("class"));


// updation

section.setAttribute("title","section wala tag");

// deletion

section.removeAttribute("title");