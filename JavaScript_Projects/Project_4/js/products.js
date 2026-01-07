/* ============================================
   ElectroMart - Product Data & Catalog Logic
   ============================================ */

/**
 * Product Categories
 * Used for filtering and navigation
 */
const CATEGORIES = {
  SMARTPHONES: "smartphones",
  LAPTOPS: "laptops",
  HEADPHONES: "headphones",
  TABLETS: "tablets",
  WEARABLES: "wearables",
  ACCESSORIES: "accessories",
};

/**
 * Product Database
 * All products available in the store
 * Each product has: id, name, category, price, originalPrice, image, rating, reviews, specs, description, inStock
 */
const products = [
  // ---------------
  // SMARTPHONES
  // ---------------
  {
    id: "sp001",
    name: "Galaxy Ultra Pro",
    category: CATEGORIES.SMARTPHONES,
    price: 1199.99,
    originalPrice: 1399.99,
    image: "public/images/smartphone-1.png",
    rating: 4.8,
    reviews: 2847,
    specs: {
      display: '6.8" Dynamic AMOLED 2X',
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "256GB",
      camera: "200MP + 12MP + 50MP",
      battery: "5000mAh",
    },
    description:
      "Experience the future with our flagship smartphone featuring cutting-edge AI capabilities and pro-grade camera system.",
    inStock: true,
    featured: true,
  },
  {
    id: "sp002",
    name: "iPhone Pro Max",
    category: CATEGORIES.SMARTPHONES,
    price: 1299.99,
    originalPrice: 1499.99,
    image: "public/images/smartphone-2.png",
    rating: 4.9,
    reviews: 5621,
    specs: {
      display: '6.7" Super Retina XDR',
      processor: "A17 Pro chip",
      ram: "8GB",
      storage: "256GB",
      camera: "48MP + 12MP + 12MP",
      battery: "4422mAh",
    },
    description:
      "The most powerful iPhone ever with titanium design and revolutionary camera features.",
    inStock: true,
    featured: true,
  },
  {
    id: "sp003",
    name: "Pixel Fusion",
    category: CATEGORIES.SMARTPHONES,
    price: 899.99,
    originalPrice: 999.99,
    image: "public/images/smartphone-3.png",
    rating: 4.7,
    reviews: 1893,
    specs: {
      display: '6.4" OLED',
      processor: "Tensor G4",
      ram: "12GB",
      storage: "128GB",
      camera: "50MP + 48MP",
      battery: "4700mAh",
    },
    description:
      "Pure Google experience with the best AI-powered photography features.",
    inStock: true,
    featured: false,
  },

  // ---------------
  // LAPTOPS
  // ---------------
  {
    id: "lp001",
    name: 'MacBook Pro 16"',
    category: CATEGORIES.LAPTOPS,
    price: 2499.99,
    originalPrice: 2799.99,
    image: "public/images/laptop-1.png",
    rating: 4.9,
    reviews: 3456,
    specs: {
      display: '16.2" Liquid Retina XDR',
      processor: "Apple M3 Max",
      ram: "36GB",
      storage: "512GB SSD",
      graphics: "40-core GPU",
      battery: "Up to 22 hours",
    },
    description:
      "Supercharged by M3 Max. Designed for pros who need extraordinary performance.",
    inStock: true,
    featured: true,
  },
  {
    id: "lp002",
    name: "Dell XPS 15",
    category: CATEGORIES.LAPTOPS,
    price: 1899.99,
    originalPrice: 2199.99,
    image: "public/images/laptop-2.png",
    rating: 4.7,
    reviews: 2134,
    specs: {
      display: '15.6" OLED 3.5K',
      processor: "Intel Core i9-13900H",
      ram: "32GB",
      storage: "1TB SSD",
      graphics: "RTX 4060",
      battery: "Up to 13 hours",
    },
    description:
      "Stunning InfinityEdge display with powerful performance for creators.",
    inStock: true,
    featured: false,
  },
  {
    id: "lp003",
    name: "ThinkPad X1 Carbon",
    category: CATEGORIES.LAPTOPS,
    price: 1749.99,
    originalPrice: 1999.99,
    image: "public/images/laptop-3.png",
    rating: 4.8,
    reviews: 1876,
    specs: {
      display: '14" 2.8K OLED',
      processor: "Intel Core Ultra 7",
      ram: "32GB",
      storage: "512GB SSD",
      graphics: "Intel Arc",
      battery: "Up to 15 hours",
    },
    description:
      "Ultimate business laptop with legendary ThinkPad reliability.",
    inStock: true,
    featured: false,
  },

  // ---------------
  // HEADPHONES
  // ---------------
  {
    id: "hp001",
    name: "AirPods Max",
    category: CATEGORIES.HEADPHONES,
    price: 549.99,
    originalPrice: 599.99,
    image: "public/images/headphones-1.png",
    rating: 4.8,
    reviews: 4532,
    specs: {
      type: "Over-ear",
      driver: "40mm Apple-designed",
      anc: "Active Noise Cancellation",
      battery: "20 hours",
      connectivity: "Bluetooth 5.0",
      features: "Spatial Audio, Transparency Mode",
    },
    description:
      "High-fidelity audio with industry-leading Active Noise Cancellation.",
    inStock: true,
    featured: true,
  },
  {
    id: "hp002",
    name: "Sony WH-1000XM5",
    category: CATEGORIES.HEADPHONES,
    price: 399.99,
    originalPrice: 449.99,
    image: "public/images/headphones-2.png",
    rating: 4.9,
    reviews: 6721,
    specs: {
      type: "Over-ear",
      driver: "30mm",
      anc: "Industry-leading ANC",
      battery: "30 hours",
      connectivity: "Bluetooth 5.2",
      features: "LDAC, Multipoint",
    },
    description:
      "Industry-leading noise canceling with exceptional sound quality.",
    inStock: true,
    featured: true,
  },
  {
    id: "hp003",
    name: "Bose QuietComfort Ultra",
    category: CATEGORIES.HEADPHONES,
    price: 429.99,
    originalPrice: 479.99,
    image: "public/images/headphones-3.png",
    rating: 4.7,
    reviews: 3298,
    specs: {
      type: "Over-ear",
      driver: "Custom Bose",
      anc: "CustomTune ANC",
      battery: "24 hours",
      connectivity: "Bluetooth 5.3",
      features: "Immersive Audio, Aware Mode",
    },
    description:
      "World-class noise canceling with breakthrough immersive audio.",
    inStock: true,
    featured: false,
  },

  // ---------------
  // TABLETS
  // ---------------
  {
    id: "tb001",
    name: 'iPad Pro 12.9"',
    category: CATEGORIES.TABLETS,
    price: 1099.99,
    originalPrice: 1299.99,
    image: "public/images/tablet-1.png",
    rating: 4.9,
    reviews: 4123,
    specs: {
      display: '12.9" Liquid Retina XDR',
      processor: "Apple M2",
      ram: "8GB",
      storage: "256GB",
      camera: "12MP + 10MP",
      battery: "Up to 10 hours",
    },
    description: "Supercharged by M2. The ultimate iPad experience.",
    inStock: true,
    featured: true,
  },
  {
    id: "tb002",
    name: "Galaxy Tab S9 Ultra",
    category: CATEGORIES.TABLETS,
    price: 1199.99,
    originalPrice: 1399.99,
    image: "public/images/tablet-2.png",
    rating: 4.7,
    reviews: 2341,
    specs: {
      display: '14.6" Dynamic AMOLED 2X',
      processor: "Snapdragon 8 Gen 2",
      ram: "12GB",
      storage: "256GB",
      camera: "13MP + 8MP",
      battery: "11200mAh",
    },
    description: "The biggest, boldest Galaxy Tab with S Pen included.",
    inStock: true,
    featured: false,
  },

  // ---------------
  // WEARABLES
  // ---------------
  {
    id: "wr001",
    name: "Apple Watch Ultra 2",
    category: CATEGORIES.WEARABLES,
    price: 799.99,
    originalPrice: 899.99,
    image: "public/images/watch-1.png",
    rating: 4.8,
    reviews: 3876,
    specs: {
      display: "49mm Titanium",
      processor: "S9 SiP",
      battery: "36 hours",
      water: "100m Water Resistant",
      features: "GPS, Cellular, ECG",
      os: "watchOS 10",
    },
    description: "The most rugged and capable Apple Watch ever.",
    inStock: true,
    featured: true,
  },
  {
    id: "wr002",
    name: "Galaxy Watch 6 Classic",
    category: CATEGORIES.WEARABLES,
    price: 429.99,
    originalPrice: 499.99,
    image: "public/images/watch-2.png",
    rating: 4.6,
    reviews: 2154,
    specs: {
      display: "47mm Super AMOLED",
      processor: "Exynos W930",
      battery: "40 hours",
      water: "5ATM + IP68",
      features: "Rotating Bezel, BIA",
      os: "Wear OS 4",
    },
    description: "Classic design meets advanced health monitoring.",
    inStock: true,
    featured: false,
  },

  // ---------------
  // ACCESSORIES
  // ---------------
  {
    id: "ac001",
    name: "MagSafe Charger",
    category: CATEGORIES.ACCESSORIES,
    price: 39.99,
    originalPrice: 49.99,
    image: "public/images/charger-1.png",
    rating: 4.5,
    reviews: 8765,
    specs: {
      type: "Wireless Charger",
      power: "15W",
      compatibility: "iPhone 12+",
      cable: "1m USB-C",
    },
    description: "Perfectly aligned wireless charging for your iPhone.",
    inStock: true,
    featured: false,
  },
  {
    id: "ac002",
    name: "USB-C Hub Pro",
    category: CATEGORIES.ACCESSORIES,
    price: 79.99,
    originalPrice: 99.99,
    image: "public/images/hub-1.png",
    rating: 4.6,
    reviews: 3421,
    specs: {
      ports: "7-in-1",
      hdmi: "4K@60Hz",
      usb: "2x USB-A 3.0, 1x USB-C",
      card: "SD/microSD",
      power: "100W PD Pass-through",
    },
    description: "Expand your laptop connectivity with this premium hub.",
    inStock: true,
    featured: false,
  },
  {
    id: "ac003",
    name: "AirTag 4-Pack",
    category: CATEGORIES.ACCESSORIES,
    price: 99.99,
    originalPrice: 119.99,
    image: "public/images/airtag-1.png",
    rating: 4.7,
    reviews: 12543,
    specs: {
      type: "Tracker",
      range: "Unlimited (Find My network)",
      battery: "CR2032 (1 year)",
      water: "IP67",
    },
    description: "Keep track of your everyday items with precision.",
    inStock: true,
    featured: false,
  },
];

/* -------------------------
   Product Utility Functions
   ------------------------- */

/**
 * Get all products
 * @returns {Array} All products
 */
function getAllProducts() {
  return products;
}

/**
 * Get product by ID
 * @param {string} id - Product ID
 * @returns {Object|undefined} Product object or undefined
 */
function getProductById(id) {
  return products.find((product) => product.id === id);
}

/**
 * Get products by category
 * @param {string} category - Category name
 * @returns {Array} Filtered products
 */
function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}

/**
 * Get featured products
 * @returns {Array} Featured products
 */
function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

/**
 * Search products by name
 * @param {string} query - Search query
 * @returns {Array} Matching products
 */
function searchProducts(query) {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get products sorted by price
 * @param {boolean} ascending - Sort direction
 * @returns {Array} Sorted products
 */
function getProductsSortedByPrice(ascending = true) {
  return [...products].sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );
}

/**
 * Get products sorted by rating
 * @returns {Array} Products sorted by rating (highest first)
 */
function getProductsSortedByRating() {
  return [...products].sort((a, b) => b.rating - a.rating);
}

/**
 * Calculate discount percentage
 * @param {number} originalPrice - Original price
 * @param {number} currentPrice - Current price
 * @returns {number} Discount percentage
 */
function calculateDiscount(originalPrice, currentPrice) {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

/**
 * Format price with currency
 * @param {number} price - Price value
 * @returns {string} Formatted price string
 */
function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

/**
 * Generate star rating HTML
 * @param {number} rating - Rating value (0-5)
 * @returns {string} HTML string for stars
 */
function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  let html = "";

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    html +=
      '<i data-lucide="star" class="w-4 h-4 fill-yellow-400 text-yellow-400"></i>';
  }

  // Half star
  if (hasHalfStar) {
    html +=
      '<i data-lucide="star-half" class="w-4 h-4 fill-yellow-400 text-yellow-400"></i>';
  }

  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    html += '<i data-lucide="star" class="w-4 h-4 text-gray-600"></i>';
  }

  return html;
}

/**
 * Render product card HTML
 * @param {Object} product - Product object
 * @returns {string} HTML string for product card
 */
function renderProductCard(product) {
  const discount = calculateDiscount(product.originalPrice, product.price);

  return `
        <div class="product-card cursor-pointer" onclick="viewProduct('${
          product.id
        }')">
            <div class="relative overflow-hidden">
                <img src="${product.image}" alt="${product.name}" 
                     class="w-full h-48 object-cover"
                     onerror="this.src='https://placehold.co/400x300/1a1a1a/666666?text=Product+Image'">
                ${
                  discount > 0
                    ? `<span class="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-${discount}%</span>`
                    : ""
                }
                ${
                  product.featured
                    ? `<span class="absolute top-3 right-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">Featured</span>`
                    : ""
                }
            </div>
            <div class="p-4">
                <span class="text-xs text-blue-400 uppercase tracking-wider">${
                  product.category
                }</span>
                <h3 class="text-lg font-semibold mt-1 text-white">${
                  product.name
                }</h3>
                <div class="flex items-center gap-2 mt-2">
                    <div class="flex items-center">${generateStarRating(
                      product.rating
                    )}</div>
                    <span class="text-sm text-gray-400">(${product.reviews.toLocaleString()})</span>
                </div>
                <div class="flex items-center gap-2 mt-3">
                    <span class="text-xl font-bold text-white">${formatPrice(
                      product.price
                    )}</span>
                    ${
                      product.originalPrice > product.price
                        ? `<span class="text-sm text-gray-500 line-through">${formatPrice(
                            product.originalPrice
                          )}</span>`
                        : ""
                    }
                </div>
                <button onclick="event.stopPropagation(); addToCart('${
                  product.id
                }')" 
                        class="btn btn-primary w-full mt-4">
                    <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

/**
 * Navigate to product page
 * @param {string} productId - Product ID
 */
function viewProduct(productId) {
  window.location.href = `pages/product.html?id=${productId}`;
}

// Export functions for use in other modules
window.CATEGORIES = CATEGORIES;
window.products = products;
window.getAllProducts = getAllProducts;
window.getProductById = getProductById;
window.getProductsByCategory = getProductsByCategory;
window.getFeaturedProducts = getFeaturedProducts;
window.searchProducts = searchProducts;
window.getProductsSortedByPrice = getProductsSortedByPrice;
window.getProductsSortedByRating = getProductsSortedByRating;
window.calculateDiscount = calculateDiscount;
window.formatPrice = formatPrice;
window.generateStarRating = generateStarRating;
window.renderProductCard = renderProductCard;
window.viewProduct = viewProduct;
