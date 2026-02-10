/* =========================
   MOBILE NAV TOGGLE
========================= */
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("active");
}

/* =========================
   CLOSE MENU AFTER CLICK
========================= */
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navMenu");
    menu.classList.remove("active");
  });
});

/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* =========================
   SCROLL FADE-IN ANIMATION
========================= */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".section, .card, .leader").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

/* =========================
   NAVBAR SHADOW ON SCROLL
========================= */
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* =========================
   PAGE LOADED EFFECT
========================= */
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
