//  Changes the background color of the nav when scrolled
$(window).scroll(function(){
    if ($(window).scrollTop()){
        $("nav").addClass("changeColor");
    }
    else{
        $("nav").removeClass("changeColor");
    }
});


// maintains the active color when clicked on and when scrolled upon 
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

let liveSection = "home";
window.addEventListener("scroll", () => {
    sections.forEach(section => {
        if (window.scrollY >= (section.offsetTop - section.clientHeight / 5)){
            liveSection = section.id;
        }
    });
    navLinks.forEach(navLink => {
        if (navLink.href.includes(liveSection)){
            document.querySelector(".active").classList.remove("active");
            navLink.classList.add("active");
        }
    });
});


//  Gives the font awesome links a tooltip when hovered
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});