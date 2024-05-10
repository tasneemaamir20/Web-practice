console.log("===============Session and Local ===========================");

let newPass= document.getElementById("password");

let confPass= document.getElementById("ConfirmPassword");

let confirmation=document.getElementById("confirmation");

confirmation.addEventListener("click",function(e){

    if(newPass.value===confPass.value)
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(newPass.value!=confPass.value){
        console.log("Password missMatch")
    }
},false);


function saveData(){
    localStorage.setItem("data",confPass.innerHTML);
}



// sessionStorage.setItem("id","258");
// sessionStorage.setItem("name","Aamir");
// sessionStorage.setItem("course","Javascript");



// localStorage.setItem("id","258");
// localStorage.setItem("name","Aamir");
// localStorage.setItem("course","Javascript");



