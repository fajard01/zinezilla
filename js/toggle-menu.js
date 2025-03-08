const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-menu");
const btnMenu = document.querySelector(".button-menu");

burgerMenu.addEventListener("click", mobileMenu);

function mobileMenu() {
    burgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
    btnMenu.classList.toggle("active")
}