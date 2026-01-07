# ElectroMart - E-commerce Electronics Store

A fully functional, responsive, and interactive multi-page e-commerce website for electronic products built with pure HTML, Tailwind CSS, and Vanilla JavaScript.

![ElectroMart Preview](https://placehold.co/1200x630/0a0a0a/3b82f6?text=ElectroMart+-+Premium+Electronics)

## 🚀 Features

### Pages

- **Home Page** - Hero section, category grid, featured products, newsletter signup
- **Product View** - Detailed product page with specs, ratings, and related products
- **Shopping Cart** - Dynamic cart with quantity controls and order summary
- **Checkout** - Shipping address form with validation
- **Payment** - Multiple payment options (Card, UPI, COD)
- **Order Confirmed** - Success page with order details and receipt
- **404 Error** - Creative error page with search and navigation

### Functionality

- 🛒 **Cart Management** - Add, remove, update quantities with LocalStorage persistence
- 🔍 **Search & Filter** - Search products, filter by category
- 💳 **Checkout Flow** - Complete purchase flow with form validation
- ✨ **GSAP Animations** - Smooth scroll animations and page transitions
- 📱 **Fully Responsive** - Mobile-first design for all screen sizes
- 🌙 **Dark Theme** - Premium dark mode aesthetic

## 🛠️ Tech Stack

| Technology                                     | Purpose               |
| ---------------------------------------------- | --------------------- |
| HTML5                                          | Structure             |
| [Tailwind CSS](https://tailwindcss.com/) (CDN) | Styling               |
| Vanilla JavaScript                             | Logic & Interactivity |
| [GSAP](https://greensock.com/gsap/) (CDN)      | Animations            |
| [Lucide Icons](https://lucide.dev/) (CDN)      | Icons                 |
| LocalStorage                                   | Cart Persistence      |

## 📁 Project Structure

```
Project_4/
├── index.html              # Home page
├── pages/
│   ├── product.html        # Product details
│   ├── cart.html           # Shopping cart
│   ├── checkout.html       # Shipping form
│   ├── payment.html        # Payment page
│   ├── order-confirmed.html # Success page
│   └── 404.html            # Error page
├── js/
│   ├── products.js         # Product catalog & data
│   ├── cart.js             # Cart logic
│   ├── checkout.js         # Form validation
│   ├── animations.js       # GSAP animations
│   └── main.js             # Utilities
├── css/
│   └── styles.css          # Custom styles
├── public/
│   └── images/             # Product images
├── package.json
└── README.md
```

## 🎨 Color Palette

| Color                | Hex       | Usage           |
| -------------------- | --------- | --------------- |
| Background Primary   | `#0a0a0a` | Main background |
| Background Secondary | `#141414` | Sections        |
| Background Card      | `#1a1a1a` | Cards & modals  |
| Border               | `#2a2a2a` | Borders         |
| Accent               | `#3b82f6` | Buttons, links  |
| Success              | `#22c55e` | Success states  |
| Error                | `#ef4444` | Error states    |

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

1. Clone or navigate to the project folder:

```bash
cd JavaScript_Projects/Project_4
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit:

```
http://localhost:5173
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🧪 Testing

### Manual Testing Checklist

- [ ] Navigate through all pages
- [ ] Add products to cart
- [ ] Update cart quantities
- [ ] Complete checkout flow
- [ ] Test form validations
- [ ] Check responsive design
- [ ] Verify LocalStorage persistence

## 📦 Product Categories

- Smartphones
- Laptops
- Headphones
- Tablets
- Wearables
- Accessories

## ✨ Animations

GSAP powers the following animations:

- Hero section fade-in
- Product cards stagger animation
- Scroll-triggered reveals
- Page transitions
- Success checkmark animation
- 404 page effects

## 🔧 JavaScript Modules

### products.js

- Product data array with 15+ products
- Helper functions: `getProductById()`, `getProductsByCategory()`, `searchProducts()`
- Product card rendering

### cart.js

- LocalStorage cart persistence
- Add/remove/update cart items
- Cart calculations (subtotal, tax, total)
- Toast notifications

### checkout.js

- Form validation (email, phone, card)
- Input formatting (card number, expiry)
- Order processing

### animations.js

- GSAP scroll animations
- Page transitions
- Hover effects

### main.js

- Mobile navigation
- Search functionality
- Utility helpers

## 📄 License

This project is part of the 365 Days of Full Stack Development challenge.

---

Made with ❤️ by Mrkarfa
