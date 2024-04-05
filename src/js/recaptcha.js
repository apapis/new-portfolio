let recaptchaLoaded = false;

export function loadRecaptcha() {
  if (recaptchaLoaded) return;

  const script = document.createElement("script");
  script.src = "https://www.google.com/recaptcha/api.js";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);

  recaptchaLoaded = true;
}

loadRecaptcha();
