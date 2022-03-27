 // 자바스크립트에서도 css 쓸 수 있음
const h1 = document.querySelector("#title_id");

function handleTitleClick(){
        const currentColer = h1.style.color;
        let newColer;
    if(currentColer === "blue"){
        newColor = "tomato";
    } else{
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);