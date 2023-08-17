const body = document.querySelector("body");
const nav = document.querySelector("nav");
const modeToggle = document.querySelector(".darkLight");
const searchToggle = document.querySelector(".searchToggle");
const closeBtn = document.querySelector(".sideBarClose")
const openBtn = document.querySelector(".sideBarOpen");


let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark-mode"){
    body.classList.add("dark");
}

modeToggle.addEventListener("click",()=>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if(!body.classList.contains("dark")){
        localStorage.setItem("mode","light-mode");
    }else {
        localStorage.setItem("mode","dark-mode");
    }
    
})

searchToggle.addEventListener("click",()=>{
    searchToggle.classList.toggle("active");
    
})

openBtn.addEventListener("click",()=>{
    nav.classList.add("active")    
})

body.addEventListener("click",e =>{
    let clickedElement = e.target;
    
    if(!clickedElement.classList.contains("sideBarOpen") && !clickedElement.classList.contains("menu")){
        nav.classList.remove("active");
    }
})