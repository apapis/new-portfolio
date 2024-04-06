import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
  import("./js/nav", { defer: true }).then((module) => {
    module.initNav();
  });

  import("./js/scrollspy", { defer: true }).then((module) => {
    module.initScrollspy();
  });

  document.getElementById("loader").style.display = "none";
});

window.addEventListener("load", () => {
  import("./js/sendForm", { defer: true }).then((module) => {
    module.initForm();
    module.loadRecaptcha();
  });
});
