import { Briefcase, Lock, Plus, Grid3X3, Settings2 } from "lucide-react";
import { currentProject } from "../../data/mockData";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* Top Row */}
      <div className="header-top">
        <div className="header-breadcrumb">
          <Briefcase />
          <span>Project</span>
          <span>/</span>
          <span>{currentProject.name}</span>
        </div>

        <div className="header-actions">
          <button className="btn-view-projects">
            <Grid3X3 />
            <span>View All Projects</span>
          </button>
          <button className="btn-add-project">
            <Plus />
            <span>Add New Projects</span>
          </button>
        </div>
      </div>

      {/* Project Info Row */}
      <div className="header-project">
        <div className="project-title-section">
          <div className="project-icon">A</div>
          <h1 className="project-title">{currentProject.title}</h1>
          <div className="private-badge">
            <Lock />
            <span>Private Board</span>
          </div>
        </div>

        <div className="project-team">
          <div className="team-avatars">
            {currentProject.teamAvatars.map((avatar, index) => (
              <div
                key={avatar.id}
                className="team-avatar"
                style={{ backgroundColor: avatar.color }}
              >
                {avatar.initial}
              </div>
            ))}
            {currentProject.additionalMembers > 0 && (
              <div className="team-avatar more">
                +{currentProject.additionalMembers}
              </div>
            )}
          </div>
          <button className="btn-add-member">
            <Plus />
          </button>
          <button className="btn-customize">
            <Settings2 />
            <span>Customize</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
