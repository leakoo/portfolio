import loadParticles from "./particles.js";
import { playMarquee } from "./animations.js";

const menuBtn = document.getElementById("menu-btn");
const spans = menuBtn.querySelectorAll("span");
const popup = document.getElementById("popup");
const menuLinks = popup.querySelectorAll("a");
const heroCTA = document.querySelector(".heroCTA");
const lgMediaQuery = window.matchMedia("(min-width: 1024px)");

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

//Open Menu when clicked
menuBtn.addEventListener("click", () => {
  toggleMenu();
  toggleMenuTransition();
});

//Close Menu after a link is clicked
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

heroCTA.addEventListener("click", () => {
  const projectsSection = document.getElementById("projects");
  projectsSection.scrollIntoView();
})

//Store Tween in a variable for control
let marqueeTween = playMarquee();

const handleMarquee = (e) => {
  //If Viewport is 1024px or larger pause animation else play
  if(e.matches) {
    marqueeTween.pause();
  } else {
    marqueeTween.resume();
  }
}

//Run HandleMarquee to init correct state
handleMarquee(lgMediaQuery);
//Event Listener to adjust animation on resize
lgMediaQuery.addEventListener("change", handleMarquee);

loadParticles();