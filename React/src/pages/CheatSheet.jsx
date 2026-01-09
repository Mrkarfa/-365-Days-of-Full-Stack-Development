import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CodeBlock from "../components/CodeBlock";
import AnimatedText from "../components/AnimatedText";
import { cheatsheetData, categories } from "../data/cheatsheet";
import "../components/CodeBlock.css";

gsap.registerPlugin(useGSAP);

const CheatSheet = () => {
  const [activeCategory, setActiveCategory] = useState("basics");
  const [searchQuery, setSearchQuery] = useState("");
  const contentRef = useRef(null);

  const filteredItems = cheatsheetData[activeCategory].filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="cheatsheet-page">
      <div className="container">
        <AnimatedText as="div" className="cheatsheet-header text-center">
          <span className="badge badge-primary">Quick Reference</span>
          <h1>React Cheat Sheet</h1>
          <p className="cheatsheet-intro">
            Copy-paste ready code snippets for common React patterns and syntax.
          </p>
        </AnimatedText>

        <div className="cheatsheet-controls">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search snippets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                className="search-clear"
                onClick={() => setSearchQuery("")}
              >
                ✕
              </button>
            )}
          </div>

          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-tab ${
                  activeCategory === cat.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="tab-icon">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="cheatsheet-content" ref={contentRef}>
          {filteredItems.length === 0 ? (
            <div className="no-results">
              <p>No snippets found for "{searchQuery}"</p>
              <button onClick={() => setSearchQuery("")}>Clear search</button>
            </div>
          ) : (
            <div className="cheatsheet-grid">
              {filteredItems.map((item, index) => (
                <div key={index} className="cheatsheet-item">
                  <h3 className="item-title">{item.title}</h3>
                  <CodeBlock
                    code={item.code}
                    language={item.language}
                    showLineNumbers={false}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheatSheet;
