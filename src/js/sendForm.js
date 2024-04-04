const contactForm = document.querySelector("#contact__form");
const apiURL = "https://api.emailjs.com/api/v1.0/email/send";
const successMessage = document.querySelector("#success-message");
const errorMessage = document.querySelector("#error-message");
const recaptchaErrorMessage = document.querySelector(
  "#recaptcha-error-message"
);

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get the form input values
  const email = contactForm.elements.email.value;
  const name = contactForm.elements.name.value;
  const message = contactForm.elements.message.value;
  const recaptchaResponse = grecaptcha.getResponse();

  if (recaptchaResponse === "") {
    // reCAPTCHA is not completed, show error message
    recaptchaErrorMessage.style.display = "block";
    return;
  }

  const data = {
    service_id: "service_hcbjh33",
    template_id: "template_vx5hnwr",
    user_id: "dPvqTdX5uKGJO111Ksss",
    template_params: {
      email: email,
      name: name,
      message: message,
      "g-recaptcha-response": recaptchaResponse,
    },
  };

  fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        if (response.headers.get("content-type").includes("application/json")) {
          return response.json();
        } else {
          return response.text();
        }
      } else {
        throw new Error("Form submission failed");
      }
    })
    .then((data) => {
      if (typeof data === "string" && data.trim() === "OK") {
        console.log("Form submitted successfully");
        contactForm.style.display = "none";
        successMessage.style.display = "block";
      } else {
        console.log("Success:", data);
        contactForm.style.display = "none";
        successMessage.style.display = "block";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      contactForm.style.display = "none";
      errorMessage.style.display = "block";
    });
});
