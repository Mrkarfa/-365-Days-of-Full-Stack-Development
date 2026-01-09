import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    learn: [
      { path: "/getting-started", label: "Getting Started" },
      { path: "/core-concepts", label: "Core Concepts" },
      { path: "/hooks", label: "Hooks" },
      { path: "/advanced", label: "Advanced" },
    ],
    resources: [
      { path: "/cheatsheet", label: "Cheat Sheet" },
      { href: "https://react.dev", label: "Official Docs", external: true },
      {
        href: "https://github.com/facebook/react",
        label: "GitHub",
        external: true,
      },
    ],
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-icon">⚛</span>
              <span className="logo-text">Learniact</span>
            </Link>
            <p className="footer-description">
              Master React.js with interactive tutorials, comprehensive
              documentation, and quick cheat sheets.
            </p>
          </div>

          {/* Learn Links */}
          <div className="footer-section">
            <h4 className="footer-title">Learn</h4>
            <ul className="footer-links">
              {footerLinks.learn.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="footer-section">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                      <span className="external-icon">↗</span>
                    </a>
                  ) : (
                    <Link to={link.path}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4 className="footer-title">Stay Updated</h4>
            <p className="footer-text">
              Get the latest React tips and tutorials.
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-btn">→</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Learniact. Built with React & ❤️</p>
          <div className="footer-bottom-links">
            <span>Made for learning React.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
