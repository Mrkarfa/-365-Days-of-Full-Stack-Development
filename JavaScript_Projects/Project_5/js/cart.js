/* ================================================
   FOODIE EXPRESS - Cart Management
   Handles all shopping cart functionality
   Uses localStorage for data persistence
   ================================================ */

// ------------------------------------------------
// Constants
// ------------------------------------------------
const CART_STORAGE_KEY = "foodieExpressCart";
const DELIVERY_FEE = 2.99;
const FREE_DELIVERY_THRESHOLD = 30;

// ------------------------------------------------
// Cart Data Structure
// Cart items are stored as: { productId, quantity }
// ------------------------------------------------

/**
 * Get the current cart from localStorage
 * @returns {array} - Array of cart items
 */
function getCart() {
  try {
    const cart = localStorage.getItem(CART_STORAGE_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error("Error reading cart from localStorage:", error);
    return [];
  }
}

/**
 * Save the cart to localStorage
 * @param {array} cart - Array of cart items to save
 */
function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    // Update the cart badge in the header
    updateCartBadge();
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
}

/**
 * Add an item to the cart
 * If item already exists, increase quantity
 * @param {number} productId - ID of the product to add
 * @param {number} quantity - Quantity to add (default: 1)
 * @returns {boolean} - Success status
 */
function addToCart(productId, quantity = 1) {
  // Validate product exists
  const product = getProductById(productId);
  if (!product) {
    console.error("Product not found:", productId);
    return false;
  }

  const cart = getCart();
  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    // Update quantity if item already in cart
    existingItem.quantity += quantity;
  } else {
    // Add new item to cart
    cart.push({ productId, quantity });
  }

  saveCart(cart);

  // Show success toast notification
  showToast(`${product.name} added to cart!`, "success");

  return true;
}

/**
 * Remove an item completely from the cart
 * @param {number} productId - ID of the product to remove
 * @returns {boolean} - Success status
 */
function removeFromCart(productId) {
  const cart = getCart();
  const itemIndex = cart.findIndex((item) => item.productId === productId);

  if (itemIndex === -1) {
    console.error("Item not found in cart:", productId);
    return false;
  }

  const product = getProductById(productId);
  cart.splice(itemIndex, 1);
  saveCart(cart);

  // Show info toast
  if (product) {
    showToast(`${product.name} removed from cart`, "info");
  }

  return true;
}

/**
 * Update the quantity of a cart item
 * If quantity is 0 or less, remove the item
 * @param {number} productId - ID of the product
 * @param {number} newQuantity - New quantity value
 * @returns {boolean} - Success status
 */
function updateQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    return removeFromCart(productId);
  }

  const cart = getCart();
  const item = cart.find((item) => item.productId === productId);

  if (!item) {
    console.error("Item not found in cart:", productId);
    return false;
  }

  item.quantity = newQuantity;
  saveCart(cart);

  return true;
}

/**
 * Increase item quantity by 1
 * @param {number} productId - ID of the product
 */
function increaseQuantity(productId) {
  const cart = getCart();
  const item = cart.find((item) => item.productId === productId);

  if (item) {
    updateQuantity(productId, item.quantity + 1);
  }
}

/**
 * Decrease item quantity by 1
 * @param {number} productId - ID of the product
 */
function decreaseQuantity(productId) {
  const cart = getCart();
  const item = cart.find((item) => item.productId === productId);

  if (item) {
    updateQuantity(productId, item.quantity - 1);
  }
}

/**
 * Get the total count of items in the cart
 * @returns {number} - Total number of items
 */
function getCartCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
}

/**
 * Get the subtotal price (before delivery)
 * @returns {number} - Subtotal amount
 */
function getCartSubtotal() {
  const cart = getCart();
  return cart.reduce((total, item) => {
    const product = getProductById(item.productId);
    if (product) {
      return total + product.price * item.quantity;
    }
    return total;
  }, 0);
}

/**
 * Get the delivery fee based on order subtotal
 * Free delivery for orders over threshold
 * @returns {number} - Delivery fee
 */
function getDeliveryFee() {
  const subtotal = getCartSubtotal();
  return subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
}

/**
 * Get the total price including delivery
 * @returns {number} - Total order amount
 */
function getCartTotal() {
  return getCartSubtotal() + getDeliveryFee();
}

/**
 * Clear all items from the cart
 */
function clearCart() {
  saveCart([]);
  showToast("Cart cleared", "info");
}

/**
 * Get cart items with full product details
 * @returns {array} - Array of cart items with product info
 */
function getCartWithDetails() {
  const cart = getCart();
  return cart
    .map((item) => {
      const product = getProductById(item.productId);
      if (product) {
        return {
          ...product,
          quantity: item.quantity,
          itemTotal: product.price * item.quantity,
        };
      }
      return null;
    })
    .filter((item) => item !== null);
}

/**
 * Check if cart is empty
 * @returns {boolean}
 */
function isCartEmpty() {
  return getCart().length === 0;
}

// ------------------------------------------------
// UI Update Functions
// ------------------------------------------------

/**
 * Update the cart badge count in the header
 */
function updateCartBadge() {
  const badges = document.querySelectorAll(".cart-badge");
  const count = getCartCount();

  badges.forEach((badge) => {
    if (count > 0) {
      badge.textContent = count > 99 ? "99+" : count;
      badge.classList.remove("hidden");
      // Add bounce animation
      badge.classList.add("animate-bounce");
      setTimeout(() => badge.classList.remove("animate-bounce"), 500);
    } else {
      badge.classList.add("hidden");
    }
  });
}

/**
 * Quick add to cart from product card
 * @param {number} productId - Product ID
 */
function addToCartFromCard(productId) {
  addToCart(productId, 1);

  // Trigger cart animation if GSAP is available
  if (typeof gsap !== "undefined") {
    const button = event.target.closest("button");
    if (button) {
      gsap.fromTo(
        button,
        { scale: 1 },
        { scale: 1.2, duration: 0.1, yoyo: true, repeat: 1 }
      );
    }
  }
}

/**
 * Render a cart item row HTML
 * @param {object} item - Cart item with product details
 * @returns {string} - HTML string
 */
function renderCartItem(item) {
  return `
    <div class="cart-item flex gap-4 p-4 bg-dark-card border border-dark-border rounded-xl" data-product-id="${
      item.id
    }">
      <div class="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="w-full h-full object-cover"
          onerror="this.src='https://placehold.co/96x96/1a1a1a/f97316?text=${encodeURIComponent(
            item.name
          )}'"
        />
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-start justify-between gap-2">
          <div>
            <h3 class="font-semibold truncate">${item.name}</h3>
            <p class="text-sm text-gray-500">${item.category}</p>
          </div>
          <button 
            onclick="removeFromCart(${item.id}); renderCartPage();" 
            class="text-gray-500 hover:text-red-400 transition-colors"
            aria-label="Remove item"
          >
            <i data-lucide="trash-2" class="w-5 h-5"></i>
          </button>
        </div>
        <div class="flex items-center justify-between mt-3">
          <div class="quantity-selector">
            <button 
              onclick="decreaseQuantity(${item.id}); renderCartPage();" 
              class="quantity-btn"
              aria-label="Decrease quantity"
            >
              <i data-lucide="minus" class="w-4 h-4"></i>
            </button>
            <span class="quantity-value">${item.quantity}</span>
            <button 
              onclick="increaseQuantity(${item.id}); renderCartPage();" 
              class="quantity-btn"
              aria-label="Increase quantity"
            >
              <i data-lucide="plus" class="w-4 h-4"></i>
            </button>
          </div>
          <span class="price">$${item.itemTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render the order summary sidebar
 * @returns {string} - HTML string
 */
function renderOrderSummary() {
  const subtotal = getCartSubtotal();
  const deliveryFee = getDeliveryFee();
  const total = getCartTotal();
  const freeDeliveryRemaining = FREE_DELIVERY_THRESHOLD - subtotal;

  return `
    <div class="bg-dark-card border border-dark-border rounded-xl p-6 sticky top-24">
      <h3 class="text-lg font-semibold mb-4">Order Summary</h3>
      
      ${
        freeDeliveryRemaining > 0
          ? `
        <div class="mb-4 p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
          <p class="text-sm text-orange-400">
            <i data-lucide="truck" class="w-4 h-4 inline mr-1"></i>
            Add $${freeDeliveryRemaining.toFixed(2)} more for free delivery!
          </p>
        </div>
      `
          : `
        <div class="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p class="text-sm text-green-400">
            <i data-lucide="check-circle" class="w-4 h-4 inline mr-1"></i>
            You've unlocked free delivery!
          </p>
        </div>
      `
      }

      <div class="space-y-3 mb-4">
        <div class="flex justify-between text-gray-400">
          <span>Subtotal</span>
          <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="flex justify-between text-gray-400">
          <span>Delivery Fee</span>
          <span>${
            deliveryFee === 0
              ? '<span class="text-green-400">FREE</span>'
              : `$${deliveryFee.toFixed(2)}`
          }</span>
        </div>
        <div class="border-t border-dark-border pt-3">
          <div class="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span class="text-orange-400">$${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <a href="checkout.html" class="btn btn-primary w-full text-center mb-3">
        <i data-lucide="shopping-bag" class="w-5 h-5"></i>
        Proceed to Checkout
      </a>
      
      <a href="../index.html" class="btn btn-secondary w-full text-center">
        <i data-lucide="arrow-left" class="w-5 h-5"></i>
        Continue Shopping
      </a>
    </div>
  `;
}

/**
 * Render the empty cart state
 * @returns {string} - HTML string
 */
function renderEmptyCart() {
  return `
    <div class="empty-state col-span-full">
      <div class="empty-state-icon">
        <i data-lucide="shopping-cart" class="w-full h-full"></i>
      </div>
      <h2 class="text-2xl font-bold mb-2">Your cart is empty</h2>
      <p class="text-gray-400 mb-6">Looks like you haven't added anything to your cart yet.</p>
      <a href="../index.html" class="btn btn-primary">
        <i data-lucide="utensils" class="w-5 h-5"></i>
        Browse Menu
      </a>
    </div>
  `;
}

/**
 * Main function to render the cart page content
 */
function renderCartPage() {
  const cartContainer = document.getElementById("cartItems");
  const summaryContainer = document.getElementById("orderSummary");

  if (!cartContainer || !summaryContainer) return;

  const cartItems = getCartWithDetails();

  if (cartItems.length === 0) {
    cartContainer.innerHTML = renderEmptyCart();
    summaryContainer.innerHTML = "";
    summaryContainer.classList.add("hidden");
  } else {
    cartContainer.innerHTML = cartItems.map(renderCartItem).join("");
    summaryContainer.innerHTML = renderOrderSummary();
    summaryContainer.classList.remove("hidden");
  }

  // Reinitialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// ------------------------------------------------
// Promo Code Handling
// ------------------------------------------------
const promoCodes = {
  SAVE10: { type: "percent", value: 10 },
  SAVE20: { type: "percent", value: 20 },
  FLAT5: { type: "fixed", value: 5 },
  FREEDEL: { type: "freeDelivery", value: 0 },
};

let appliedPromoCode = null;

/**
 * Apply a promo code
 * @param {string} code - Promo code to apply
 * @returns {boolean} - Success status
 */
function applyPromoCode(code) {
  const normalizedCode = code.toUpperCase().trim();
  const promo = promoCodes[normalizedCode];

  if (promo) {
    appliedPromoCode = { code: normalizedCode, ...promo };
    showToast(`Promo code "${normalizedCode}" applied!`, "success");
    return true;
  } else {
    showToast("Invalid promo code", "error");
    return false;
  }
}

// ------------------------------------------------
// Initialize cart functionality on page load
// ------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
});
