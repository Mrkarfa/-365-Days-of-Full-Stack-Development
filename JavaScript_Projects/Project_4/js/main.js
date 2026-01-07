/* ============================================
   ElectroMart - Main Utilities & Navigation
   ============================================ */

// Mobile navigation toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");

  if (mobileMenu) {
    mobileMenu.classList.toggle("hidden");

    // Toggle icon
    if (menuIcon) {
      const isOpen = !mobileMenu.classList.contains("hidden");
      menuIcon.setAttribute("data-lucide", isOpen ? "x" : "menu");
      if (typeof lucide !== "undefined") lucide.createIcons();
    }
  }
}

// Search functionality
function handleSearch(e) {
  e.preventDefault();
  const searchInput = document.getElementById("searchInput");
  const query = searchInput?.value.trim();

  if (query) {
    window.location.href = `index.html?search=${encodeURIComponent(query)}`;
  }
}

// Get URL parameters
function getUrlParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Initialize page based on URL params
function initPageFromUrl() {
  const searchQuery = getUrlParam("search");
  const category = getUrlParam("category");

  if (searchQuery) {
    displaySearchResults(searchQuery);
  } else if (category) {
    displayCategoryProducts(category);
  }
}

// Display search results
function displaySearchResults(query) {
  const results = searchProducts(query);
  const productsGrid = document.getElementById("productsGrid");
  const pageTitle = document.getElementById("pageTitle");

  if (pageTitle) {
    pageTitle.textContent = `Search: "${query}"`;
  }

  if (productsGrid) {
    if (results.length > 0) {
      productsGrid.innerHTML = results.map(renderProductCard).join("");
    } else {
      productsGrid.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <i data-lucide="search-x" class="w-16 h-16 mx-auto text-gray-600 mb-4"></i>
                    <h3 class="text-xl font-semibold text-gray-400">No products found</h3>
                    <p class="text-gray-500 mt-2">Try different keywords</p>
                </div>
            `;
    }
    if (typeof lucide !== "undefined") lucide.createIcons();
  }
}

// Display category products
function displayCategoryProducts(category) {
  const products = getProductsByCategory(category);
  const productsGrid = document.getElementById("productsGrid");
  const pageTitle = document.getElementById("pageTitle");

  if (pageTitle) {
    pageTitle.textContent =
      category.charAt(0).toUpperCase() + category.slice(1);
  }

  if (productsGrid) {
    productsGrid.innerHTML = products.map(renderProductCard).join("");
    if (typeof lucide !== "undefined") lucide.createIcons();
  }
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show/hide scroll to top button
function initScrollToTop() {
  const scrollBtn = document.getElementById("scrollToTop");

  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        scrollBtn.classList.remove("hidden");
      } else {
        scrollBtn.classList.add("hidden");
      }
    });
  }
}

// Format number with commas
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Debounce function
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

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  initPageFromUrl();
  initScrollToTop();
  if (typeof lucide !== "undefined") lucide.createIcons();
});

// Export to window
window.toggleMobileMenu = toggleMobileMenu;
window.handleSearch = handleSearch;
window.getUrlParam = getUrlParam;
window.scrollToTop = scrollToTop;
window.formatNumber = formatNumber;
window.debounce = debounce;
