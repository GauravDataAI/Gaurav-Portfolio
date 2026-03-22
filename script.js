// ===============================
// MOBILE MENU TOGGLE
// ===============================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    menuToggle.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuToggle.classList.remove("active");
    });
  });
}

// ===============================
// REVEAL ON SCROLL
// ===============================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===============================
// SMOOTH CURSOR GLOW
// ===============================
const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    cursorGlow.style.left = currentX + "px";
    cursorGlow.style.top = currentY + "px";

    requestAnimationFrame(animateGlow);
  }

  animateGlow();
}

// ===============================
// NAVBAR + HEADER SCROLL EFFECT
// ===============================
const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");

function handleNavbarScroll() {
  if (window.scrollY > 50) {
    if (navbar) navbar.classList.add("scrolled");
    if (header) header.classList.add("scrolled");
  } else {
    if (navbar) navbar.classList.remove("scrolled");
    if (header) header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", handleNavbarScroll);
window.addEventListener("load", handleNavbarScroll);

// ===============================
// ACTIVE NAV LINK ON SCROLL
// ===============================
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function setActiveNav() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href");
    if (href === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveNav);
window.addEventListener("load", setActiveNav);

// ===============================
// TYPING EFFECT
// ===============================
const typingElement = document.querySelector(".typing-text");

if (typingElement) {
  const texts = [
    "B.Tech CSE + Data Science Student",
    "Aspiring Data Analyst",
    "AI & Tech Enthusiast",
    "Frontend Learner",
    "Problem Solver"
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = texts[textIndex];
    typingElement.textContent = currentText.substring(0, charIndex);

    if (!isDeleting) {
      charIndex++;
      if (charIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1200);
        return;
      }
    } else {
      charIndex--;
      if (charIndex < 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
      }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }

  typeEffect();
}

// ===============================
// SCROLL PROGRESS BAR
// ===============================
const progressBar = document.querySelector(".scroll-progress");

function updateProgressBar() {
  if (progressBar) {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = scrollPercent + "%";
  }
}

window.addEventListener("scroll", updateProgressBar);
window.addEventListener("load", updateProgressBar);

// ===============================
// BUTTON RIPPLE EFFECT
// ===============================
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// ===============================
// CUSTOM TOAST
// ===============================
function showToast(message) {
  let toast = document.querySelector(".custom-toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "custom-toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// ===============================
// CONTACT FORM ENHANCED SUBMIT
// ===============================
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector("button[type='submit']");
    const originalText = submitBtn ? submitBtn.innerHTML : "";

    if (submitBtn) {
      submitBtn.innerHTML = "Sending...";
      submitBtn.disabled = true;
    }

    setTimeout(() => {
      showToast("Message submitted successfully!");
      contactForm.reset();

      if (submitBtn) {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    }, 1200);
  });
}

// ===============================
// BACK TO TOP BUTTON
// ===============================
const backToTop = document.querySelector(".back-to-top");

function toggleBackToTop() {
  if (backToTop) {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  }
}

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

window.addEventListener("scroll", toggleBackToTop);
window.addEventListener("load", toggleBackToTop);

// ===============================
// SIMPLE PARALLAX EFFECT FOR HERO
// ===============================
const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  if (heroSection && window.innerWidth > 768) {
    const offset = window.scrollY;
    heroSection.style.backgroundPositionY = `${offset * 0.4}px`;
  }
});