import {
  Search,
  Contact,
  Activity,
  Settings,
  Folder,
  MessageSquare,
  BarChart3,
  CheckSquare,
  Users,
  Moon,
} from "lucide-react";
import {
  teamMembers,
  currentUser,
  projects,
  mainMenuItems,
  topNavItems,
} from "../../data/mockData";
import "./Sidebar.css";

const iconMap = {
  Search,
  Contact,
  Activity,
  Settings,
  Folder,
  MessageSquare,
  BarChart3,
  CheckSquare,
  Users,
};

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">P</div>
        <div className="logo-text">
          <h1>One Agency</h1>
          <span>Business Plan</span>
        </div>
      </div>

      {/* Search */}
      <div className="sidebar-search">
        <div className="search-input">
          <Search />
          <span>Search</span>
          <span className="search-shortcut">⌘ K</span>
        </div>
      </div>

      {/* Top Navigation */}
      <nav className="sidebar-nav">
        {topNavItems.slice(1).map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <div key={item.id} className="nav-item">
              {Icon && <Icon />}
              <span>{item.label}</span>
            </div>
          );
        })}
      </nav>

      {/* Main Menu */}
      <div className="sidebar-menu">
        <div className="menu-section">
          <div className="menu-section-title">Main Menu</div>
          {mainMenuItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className={`menu-item ${item.active ? "active" : ""}`}
              >
                {Icon && <Icon />}
                <span>{item.label}</span>
                {item.badge && (
                  <span className="menu-item-badge">{item.badge}</span>
                )}
              </div>
            );
          })}

          {/* Projects Submenu */}
          <div className="projects-list">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`project-item ${project.active ? "active" : ""}`}
              >
                <div
                  className="project-icon"
                  style={{ backgroundColor: project.color }}
                >
                  {project.icon}
                </div>
                <span>{project.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Team */}
      <div className="team-section">
        <div className="team-title">Core Team</div>
        <div className="team-list">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <div
                className="member-avatar"
                style={{ backgroundColor: member.color }}
              >
                {member.avatar}
              </div>
              <span>{member.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* User Profile */}
      <div className="sidebar-user">
        <div className="user-avatar">{currentUser.avatar}</div>
        <div className="user-info">
          <div className="user-name">{currentUser.name}</div>
          <div className="user-role">{currentUser.role}</div>
        </div>
        <Moon
          size={18}
          className="user-status-icon"
          style={{ color: "var(--text-muted)" }}
        />
      </div>
    </aside>
  );
}

export default Sidebar;
