import CodeBlock from "../components/CodeBlock";
import Sidebar from "../components/Sidebar";
import AnimatedText from "../components/AnimatedText";
import "../components/Sidebar.css";
import "../components/CodeBlock.css";

const Hooks = () => {
  return (
    <div className="doc-layout">
      <Sidebar />
      <main className="doc-content">
        <AnimatedText as="div" className="doc-header">
          <span className="badge badge-primary">Hooks</span>
          <h1>React Hooks</h1>
          <p className="doc-intro">
            Hooks are functions that let you use state and other React features
            in function components.
          </p>
        </AnimatedText>

        <section id="useState" className="doc-section">
          <h2>useState</h2>
          <p>
            The <code>useState</code> hook lets you add state to function
            components. It returns an array with the current state and a
            function to update it.
          </p>

          <CodeBlock
            code={`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

// Multiple state variables
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <form>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <label>
        <input
          type="checkbox"
          checked={isSubscribed}
          onChange={(e) => setIsSubscribed(e.target.checked)}
        />
        Subscribe to newsletter
      </label>
    </form>
  );
}

// State with objects
function Profile() {
  const [user, setUser] = useState({
    name: 'John',
    age: 25,
    city: 'New York'
  });

  const updateAge = () => {
    setUser({
      ...user,      // Spread existing properties
      age: user.age + 1  // Update specific property
    });
  };

  return <button onClick={updateAge}>Birthday!</button>;
}`}
            language="jsx"
            filename="useState.jsx"
            showLineNumbers={true}
          />
        </section>

        <section id="useEffect" className="doc-section">
          <h2>useEffect</h2>
          <p>
            The <code>useEffect</code> hook lets you perform side effects in
            function components, such as data fetching, subscriptions, or
            manually changing the DOM.
          </p>

          <CodeBlock
            code={`import { useState, useEffect } from 'react';

// Runs after every render
function Logger() {
  useEffect(() => {
    console.log('Component rendered!');
  });
}

// Runs only once (on mount)
function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/data');
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    fetchData();
  }, []); // Empty dependency array = run once

  if (loading) return <p>Loading...</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

// Runs when dependencies change
function SearchResults({ query }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(\`/api/search?q=\${query}\`)
        .then(res => res.json())
        .then(setResults);
    }
  }, [query]); // Runs when 'query' changes

  return <ul>{results.map(r => <li key={r.id}>{r.title}</li>)}</ul>;
}

// Cleanup function
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup: runs when component unmounts
    return () => clearInterval(interval);
  }, []);

  return <p>Seconds: {seconds}</p>;
}`}
            language="jsx"
            filename="useEffect.jsx"
            showLineNumbers={true}
          />

          <div className="info-box">
            <h4>📌 useEffect Dependency Array</h4>
            <ul>
              <li>
                <strong>No array:</strong> Runs after every render
              </li>
              <li>
                <strong>
                  Empty array <code>[]</code>:
                </strong>{" "}
                Runs once on mount
              </li>
              <li>
                <strong>
                  With values <code>[a, b]</code>:
                </strong>{" "}
                Runs when a or b changes
              </li>
            </ul>
          </div>
        </section>

        <section id="useContext" className="doc-section">
          <h2>useContext</h2>
          <p>
            The <code>useContext</code> hook lets you subscribe to React context
            without introducing nesting. It's great for sharing global state.
          </p>

          <CodeBlock
            code={`import { createContext, useContext, useState } from 'react';

// 1. Create a context
const ThemeContext = createContext('light');

// 2. Create a provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Use the context in any component
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
      }}
    >
      Toggle Theme (Current: {theme})
    </button>
  );
}

// 4. Wrap your app with the provider
function App() {
  return (
    <ThemeProvider>
      <ThemedButton />
    </ThemeProvider>
  );
}`}
            language="jsx"
            filename="useContext.jsx"
            showLineNumbers={true}
          />
        </section>

        <section id="useRef" className="doc-section">
          <h2>useRef</h2>
          <p>
            The <code>useRef</code> hook creates a mutable reference that
            persists across re-renders. It's commonly used to access DOM
            elements or store values that don't trigger re-renders.
          </p>

          <CodeBlock
            code={`import { useRef, useEffect } from 'react';

// Accessing DOM elements
function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// Storing previous values
function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });

  const prevCount = prevCountRef.current;

  return (
    <div>
      <p>Now: {count}, Before: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

// Storing interval/timeout IDs
function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime(t => t + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <p>Time: {time}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}`}
            language="jsx"
            filename="useRef.jsx"
            showLineNumbers={true}
          />
        </section>

        <section id="useMemo" className="doc-section">
          <h2>useMemo & useCallback</h2>
          <p>
            These hooks are used for performance optimization by memoizing
            values and functions.
          </p>

          <CodeBlock
            code={`import { useMemo, useCallback, useState } from 'react';

// useMemo: Memoize expensive calculations
function ExpensiveList({ items, filter }) {
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]); // Only re-compute when items or filter changes

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// useCallback: Memoize functions
function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={onToggle} 
        />
      ))}
    </ul>
  );
}

function App() {
  const [todos, setTodos] = useState([]);

  // Without useCallback, this creates a new function every render
  const handleToggle = useCallback((id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }, []); // No dependencies = function never changes

  return <TodoList todos={todos} onToggle={handleToggle} />;
}`}
            language="jsx"
            filename="useMemoCallback.jsx"
            showLineNumbers={true}
          />

          <div className="info-box warning">
            <h4>⚠️ When to Use</h4>
            <p>
              Don't overuse these hooks! Only use them when you have measurable
              performance issues. Premature optimization can make your code
              harder to read.
            </p>
          </div>
        </section>

        <section id="custom" className="doc-section">
          <h2>Custom Hooks</h2>
          <p>
            Custom hooks let you extract component logic into reusable
            functions. A custom hook is a function that starts with "use" and
            may call other hooks.
          </p>

          <CodeBlock
            code={`import { useState, useEffect } from 'react';

// Custom hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Using the custom hook
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(
    \`/api/users/\${userId}\`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <h1>{user.name}</h1>;
}

// Custom hook for localStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <button onClick={() => setTheme(
      theme === 'light' ? 'dark' : 'light'
    )}>
      Theme: {theme}
    </button>
  );
}`}
            language="jsx"
            filename="CustomHooks.jsx"
            showLineNumbers={true}
          />
        </section>

        <div className="doc-nav">
          <a href="/core-concepts" className="nav-prev">
            ← Core Concepts
          </a>
          <a href="/advanced" className="nav-next">
            Next: Advanced →
          </a>
        </div>
      </main>
    </div>
  );
};

export default Hooks;
