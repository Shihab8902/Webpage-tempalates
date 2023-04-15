//Return
const hamburger = document.querySelector(".hamburger");
const navMenus = document.querySelector(".nav-menus");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenus.classList.toggle("active");
});

//Close nav menu upon press
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLink)=>{
    navLink.addEventListener("click", ()=>{
        navMenus.classList.remove("active");
        hamburger.classList.remove("active");
    })
})