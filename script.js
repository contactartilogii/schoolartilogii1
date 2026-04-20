// =========================
// THEME TOGGLE (PERSISTENT)
// =========================
function toggleTheme() {
  document.body.classList.toggle("light-mode");

  // save preference
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

// apply saved theme
(function () {
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.body.classList.add("light-mode");
  }
})();


// =========================
// SCROLL REVEAL
// =========================
const revealElements = document.querySelectorAll(".reveal");

function handleReveal() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}


// =========================
// PARALLAX (SAFE)
// =========================
function handleParallax() {
  const heroLogo = document.querySelector(".hero-logo");
  if (!heroLogo) return;

  const scrolled = window.scrollY;
  heroLogo.style.transform = `translateY(${scrolled * 0.12}px)`;
}


// =========================
// NAVBAR SCROLL (LIGHT/DARK SAFE)
// =========================
function handleNavbar() {
  const header = document.querySelector(".header");
  if (!header) return;

  const isLight = document.body.classList.contains("light-mode");

  if (window.scrollY > 50) {
    header.style.background = isLight
      ? "rgba(255,255,255,0.95)"
      : "rgba(11,15,20,0.9)";
  } else {
    header.style.background = isLight
      ? "rgba(255,255,255,0.85)"
      : "rgba(11,15,20,0.7)";
  }
}


// =========================
// SCROLL OPTIMIZATION (THROTTLE)
// =========================
let ticking = false;

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleReveal();
      handleParallax();
      handleNavbar();
      ticking = false;
    });

    ticking = true;
  }
}

window.addEventListener("scroll", onScroll);

// run once on load
handleReveal();
handleNavbar();


// =========================
// FORM INTERACTION (UPGRADED)
// =========================
function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const button = form.querySelector("button");

  button.textContent = "Sending...";
  button.disabled = true;

  setTimeout(() => {
    button.textContent = "Message Sent ✓";
    form.reset();
  }, 1000);
}
