/* ============================================
   ElectroMart - Shopping Cart Management
   ============================================ */

const CART_STORAGE_KEY = "electromart_cart";

// Get cart from LocalStorage
function getCart() {
  const cartData = localStorage.getItem(CART_STORAGE_KEY);
  return cartData ? JSON.parse(cartData) : [];
}

// Save cart to LocalStorage
function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartBadge();
}

// Clear entire cart
function clearCart() {
  localStorage.removeItem(CART_STORAGE_KEY);
  updateCartBadge();
}

// Add product to cart
function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const existingItemIndex = cart.findIndex(
    (item) => item.productId === productId
  );

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({ productId, quantity, addedAt: new Date().toISOString() });
  }

  saveCart(cart);
  showToast("Product added to cart!", "success");
  animateCartBadge();
}

// Remove product from cart
function removeFromCart(productId) {
  const cart = getCart().filter((item) => item.productId !== productId);
  saveCart(cart);
  showToast("Product removed from cart", "success");
  if (typeof renderCartPage === "function") renderCartPage();
}

// Update product quantity
function updateCartQuantity(productId, newQuantity) {
  if (newQuantity < 1) {
    removeFromCart(productId);
    return;
  }
  const cart = getCart();
  const itemIndex = cart.findIndex((item) => item.productId === productId);
  if (itemIndex !== -1) {
    cart[itemIndex].quantity = newQuantity;
    saveCart(cart);
    if (typeof renderCartPage === "function") renderCartPage();
  }
}

function incrementQuantity(productId) {
  const cart = getCart();
  const item = cart.find((item) => item.productId === productId);
  if (item) updateCartQuantity(productId, item.quantity + 1);
}

function decrementQuantity(productId) {
  const cart = getCart();
  const item = cart.find((item) => item.productId === productId);
  if (item) updateCartQuantity(productId, item.quantity - 1);
}

// Cart calculations
function getCartItemCount() {
  return getCart().reduce((total, item) => total + item.quantity, 0);
}

function getCartSubtotal() {
  return getCart().reduce((total, item) => {
    const product = getProductById(item.productId);
    return product ? total + product.price * item.quantity : total;
  }, 0);
}

function calculateTax(subtotal, taxRate = 0.08) {
  return subtotal * taxRate;
}

function getCartTotal() {
  const subtotal = getCartSubtotal();
  const tax = calculateTax(subtotal);
  return { subtotal, tax, total: subtotal + tax };
}

function getCartSavings() {
  return getCart().reduce((savings, item) => {
    const product = getProductById(item.productId);
    if (product && product.originalPrice > product.price) {
      return savings + (product.originalPrice - product.price) * item.quantity;
    }
    return savings;
  }, 0);
}

// Update cart badge
function updateCartBadge() {
  const badges = document.querySelectorAll(".cart-badge");
  const count = getCartItemCount();
  badges.forEach((badge) => {
    if (count > 0) {
      badge.textContent = count > 99 ? "99+" : count;
      badge.classList.remove("hidden");
    } else {
      badge.classList.add("hidden");
    }
  });
}

function animateCartBadge() {
  document.querySelectorAll(".cart-badge").forEach((badge) => {
    badge.classList.add("cart-bounce");
    setTimeout(() => badge.classList.remove("cart-bounce"), 300);
  });
}

// Toast notification
function showToast(message, type = "success") {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<div class="flex items-center gap-3">
        <i data-lucide="${
          type === "success" ? "check-circle" : "alert-circle"
        }" 
           class="w-5 h-5 ${
             type === "success" ? "text-green-500" : "text-red-500"
           }"></i>
        <span>${message}</span></div>`;
  toast.className = `toast toast-${type}`;
  if (typeof lucide !== "undefined") lucide.createIcons();
  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => toast.classList.remove("show"), 3000);
}

function renderCartItem(cartItem) {
  const product = getProductById(cartItem.productId);
  if (!product) return "";
  const imgSrc = product.image.startsWith("public/")
    ? "../" + product.image
    : product.image;
  return `<div class="cart-item" data-product-id="${product.id}">
        <img src="${imgSrc}" alt="${
    product.name
  }" class="w-24 h-24 object-cover rounded-lg"
             onerror="this.src='https://placehold.co/100x100/1a1a1a/666666?text=Image'">
        <div class="flex-1 min-w-0">
            <h3 class="font-semibold text-white truncate">${product.name}</h3>
            <p class="text-sm text-gray-400">${product.category}</p>
            <p class="text-lg font-bold text-blue-400 mt-1">${formatPrice(
              product.price
            )}</p>
        </div>
        <div class="flex flex-col items-end gap-2">
            <button onclick="removeFromCart('${
              product.id
            }')" class="text-gray-400 hover:text-red-500">
                <i data-lucide="trash-2" class="w-5 h-5"></i></button>
            <div class="quantity-selector">
                <button class="quantity-btn" onclick="decrementQuantity('${
                  product.id
                }')">
                    <i data-lucide="minus" class="w-4 h-4"></i></button>
                <span class="quantity-value">${cartItem.quantity}</span>
                <button class="quantity-btn" onclick="incrementQuantity('${
                  product.id
                }')">
                    <i data-lucide="plus" class="w-4 h-4"></i></button>
            </div>
            <p class="text-sm text-gray-400">Total: <span class="text-white font-semibold">${formatPrice(
              product.price * cartItem.quantity
            )}</span></p>
        </div>
    </div>`;
}

function isCartEmpty() {
  return getCart().length === 0;
}

function getCartItemsWithDetails() {
  return getCart()
    .map((item) => ({ ...item, product: getProductById(item.productId) }))
    .filter((item) => item.product !== undefined);
}

// Initialize cart badge on page load
document.addEventListener("DOMContentLoaded", updateCartBadge);

// Export to window
window.getCart = getCart;
window.saveCart = saveCart;
window.clearCart = clearCart;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.incrementQuantity = incrementQuantity;
window.decrementQuantity = decrementQuantity;
window.getCartItemCount = getCartItemCount;
window.getCartSubtotal = getCartSubtotal;
window.calculateTax = calculateTax;
window.getCartTotal = getCartTotal;
window.getCartSavings = getCartSavings;
window.updateCartBadge = updateCartBadge;
window.showToast = showToast;
window.renderCartItem = renderCartItem;
window.isCartEmpty = isCartEmpty;
window.getCartItemsWithDetails = getCartItemsWithDetails;
