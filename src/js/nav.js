const nav = document.querySelector(".nav");
const navMobile = document.querySelector(".nav__box");
const navBtnOpen = document.querySelector(".nav__button__open");
const navBtnClose = document.querySelector(".nav__button__close");
const navBtns = document.querySelectorAll(".nav__link");

let open = false;
const openNav = () => {
  navMobile.style.transform = "translate(0,0)";
  navMobile.style.opacity = "1";
  open = true;
};
const closeNav = () => {
  navMobile.style.transform = "translate(150%,0)";
  navMobile.style.opacity = "0";
  open = false;
};

const showNavOnScroll = () => {
  nav.style.transform = "translate(0,0)";
};

navBtnOpen.addEventListener("click", () => openNav());
navBtnClose.addEventListener("click", () => closeNav());
document.addEventListener("scroll", () => {
  showNavOnScroll();
});

navBtns.forEach((link) => {
  link.addEventListener("click", () => closeNav());
});
