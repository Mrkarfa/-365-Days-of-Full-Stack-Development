/* ================================================
   FOODIE EXPRESS - Main Utilities
   Common functions used across all pages
   ================================================ */

// ------------------------------------------------
// Mobile Navigation
// ------------------------------------------------

/**
 * Toggle the mobile navigation menu
 * Handles hamburger icon animation
 */
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");

  if (mobileMenu && menuIcon) {
    mobileMenu.classList.toggle("hidden");

    // Toggle between menu and X icon
    if (mobileMenu.classList.contains("hidden")) {
      menuIcon.setAttribute("data-lucide", "menu");
    } else {
      menuIcon.setAttribute("data-lucide", "x");
    }

    // Refresh Lucide icons to update the icon
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }
}

// ------------------------------------------------
// Search Functionality
// ------------------------------------------------

/**
 * Handle search form submission
 * Redirects to index with search query
 * @param {Event} event - Form submit event
 */
function handleSearch(event) {
  event.preventDefault();

  const searchInput = document.getElementById("searchInput");
  if (searchInput && searchInput.value.trim()) {
    const query = encodeURIComponent(searchInput.value.trim());
    // Navigate to index with search parameter
    window.location.href = `index.html?search=${query}`;
  }
}

// ------------------------------------------------
// Scroll Utilities
// ------------------------------------------------

/**
 * Scroll smoothly to top of page
 */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/**
 * Initialize scroll-to-top button visibility
 */
function initScrollToTop() {
  const scrollBtn = document.getElementById("scrollToTop");

  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollBtn.classList.remove("opacity-0", "invisible");
        scrollBtn.classList.add("opacity-100", "visible");
      } else {
        scrollBtn.classList.remove("opacity-100", "visible");
        scrollBtn.classList.add("opacity-0", "invisible");
      }
    });
  }
}

// ------------------------------------------------
// Toast Notifications
// ------------------------------------------------

/**
 * Create toast container if it doesn't exist
 * @returns {HTMLElement} - Toast container element
 */
function getToastContainer() {
  let container = document.getElementById("toastContainer");

  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  return container;
}

/**
 * Show a toast notification
 * @param {string} message - Message to display
 * @param {string} type - Toast type: 'success', 'error', 'info'
 * @param {number} duration - Duration in ms (default: 3000)
 */
function showToast(message, type = "info", duration = 3000) {
  const container = getToastContainer();

  // Create toast element
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  // Icon based on type
  const icons = {
    success: "check-circle",
    error: "x-circle",
    info: "info",
  };

  const iconColors = {
    success: "text-green-400",
    error: "text-red-400",
    info: "text-blue-400",
  };

  toast.innerHTML = `
    <i data-lucide="${icons[type] || icons.info}" class="w-5 h-5 ${
    iconColors[type] || iconColors.info
  }"></i>
    <span>${message}</span>
    <button onclick="this.parentElement.remove()" class="ml-2 text-gray-500 hover:text-white">
      <i data-lucide="x" class="w-4 h-4"></i>
    </button>
  `;

  container.appendChild(toast);

  // Initialize Lucide icons for the toast
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // Auto-remove after duration
  setTimeout(() => {
    toast.style.animation = "slideOut 0.3s ease forwards";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ------------------------------------------------
// Formatting Utilities
// ------------------------------------------------

/**
 * Format a number as currency (USD)
 * @param {number} amount - Amount to format
 * @returns {string} - Formatted currency string
 */
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

/**
 * Format a date for display
 * @param {Date} date - Date to format
 * @returns {string} - Formatted date string
 */
function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

/**
 * Generate a random order ID
 * @returns {string} - Order ID (e.g., "FE-123456")
 */
function generateOrderId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let orderId = "FE-";
  for (let i = 0; i < 6; i++) {
    orderId += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return orderId;
}

// ------------------------------------------------
// Validation Utilities
// ------------------------------------------------

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - Is valid email
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (basic)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - Is valid phone
 */
function isValidPhone(phone) {
  const phoneRegex = /^[\d\s\-+()]{10,}$/;
  return phoneRegex.test(phone);
}

/**
 * Validate card number (Luhn algorithm check)
 * @param {string} cardNumber - Card number to validate
 * @returns {boolean} - Is valid card number
 */
function isValidCardNumber(cardNumber) {
  const cleaned = cardNumber.replace(/\s|-/g, "");
  if (!/^\d{13,19}$/.test(cleaned)) return false;

  let sum = 0;
  let isEven = false;

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
}

/**
 * Format card number with spaces
 * @param {string} cardNumber - Raw card number
 * @returns {string} - Formatted card number
 */
function formatCardNumber(cardNumber) {
  const cleaned = cardNumber.replace(/\D/g, "");
  const groups = cleaned.match(/.{1,4}/g);
  return groups ? groups.join(" ") : cleaned;
}

// ------------------------------------------------
// Storage Utilities
// ------------------------------------------------

/**
 * Save delivery details to sessionStorage
 * @param {object} details - Delivery details object
 */
function saveDeliveryDetails(details) {
  sessionStorage.setItem("deliveryDetails", JSON.stringify(details));
}

/**
 * Get delivery details from sessionStorage
 * @returns {object|null} - Delivery details or null
 */
function getDeliveryDetails() {
  const details = sessionStorage.getItem("deliveryDetails");
  return details ? JSON.parse(details) : null;
}

/**
 * Save order details to sessionStorage
 * @param {object} order - Order details object
 */
function saveOrderDetails(order) {
  sessionStorage.setItem("orderDetails", JSON.stringify(order));
}

/**
 * Get order details from sessionStorage
 * @returns {object|null} - Order details or null
 */
function getOrderDetails() {
  const details = sessionStorage.getItem("orderDetails");
  return details ? JSON.parse(details) : null;
}

// ------------------------------------------------
// Debounce Utility
// ------------------------------------------------

/**
 * Debounce function to limit execution rate
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ------------------------------------------------
// URL Parameter Utilities
// ------------------------------------------------

/**
 * Get URL parameter value
 * @param {string} name - Parameter name
 * @returns {string|null} - Parameter value or null
 */
function getUrlParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// ------------------------------------------------
// Loading State
// ------------------------------------------------

/**
 * Show loading spinner
 * @param {HTMLElement} container - Container to show spinner in
 */
function showLoading(container) {
  container.innerHTML = `
    <div class="flex items-center justify-center py-12">
      <div class="spinner"></div>
    </div>
  `;
}

/**
 * Hide loading spinner (replaces with content)
 * @param {HTMLElement} container - Container with spinner
 * @param {string} content - HTML content to show
 */
function hideLoading(container, content) {
  container.innerHTML = content;
}

// ------------------------------------------------
// Intersection Observer for Scroll Animations
// ------------------------------------------------

/**
 * Initialize fade-on-scroll animations
 */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll(".fade-on-scroll");

  if (fadeElements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  fadeElements.forEach((el) => observer.observe(el));
}

// ------------------------------------------------
// Header Scroll Effect
// ------------------------------------------------

/**
 * Add glass effect to header on scroll
 */
function initHeaderScroll() {
  const header = document.querySelector("header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("glass");
      } else {
        // Keep glass class for consistent styling
      }
    });
  }
}

// ------------------------------------------------
// Page Initialization
// ------------------------------------------------

/**
 * Common initialization for all pages
 */
function initPage() {
  // Initialize scroll-to-top button
  initScrollToTop();

  // Initialize header scroll effect
  initHeaderScroll();

  // Initialize scroll animations (fallback if GSAP not used)
  initScrollAnimations();

  // Update cart badge
  if (typeof updateCartBadge === "function") {
    updateCartBadge();
  }

  // Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// Auto-initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", initPage);

// ------------------------------------------------
// Export for module usage (if needed)
// ------------------------------------------------
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    toggleMobileMenu,
    handleSearch,
    scrollToTop,
    showToast,
    formatCurrency,
    formatDate,
    generateOrderId,
    isValidEmail,
    isValidPhone,
    isValidCardNumber,
    formatCardNumber,
    saveDeliveryDetails,
    getDeliveryDetails,
    saveOrderDetails,
    getOrderDetails,
    debounce,
    getUrlParam,
  };
}
