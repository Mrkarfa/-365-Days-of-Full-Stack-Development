/* ============================================
   ElectroMart - Checkout & Form Handling
   ============================================ */

const CHECKOUT_STORAGE_KEY = "electromart_checkout";

// Get checkout data from storage
function getCheckoutData() {
  const data = localStorage.getItem(CHECKOUT_STORAGE_KEY);
  return data ? JSON.parse(data) : { shipping: null, payment: null };
}

// Save checkout data
function saveCheckoutData(data) {
  const existing = getCheckoutData();
  const updated = { ...existing, ...data };
  localStorage.setItem(CHECKOUT_STORAGE_KEY, JSON.stringify(updated));
}

// Clear checkout data
function clearCheckoutData() {
  localStorage.removeItem(CHECKOUT_STORAGE_KEY);
}

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate phone number
function isValidPhone(phone) {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone);
}

// Validate card number (basic Luhn check)
function isValidCardNumber(cardNumber) {
  const cleaned = cardNumber.replace(/\s/g, "");
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

// Validate expiry date
function isValidExpiry(expiry) {
  const match = expiry.match(/^(\d{2})\/(\d{2})$/);
  if (!match) return false;

  const month = parseInt(match[1], 10);
  const year = parseInt("20" + match[2], 10);

  if (month < 1 || month > 12) return false;

  const now = new Date();
  const expiryDate = new Date(year, month);
  return expiryDate > now;
}

// Validate CVV
function isValidCVV(cvv) {
  return /^\d{3,4}$/.test(cvv);
}

// Format card number input
function formatCardNumber(input) {
  const value = input.value.replace(/\s/g, "").replace(/\D/g, "");
  const formatted = value.match(/.{1,4}/g)?.join(" ") || value;
  input.value = formatted.substring(0, 19);
}

// Format expiry date input
function formatExpiry(input) {
  let value = input.value.replace(/\D/g, "");
  if (value.length >= 2) {
    value = value.substring(0, 2) + "/" + value.substring(2, 4);
  }
  input.value = value;
}

// Show form error
function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorEl = document.getElementById(fieldId + "-error");
  if (field) field.classList.add("border-red-500");
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.remove("hidden");
  }
}

// Clear form error
function clearFieldError(fieldId) {
  const field = document.getElementById(fieldId);
  const errorEl = document.getElementById(fieldId + "-error");
  if (field) field.classList.remove("border-red-500");
  if (errorEl) errorEl.classList.add("hidden");
}

// Validate shipping form
function validateShippingForm() {
  let isValid = true;
  const fields = [
    "fullName",
    "email",
    "phone",
    "address",
    "city",
    "state",
    "zipCode",
  ];

  fields.forEach((field) => clearFieldError(field));

  const fullName = document.getElementById("fullName")?.value.trim();
  if (!fullName || fullName.length < 2) {
    showFieldError("fullName", "Please enter your full name");
    isValid = false;
  }

  const email = document.getElementById("email")?.value.trim();
  if (!email || !isValidEmail(email)) {
    showFieldError("email", "Please enter a valid email");
    isValid = false;
  }

  const phone = document.getElementById("phone")?.value.trim();
  if (!phone || !isValidPhone(phone)) {
    showFieldError("phone", "Please enter a valid phone number");
    isValid = false;
  }

  const address = document.getElementById("address")?.value.trim();
  if (!address || address.length < 5) {
    showFieldError("address", "Please enter your address");
    isValid = false;
  }

  const city = document.getElementById("city")?.value.trim();
  if (!city) {
    showFieldError("city", "Please enter your city");
    isValid = false;
  }

  const state = document.getElementById("state")?.value.trim();
  if (!state) {
    showFieldError("state", "Please enter your state");
    isValid = false;
  }

  const zipCode = document.getElementById("zipCode")?.value.trim();
  if (!zipCode || zipCode.length < 5) {
    showFieldError("zipCode", "Please enter a valid ZIP code");
    isValid = false;
  }

  return isValid;
}

// Save shipping info and proceed
function submitShippingForm(e) {
  e.preventDefault();

  if (!validateShippingForm()) return;

  const shippingData = {
    fullName: document.getElementById("fullName").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    address: document.getElementById("address").value.trim(),
    city: document.getElementById("city").value.trim(),
    state: document.getElementById("state").value.trim(),
    zipCode: document.getElementById("zipCode").value.trim(),
  };

  saveCheckoutData({ shipping: shippingData });
  window.location.href = "payment.html";
}

// Validate payment form
function validatePaymentForm() {
  let isValid = true;
  const paymentMethod = document.querySelector(
    'input[name="paymentMethod"]:checked'
  )?.value;

  if (paymentMethod === "card") {
    clearFieldError("cardNumber");
    clearFieldError("expiry");
    clearFieldError("cvv");

    const cardNumber = document.getElementById("cardNumber")?.value.trim();
    if (!isValidCardNumber(cardNumber)) {
      showFieldError("cardNumber", "Please enter a valid card number");
      isValid = false;
    }

    const expiry = document.getElementById("expiry")?.value.trim();
    if (!isValidExpiry(expiry)) {
      showFieldError("expiry", "Please enter a valid expiry date");
      isValid = false;
    }

    const cvv = document.getElementById("cvv")?.value.trim();
    if (!isValidCVV(cvv)) {
      showFieldError("cvv", "Please enter a valid CVV");
      isValid = false;
    }
  }

  return isValid;
}

// Process payment
function processPayment(e) {
  e.preventDefault();

  if (!validatePaymentForm()) return;

  const paymentMethod = document.querySelector(
    'input[name="paymentMethod"]:checked'
  )?.value;

  const paymentData = { method: paymentMethod };

  if (paymentMethod === "card") {
    paymentData.cardNumber = document
      .getElementById("cardNumber")
      .value.replace(/\s/g, "")
      .slice(-4);
  }

  saveCheckoutData({ payment: paymentData });

  // Generate order ID
  const orderId = "EM" + Date.now().toString(36).toUpperCase();
  localStorage.setItem(
    "electromart_lastOrder",
    JSON.stringify({
      orderId,
      date: new Date().toISOString(),
      total: getCartTotal().total,
      items: getCartItemsWithDetails(),
    })
  );

  // Clear cart and checkout data
  clearCart();
  clearCheckoutData();

  // Redirect to confirmation
  window.location.href = "order-confirmed.html";
}

// Export to window
window.getCheckoutData = getCheckoutData;
window.saveCheckoutData = saveCheckoutData;
window.clearCheckoutData = clearCheckoutData;
window.formatCardNumber = formatCardNumber;
window.formatExpiry = formatExpiry;
window.validateShippingForm = validateShippingForm;
window.submitShippingForm = submitShippingForm;
window.validatePaymentForm = validatePaymentForm;
window.processPayment = processPayment;
