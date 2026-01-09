import CodeBlock from "../components/CodeBlock";
import Sidebar from "../components/Sidebar";
import AnimatedText from "../components/AnimatedText";
import "../components/Sidebar.css";
import "../components/CodeBlock.css";

const CoreConcepts = () => {
  return (
    <div className="doc-layout">
      <Sidebar />
      <main className="doc-content">
        <AnimatedText as="div" className="doc-header">
          <span className="badge badge-primary">Core Concepts</span>
          <h1>React Fundamentals</h1>
          <p className="doc-intro">
            Master the core building blocks of React: components, props, state,
            and event handling.
          </p>
        </AnimatedText>

        <section id="components" className="doc-section">
          <h2>Components</h2>
          <p>
            Components are the building blocks of any React application. A
            component is a self-contained piece of UI that can be reused
            throughout your app.
          </p>

          <h3>Function Components</h3>
          <p>
            The most common way to define a component in modern React is using a
            function:
          </p>
          <CodeBlock
            code={`function Welcome() {
  return <h1>Hello, World!</h1>;
}

// Arrow function syntax
const Welcome = () => {
  return <h1>Hello, World!</h1>;
};

// Using the component
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}`}
            language="jsx"
            filename="Components.jsx"
            showLineNumbers={true}
          />

          <div className="info-box">
            <h4>📌 Component Rules</h4>
            <ul>
              <li>Component names must start with a capital letter</li>
              <li>Components must return JSX (or null)</li>
              <li>Components can be nested inside other components</li>
            </ul>
          </div>
        </section>

        <section id="props" className="doc-section">
          <h2>Props</h2>
          <p>
            Props (short for "properties") are how you pass data from a parent
            component to a child component. They are read-only and cannot be
            modified by the child.
          </p>

          <CodeBlock
            code={`// Define a component that accepts props
function Greeting({ name, age }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>You are {age} years old.</p>
    </div>
  );
}

// Pass props when using the component
function App() {
  return (
    <div>
      <Greeting name="Alice" age={25} />
      <Greeting name="Bob" age={30} />
    </div>
  );
}

// Default props
function Button({ text = "Click me", color = "blue" }) {
  return (
    <button style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}`}
            language="jsx"
            filename="Props.jsx"
            showLineNumbers={true}
          />

          <h3>Children Prop</h3>
          <p>
            The <code>children</code> prop is a special prop that contains the
            content between the opening and closing tags of a component:
          </p>
          <CodeBlock
            code={`function Card({ children, title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

// Usage
<Card title="Welcome">
  <p>This is the card content!</p>
  <button>Click me</button>
</Card>`}
            language="jsx"
            filename="Children.jsx"
          />
        </section>

        <section id="state" className="doc-section">
          <h2>State</h2>
          <p>
            State is data that changes over time. Unlike props, state is managed
            within the component and can be updated.
          </p>

          <CodeBlock
            code={`import { useState } from 'react';

function Counter() {
  // Declare a state variable called "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}`}
            language="jsx"
            filename="State.jsx"
            showLineNumbers={true}
          />

          <div className="info-box warning">
            <h4>⚠️ State Rules</h4>
            <ul>
              <li>Never modify state directly: use the setter function</li>
              <li>State updates may be asynchronous</li>
              <li>State updates trigger a re-render</li>
            </ul>
          </div>
        </section>

        <section id="events" className="doc-section">
          <h2>Event Handling</h2>
          <p>
            React events are named using camelCase and you pass a function as
            the event handler.
          </p>

          <CodeBlock
            code={`function Button() {
  // Event handler function
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

// Passing arguments to event handlers
function ItemList() {
  const handleDelete = (id) => {
    console.log('Deleting item:', id);
  };

  return (
    <ul>
      <li>
        Item 1
        <button onClick={() => handleDelete(1)}>Delete</button>
      </li>
      <li>
        Item 2
        <button onClick={() => handleDelete(2)}>Delete</button>
      </li>
    </ul>
  );
}

// Event object
function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}`}
            language="jsx"
            filename="Events.jsx"
            showLineNumbers={true}
          />
        </section>

        <section id="conditional" className="doc-section">
          <h2>Conditional Rendering</h2>
          <p>
            React allows you to conditionally render components or elements
            based on certain conditions.
          </p>

          <CodeBlock
            code={`function UserGreeting({ isLoggedIn, username }) {
  // If/else approach
  if (isLoggedIn) {
    return <h1>Welcome back, {username}!</h1>;
  }
  return <h1>Please sign in.</h1>;
}

// Ternary operator
function Status({ isOnline }) {
  return (
    <span className={isOnline ? 'online' : 'offline'}>
      {isOnline ? '🟢 Online' : '🔴 Offline'}
    </span>
  );
}

// Logical && operator (short-circuit)
function Notifications({ count }) {
  return (
    <div>
      <h2>Notifications</h2>
      {count > 0 && (
        <span className="badge">{count} new</span>
      )}
    </div>
  );
}

// Null to render nothing
function Warning({ message }) {
  if (!message) {
    return null;
  }
  return <div className="warning">{message}</div>;
}`}
            language="jsx"
            filename="ConditionalRendering.jsx"
            showLineNumbers={true}
          />
        </section>

        <section id="lists" className="doc-section">
          <h2>Lists & Keys</h2>
          <p>
            When rendering lists in React, each item needs a unique{" "}
            <code>key</code> prop to help React identify which items have
            changed.
          </p>

          <CodeBlock
            code={`function TodoList() {
  const todos = [
    { id: 1, text: 'Learn React', done: true },
    { id: 2, text: 'Build a project', done: false },
    { id: 3, text: 'Deploy to production', done: false },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <li 
          key={todo.id}
          style={{ 
            textDecoration: todo.done ? 'line-through' : 'none' 
          }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

// Rendering components in a list
function UserList({ users }) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}`}
            language="jsx"
            filename="Lists.jsx"
            showLineNumbers={true}
          />

          <div className="info-box warning">
            <h4>⚠️ Key Rules</h4>
            <ul>
              <li>Keys must be unique among siblings</li>
              <li>Don't use array index as key if the list can reorder</li>
              <li>Keys should be stable (don't generate them randomly)</li>
            </ul>
          </div>
        </section>

        <div className="doc-nav">
          <a href="/getting-started" className="nav-prev">
            ← Getting Started
          </a>
          <a href="/hooks" className="nav-next">
            Next: Hooks →
          </a>
        </div>
      </main>
    </div>
  );
};

export default CoreConcepts;
