const burgerBTN = document.querySelector(".burgerBTN");
const burgerMenu = document.querySelector(".sideMenu");
const exitMenu = document.querySelector(".exit");
burgerBTN.addEventListener("click", () => {
  burgerMenu.classList.add("animation");
});
exitMenu.addEventListener("click", () => {
  burgerMenu.classList.remove("animation");
});
