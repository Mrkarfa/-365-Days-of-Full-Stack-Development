import { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-bash";
import "../styles/prism-theme.css";

const CodeBlock = ({
  code,
  language = "jsx",
  filename,
  showLineNumbers = false,
  highlightLines = [],
}) => {
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const getLineNumbers = () => {
    const lines = code.split("\n").length;
    return Array.from({ length: lines }, (_, i) => i + 1);
  };

  return (
    <div className="code-block">
      <div className="code-block-header">
        <div className="code-block-info">
          <div className="code-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          {filename && <span className="code-filename">{filename}</span>}
          <span className="code-language">{language}</span>
        </div>
        <button
          className={`copy-btn ${copied ? "copied" : ""}`}
          onClick={handleCopy}
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <span className="copy-icon">✓</span>
              Copied!
            </>
          ) : (
            <>
              <span className="copy-icon">📋</span>
              Copy
            </>
          )}
        </button>
      </div>
      <div className="code-block-content">
        {showLineNumbers && (
          <div className="line-numbers" aria-hidden="true">
            {getLineNumbers().map((num) => (
              <span
                key={num}
                className={highlightLines.includes(num) ? "highlight" : ""}
              >
                {num}
              </span>
            ))}
          </div>
        )}
        <pre className={`language-${language}`}>
          <code ref={codeRef} className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
