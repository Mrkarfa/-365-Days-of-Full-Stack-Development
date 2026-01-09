import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import AnimatedText from "../components/AnimatedText";
import "../components/Hero.css";
import "../components/Card.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Home = () => {
  const featuresRef = useRef(null);
  const pathRef = useRef(null);

  const features = [
    {
      icon: "⚡",
      title: "Component-Based",
      description:
        "Build encapsulated components that manage their own state, then compose them to make complex UIs.",
      link: "/core-concepts",
    },
    {
      icon: "🔄",
      title: "Declarative",
      description:
        "React makes it painless to create interactive UIs. Design simple views for each state in your application.",
      link: "/getting-started",
    },
    {
      icon: "🎣",
      title: "Hooks",
      description:
        "Hooks let you use state and other React features without writing a class. Learn useState, useEffect, and more.",
      link: "/hooks",
    },
    {
      icon: "🚀",
      title: "Performance",
      description:
        "React efficiently updates and renders just the right components when your data changes.",
      link: "/advanced",
    },
  ];

  const learningPath = [
    {
      step: 1,
      title: "Getting Started",
      description: "Set up your environment and create your first React app",
      link: "/getting-started",
    },
    {
      step: 2,
      title: "Core Concepts",
      description: "Master components, props, state, and event handling",
      link: "/core-concepts",
    },
    {
      step: 3,
      title: "Hooks Deep Dive",
      description: "Learn all React Hooks and create custom ones",
      link: "/hooks",
    },
    {
      step: 4,
      title: "Advanced Patterns",
      description: "Context, performance optimization, and design patterns",
      link: "/advanced",
    },
  ];

  useGSAP(
    () => {
      gsap.from(".feature-card", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".path-step", {
        x: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: pathRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: featuresRef }
  );

  return (
    <div className="home-page">
      <Hero />

      {/* Features Section */}
      <section className="section features-section" ref={featuresRef}>
        <div className="container">
          <AnimatedText as="div" className="section-header text-center">
            <span className="section-badge badge-primary">Why React?</span>
            <h2>Build Modern User Interfaces</h2>
            <p className="section-description">
              React is a JavaScript library for building fast, interactive, and
              scalable web applications.
            </p>
          </AnimatedText>

          <div className="features-grid grid grid-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                link={feature.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="section path-section" ref={pathRef}>
        <div className="container">
          <AnimatedText as="div" className="section-header text-center">
            <span className="section-badge badge-purple">Learning Path</span>
            <h2>From Zero to Hero</h2>
            <p className="section-description">
              Follow our structured learning path to master React step by step.
            </p>
          </AnimatedText>

          <div className="learning-path">
            {learningPath.map((item) => (
              <Link to={item.link} key={item.step} className="path-step">
                <div className="step-number">{item.step}</div>
                <div className="step-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="step-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="section code-section">
        <div className="container">
          <div className="code-section-grid">
            <AnimatedText as="div" className="code-section-content">
              <span className="section-badge badge-primary">
                Simple & Intuitive
              </span>
              <h2>Write Less, Do More</h2>
              <p>
                React's component model lets you break your UI into small,
                reusable pieces. Each component is self-contained and easy to
                understand.
              </p>
              <ul className="feature-list">
                <li>✓ Reusable components</li>
                <li>✓ Virtual DOM for performance</li>
                <li>✓ One-way data flow</li>
                <li>✓ Rich ecosystem & tooling</li>
              </ul>
              <Link to="/cheatsheet" className="btn btn-primary">
                View Cheat Sheet →
              </Link>
            </AnimatedText>

            <AnimatedText animation="slideRight" className="code-preview">
              <div className="code-window">
                <div className="code-header">
                  <div className="code-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="code-filename">Counter.jsx</span>
                </div>
                <pre className="code-content">
                  <code>{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;`}</code>
                </pre>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <AnimatedText as="div" className="cta-content text-center">
            <h2>Ready to Start Learning?</h2>
            <p>
              Jump into our comprehensive React tutorials and become a React
              developer today.
            </p>
            <div className="cta-buttons">
              <Link to="/getting-started" className="btn btn-primary btn-lg">
                Start Learning →
              </Link>
              <Link to="/cheatsheet" className="btn btn-secondary btn-lg">
                Browse Cheat Sheet
              </Link>
            </div>
          </AnimatedText>
        </div>
      </section>
    </div>
  );
};

export default Home;
