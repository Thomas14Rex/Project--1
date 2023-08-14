let SignUp = document.getElementById("SignUp");
let SignIn = document.getElementById("SignIn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let p = document.getElementById("forgot");
//nameField= document.getElementById("nameField").style.display=none;

let pass = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("str");

let eye = document.getElementById("eye");

//Password Strength message
pass.addEventListener("input", () => {
    if (pass.value.length > 0) {
        msg.hidden = false;
    }
    else {
        msg.hidden = true;
    }
    if (pass.value.length < 4) {
        str.innerHTML = "Weak";
        msg.style.color = "rgb(255, 89, 41)";
        msg.style.border = "rgb(255, 89, 41)";
    }
    else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "Medium";
        msg.style.color = "rgb(181, 169, 0)";
    }
    else if (pass.value.length >= 8) {
        str.innerHTML = "Strong";
        msg.style.color = "rgb(38, 215, 48)";
        msg.style.border = "rgb(38, 215, 48)";
    }
})
//Sign In and Sign Up 
SignIn.onclick = () => {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    SignUp.classList.add("disable");
    SignIn.classList.remove("disable");
    p.hidden = false;
    //msg.hidden = true;
    msg.style.display="none";



}

SignUp.onclick = () => {
    nameField.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    SignUp.classList.remove("disable");
    SignIn.classList.add("disable");
    p.hidden = true;
    //msg.hidden = false;
    msg.style.display="block";
}
//Password conversion to text
eye.onclick = () => {
    if (password.type == "password") {
        password.type = "text";
        eye.src = "eye-open.png"
    }
    else {
        password.type = "password";
        eye.src = "eye-close.png";
    }
}
