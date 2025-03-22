const menuBtn = document.getElementById("menu-btn");
const spans = menuBtn.querySelectorAll("span");
const popup = document.getElementById("popup");

menuBtn.addEventListener("click", () => {
    spans[0].classList.toggle("menu-open1");
    spans[1].classList.toggle("menu-open2");
    spans[2].classList.toggle("menu-open3");

    popup.classList.toggle("hidden");
})