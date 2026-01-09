import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        y: 30,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".hero-title",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          ".hero-subtitle",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".hero-buttons",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".hero-code",
          {
            scale: 0.95,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".hero-stats .stat",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.3"
        );
    },
    { scope: heroRef }
  );

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-grid-pattern"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            React 19 Ready
          </div>

          <h1 className="hero-title">
            Master <span className="text-gradient">React.js</span>
            <br />
            The Modern Way
          </h1>

          <p className="hero-subtitle">
            Learn React from fundamentals to advanced patterns with interactive
            tutorials, hands-on examples, and comprehensive cheat sheets.
          </p>

          <div className="hero-buttons">
            <Link to="/getting-started" className="btn btn-primary btn-lg">
              Start Learning
              <span>→</span>
            </Link>
            <Link to="/cheatsheet" className="btn btn-secondary btn-lg">
              View Cheat Sheet
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">6+</span>
              <span className="stat-label">Topics</span>
            </div>
            <div className="stat">
              <span className="stat-value">50+</span>
              <span className="stat-label">Examples</span>
            </div>
            <div className="stat">
              <span className="stat-value">100%</span>
              <span className="stat-label">Free</span>
            </div>
          </div>
        </div>

        <div className="hero-code">
          <div className="code-window">
            <div className="code-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="code-filename">App.jsx</span>
            </div>
            <pre className="code-content">
              <code>{`function Welcome() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Hello, React! 👋</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
