import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import TabNavigation from "./components/TabNavigation/TabNavigation";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";
import {
  LayoutDashboard,
  List,
  Clock,
  PieChart,
  Calendar,
  FileText,
} from "lucide-react";
import "./App.css";

// Placeholder pages for non-board views
function PlaceholderPage({ icon: Icon, title, description }) {
  return (
    <div className="page-placeholder">
      <Icon />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function BoardPage() {
  return (
    <div className="board-container">
      <KanbanBoard />
    </div>
  );
}

function MainLayout() {
  const [activeTab, setActiveTab] = useState("board");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <PlaceholderPage
            icon={LayoutDashboard}
            title="Overview"
            description="Project overview and summary will be displayed here"
          />
        );
      case "list":
        return (
          <PlaceholderPage
            icon={List}
            title="List View"
            description="Tasks in list format will be displayed here"
          />
        );
      case "board":
        return <BoardPage />;
      case "timeline":
        return (
          <PlaceholderPage
            icon={Clock}
            title="Timeline"
            description="Project timeline and milestones will be displayed here"
          />
        );
      case "dashboard":
        return (
          <PlaceholderPage
            icon={PieChart}
            title="Dashboard"
            description="Project analytics and charts will be displayed here"
          />
        );
      case "calendar":
        return (
          <PlaceholderPage
            icon={Calendar}
            title="Calendar"
            description="Task calendar view will be displayed here"
          />
        );
      case "file":
        return (
          <PlaceholderPage
            icon={FileText}
            title="Files"
            description="Project files and documents will be displayed here"
          />
        );
      default:
        return <BoardPage />;
    }
  };

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Header />
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        {renderContent()}
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
