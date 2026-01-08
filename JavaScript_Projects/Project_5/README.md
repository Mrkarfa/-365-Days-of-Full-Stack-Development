# 🍔 Foodie Express - Food Delivery Website

A fully functional, responsive, and interactive multi-page food delivery website built with modern web technologies and stunning animations.

![Foodie Express](https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop)

## 🌟 Features

### Core Functionality

- **Multi-page Navigation** - Seamless browsing across 7 fully functional pages
- **Product Catalog** - 18+ food items across 6 categories
- **Shopping Cart** - Full cart management with localStorage persistence
- **Checkout Flow** - Complete order placement with delivery & payment options
- **Search & Filter** - Search products and filter by category
- **Responsive Design** - Works beautifully on mobile, tablet, and desktop

### Pages

| Page                | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| **Home**            | Hero section, categories grid, featured products, newsletter signup |
| **Product View**    | Detailed product info, quantity selector, add to cart               |
| **Cart**            | Cart items list, quantity controls, promo codes, order summary      |
| **Checkout**        | Delivery address form, contact info, delivery time slots            |
| **Payment**         | Card/UPI/COD options, secure payment form                           |
| **Order Confirmed** | Success animation, order details, tracking info                     |
| **404 Error**       | Fun animated error page with search functionality                   |

### Animations (GSAP)

- ✨ Hero section entrance animations
- 📜 Scroll-triggered reveals with staggered effects
- 🎴 Product card hover with 3D tilt effect
- 🛒 Cart badge bounce on item addition
- 🎉 Order confirmation celebration with confetti
- 🎨 Smooth page transitions

---

## 🛠️ Tech Stack

| Technology             | Purpose               | Source      |
| ---------------------- | --------------------- | ----------- |
| **HTML5**              | Page structure        | Native      |
| **Tailwind CSS**       | Styling               | CDN link    |
| **Vanilla JavaScript** | Interactivity & logic | Local files |
| **GSAP 3.12**          | Animations            | CDN link    |
| **Lucide Icons**       | Icon library          | CDN link    |
| **Vite**               | Development server    | npm         |

---

## 📁 Project Structure

```
Project_5/
├── index.html                 # Home page
├── css/
│   └── styles.css            # Custom CSS (glassmorphism, gradients, etc.)
├── js/
│   ├── products.js           # Food menu data & helper functions
│   ├── cart.js               # Cart management with localStorage
│   ├── main.js               # Common utilities & navigation
│   ├── animations.js         # GSAP animation configurations
│   └── checkout.js           # Form validation & order processing
├── pages/
│   ├── product.html          # Single product detail view
│   ├── cart.html             # Shopping cart page
│   ├── checkout.html         # Delivery details form
│   ├── payment.html          # Payment method selection
│   ├── order-confirmed.html  # Order success page
│   └── 404.html              # Custom error page
├── public/
│   └── images/               # Local food product images
├── README.md                 # Project documentation
├── package.json              # npm configuration
└── node_modules/             # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Navigate to project folder**

   ```bash
   cd JavaScript_Projects/Project_5
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit `http://localhost:5173` (or the port shown in terminal)

---

## 🎨 Design System

### Color Palette

| Color          | Hex       | Usage               |
| -------------- | --------- | ------------------- |
| Dark Primary   | `#0a0a0a` | Main background     |
| Dark Secondary | `#141414` | Section backgrounds |
| Dark Card      | `#1a1a1a` | Card backgrounds    |
| Orange Primary | `#f97316` | Brand accent, CTAs  |
| Orange Light   | `#fb923c` | Hover states        |
| Success        | `#22c55e` | Success states      |
| Error          | `#ef4444` | Error states        |

### Typography

- **Font Family**: System UI, Apple fonts, Segoe UI, sans-serif
- **Headings**: Bold weights (600-800)
- **Body**: Regular weight (400)

### Effects

- **Glassmorphism**: Frosted glass effect on header and cards
- **Gradients**: Orange to red gradients for accents
- **Shadows**: Subtle depth with layered shadows

---

## 📦 Food Categories

| Category     | Items                                         | Icon     |
| ------------ | --------------------------------------------- | -------- |
| 🍔 Burgers   | Classic Smash, BBQ Bacon, Veggie Delight      | beef     |
| 🍕 Pizza     | Margherita, Pepperoni, Four Cheese            | pizza    |
| 🍣 Sushi     | Dragon Roll, Rainbow Sashimi, Veggie Maki     | fish     |
| 🥗 Salads    | Caesar Supreme, Mediterranean, Asian Sesame   | salad    |
| 🍰 Desserts  | Lava Cake, Cheesecake, Tiramisu               | cake     |
| 🥤 Beverages | Mango Smoothie, Caramel Latte, Berry Mocktail | cup-soda |

---

## 🔧 JavaScript Modules

### products.js

Contains all food menu data and helper functions:

- `getProductById(id)` - Get single product
- `getProductsByCategory(category)` - Filter by category
- `getFeaturedProducts()` - Get featured items
- `searchProducts(query)` - Search products
- `renderProductCard(product)` - Generate product card HTML

### cart.js

Complete cart management with localStorage:

- `getCart()` / `saveCart()` - Persistence
- `addToCart(id, qty)` - Add items
- `removeFromCart(id)` - Remove items
- `updateQuantity(id, qty)` - Update quantities
- `getCartTotal()` - Calculate totals
- `renderCartItem(item)` - Generate cart item HTML

### main.js

Common utilities used across pages:

- `toggleMobileMenu()` - Mobile navigation
- `handleSearch(event)` - Search functionality
- `showToast(message, type)` - Toast notifications
- `formatCurrency(amount)` - Price formatting
- Validation utilities for forms

### animations.js

GSAP animation configurations:

- `initHeroAnimations()` - Hero section entrance
- `initScrollAnimationsGSAP()` - Scroll triggers
- `initCardHoverEffects()` - Card interactions
- `initSuccessAnimations()` - Order confirmation
- `createConfetti()` - Celebration effect

### checkout.js

Checkout and payment handling:

- `validateDeliveryForm()` - Form validation
- `handlePlaceOrder()` - Order processing
- `initPaymentMethods()` - Payment selection
- Session storage for order flow

---

## 💡 Key Features Explained

### Cart Persistence

Cart data is stored in localStorage, persisting across browser sessions:

```javascript
localStorage.setItem("foodieExpressCart", JSON.stringify(cart));
```

### Free Delivery

Free delivery is automatically applied for orders over $30:

```javascript
const FREE_DELIVERY_THRESHOLD = 30;
const deliveryFee = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : 2.99;
```

### Promo Codes

Available promo codes:

- `SAVE10` - 10% discount
- `SAVE20` - 20% discount
- `FLAT5` - $5 off
- `FREEDEL` - Free delivery

### Dynamic Content

Products and categories are rendered dynamically from JavaScript data, making it easy to update the menu without touching HTML.

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

---

## 📱 Responsive Breakpoints

| Breakpoint | Width          | Description              |
| ---------- | -------------- | ------------------------ |
| Mobile     | < 640px        | Single column layout     |
| Tablet     | 640px - 1024px | Two column grid          |
| Desktop    | > 1024px       | Full multi-column layout |

---

## 🔮 Future Improvements

- [ ] User authentication & accounts
- [ ] Order history tracking
- [ ] Real-time order status updates
- [ ] Restaurant reviews & ratings
- [ ] Multiple address management
- [ ] Push notifications
- [ ] Dark/Light theme toggle
- [ ] Backend API integration
- [ ] Payment gateway integration

---

## 📄 License

This project is part of the **365 Days of Full Stack Development** learning journey.

---

## 👨‍💻 Author

**Mrkarfa**

Built with ❤️ and lots of 🍕

---

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [GSAP](https://greensock.com/gsap) - Professional animation library
- [Lucide Icons](https://lucide.dev) - Beautiful open-source icons
- [Unsplash](https://unsplash.com) - High-quality stock photos
