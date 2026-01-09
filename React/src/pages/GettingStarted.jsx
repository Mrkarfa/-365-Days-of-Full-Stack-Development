import CodeBlock from "../components/CodeBlock";
import Sidebar from "../components/Sidebar";
import AnimatedText from "../components/AnimatedText";
import "../components/Sidebar.css";
import "../components/CodeBlock.css";

const GettingStarted = () => {
  return (
    <div className="doc-layout">
      <Sidebar />
      <main className="doc-content">
        <AnimatedText as="div" className="doc-header">
          <span className="badge badge-primary">Getting Started</span>
          <h1>Introduction to React</h1>
          <p className="doc-intro">
            React is a JavaScript library for building user interfaces. Learn
            how to get started with React development from scratch.
          </p>
        </AnimatedText>

        <section id="intro" className="doc-section">
          <h2>What is React?</h2>
          <p>
            React is a declarative, efficient, and flexible JavaScript library
            for building user interfaces. It lets you compose complex UIs from
            small and isolated pieces of code called "components".
          </p>
          <p>
            React was created by Facebook (now Meta) and is maintained by Meta
            and a community of individual developers and companies. It's used to
            build single-page applications and can also be used for mobile app
            development with React Native.
          </p>

          <div className="info-box">
            <h4>💡 Key Features</h4>
            <ul>
              <li>
                <strong>Component-Based:</strong> Build encapsulated components
                that manage their own state
              </li>
              <li>
                <strong>Declarative:</strong> Design simple views for each state
                in your application
              </li>
              <li>
                <strong>Learn Once, Write Anywhere:</strong> Use React for web,
                mobile, and more
              </li>
            </ul>
          </div>
        </section>

        <section id="setup" className="doc-section">
          <h2>Setup Development Environment</h2>
          <p>
            Before you start, you'll need Node.js installed on your computer. We
            recommend using the latest LTS version.
          </p>

          <h3>Prerequisites</h3>
          <ul>
            <li>Node.js (version 18 or higher)</li>
            <li>npm or yarn package manager</li>
            <li>A code editor (VS Code recommended)</li>
          </ul>

          <h3>Check your Node.js installation</h3>
          <CodeBlock
            code={`node --version
npm --version`}
            language="bash"
            filename="Terminal"
          />
        </section>

        <section id="first-app" className="doc-section">
          <h2>Create Your First React App</h2>
          <p>
            The easiest way to create a new React application is using Vite, a
            modern build tool that provides a fast development experience.
          </p>

          <h3>Using Vite (Recommended)</h3>
          <CodeBlock
            code={`# Create a new React project
npm create vite@latest my-react-app -- --template react

# Navigate to the project
cd my-react-app

# Install dependencies
npm install

# Start the development server
npm run dev`}
            language="bash"
            filename="Terminal"
          />

          <p>
            After running these commands, open your browser and navigate to
            <code>http://localhost:5173</code> to see your new React app!
          </p>

          <h3>Project Structure</h3>
          <CodeBlock
            code={`my-react-app/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js`}
            language="bash"
            filename="Project Structure"
          />
        </section>

        <section id="jsx" className="doc-section">
          <h2>Understanding JSX</h2>
          <p>
            JSX is a syntax extension for JavaScript that looks similar to HTML.
            It allows you to write HTML-like code in your JavaScript files.
          </p>

          <h3>JSX Example</h3>
          <CodeBlock
            code={`// This is JSX
const element = <h1>Hello, World!</h1>;

// JSX with JavaScript expressions
const name = "React";
const greeting = <h1>Hello, {name}!</h1>;

// JSX with attributes
const link = <a href="https://react.dev">React Docs</a>;

// Multi-line JSX (wrap in parentheses)
const card = (
  <div className="card">
    <h2>Title</h2>
    <p>Description</p>
  </div>
);`}
            language="jsx"
            filename="jsx-examples.jsx"
            showLineNumbers={true}
          />

          <div className="info-box warning">
            <h4>⚠️ JSX Rules</h4>
            <ul>
              <li>
                Use <code>className</code> instead of <code>class</code>
              </li>
              <li>
                Use <code>htmlFor</code> instead of <code>for</code>
              </li>
              <li>All tags must be closed (including self-closing tags)</li>
              <li>
                Return a single root element (or use fragments{" "}
                <code>&lt;&gt;&lt;/&gt;</code>)
              </li>
            </ul>
          </div>

          <h3>JSX is Transformed to JavaScript</h3>
          <p>
            Behind the scenes, JSX is transformed into regular JavaScript
            function calls:
          </p>
          <CodeBlock
            code={`// JSX
const element = <h1 className="title">Hello!</h1>;

// Transforms to:
const element = React.createElement(
  'h1',
  { className: 'title' },
  'Hello!'
);`}
            language="jsx"
            filename="jsx-transformation.jsx"
          />
        </section>

        <div className="doc-nav">
          <span></span>
          <a href="/core-concepts" className="nav-next">
            Next: Core Concepts →
          </a>
        </div>
      </main>
    </div>
  );
};

export default GettingStarted;
