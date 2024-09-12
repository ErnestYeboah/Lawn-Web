const imgEl = document.querySelectorAll(
  ".featured__logos > *"
) as NodeListOf<HTMLImageElement>;
console.log(imgEl, typeof imgEl);

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", (e) => {
  setInterval(initaliseRotate, 2000);
});

function initaliseRotate(): void {
  currentIndex++;

  if (currentIndex >= imgEl.length) {
    currentIndex = 0;
  }
  imgEl.forEach((img) => img.classList.remove("active"));
  imgEl[currentIndex].classList.add("active");
}

const toTopBtn = document.querySelector(
  "[data-type='back-to-top']"
) as HTMLButtonElement;

toTopBtn.onclick = () => (location.href = "#");

const hamburger = document.querySelector(".hamburger") as HTMLButtonElement;
const headerMenu = document.querySelector(".header__links") as HTMLDivElement;

hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("active");
  headerMenu.classList.toggle("active");
});
