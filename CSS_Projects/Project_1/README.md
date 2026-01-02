# Greenwood University Website Project

## 🎓 Overview

Greenwood University is a multi-page informational website designed to represent a prestigious higher education institution. This project demonstrates the use of semantic HTML5 for structure and modern CSS3 for styling, creating a professional, responsive, and accessible user experience.

The design reflects a classic academic aesthetic using a Forest Green and Gold color scheme, paired with serif typography to convey tradition and excellence.

## 🚀 Features

### 1. Semantic HTML Structure

The project uses proper semantic tags to ensure accessibility and SEO friendliness:

- **`<header>`**: Contains the university branding and sticky navigation.
- **`<nav>`**: Semantic navigation links for quick access to sections.
- **`<main>`**: Wraps the primary content of the page.
- **`<section>`**: distinct sections for About, Academics, Campus Life, Events, Alumni, and Contact.
- **`<article>`**: Used for self-contained content blocks within sections.
- **`<footer>`**: Contains copyright info, secondary navigation, and contact details.

### 2. CSS Styling & Design

- **Color Palette**:
  - **Primary**: `#1B5E20` (Forest Green) - Used for headers and primary backgrounds.
  - **Secondary**: `#FFD700` (Gold) - Used for borders, accents, and hover states.
  - **Background**: `#F9F9F9` (Off-white) for reduced eye strain.
- **Typography**:
  - **Headings**: `Georgia` (Serif) for a formal, traditional academic look.
  - **Body**: `Segoe UI` (Sans-serif) for high readability.
- **Layout**:
  - **Centered Container**: Content is limited to `1200px` width for optimal reading line lengths.
  - **Card Design**: Sections like "Academics" and "Alumni" use card-style formatting with left-border accents.
  - **Sticky Header**: Navigation remains visible while scrolling.

### 3. Responsive Design

The website is fully responsive and adapts to different screen sizes:

- **Mobile First**: Styles are optimized for smaller screens by default.
- **Media Queries**: specific adjustments for screens smaller than `768px`.
  - Navigation links stack vertically for easier interaction on touch devices.
  - Padding and margins are adjusted to maximize screen real estate.

## 🛠️ Technologies Used

- **HTML5**: The backbone of the application.
- **CSS3**: Custom styling without external frameworks.
- **Vite**: Used as the local development server for hot-reloading.

## 📂 Project Structure

```
CSS_Projects/Project_1/
├── index.html      # Main HTML structure
├── style.css       # All CSS styles
└── README.md       # Project documentation
```

## 👣 How to Run

1.  Navigate to the project directory:
    ```bash
    cd "CSS_Projects/Project_1"
    ```
2.  Install dependencies (if using Vite):
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npx vite
    ```
4.  Open your browser to the local URL provided (usually `http://localhost:5173`).
