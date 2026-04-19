// =========================
// THEME TOGGLE
// =========================
function toggleTheme() {
  document.body.classList.toggle("light-mode");
}


// =========================
// SCROLL REVEAL (SMOOTH)
// =========================
const revealElements = document.querySelectorAll(".reveal");

function handleReveal() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}


// =========================
// PARALLAX EFFECT (SUBTLE)
// =========================
function handleParallax() {
  const scrolled = window.scrollY;

  const heroLogo = document.querySelector(".hero-logo");

  if (heroLogo) {
    heroLogo.style.transform = `translateY(${scrolled * 0.15}px)`;
  }
}


// =========================
// NAVBAR SCROLL EFFECT
// =========================
const header = document.querySelector(".header");

function handleNavbar() {
  if (window.scrollY > 50) {
    header.style.background = "rgba(11, 15, 20, 0.9)";
  } else {
    header.style.background = "rgba(11, 15, 20, 0.7)";
  }
}


// =========================
// SCROLL LOOP (OPTIMIZED)
// =========================
function onScroll() {
  handleReveal();
  handleParallax();
  handleNavbar();
}

window.addEventListener("scroll", onScroll);

// run once on load
handleReveal();

function handleSubmit(event) {
  event.preventDefault();
  alert("Message sent. We'll get back to you soon.");
}
