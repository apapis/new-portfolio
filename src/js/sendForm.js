const contactForm = document.querySelector("#contact__form");
const apiURL = "https://formsubmit.co/6202ba928bfcdcc058f6a9546fc9f6da";
const formDataTest = {
  email: "papisadamt@gmail.com",
  name: "Adam Tomasz Papis",
  text: "asdasdasd",
  _captcha: false,
};
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(contactForm);
  console.log(formData);
  fetch("https://formsubmit.co/6202ba928bfcdcc058f6a9546fc9f6da", {
    method: "POST",
    body: formDataTest,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
