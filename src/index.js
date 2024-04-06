import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
  import("./js/nav").then((module) => {
    module.initNav();
  });

  import("./js/scrollspy").then((module) => {
    module.initScrollspy();
  });
});

window.onload = () => {
  import("./js/sendForm").then((module) => {
    module.initForm();
    module.loadRecaptcha();
  });

  document.getElementById("loader").style.display = "none";
};
