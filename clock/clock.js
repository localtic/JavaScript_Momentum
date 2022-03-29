const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("hello");
}

// setInterval(sayHello, 5000);
// setTimeout(sayHello, 5000);

function getClock(){
    const date = new Date();
    clock.innerText =`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
};

getClock() // 화면 로딩되자마자 시간이 뜨게 하려고 호출
setInterval(getClock, 1000);
