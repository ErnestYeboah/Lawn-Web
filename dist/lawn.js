"use strict";
const imgEl = document.querySelectorAll(".featured__logos > *");
console.log(imgEl, typeof imgEl);
let currentIndex = 0;
document.addEventListener("DOMContentLoaded", (e) => {
    setInterval(initaliseRotate, 2000);
});
function initaliseRotate() {
    currentIndex++;
    if (currentIndex >= imgEl.length) {
        currentIndex = 0;
    }
    imgEl.forEach((img) => img.classList.remove("active"));
    imgEl[currentIndex].classList.add("active");
}
const toTopBtn = document.querySelector("[data-type='back-to-top']");
toTopBtn.onclick = () => (location.href = "#");
const hamburger = document.querySelector(".hamburger");
const headerMenu = document.querySelector(".header__links");
hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("active");
    headerMenu.classList.toggle("active");
});
