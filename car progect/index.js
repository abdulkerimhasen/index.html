'use strict';
/**
 * nav bar tooge
 */
const overlay = document.querySelector("[data-overlay]")
const navbar = document.querySelector("[data-navbar]")
const navToogleBtn = document.querySelector("[data-nav-toggle-btn]")
const navbarLinks = document.querySelectorAll("[data-nav-link]")

const navToogleFunc = function () {
    navToogleBtn.classList.toggle("active")
    navbar.classList.toggle("active")
    overlay.classList.toggle("active")
}

navToogleBtn.addEventListener("click", navToogleFunc)
overlay.addEventListener("click", navToogleFunc)

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", navToogleFunc)
}


/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]")

window.addEventListener("scroll", function () {
    window.scrollY >= 10 ? header.classList.add("active")
        : header.classList.remove("active")
})


const abdu = "global worled"
console.log(abdu)