/* ================================================
   FOODIE EXPRESS - Product/Menu Data
   Contains all food items and helper functions
   ================================================ */

// ------------------------------------------------
// Food Categories
// Each category has an id, name, icon (Lucide), and color for styling
// ------------------------------------------------
const categories = [
  {
    id: "burgers",
    name: "Burgers",
    icon: "beef",
    color: "orange",
    description: "Juicy handcrafted burgers",
  },
  {
    id: "pizza",
    name: "Pizza",
    icon: "pizza",
    color: "red",
    description: "Wood-fired authentic pizzas",
  },
  {
    id: "sushi",
    name: "Sushi",
    icon: "fish",
    color: "cyan",
    description: "Fresh Japanese cuisine",
  },
  {
    id: "salads",
    name: "Salads",
    icon: "salad",
    color: "green",
    description: "Healthy & fresh salads",
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: "cake",
    color: "pink",
    description: "Sweet treats & pastries",
  },
  {
    id: "beverages",
    name: "Beverages",
    icon: "cup-soda",
    color: "purple",
    description: "Refreshing drinks",
  },
];

// ------------------------------------------------
// Food Products/Menu Items
// Complete product data with all necessary fields
// ------------------------------------------------
const products = [
  // === BURGERS ===
  {
    id: 1,
    name: "Classic Smash Burger",
    description:
      "Double smashed beef patties with melted American cheese, caramelized onions, pickles, and our signature sauce on a brioche bun.",
    price: 12.99,
    originalPrice: 15.99,
    category: "burgers",
    image: "public/images/classic-burger.webp",
    rating: 4.8,
    reviews: 324,
    prepTime: "15-20 min",
    calories: 680,
    isFeatured: true,
    isVeg: false,
    tags: ["bestseller", "spicy"],
  },
  {
    id: 2,
    name: "BBQ Bacon Beast",
    description:
      "Thick beef patty with crispy bacon, cheddar cheese, onion rings, and smoky BBQ sauce. A meat lover's dream!",
    price: 14.99,
    originalPrice: null,
    category: "burgers",
    image: "public/images/bbq-burger.webp",
    rating: 4.7,
    reviews: 256,
    prepTime: "18-22 min",
    calories: 850,
    isFeatured: true,
    isVeg: false,
    tags: ["popular"],
  },
  {
    id: 3,
    name: "Veggie Delight Burger",
    description:
      "Crispy plant-based patty with avocado, fresh lettuce, tomato, and vegan garlic aioli on a whole wheat bun.",
    price: 11.99,
    originalPrice: null,
    category: "burgers",
    image: "public/images/veggie-burger.webp",
    rating: 4.5,
    reviews: 189,
    prepTime: "12-15 min",
    calories: 420,
    isFeatured: false,
    isVeg: true,
    tags: ["vegan", "healthy"],
  },

  // === PIZZA ===
  {
    id: 4,
    name: "Margherita Classica",
    description:
      "San Marzano tomato sauce, fresh mozzarella, basil leaves, and extra virgin olive oil on hand-stretched dough.",
    price: 16.99,
    originalPrice: null,
    category: "pizza",
    image: "public/images/margherita-pizza.webp",
    rating: 4.9,
    reviews: 412,
    prepTime: "20-25 min",
    calories: 720,
    isFeatured: true,
    isVeg: true,
    tags: ["bestseller", "traditional"],
  },
  {
    id: 5,
    name: "Pepperoni Feast",
    description:
      "Loaded with spicy pepperoni, mozzarella cheese blend, and our signature marinara sauce.",
    price: 18.99,
    originalPrice: 21.99,
    category: "pizza",
    image: "public/images/pepperoni-pizza.webp",
    rating: 4.8,
    reviews: 378,
    prepTime: "20-25 min",
    calories: 890,
    isFeatured: true,
    isVeg: false,
    tags: ["popular", "spicy"],
  },
  {
    id: 6,
    name: "Four Cheese Heaven",
    description:
      "A blend of mozzarella, gorgonzola, parmesan, and ricotta cheeses on white sauce base with fresh herbs.",
    price: 19.99,
    originalPrice: null,
    category: "pizza",
    image: "public/images/four-cheese-pizza.webp",
    rating: 4.6,
    reviews: 234,
    prepTime: "22-28 min",
    calories: 950,
    isFeatured: false,
    isVeg: true,
    tags: ["cheesy"],
  },

  // === SUSHI ===
  {
    id: 7,
    name: "Dragon Roll",
    description:
      "Shrimp tempura inside, topped with avocado and eel, drizzled with eel sauce and spicy mayo.",
    price: 15.99,
    originalPrice: null,
    category: "sushi",
    image: "public/images/dragon-roll.webp",
    rating: 4.9,
    reviews: 289,
    prepTime: "15-20 min",
    calories: 380,
    isFeatured: true,
    isVeg: false,
    tags: ["bestseller", "premium"],
  },
  {
    id: 8,
    name: "Rainbow Sashimi",
    description:
      "Chef's selection of fresh salmon, tuna, yellowtail, and shrimp over sushi rice.",
    price: 22.99,
    originalPrice: 26.99,
    category: "sushi",
    image: "public/images/rainbow-sashimi.webp",
    rating: 4.8,
    reviews: 156,
    prepTime: "12-15 min",
    calories: 320,
    isFeatured: true,
    isVeg: false,
    tags: ["premium", "fresh"],
  },
  {
    id: 9,
    name: "Veggie Maki Set",
    description:
      "Assorted vegetable rolls including cucumber, avocado, and pickled radish with wasabi and ginger.",
    price: 12.99,
    originalPrice: null,
    category: "sushi",
    image: "public/images/veggie-maki.webp",
    rating: 4.4,
    reviews: 98,
    prepTime: "10-12 min",
    calories: 240,
    isFeatured: false,
    isVeg: true,
    tags: ["vegan", "healthy"],
  },

  // === SALADS ===
  {
    id: 10,
    name: "Caesar Supreme",
    description:
      "Crisp romaine lettuce, house-made croutons, shaved parmesan, and creamy Caesar dressing with grilled chicken.",
    price: 13.99,
    originalPrice: null,
    category: "salads",
    image: "public/images/caesar-salad.webp",
    rating: 4.6,
    reviews: 178,
    prepTime: "8-10 min",
    calories: 380,
    isFeatured: true,
    isVeg: false,
    tags: ["healthy", "protein"],
  },
  {
    id: 11,
    name: "Mediterranean Bowl",
    description:
      "Mixed greens, feta cheese, olives, cucumber, tomatoes, red onion, and herb vinaigrette.",
    price: 12.49,
    originalPrice: null,
    category: "salads",
    image: "public/images/mediterranean-salad.webp",
    rating: 4.7,
    reviews: 145,
    prepTime: "8-10 min",
    calories: 290,
    isFeatured: false,
    isVeg: true,
    tags: ["healthy", "fresh"],
  },
  {
    id: 12,
    name: "Asian Sesame Crunch",
    description:
      "Napa cabbage, edamame, mandarin oranges, crispy wonton strips, and sesame ginger dressing.",
    price: 11.99,
    originalPrice: null,
    category: "salads",
    image: "public/images/asian-salad.webp",
    rating: 4.5,
    reviews: 112,
    prepTime: "8-10 min",
    calories: 320,
    isFeatured: false,
    isVeg: true,
    tags: ["healthy", "crunchy"],
  },

  // === DESSERTS ===
  {
    id: 13,
    name: "Chocolate Lava Cake",
    description:
      "Warm chocolate cake with a molten center, served with vanilla ice cream and fresh berries.",
    price: 8.99,
    originalPrice: null,
    category: "desserts",
    image: "public/images/lava-cake.webp",
    rating: 4.9,
    reviews: 267,
    prepTime: "10-12 min",
    calories: 520,
    isFeatured: true,
    isVeg: true,
    tags: ["bestseller", "chocolate"],
  },
  {
    id: 14,
    name: "New York Cheesecake",
    description:
      "Creamy classic cheesecake with graham cracker crust and strawberry compote.",
    price: 7.99,
    originalPrice: null,
    category: "desserts",
    image: "public/images/cheesecake.webp",
    rating: 4.7,
    reviews: 198,
    prepTime: "5 min",
    calories: 450,
    isFeatured: false,
    isVeg: true,
    tags: ["classic"],
  },
  {
    id: 15,
    name: "Tiramisu",
    description:
      "Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.",
    price: 9.49,
    originalPrice: null,
    category: "desserts",
    image: "public/images/tiramisu.webp",
    rating: 4.8,
    reviews: 176,
    prepTime: "5 min",
    calories: 380,
    isFeatured: true,
    isVeg: true,
    tags: ["coffee", "italian"],
  },

  // === BEVERAGES ===
  {
    id: 16,
    name: "Fresh Mango Smoothie",
    description:
      "Blended fresh mango with yogurt, honey, and a hint of cardamom. Refreshingly tropical!",
    price: 5.99,
    originalPrice: null,
    category: "beverages",
    image: "public/images/mango-smoothie.webp",
    rating: 4.6,
    reviews: 134,
    prepTime: "3-5 min",
    calories: 220,
    isFeatured: true,
    isVeg: true,
    tags: ["refreshing", "healthy"],
  },
  {
    id: 17,
    name: "Iced Caramel Latte",
    description:
      "Double shot espresso with milk, caramel syrup, and ice. Topped with whipped cream.",
    price: 4.99,
    originalPrice: null,
    category: "beverages",
    image: "public/images/caramel-latte.webp",
    rating: 4.5,
    reviews: 189,
    prepTime: "3-5 min",
    calories: 280,
    isFeatured: false,
    isVeg: true,
    tags: ["coffee", "sweet"],
  },
  {
    id: 18,
    name: "Berry Blast Mocktail",
    description:
      "Mixed berries, fresh mint, lime, and sparkling water. A vibrant alcohol-free refresher.",
    price: 6.49,
    originalPrice: null,
    category: "beverages",
    image: "public/images/berry-mocktail.webp",
    rating: 4.7,
    reviews: 98,
    prepTime: "3-5 min",
    calories: 120,
    isFeatured: false,
    isVeg: true,
    tags: ["refreshing", "fruity"],
  },
];

// ------------------------------------------------
// Helper Functions
// Used to retrieve and filter products
// ------------------------------------------------

/**
 * Get a single product by its ID
 * @param {number} id - Product ID
 * @returns {object|undefined} - Product object or undefined
 */
function getProductById(id) {
  return products.find((product) => product.id === parseInt(id));
}

/**
 * Get all products in a specific category
 * @param {string} categoryId - Category ID (e.g., 'burgers', 'pizza')
 * @returns {array} - Array of products in that category
 */
function getProductsByCategory(categoryId) {
  return products.filter(
    (product) => product.category.toLowerCase() === categoryId.toLowerCase()
  );
}

/**
 * Get all featured products for homepage display
 * @returns {array} - Array of featured products
 */
function getFeaturedProducts() {
  return products.filter((product) => product.isFeatured);
}

/**
 * Search products by name or description
 * @param {string} query - Search query
 * @returns {array} - Array of matching products
 */
function searchProducts(query) {
  const searchTerm = query.toLowerCase().trim();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
  );
}

/**
 * Get all vegetarian products
 * @returns {array} - Array of vegetarian products
 */
function getVegetarianProducts() {
  return products.filter((product) => product.isVeg);
}

/**
 * Get products with active discounts
 * @returns {array} - Array of discounted products
 */
function getDiscountedProducts() {
  return products.filter((product) => product.originalPrice !== null);
}

/**
 * Get all categories
 * @returns {array} - Array of category objects
 */
function getAllCategories() {
  return categories;
}

/**
 * Generate star rating HTML
 * @param {number} rating - Rating value (0-5)
 * @returns {string} - HTML string for star display
 */
function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let starsHTML = "";

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starsHTML +=
        '<i data-lucide="star" class="w-4 h-4 rating-star fill-current"></i>';
    } else if (i === fullStars && hasHalfStar) {
      starsHTML +=
        '<i data-lucide="star-half" class="w-4 h-4 rating-star fill-current"></i>';
    } else {
      starsHTML +=
        '<i data-lucide="star" class="w-4 h-4 rating-star empty"></i>';
    }
  }

  return starsHTML;
}

/**
 * Render a product card HTML
 * @param {object} product - Product object
 * @returns {string} - HTML string for the product card
 */
function renderProductCard(product) {
  const discountBadge = product.originalPrice
    ? `<span class="absolute top-3 left-3 badge badge-warning">
         ${Math.round(
           ((product.originalPrice - product.price) / product.originalPrice) *
             100
         )}% OFF
       </span>`
    : "";

  const vegBadge = product.isVeg
    ? `<span class="absolute top-3 right-3 w-5 h-5 rounded border-2 border-green-500 flex items-center justify-center">
         <span class="w-2 h-2 rounded-full bg-green-500"></span>
       </span>`
    : `<span class="absolute top-3 right-3 w-5 h-5 rounded border-2 border-red-500 flex items-center justify-center">
         <span class="w-2 h-2 rounded-full bg-red-500"></span>
       </span>`;

  return `
    <div class="product-card fade-on-scroll" data-product-id="${product.id}">
      <a href="pages/product.html?id=${product.id}" class="block">
        <div class="product-card-image">
          <img 
            src="${product.image}" 
            alt="${product.name}"
            onerror="this.src='https://placehold.co/400x400/1a1a1a/f97316?text=${encodeURIComponent(
              product.name
            )}'"
            loading="lazy"
          />
          <div class="image-overlay"></div>
          ${discountBadge}
          ${vegBadge}
        </div>
      </a>
      <div class="product-card-content">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs text-gray-500 uppercase tracking-wide">${
            product.category
          }</span>
          <span class="delivery-badge">
            <i data-lucide="clock" class="w-3 h-3"></i>
            ${product.prepTime}
          </span>
        </div>
        <a href="pages/product.html?id=${product.id}">
          <h3 class="font-semibold text-lg mb-1 hover:text-orange-400 transition-colors">${
            product.name
          }</h3>
        </a>
        <p class="text-sm text-gray-400 mb-3 line-clamp-2">${
          product.description
        }</p>
        <div class="flex items-center gap-2 mb-3">
          <div class="rating">
            ${generateStarRating(product.rating)}
          </div>
          <span class="text-sm text-gray-500">(${product.reviews})</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="price">$${product.price.toFixed(2)}</span>
            ${
              product.originalPrice
                ? `<span class="price-original">$${product.originalPrice.toFixed(
                    2
                  )}</span>`
                : ""
            }
          </div>
          <button 
            onclick="addToCartFromCard(${product.id})" 
            class="btn btn-primary btn-sm"
            aria-label="Add ${product.name} to cart"
          >
            <i data-lucide="plus" class="w-4 h-4"></i>
            Add
          </button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render a category card HTML
 * @param {object} category - Category object
 * @returns {string} - HTML string for the category card
 */
function renderCategoryCard(category) {
  return `
    <a href="index.html?category=${category.id}" class="category-card group">
      <div class="w-14 h-14 mx-auto mb-3 rounded-full bg-${category.color}-500/10 flex items-center justify-center group-hover:bg-${category.color}-500/20 transition-colors">
        <i data-lucide="${category.icon}" class="w-7 h-7 text-${category.color}-400"></i>
      </div>
      <h3 class="font-semibold mb-1">${category.name}</h3>
      <p class="text-xs text-gray-500">${category.description}</p>
    </a>
  `;
}
