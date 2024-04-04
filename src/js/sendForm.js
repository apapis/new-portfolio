const contactForm = document.querySelector("#contact__form");
const apiURL = "https://api.emailjs.com/api/v1.0/email/send";

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    service_id: "service_hcbjh33",
    template_id: "template_vx5hnwr",
    user_id: "dPvqTdX5uKGJO111K",
  };

  fetch(apiURL, {
    method: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
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
      console.log("Success:", data);
      // Optionally, you can perform additional actions after successful submission
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle any errors that occurred during form submission
    });
});
