// ==================== Loader Animation ====================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 1000);
  }, 2500);
});

// ==================== Active Navigation Highlight ====================
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  const fromTop = window.scrollY + 80;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (
      section &&
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      navLinks.forEach(link => link.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

// ==================== Reveal Scroll Elements ====================
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.animationPlayState = 'running';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
scrollRevealElements.forEach(el => revealObserver.observe(el));

// ==================== Fade Slide Reveal Elements ====================
const reveals = document.querySelectorAll('.reveal');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      sectionObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(section => sectionObserver.observe(section));

// ==================== Animate About Image ====================
const aboutImage = document.querySelector('.about-image');
if (aboutImage) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  observer.observe(aboutImage);
}

// ==================== Ensure Section Full Height ====================
const sections = document.querySelectorAll(".section, .hero");
sections.forEach(section => {
  section.style.minHeight = "100vh";
  section.style.display = "flex";
  section.style.flexDirection = "column";
  section.style.justifyContent = "center";
});

// ==================== Theme Toggle ====================
const toggle = document.getElementById('toggle-theme');
const htmlEl = document.documentElement;

if (localStorage.getItem("theme") === "light") {
  htmlEl.setAttribute('data-theme', 'light');
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    htmlEl.setAttribute('data-theme', 'light');
    localStorage.setItem("theme", "light");
  } else {
    htmlEl.removeAttribute('data-theme');
    localStorage.setItem("theme", "dark");
  }
});