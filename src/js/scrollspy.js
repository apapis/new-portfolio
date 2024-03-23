const links = document.querySelectorAll(".navigation__link");
const sections = document.querySelectorAll(".section");
const indicator = document.querySelector(".navigation__scrollspy");
const navHeight = document.querySelector(".navigation--desktop").clientHeight;

window.onscroll = () => scrollspy();
window.onload = () => scrollspy();
window.onresize = () => scrollspy();

const scrollspy = () => {
    
  const pageYPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  sections.forEach((section) => {
    const sectionYPosition = section.offsetTop;
    

    if (pageYPosition > sectionYPosition - navHeight) {
        
      links.forEach((link) => {
        if (link.dataset.target === section.id) {
            
          indicator.style.left = `${link.offsetLeft}px`;
          indicator.style.width = `${link.offsetWidth}px`;
        }else if(section.id =="introduction") {
            indicator.style.width = `0px`;
        }
      });
    }
  });
};

scrollspy();