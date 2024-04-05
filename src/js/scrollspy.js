export function initScrollspy() {
  const links = document.querySelectorAll(".nav__link");
  const sections = document.querySelectorAll(".section");
  const indicator = document.querySelector(".navigation__scrollspy");
  const nav = document.querySelector(".nav");

  const scrollspy = () => {
    const windowSize = window.innerWidth;
    const pageYPosition = window.scrollY;
    const navHeight = nav.clientHeight;

    sections.forEach((section) => {
      const sectionYPosition = section.offsetTop - navHeight;

      if (
        pageYPosition >= sectionYPosition &&
        pageYPosition < sectionYPosition + section.offsetHeight
      ) {
        links.forEach((link) => {
          if (link.dataset.target === section.id) {
            if (windowSize > 768) {
              indicator.style.left = `${link.offsetLeft}px`;
              indicator.style.width = `${link.offsetWidth}px`;
              indicator.style.top = "0";
              indicator.style.height = "auto";
            } else {
              indicator.style.top = `${link.offsetTop}px`;
              indicator.style.height = `${link.offsetHeight}px`;
              indicator.style.width = `${link.offsetWidth}px`;
              indicator.style.left = `auto`;
            }
            link.style.color = "#fff";
          } else if (section.id == "introduction") {
            link.removeAttribute("style");
            indicator.style.width = `0px`;
          } else {
            link.removeAttribute("style");
          }
        });
      }
    });
  };

  // Inicjalizacja i ustawienie nasłuchiwaczy
  scrollspy();
  window.addEventListener("scroll", scrollspy);
  window.addEventListener("load", scrollspy);
  window.addEventListener("resize", scrollspy);
}
