# 📊 Kanban Project Dashboard

A feature-rich, multi-page Kanban project management dashboard built with React and Vite. Features a modern dark theme, drag-and-drop functionality, and component-based architecture.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

---

## ✨ Features

### Core Functionality

- **Drag & Drop Kanban** – Smooth task reordering using `@hello-pangea/dnd` library
- **Multi-column Layout** – Organize tasks across To Do, In Progress, In Review, and Done columns
- **Tab Navigation** – Switch between Overview, List, Board, Timeline, Dashboard, Calendar, and Files views
- **React Router** – Client-side routing for seamless navigation
- **Component Architecture** – Modular, reusable React components

### UI/UX Highlights

- **Dark Theme Design** – Professional dark mode interface
- **Sidebar Navigation** – Quick access to team members and project settings
- **Task Cards** – Rich cards with tags, dates, and assignee avatars
- **Lucide Icons** – Beautiful, consistent iconography throughout

### Dashboard Sections

| Tab          | Description                 |
| ------------ | --------------------------- |
| 📊 Overview  | Project summary and status  |
| 📋 List      | Tasks in table format       |
| 🗂️ Board     | Kanban board view (default) |
| ⏱️ Timeline  | Project milestones          |
| 📈 Dashboard | Analytics and charts        |
| 📅 Calendar  | Task calendar view          |
| 📁 Files     | Project documents           |

---

## 🏗️ Project Structure

```
Project_2/
├── index.html              # Root HTML entry point
├── vite.config.js          # Vite configuration with React plugin
├── eslint.config.js        # ESLint rules for code quality
├── package.json            # Dependencies and scripts
├── src/
│   ├── main.jsx            # React app entry point
│   ├── App.jsx             # Main layout with router
│   ├── App.css             # Global app styles
│   ├── index.css           # Base styles and CSS reset
│   ├── components/
│   │   ├── Header/         # Top header component
│   │   ├── Sidebar/        # Left navigation sidebar
│   │   ├── TabNavigation/  # View switcher tabs
│   │   └── KanbanBoard/    # Kanban board with columns
│   ├── data/
│   │   └── mockData.js     # Sample tasks and team data
│   ├── styles/
│   │   └── *.css           # Component-specific styles
│   └── assets/             # Static assets
└── public/
    └── vite.svg            # Favicon
```

---

## 🛠️ Technologies Used

| Technology            | Purpose                               |
| --------------------- | ------------------------------------- |
| **React 19**          | UI components and state management    |
| **Vite 7**            | Lightning-fast dev server and bundler |
| **React Router v7**   | Client-side routing                   |
| **@hello-pangea/dnd** | Accessible drag-and-drop for lists    |
| **Lucide React**      | Modern icon library                   |
| **ESLint**            | Code linting and quality              |

---

## 📦 Dependencies

### Production

```json
{
  "@hello-pangea/dnd": "^18.0.1",
  "lucide-react": "^0.562.0",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.11.0"
}
```

### Development

- `@vitejs/plugin-react` – React Fast Refresh for Vite
- `babel-plugin-react-compiler` – Experimental React compiler
- `eslint` – Linting with React hooks plugin

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Navigate to project
cd JavaScript_Projects/Project_2

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

---

## 💡 Key Implementation Details

### Kanban Board State

```javascript
const [columns, setColumns] = useState(initialColumns);
const [tasks] = useState(initialTasks);
```

- Columns store task IDs for ordering
- Tasks are stored as a flat object for easy lookup

### Drag & Drop Logic

```javascript
const onDragEnd = (result) => {
  const { destination, source, draggableId } = result;
  // Handle same-column reordering
  // Handle cross-column movement
};
```

### Component Hierarchy

```
App
├── Router
│   └── MainLayout
│       ├── Sidebar
│       ├── Header
│       ├── TabNavigation
│       └── [Content View]
│           ├── BoardPage → KanbanBoard
│           └── PlaceholderPage (other views)
```

---

## 🎨 Design System

### Color Palette

| Token      | Description                      |
| ---------- | -------------------------------- |
| Background | Dark grey (#1a1a1a area)         |
| Cards      | Elevated dark surfaces           |
| Accent     | Blue highlights for interactions |
| Tags       | Multi-colored for categories     |

### Component Styling

- CSS Modules approach per component
- Consistent spacing and typography
- Hover states and transitions

---

## 📋 Task Card Features

Each task card displays:

- **Title** – Task name/description
- **Tags** – Categorization labels (colored badges)
- **Date Range** – Task timeline
- **Assignees** – Team member avatars

### Mock Data Structure

```javascript
{
  id: "task-1",
  title: "Task description",
  tags: [{ label: "Design", type: "design" }],
  dateRange: "Mar 15 - Mar 20",
  assignees: ["member-1", "member-2"]
}
```

---

## 🔧 Configuration

### Vite Config

```javascript
import react from "@vitejs/plugin-react";

export default {
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
  ],
};
```

---

## 📄 License

This project is part of the **365 Days of Full Stack Development** challenge.

---

## 🤝 Author

**Karfa** – Full Stack Developer

---

_Built with ❤️ using React and modern tooling_
