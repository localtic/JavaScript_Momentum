const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("hello");
}

// setInterval(sayHello, 5000);
// setTimeout(sayHello, 5000);

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText =`${hours}:${minutes}:${seconds}`;
};

getClock() // 화면 로딩되자마자 시간이 뜨게 하려고 호출
setInterval(getClock, 1000);
