# 🎯 Modern Kanban Todo App

A sleek, spatial-themed Kanban board application built with vanilla JavaScript and Vite. Features a stunning glassmorphism UI design with drag-and-drop functionality.

![Kanban Board](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## ✨ Features

### Core Functionality

- **Drag & Drop Tasks** – Seamlessly move tasks between columns using native HTML5 drag-and-drop API
- **CRUD Operations** – Create, read, update, and delete tasks with intuitive modal forms
- **Local Storage Persistence** – All tasks are automatically saved to localStorage
- **Real-time Counts** – Dynamic task counters for each column

### UI/UX Highlights

- **Spatial Computing Design** – Inspired by Apple Vision Pro's glassmorphism aesthetic
- **Translucent Glass Panels** – Frosted glass effect with backdrop blur
- **Dynamic Task Tags** – Color-coded tags (Design, User Research, Marketing, Development)
- **Smooth Animations** – Hover effects, transitions, and micro-interactions
- **Responsive Layout** – Adapts to different screen sizes

### Task Management

| Column         | Description                     |
| -------------- | ------------------------------- |
| 🔄 In Progress | Tasks currently being worked on |
| ✅ Done        | Completed tasks                 |
| ⚠️ Impeded     | Blocked or paused tasks         |

---

## 🏗️ Project Structure

```
Project_1/
├── index.html          # Main HTML structure with Kanban board layout
├── src/
│   ├── main.js         # Core JavaScript logic (state, events, rendering)
│   └── style.css       # Spatial theme CSS with glassmorphism effects
├── public/
│   └── vite.svg        # Favicon
├── package.json        # Project dependencies
└── .gitignore          # Git ignore rules
```

---

## 🛠️ Technologies Used

| Technology                | Purpose                                             |
| ------------------------- | --------------------------------------------------- |
| **Vanilla JavaScript**    | Application logic, DOM manipulation, event handling |
| **HTML5 Drag & Drop API** | Native drag-and-drop functionality                  |
| **CSS3**                  | Glassmorphism, flexbox/grid layouts, animations     |
| **Vite**                  | Fast development server and build tool              |
| **localStorage**          | Client-side data persistence                        |
| **Google Fonts (Inter)**  | Modern typography                                   |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Clone the repository (if applicable)
cd JavaScript_Projects/Project_1

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 💡 Key Implementation Details

### State Management

```javascript
const STATE = {
  tasks: JSON.parse(localStorage.getItem("kanban-tasks")) || [],
  draggedTaskId: null,
};
```

- Centralized state object for task management
- Automatic localStorage sync on every change

### Task Card Features

- **Expandable Details** – Click the expand button to view full task info in a modal
- **Quick Delete** – Remove tasks with confirmation dialog
- **Auto-generated Tags** – Random category tags for visual organization

### CSS Design System

- **Custom Properties** – Consistent theming with CSS variables
- **Glass Effects** – `backdrop-filter: blur()` for frosted glass appearance
- **Floating Elements** – Elevated cards with shadow depth

---

## 🎨 Design Tokens

```css
--glass-bg: rgba(60, 60, 60, 0.4);
--card-bg: rgba(40, 40, 45, 0.6);
--radius-window: 32px;
--radius-card: 18px;
--shadow-float: 0 40px 100px rgba(0, 0, 0, 0.6);
```

---

## 📸 Screenshots

### Main Board View

- Three-column Kanban layout
- Spatial window with floating glass effect
- Avatar stack for team collaboration

### Task Modal

- Clean form design
- Status dropdown selection
- Primary/Secondary button styles

---

## 📄 License

This project is part of the **365 Days of Full Stack Development** challenge.

---

## 🤝 Author

**Karfa** – Full Stack Developer

---

_Built with ❤️ using vanilla JavaScript and modern CSS_
