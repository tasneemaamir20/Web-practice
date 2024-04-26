// DOM selector
/*
ID
Class
Tag
Name
querySelector
queryselectorAll
*/


// CRUD operations
// create
let section=document.getElementById("demo");

let div=document.createElement("div");
div.innerHTML="Hello i am div tag";

section.append(div);
// section.appendChild(div);

// Retrieve
// id,class,name.tag.qs.qsa

// Updation

section.innerHTML="I am updated tag ";

let article=document.createElement("article");
article.innerHTML="This is article tag";

let aside=document.createElement("aside");
aside.innerHTML="This is aside tag";

section.appendChild(article);
section.replaceChild(aside,article);


// deletion

section.removeChild(aside);

