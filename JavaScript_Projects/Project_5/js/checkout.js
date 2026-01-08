/* ================================================
   FOODIE EXPRESS - Checkout & Payment Handling
   Form validation, order processing, and payment logic
   ================================================ */

// ------------------------------------------------
// Checkout Form Handling
// ------------------------------------------------

/**
 * Initialize checkout page functionality
 */
function initCheckoutPage() {
  const checkoutForm = document.getElementById("checkoutForm");
  const deliverySlots = document.querySelectorAll(".delivery-slot");

  // Load existing delivery details if returning
  loadSavedDeliveryDetails();

  // Handle delivery slot selection
  deliverySlots.forEach((slot) => {
    slot.addEventListener("click", () => {
      deliverySlots.forEach((s) =>
        s.classList.remove("selected", "border-orange-500")
      );
      slot.classList.add("selected", "border-orange-500");
      slot.querySelector("input[type='radio']").checked = true;
    });
  });

  // Form submission
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", handleCheckoutSubmit);
  }

  // Real-time validation
  setupFormValidation();
}

/**
 * Load previously saved delivery details
 */
function loadSavedDeliveryDetails() {
  const saved = getDeliveryDetails();
  if (!saved) return;

  // Populate form fields
  const fields = [
    "fullName",
    "phone",
    "email",
    "address",
    "city",
    "pincode",
    "instructions",
  ];
  fields.forEach((field) => {
    const input = document.getElementById(field);
    if (input && saved[field]) {
      input.value = saved[field];
    }
  });
}

/**
 * Setup real-time form validation
 */
function setupFormValidation() {
  // Phone number formatting
  const phoneInput = document.getElementById("phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      // Remove non-numeric characters except + and -
      e.target.value = e.target.value.replace(/[^\d\s\-+()]/g, "");
    });
  }

  // Email validation
  const emailInput = document.getElementById("email");
  if (emailInput) {
    emailInput.addEventListener("blur", (e) => {
      if (e.target.value && !isValidEmail(e.target.value)) {
        showFieldError(e.target, "Please enter a valid email address");
      } else {
        clearFieldError(e.target);
      }
    });
  }

  // Pincode validation (6 digits)
  const pincodeInput = document.getElementById("pincode");
  if (pincodeInput) {
    pincodeInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D/g, "").slice(0, 6);
    });
  }
}

/**
 * Show error message for a form field
 * @param {HTMLElement} field - Input field
 * @param {string} message - Error message
 */
function showFieldError(field, message) {
  clearFieldError(field);

  field.classList.add("border-red-500");

  const error = document.createElement("p");
  error.className = "field-error text-sm text-red-400 mt-1";
  error.textContent = message;
  field.parentNode.appendChild(error);
}

/**
 * Clear error message for a form field
 * @param {HTMLElement} field - Input field
 */
function clearFieldError(field) {
  field.classList.remove("border-red-500");
  const existingError = field.parentNode.querySelector(".field-error");
  if (existingError) {
    existingError.remove();
  }
}

/**
 * Validate the delivery form
 * @returns {object|null} - Form data if valid, null if invalid
 */
function validateDeliveryForm() {
  const form = document.getElementById("checkoutForm");
  if (!form) return null;

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  let isValid = true;
  const errors = [];

  // Required fields validation
  const requiredFields = [
    { name: "fullName", label: "Full Name" },
    { name: "phone", label: "Phone Number" },
    { name: "address", label: "Delivery Address" },
    { name: "city", label: "City" },
    { name: "pincode", label: "Pincode" },
  ];

  requiredFields.forEach(({ name, label }) => {
    const field = document.getElementById(name);
    if (!data[name] || !data[name].trim()) {
      isValid = false;
      errors.push(`${label} is required`);
      if (field) showFieldError(field, `${label} is required`);
    } else {
      if (field) clearFieldError(field);
    }
  });

  // Email validation (if provided)
  if (data.email && !isValidEmail(data.email)) {
    isValid = false;
    errors.push("Invalid email format");
    const field = document.getElementById("email");
    if (field) showFieldError(field, "Invalid email format");
  }

  // Phone validation
  if (data.phone && !isValidPhone(data.phone)) {
    isValid = false;
    errors.push("Invalid phone number");
    const field = document.getElementById("phone");
    if (field) showFieldError(field, "Enter a valid phone number");
  }

  // Pincode validation (6 digits)
  if (data.pincode && data.pincode.length !== 6) {
    isValid = false;
    errors.push("Pincode must be 6 digits");
    const field = document.getElementById("pincode");
    if (field) showFieldError(field, "Pincode must be 6 digits");
  }

  // Delivery slot validation
  const selectedSlot = document.querySelector(".delivery-slot.selected input");
  if (selectedSlot) {
    data.deliverySlot = selectedSlot.value;
  } else {
    data.deliverySlot = "asap";
  }

  if (!isValid) {
    showToast("Please fix the errors in the form", "error");
    return null;
  }

  return data;
}

/**
 * Handle checkout form submission
 * @param {Event} e - Form submit event
 */
function handleCheckoutSubmit(e) {
  e.preventDefault();

  const data = validateDeliveryForm();
  if (!data) return;

  // Save delivery details
  saveDeliveryDetails(data);

  // Navigate to payment page
  window.location.href = "payment.html";
}

// ------------------------------------------------
// Payment Page Handling
// ------------------------------------------------

/**
 * Initialize payment page functionality
 */
function initPaymentPage() {
  const paymentMethods = document.querySelectorAll(".payment-method");
  const cardForm = document.getElementById("cardPaymentForm");
  const upiForm = document.getElementById("upiPaymentForm");
  const placeOrderBtn = document.getElementById("placeOrderBtn");

  // Handle payment method selection
  paymentMethods.forEach((method) => {
    method.addEventListener("click", () => {
      // Update selection UI
      paymentMethods.forEach((m) => {
        m.classList.remove("selected", "border-orange-500");
        m.querySelector("input[type='radio']").checked = false;
      });
      method.classList.add("selected", "border-orange-500");
      method.querySelector("input[type='radio']").checked = true;

      // Show/hide relevant forms
      const selectedValue = method.querySelector("input").value;
      togglePaymentForms(selectedValue);
    });
  });

  // Card number formatting
  const cardInput = document.getElementById("cardNumber");
  if (cardInput) {
    cardInput.addEventListener("input", (e) => {
      e.target.value = formatCardNumber(e.target.value);
    });
  }

  // Expiry date formatting (MM/YY)
  const expiryInput = document.getElementById("expiry");
  if (expiryInput) {
    expiryInput.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length >= 2) {
        value = value.slice(0, 2) + "/" + value.slice(2, 4);
      }
      e.target.value = value;
    });
  }

  // CVV input (3-4 digits)
  const cvvInput = document.getElementById("cvv");
  if (cvvInput) {
    cvvInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4);
    });
  }

  // Place order button
  if (placeOrderBtn) {
    placeOrderBtn.addEventListener("click", handlePlaceOrder);
  }

  // Render order summary
  renderPaymentOrderSummary();
}

/**
 * Toggle payment form visibility based on selected method
 * @param {string} method - Selected payment method
 */
function togglePaymentForms(method) {
  const cardForm = document.getElementById("cardPaymentForm");
  const upiForm = document.getElementById("upiPaymentForm");
  const codInfo = document.getElementById("codInfo");

  // Hide all forms first
  if (cardForm) cardForm.classList.add("hidden");
  if (upiForm) upiForm.classList.add("hidden");
  if (codInfo) codInfo.classList.add("hidden");

  // Show relevant form
  switch (method) {
    case "card":
      if (cardForm) cardForm.classList.remove("hidden");
      break;
    case "upi":
      if (upiForm) upiForm.classList.remove("hidden");
      break;
    case "cod":
      if (codInfo) codInfo.classList.remove("hidden");
      break;
  }
}

/**
 * Validate payment form based on selected method
 * @returns {boolean} - Is valid
 */
function validatePaymentForm() {
  const selectedMethod = document.querySelector(
    ".payment-method.selected input"
  );
  if (!selectedMethod) {
    showToast("Please select a payment method", "error");
    return false;
  }

  const method = selectedMethod.value;

  if (method === "card") {
    const cardNumber = document.getElementById("cardNumber").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;
    const cardName = document.getElementById("cardName").value;

    if (!cardName.trim()) {
      showToast("Please enter cardholder name", "error");
      return false;
    }

    if (!isValidCardNumber(cardNumber)) {
      showToast("Please enter a valid card number", "error");
      return false;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      showToast("Please enter valid expiry date (MM/YY)", "error");
      return false;
    }

    if (!/^\d{3,4}$/.test(cvv)) {
      showToast("Please enter valid CVV", "error");
      return false;
    }
  }

  if (method === "upi") {
    const upiId = document.getElementById("upiId").value;
    if (!upiId.includes("@")) {
      showToast("Please enter a valid UPI ID", "error");
      return false;
    }
  }

  return true;
}

/**
 * Handle place order button click
 */
function handlePlaceOrder() {
  // Validate payment
  if (!validatePaymentForm()) return;

  // Check if cart has items
  if (isCartEmpty()) {
    showToast("Your cart is empty", "error");
    return;
  }

  // Get payment method
  const selectedMethod = document.querySelector(
    ".payment-method.selected input"
  );
  const paymentMethod = selectedMethod ? selectedMethod.value : "cod";

  // Show loading state
  const btn = document.getElementById("placeOrderBtn");
  const originalText = btn.innerHTML;
  btn.innerHTML = '<div class="spinner w-5 h-5"></div> Processing...';
  btn.disabled = true;

  // Simulate payment processing (1.5 seconds)
  setTimeout(() => {
    // Generate order details
    const order = {
      orderId: generateOrderId(),
      items: getCartWithDetails(),
      subtotal: getCartSubtotal(),
      deliveryFee: getDeliveryFee(),
      total: getCartTotal(),
      paymentMethod: paymentMethod,
      deliveryDetails: getDeliveryDetails(),
      orderDate: new Date().toISOString(),
      estimatedDelivery: getEstimatedDeliveryTime(),
    };

    // Save order
    saveOrderDetails(order);

    // Clear cart
    clearCart();

    // Redirect to success page
    window.location.href = "order-confirmed.html";
  }, 1500);
}

/**
 * Get estimated delivery time
 * @returns {string} - Estimated time string
 */
function getEstimatedDeliveryTime() {
  const now = new Date();
  const minTime = new Date(now.getTime() + 30 * 60000); // 30 minutes
  const maxTime = new Date(now.getTime() + 45 * 60000); // 45 minutes

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return `${formatTime(minTime)} - ${formatTime(maxTime)}`;
}

/**
 * Render order summary on payment page
 */
function renderPaymentOrderSummary() {
  const container = document.getElementById("paymentOrderSummary");
  if (!container) return;

  const items = getCartWithDetails();
  const subtotal = getCartSubtotal();
  const deliveryFee = getDeliveryFee();
  const total = getCartTotal();

  container.innerHTML = `
    <h3 class="text-lg font-semibold mb-4">Order Summary</h3>
    
    <div class="space-y-3 mb-4 max-h-48 overflow-y-auto">
      ${items
        .map(
          (item) => `
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
            <img src="../${item.image}" alt="${
            item.name
          }" class="w-full h-full object-cover"
              onerror="this.src='https://placehold.co/48x48/1a1a1a/f97316?text=Food'" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="font-medium truncate text-sm">${item.name}</p>
            <p class="text-xs text-gray-500">Qty: ${item.quantity}</p>
          </div>
          <span class="text-sm font-medium">$${item.itemTotal.toFixed(2)}</span>
        </div>
      `
        )
        .join("")}
    </div>

    <div class="border-t border-dark-border pt-4 space-y-2">
      <div class="flex justify-between text-sm text-gray-400">
        <span>Subtotal</span>
        <span>$${subtotal.toFixed(2)}</span>
      </div>
      <div class="flex justify-between text-sm text-gray-400">
        <span>Delivery</span>
        <span>${
          deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`
        }</span>
      </div>
      <div class="flex justify-between font-semibold text-lg pt-2 border-t border-dark-border">
        <span>Total</span>
        <span class="text-orange-400">$${total.toFixed(2)}</span>
      </div>
    </div>
  `;

  // Reinitialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// ------------------------------------------------
// Order Confirmed Page
// ------------------------------------------------

/**
 * Initialize order confirmed page
 */
function initOrderConfirmedPage() {
  const order = getOrderDetails();

  if (!order) {
    // No order found, redirect to home
    showToast("No order found", "error");
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 2000);
    return;
  }

  // Render order details
  renderOrderConfirmation(order);

  // Initialize success animations
  if (typeof initSuccessAnimations === "function") {
    initSuccessAnimations();
  } else if (
    window.foodieAnimations &&
    window.foodieAnimations.initSuccessAnimations
  ) {
    window.foodieAnimations.initSuccessAnimations();
  }

  // Clear order from session after display
  // sessionStorage.removeItem('orderDetails');
}

/**
 * Render order confirmation details
 * @param {object} order - Order details
 */
function renderOrderConfirmation(order) {
  // Order ID
  const orderIdEl = document.getElementById("displayOrderId");
  if (orderIdEl) {
    orderIdEl.textContent = order.orderId;
  }

  // Estimated delivery
  const deliveryTimeEl = document.getElementById("estimatedDelivery");
  if (deliveryTimeEl) {
    deliveryTimeEl.textContent = order.estimatedDelivery;
  }

  // Delivery address
  const addressEl = document.getElementById("deliveryAddress");
  if (addressEl && order.deliveryDetails) {
    const d = order.deliveryDetails;
    addressEl.innerHTML = `
      <p class="font-medium">${d.fullName}</p>
      <p class="text-gray-400">${d.address}</p>
      <p class="text-gray-400">${d.city} - ${d.pincode}</p>
      <p class="text-gray-400">${d.phone}</p>
    `;
  }

  // Order items summary
  const itemsEl = document.getElementById("orderItems");
  if (itemsEl && order.items) {
    itemsEl.innerHTML = order.items
      .map(
        (item) => `
      <div class="flex items-center gap-3 py-2 border-b border-dark-border last:border-0">
        <div class="w-10 h-10 rounded-lg overflow-hidden">
          <img src="../${item.image}" alt="${
          item.name
        }" class="w-full h-full object-cover"
            onerror="this.src='https://placehold.co/40x40/1a1a1a/f97316?text=Food'" />
        </div>
        <div class="flex-1">
          <p class="font-medium text-sm">${item.name}</p>
          <p class="text-xs text-gray-500">x${item.quantity}</p>
        </div>
        <span class="text-sm">$${item.itemTotal.toFixed(2)}</span>
      </div>
    `
      )
      .join("");
  }

  // Total amount
  const totalEl = document.getElementById("orderTotal");
  if (totalEl) {
    totalEl.textContent = `$${order.total.toFixed(2)}`;
  }

  // Payment method
  const paymentEl = document.getElementById("paymentMethod");
  if (paymentEl) {
    const methodNames = {
      card: "Credit/Debit Card",
      upi: "UPI",
      cod: "Cash on Delivery",
    };
    paymentEl.textContent =
      methodNames[order.paymentMethod] || order.paymentMethod;
  }
}

// ------------------------------------------------
// Page-specific initialization
// ------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Detect current page and initialize appropriate functionality
  const path = window.location.pathname;

  if (path.includes("checkout.html")) {
    initCheckoutPage();
  } else if (path.includes("payment.html")) {
    initPaymentPage();
  } else if (path.includes("order-confirmed.html")) {
    initOrderConfirmedPage();
  }
});
