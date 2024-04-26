let body=document.body;

let section=document.createElement("section");

body.appendChild(section);
section.style.border="2px solid black";
section.style.flex="1";

let red=document.createElement("div");
red.style.flex="1";
red.style.height="40px";

section.appendChild(red);

red.onmouseover=()=>
{
    red.style.backgroundColor="red";
};

// red.addEventListener("onmouseover",()=>
// {
//     red.style.backgroundColor="red";
// });
red.onmouseout=()=>
{
    red.style.backgroundColor="white";
}
