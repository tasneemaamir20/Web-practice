
let form=document.getElementById("frm");

let mail=document.getElementsByName("useremail");
let pwd=document.getElementsByName("pwd");

form.addEventListener("submit",()=>{

    if(mail[0].value==="tas12@gmail.com" && pwd[0].value==="Aamir11")
    {
        if(mail[0].value==="tas12@gmail.com")
        {
            let emailid=document.getElementById("emailid");
            emailid.style.border="3px solid green";
        }
        alert("You are successfully login");
    }
    else{
        alert("soryy !! invalid email and password");
    }
});


   
