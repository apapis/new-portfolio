const contactForm = document.querySelector("#contact__form");
const apiURL = "https://formsubmit.co/6202ba928bfcdcc058f6a9546fc9f6da";

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(contactForm);

  fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
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
