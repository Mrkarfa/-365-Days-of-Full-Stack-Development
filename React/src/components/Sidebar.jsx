import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const sidebarSections = [
    {
      title: "Getting Started",
      basePath: "/getting-started",
      items: [
        { id: "intro", label: "Introduction" },
        { id: "setup", label: "Setup Environment" },
        { id: "first-app", label: "First React App" },
        { id: "jsx", label: "Understanding JSX" },
      ],
    },
    {
      title: "Core Concepts",
      basePath: "/core-concepts",
      items: [
        { id: "components", label: "Components" },
        { id: "props", label: "Props" },
        { id: "state", label: "State" },
        { id: "events", label: "Event Handling" },
        { id: "conditional", label: "Conditional Rendering" },
        { id: "lists", label: "Lists & Keys" },
      ],
    },
    {
      title: "Hooks",
      basePath: "/hooks",
      items: [
        { id: "useState", label: "useState" },
        { id: "useEffect", label: "useEffect" },
        { id: "useContext", label: "useContext" },
        { id: "useRef", label: "useRef" },
        { id: "useMemo", label: "useMemo & useCallback" },
        { id: "custom", label: "Custom Hooks" },
      ],
    },
    {
      title: "Advanced",
      basePath: "/advanced",
      items: [
        { id: "context", label: "Context API" },
        { id: "performance", label: "Performance" },
        { id: "error-boundaries", label: "Error Boundaries" },
        { id: "suspense", label: "Suspense & Lazy" },
        { id: "patterns", label: "Design Patterns" },
      ],
    },
  ];

  const isActive = (basePath) => location.pathname === basePath;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {sidebarSections.map((section) => (
          <div key={section.title} className="sidebar-section">
            <NavLink
              to={section.basePath}
              className={({ isActive }) =>
                `sidebar-section-title ${isActive ? "active" : ""}`
              }
            >
              {section.title}
            </NavLink>

            {isActive(section.basePath) && (
              <ul className="sidebar-items">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <button
                      className="sidebar-item"
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="sidebar-section">
          <NavLink
            to="/cheatsheet"
            className={({ isActive }) =>
              `sidebar-section-title ${isActive ? "active" : ""}`
            }
          >
            📋 Cheat Sheet
          </NavLink>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
