import gsap from "gsap";

// Page entrance animation
export const animatePageEnter = (container) => {
  gsap.fromTo(
    container,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
  );
};

// Staggered list animation (for messages, conversations)
export const animateListItems = (items, options = {}) => {
  const { delay = 0, stagger = 0.08, duration = 0.4 } = options;

  gsap.fromTo(
    items,
    { opacity: 0, y: 20, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      stagger,
      delay,
      ease: "power2.out",
    }
  );
};

// Message appear animation
export const animateMessageIn = (element, isOwn = false) => {
  const xStart = isOwn ? 30 : -30;

  gsap.fromTo(
    element,
    { opacity: 0, x: xStart, scale: 0.9 },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.4,
      ease: "back.out(1.2)",
    }
  );
};

// Sidebar slide animation
export const animateSidebar = (element, isOpen) => {
  gsap.to(element, {
    x: isOpen ? 0 : -300,
    duration: 0.4,
    ease: "power3.inOut",
  });
};

// Button pulse animation
export const animateButtonPulse = (element) => {
  const tl = gsap.timeline();
  tl.to(element, { scale: 0.95, duration: 0.1 }).to(element, {
    scale: 1,
    duration: 0.2,
    ease: "back.out(2)",
  });
  return tl;
};

// Typing indicator animation
export const animateTypingDots = (dots) => {
  gsap.to(dots, {
    y: -5,
    stagger: 0.15,
    repeat: -1,
    yoyo: true,
    duration: 0.4,
    ease: "power1.inOut",
  });
};

// Fade in animation
export const fadeIn = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, delay, ease: "power2.out" }
  );
};

// Scale in animation (for modals, popups)
export const scaleIn = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" }
  );
};

// Hover glow effect
export const glowEffect = (element, color = "rgba(99, 102, 241, 0.4)") => {
  gsap.to(element, {
    boxShadow: `0 0 30px ${color}`,
    duration: 0.3,
    ease: "power2.out",
  });
};

// Remove glow effect
export const removeGlow = (element) => {
  gsap.to(element, {
    boxShadow: "none",
    duration: 0.3,
    ease: "power2.out",
  });
};

// Loading spinner animation
export const animateLoadingSpin = (element) => {
  gsap.to(element, {
    rotation: 360,
    duration: 1,
    repeat: -1,
    ease: "none",
  });
};

// Toast notification animation
export const animateToast = (element, show = true) => {
  if (show) {
    gsap.fromTo(
      element,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.7)" }
    );
  } else {
    gsap.to(element, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
    });
  }
};
