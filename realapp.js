const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-linksmobile");
const links =document.querySelectorAll(".nav-linksmobile li ");

hamburger.addEventListener("click",()=>{
    navLinks.classList.toggle("open");
});

window.onscroll =function(){myFunction()};
const navbar =document.getElementById("earlp-logo");
const sticky = navbar.offsetTop;
function myFunction(){
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    } else{
        navbar.classList.remove("sticky");
    }
}


