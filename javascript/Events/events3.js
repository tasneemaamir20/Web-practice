let div=document.getElementById("demo");

div.addEventListener("click",alertmsg);

function alertmsg(){
    alert("this is click event");
}

// div.onmouseover=()=>{
//     div.style.backgroundColor="red";
//     div.style.color="white";
// }
div.addEventListener("onmouseover",()=>
{
    div.style.backgroundColor="red";
    div.style.color="white";
});