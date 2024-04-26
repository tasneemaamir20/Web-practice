let gp=document.getElementById("grandparent");

let p=document.getElementById("parent");
let c=document.getElementById("child");

// c.addEventListener("click",()=>
// {
//     alert("this is child");
// })
// p.addEventListener("click",()=>
// {
//     alert("this is parent");
// })
// gp.addEventListener("click",()=>
// {
//     alert("this is grandparent");
// })

c.addEventListener("click",()=>
{
    alert("this is child");
},true)
p.addEventListener("click",()=>
{
    alert("this is parent");
},true)
gp.addEventListener("click",()=>
{
    alert("this is grandparent");
},true)