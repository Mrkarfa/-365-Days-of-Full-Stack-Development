/* ================================================
   FOODIE EXPRESS - GSAP Animations
   Smooth and interactive animations for the website
   Uses GSAP 3.12+ and ScrollTrigger plugin
   ================================================ */

// ------------------------------------------------
// Wait for GSAP to be available
// ------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Ensure GSAP is loaded before initializing
  if (typeof gsap === "undefined") {
    console.warn("GSAP not loaded. Animations will be skipped.");
    return;
  }

  // Register ScrollTrigger plugin if available
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Initialize all animations
  initAllAnimations();
});

/**
 * Master function to initialize all animations
 */
function initAllAnimations() {
  initHeroAnimations();
  initScrollAnimationsGSAP();
  initCardHoverEffects();
  initNavbarAnimation();
  initCategoryCardAnimations();
  initButtonEffects();
}

// ------------------------------------------------
// Hero Section Animations
// ------------------------------------------------

/**
 * Animate the hero section elements on page load
 */
function initHeroAnimations() {
  const heroTitle = document.querySelector(".hero-title");
  const heroSubtitle = document.querySelector(".hero-subtitle");
  const heroCta = document.querySelector(".hero-cta");
  const heroImage = document.querySelector(".hero-image");

  // Create a timeline for sequenced animations
  const heroTl = gsap.timeline({
    defaults: {
      ease: "power3.out",
      duration: 1,
    },
  });

  // Animate hero content from left
  if (heroTitle) {
    heroTl.fromTo(heroTitle, { opacity: 0, x: -50 }, { opacity: 1, x: 0 }, 0);
  }

  if (heroSubtitle) {
    heroTl.fromTo(
      heroSubtitle,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0 },
      0.2
    );
  }

  if (heroCta) {
    heroTl.fromTo(heroCta, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 0.4);
  }

  // Animate hero image from right with scale
  if (heroImage) {
    heroTl.fromTo(
      heroImage,
      { opacity: 0, x: 50, scale: 0.9 },
      { opacity: 1, x: 0, scale: 1, duration: 1.2 },
      0.1
    );

    // Add floating animation to hero image
    gsap.to(heroImage, {
      y: -15,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }
}

// ------------------------------------------------
// Scroll-Triggered Animations
// ------------------------------------------------

/**
 * Initialize scroll-triggered animations using GSAP ScrollTrigger
 */
function initScrollAnimationsGSAP() {
  // Skip if ScrollTrigger not available
  if (typeof ScrollTrigger === "undefined") {
    console.warn("ScrollTrigger not loaded. Using fallback animations.");
    return;
  }

  // Animate section headings
  gsap.utils.toArray(".section-heading").forEach((heading) => {
    gsap.fromTo(
      heading,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Animate product cards with stagger
  const productGrids = document.querySelectorAll("#productsGrid, #cartItems");
  productGrids.forEach((grid) => {
    const cards = grid.querySelectorAll(".product-card, .cart-item");
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  });

  // Animate category cards
  const categoryGrid = document.getElementById("categoriesGrid");
  if (categoryGrid) {
    const categoryCards = categoryGrid.querySelectorAll(".category-card");
    gsap.fromTo(
      categoryCards,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: categoryGrid,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }

  // Animate "Why Choose Us" section
  const featureCards = document.querySelectorAll(".fade-on-scroll");
  featureCards.forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Parallax effect for hero section
  const heroSection = document.querySelector(
    "section.relative.min-h-\\[80vh\\]"
  );
  if (heroSection) {
    gsap.to(heroSection.querySelector(".hero-image"), {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }
}

// ------------------------------------------------
// Card Hover Effects
// ------------------------------------------------

/**
 * Initialize hover effects for product cards
 */
function initCardHoverEffects() {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    // Create 3D tilt effect on hover
    card.addEventListener("mouseenter", (e) => {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", (e) => {
      gsap.to(card, {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    // Optional: 3D tilt based on mouse position
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.2,
        ease: "power2.out",
        transformPerspective: 1000,
      });
    });
  });
}

// ------------------------------------------------
// Navigation Animations
// ------------------------------------------------

/**
 * Initialize navbar animations
 */
function initNavbarAnimation() {
  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll("nav a");

  // Animate nav links on load
  if (navLinks.length > 0) {
    gsap.fromTo(
      navLinks,
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3,
      }
    );
  }

  // Header background on scroll
  if (header && typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.create({
      start: "top -50",
      onEnter: () => {
        gsap.to(header, {
          backgroundColor: "rgba(10, 10, 10, 0.95)",
          backdropFilter: "blur(20px)",
          duration: 0.3,
        });
      },
      onLeaveBack: () => {
        gsap.to(header, {
          backgroundColor: "rgba(20, 20, 20, 0.8)",
          backdropFilter: "blur(20px)",
          duration: 0.3,
        });
      },
    });
  }
}

// ------------------------------------------------
// Category Card Animations
// ------------------------------------------------

/**
 * Initialize category card hover animations
 */
function initCategoryCardAnimations() {
  const categoryCards = document.querySelectorAll(".category-card");

  categoryCards.forEach((card) => {
    const icon = card.querySelector("div[class*='rounded-full']");

    card.addEventListener("mouseenter", () => {
      if (icon) {
        gsap.to(icon, {
          scale: 1.1,
          rotate: 5,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      }
    });

    card.addEventListener("mouseleave", () => {
      if (icon) {
        gsap.to(icon, {
          scale: 1,
          rotate: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    });
  });
}

// ------------------------------------------------
// Button Effects
// ------------------------------------------------

/**
 * Initialize button click/hover effects
 */
function initButtonEffects() {
  const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

  buttons.forEach((button) => {
    // Ripple effect on click
    button.addEventListener("click", (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create ripple element
      const ripple = document.createElement("span");
      ripple.style.cssText = `
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        left: ${x}px;
        top: ${y}px;
        transform: translate(-50%, -50%);
        pointer-events: none;
      `;

      button.style.position = "relative";
      button.style.overflow = "hidden";
      button.appendChild(ripple);

      // Animate ripple
      gsap.to(ripple, {
        width: 200,
        height: 200,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => ripple.remove(),
      });
    });
  });
}

// ------------------------------------------------
// Cart Animations
// ------------------------------------------------

/**
 * Animate adding item to cart
 * @param {HTMLElement} button - The add to cart button
 */
function animateAddToCart(button) {
  if (typeof gsap === "undefined") return;

  // Button pulse effect
  gsap.to(button, {
    scale: 1.1,
    duration: 0.15,
    yoyo: true,
    repeat: 1,
    ease: "power2.out",
  });

  // Cart badge bounce
  const cartBadge = document.querySelector(".cart-badge");
  if (cartBadge && !cartBadge.classList.contains("hidden")) {
    gsap.fromTo(
      cartBadge,
      { scale: 1.5 },
      { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.5)" }
    );
  }
}

/**
 * Animate cart item removal
 * @param {HTMLElement} item - Cart item element
 * @param {Function} callback - Callback after animation
 */
function animateCartItemRemove(item, callback) {
  if (typeof gsap === "undefined") {
    if (callback) callback();
    return;
  }

  gsap.to(item, {
    opacity: 0,
    x: -50,
    height: 0,
    padding: 0,
    margin: 0,
    duration: 0.4,
    ease: "power2.inOut",
    onComplete: () => {
      item.remove();
      if (callback) callback();
    },
  });
}

// ------------------------------------------------
// Success Page Animations
// ------------------------------------------------

/**
 * Animate the success page elements
 */
function initSuccessAnimations() {
  if (typeof gsap === "undefined") return;

  const checkmark = document.querySelector(".success-checkmark");
  const successTitle = document.querySelector(".success-title");
  const orderDetails = document.querySelector(".order-details");

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Checkmark scale animation
  if (checkmark) {
    tl.fromTo(
      checkmark,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" }
    );
  }

  // Title fade in
  if (successTitle) {
    tl.fromTo(
      successTitle,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    );
  }

  // Order details slide up
  if (orderDetails) {
    tl.fromTo(
      orderDetails,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.2"
    );
  }

  // Confetti effect (optional fun animation)
  createConfetti();
}

/**
 * Create confetti effect for success page
 */
function createConfetti() {
  const colors = ["#f97316", "#fb923c", "#fbbf24", "#22c55e", "#3b82f6"];
  const container = document.body;

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.style.cssText = `
      position: fixed;
      width: ${Math.random() * 10 + 5}px;
      height: ${Math.random() * 10 + 5}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}vw;
      top: -20px;
      border-radius: ${Math.random() > 0.5 ? "50%" : "0"};
      pointer-events: none;
      z-index: 9999;
    `;
    container.appendChild(confetti);

    gsap.to(confetti, {
      y: `${Math.random() * 100 + 100}vh`,
      x: `${(Math.random() - 0.5) * 200}px`,
      rotation: Math.random() * 720,
      duration: Math.random() * 2 + 2,
      ease: "power1.out",
      onComplete: () => confetti.remove(),
    });
  }
}

// ------------------------------------------------
// Page Transition Animations
// ------------------------------------------------

/**
 * Animate page entrance
 */
function animatePageEntrance() {
  if (typeof gsap === "undefined") return;

  const main = document.querySelector("main");
  if (main) {
    gsap.fromTo(
      main,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }
}

// ------------------------------------------------
// Text Animation Utilities
// ------------------------------------------------

/**
 * Split text into animated characters
 * @param {HTMLElement} element - Text element to animate
 */
function animateTextReveal(element) {
  if (typeof gsap === "undefined" || !element) return;

  const text = element.textContent;
  element.textContent = "";

  const chars = text.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    element.appendChild(span);
    return span;
  });

  gsap.fromTo(
    chars,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.03,
      duration: 0.5,
      ease: "power2.out",
    }
  );
}

// ------------------------------------------------
// Export animations for external use
// ------------------------------------------------
window.foodieAnimations = {
  initHeroAnimations,
  initScrollAnimationsGSAP,
  initCardHoverEffects,
  animateAddToCart,
  animateCartItemRemove,
  initSuccessAnimations,
  animatePageEntrance,
  animateTextReveal,
  createConfetti,
};
