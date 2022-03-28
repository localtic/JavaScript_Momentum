const h1 = document.querySelector("#title_id");
const h2 = document.querySelector("#title_id2");

function handleTitleClick(){
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}

function handleTClick(){
    h2.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
h2.addEventListener("click", handleTClick);