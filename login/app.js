const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");

const link = document.querySelector("a");

// const loginInput = document.getElementById("#login-form input");

function onLoginSubmit(info){
    info.preventDefault(); // 브라우저의 기본 동작(새로고침)을 막음
    console.log(info); // event에 대한 정보
}

function handleLinkClick(event){
    console.log(event);
    alert("clicked"); // alert는 모든 동작을 멈춤
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);