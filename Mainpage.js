const typingText = "Hi there, welcome to my personal website!";
let index = 0;

function typeEffect() {
  const target = document.getElementById("typed-heading");
  if (!target) return;
  if (index < typingText.length) {
    target.innerHTML += typingText.charAt(index);
    index++;
    setTimeout(typeEffect, 75);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const typed = document.getElementById("typed-heading");
  if (typed) typeEffect();

  const surveyForm = document.getElementById("surveyForm");
  if (surveyForm) {
    surveyForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const submitBtn = surveyForm.querySelector("button[type='submit']");
      if (submitBtn) submitBtn.disabled = true;

      const formData = new FormData(surveyForm);

      fetch("submit_survey.php", {
        method: "POST",
        body: formData,
      })
        .then(response => response.text())
        .then(data => {
          if (data.trim() === "success") {
            alert("✅ Your response was successfully delivered.");
            surveyForm.reset();
            document.getElementById("survey-step1").classList.remove("hidden");
            document.getElementById("survey-step2").classList.add("hidden");
          } else {
            alert("⚠️ Submission failed: " + data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
          alert("🚫 An error occurred. Please try again later.");
        })
        .finally(() => {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }
});

function showPage(id) {
  const sections = ["home", "about", "survey", "admin", "login"];
  sections.forEach(section => {
    const el = document.getElementById(section);
    if (el) el.classList.add("hidden");
  });

  if (id === "admin" && !sessionStorage.getItem("isAdmin")) {
    alert("Access denied: Admin credentials required.");
    return;
  }

  const active = document.getElementById(id);
  if (active) active.classList.remove("hidden");
}

function handleLogin() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const authKey = document.getElementById("authKey").value.trim();

  const isValid =
    username === "Mmochi" &&
    email === "Ilovemikaii18@gmail.com" &&
    password === "IloveMikaii18" &&
    confirmPassword === "IloveMikaii18" &&
    authKey === "mikamylove";

  if (isValid) {
    sessionStorage.setItem("isAdmin", true);
    alert("Login successful! Redirecting to admin panel...");
    showPage("admin");
  } else {
    alert("Incorrect login credentials. Please try again.");
  }
}

function goToStep2() {
  document.getElementById("survey-step1").classList.add("hidden");
  document.getElementById("survey-step2").classList.remove("hidden");
}

function goBackToStep1() {
  document.getElementById("survey-step2").classList.add("hidden");
  document.getElementById("survey-step1").classList.remove("hidden");
}