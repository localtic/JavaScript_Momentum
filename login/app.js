const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
//string만 들어가는 변수는 대문자로 사용
const USERNAME_KEY = "username";

// const loginInput = document.getElementById("#login-form input");

function onLoginSubmit(info){
    info.preventDefault(); // 브라우저의 기본 동작(새로고침)을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem("username", username);
    paintGreetings(username);
}

// 유저 정보가 input에서 온다
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

// 유저 정보가 localStorage에서 온다
const saveUsername = localStorage.getItem(USERNAME_KEY);

// localStorage에 유저 정보 없을 때
if (saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(saveUsername);
}