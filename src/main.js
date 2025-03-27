import loadParticles from "./particles.js";

const menuBtn = document.getElementById("menu-btn");
const spans = menuBtn.querySelectorAll("span");
const popup = document.getElementById("popup");
const menuLinks = popup.querySelectorAll("a");

const toggleMenu = () => {
  //Change Menu to a X
  spans[0].classList.toggle("menu-open1");
  spans[1].classList.toggle("menu-open2");
  spans[2].classList.toggle("menu-open3");
};

const toggleMenuTransition = () => {
  //Toggle Menu open transition
  popup.classList.toggle("opacity-100");
  popup.classList.toggle("opacity-0");
  popup.classList.toggle("translate-x-0");
  popup.classList.toggle("translate-x-full");
  popup.classList.toggle("pointer-events-none");
};

const closeMenu = () => {
  toggleMenu();
  toggleMenuTransition();
};

menuBtn.addEventListener("click", () => {
  toggleMenu();
  toggleMenuTransition();
});

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

loadParticles();