let SignUp= document.getElementById("SignUp");
let SignIn= document.getElementById("SignIn");
let nameField= document.getElementById("nameField");
let title= document.getElementById("title");

//nameField= document.getElementById("nameField").style.display=none;
SignIn.onclick=()=>{
    nameField.style.maxHeight="0";
    title.innerHTML="Sign In";
    SignUp.classList.add("disable");
    SignIn.classList.remove("disable");
}

SignUp.onclick=()=>{
    nameField.style.maxHeight="65px";
    title.innerHTML="Sign Up";
    SignUp.classList.remove("disable");
    SignIn.classList.add("disable");
}

