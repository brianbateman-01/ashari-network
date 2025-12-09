// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    navToggle.classList.toggle("active");
  });

  // Close on link click (mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.classList.remove("active");
    });
  });
}

// Scroll reveal
const revealElements = document.querySelectorAll(".reveal");

const onScrollReveal = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", onScrollReveal);
window.addEventListener("load", onScrollReveal);

// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Fake contact form handler (no backend yet)
