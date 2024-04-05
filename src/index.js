import "./style.scss";
import "./js/nav";
import "./js/scrollspy";

document.addEventListener("DOMContentLoaded", () => {
  import("./js/nav").then((module) => {
    module.initNav();
  });

  import("./js/scrollspy").then((module) => {
    module.initScrollspy();
  });

  import("./js/sendForm").then((module) => {
    module.initForm();
  });
});
