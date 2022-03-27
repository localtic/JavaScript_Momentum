 // id로 document의 html element를 찾으면 뭐든 변경할 수 있다
const title = document.getElementById("title_id");
title.innerText = "Got you";

console.log(title.id);

//error: innerText of app.js null -> 일치하는 class 또는 id 없음(비어 있음)

const hellos = document.getElementsByClassName("h1");

const titi = document.querySelector(".hello h1:first-child");

title.style.color = "blue";

// event listen하기
function handleTitleClick(){
    console.log("title was clicked!");
    title.style.color="red"
    title.innerText="Bomm!"
}

// 커서가 해당 공간에 들어왔다
function handleMouseEnter(){
    title.innerText = "mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "mouse is gone!";
}

// 버튼이 아니어도 클릭을 감지할 수 있다
title.addEventListener("click", handleTitleClick); // title.onclick = handleTitleClick 이렇게도 쓸 수 있음
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);

function handleWindowOnline(){
    alert("diva online!");
}


function handleWindowOffline(){
    alert("somebody help me!");
}

window.addEventListener("online", handleWindowOnline);
window.addEventListener("offline", handleWindowOffline);