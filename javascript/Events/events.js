// mouseEvents
click
dbclick
mouseover
mouseout
mouseup
mousedown
mousemove
contextmenu

// keyboard Events
keyup
keydown
keypress

// form Events
Submit
reset
focus
blur
change

// window Events

laod 
scroll 
resize

 let sec=document.getElementById("sec");

window.addEventListener("load",()=>
{
    alert("this is load");
})

window.addEventListener("resize",()=>
{
    console.log("this is resize");
})

window.addEventListener("scroll",()=>
{
    console.log("this is scroll");
})