import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/getting-started", label: "Getting Started" },
    { path: "/core-concepts", label: "Core Concepts" },
    { path: "/hooks", label: "Hooks" },
    { path: "/advanced", label: "Advanced" },
    { path: "/cheatsheet", label: "Cheat Sheet" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(
    () => {
      gsap.from(".nav-item", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    },
    { scope: navRef }
  );

  useGSAP(
    () => {
      if (mobileMenuRef.current) {
        if (isMobileMenuOpen) {
          gsap.to(mobileMenuRef.current, {
            height: "auto",
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.from(".mobile-nav-item", {
            x: -20,
            opacity: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.out",
          });
        } else {
          gsap.to(mobileMenuRef.current, {
            height: 0,
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
          });
        }
      }
    },
    { dependencies: [isMobileMenuOpen] }
  );

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      ref={navRef}
      className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="navbar-container">
        <Link to="/" className="nav-logo nav-item" onClick={closeMobileMenu}>
          <span className="logo-icon">⚛</span>
          <span className="logo-text">Learniact</span>
        </Link>

        <div className="nav-links hide-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link nav-item ${
                location.pathname === link.path ? "active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="mobile-menu-btn show-mobile"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      <div
        ref={mobileMenuRef}
        className="mobile-menu"
        style={{ height: 0, opacity: 0, overflow: "hidden" }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`mobile-nav-item ${
              location.pathname === link.path ? "active" : ""
            }`}
            onClick={closeMobileMenu}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
