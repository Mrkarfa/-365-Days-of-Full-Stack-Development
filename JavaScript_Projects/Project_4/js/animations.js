/* ============================================
   ElectroMart - GSAP Animations
   ============================================ */

// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  // Check if GSAP is loaded
  if (typeof gsap === "undefined") {
    console.warn("GSAP not loaded, animations disabled");
    return;
  }

  // Register ScrollTrigger plugin if available
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  initAnimations();
});

function initAnimations() {
  // Hero section fade in animation
  animateHero();

  // Product cards stagger animation
  animateProductCards();

  // Categories animation
  animateCategories();

  // Scroll-triggered animations
  initScrollAnimations();
}

// Hero section animation
function animateHero() {
  const heroTitle = document.querySelector(".hero-title");
  const heroSubtitle = document.querySelector(".hero-subtitle");
  const heroCTA = document.querySelector(".hero-cta");
  const heroImage = document.querySelector(".hero-image");

  if (heroTitle) {
    gsap.from(heroTitle, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }

  if (heroSubtitle) {
    gsap.from(heroSubtitle, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });
  }

  if (heroCTA) {
    gsap.from(heroCTA, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
    });
  }

  if (heroImage) {
    gsap.from(heroImage, {
      x: 100,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
    });
  }
}

// Product cards stagger animation
function animateProductCards() {
  const cards = document.querySelectorAll(".product-card");

  if (cards.length === 0) return;

  gsap.from(cards, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: cards[0].parentElement,
      start: "top 80%",
    },
  });
}

// Categories animation
function animateCategories() {
  const categories = document.querySelectorAll(".category-card");

  if (categories.length === 0) return;

  gsap.from(categories, {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: categories[0].parentElement,
      start: "top 80%",
    },
  });
}

// Scroll-triggered animations
function initScrollAnimations() {
  // Fade in on scroll
  const fadeElements = document.querySelectorAll(".fade-on-scroll");
  fadeElements.forEach((el) => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    });
  });

  // Section headings
  const sectionHeadings = document.querySelectorAll(".section-heading");
  sectionHeadings.forEach((heading) => {
    gsap.from(heading, {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 85%",
      },
    });
  });
}

// Button hover animation
function addButtonHoverEffect() {
  const buttons = document.querySelectorAll(".btn-primary");

  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out",
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    });
  });
}

// Page transition animation
function pageTransitionIn() {
  const content = document.querySelector("main");
  if (content) {
    gsap.from(content, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out",
    });
  }
}

// Success checkmark animation
function animateSuccess() {
  const checkmark = document.querySelector(".success-checkmark");
  const successContent = document.querySelector(".success-content");

  if (checkmark) {
    gsap.from(checkmark, {
      scale: 0,
      rotation: -180,
      duration: 0.8,
      ease: "back.out(1.7)",
    });
  }

  if (successContent) {
    gsap.from(successContent.children, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.4,
      ease: "power3.out",
    });
  }
}

// 404 animation
function animate404() {
  const errorCode = document.querySelector(".error-404");
  const errorContent = document.querySelector(".error-content");

  if (errorCode) {
    gsap.from(errorCode, {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    });
  }

  if (errorContent) {
    gsap.from(errorContent.children, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.5,
      ease: "power3.out",
    });
  }
}

// Export to window
window.initAnimations = initAnimations;
window.animateHero = animateHero;
window.animateProductCards = animateProductCards;
window.animateSuccess = animateSuccess;
window.animate404 = animate404;
window.pageTransitionIn = pageTransitionIn;
