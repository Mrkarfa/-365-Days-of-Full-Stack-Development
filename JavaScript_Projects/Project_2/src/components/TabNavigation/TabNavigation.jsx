import {
  LayoutDashboard,
  List,
  Columns3,
  Clock,
  PieChart,
  Calendar,
  FileText,
  Filter,
  MoreHorizontal,
} from "lucide-react";
import "./TabNavigation.css";

const tabs = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "list", label: "List", icon: List },
  { id: "board", label: "Board", icon: Columns3 },
  { id: "timeline", label: "Timeline", icon: Clock },
  { id: "dashboard", label: "Dashboard", icon: PieChart },
  { id: "calendar", label: "Calendar", icon: Calendar },
  { id: "file", label: "File", icon: FileText },
];

function TabNavigation({ activeTab, onTabChange }) {
  return (
    <div className="tab-navigation">
      <div className="tab-list">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => onTabChange(tab.id)}
            >
              <Icon />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="tab-actions">
        <button className="btn-filter">
          <Filter />
          <span>Filter</span>
        </button>
        <button className="btn-more">
          <MoreHorizontal />
        </button>
      </div>
    </div>
  );
}

export default TabNavigation;
