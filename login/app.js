const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// const loginInput = document.getElementById("#login-form input");

function onLoginBtnClick(){
    console.log(loginInput.value);
    alert("click!!");
}

loginButton.addEventListener("click", onLoginBtnClick);