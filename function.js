let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let titlle = document.getElementById("title");

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    titlle.innerHTML = "Sign In";
}
signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    titlle.innerHTML = "Sign Up";
}