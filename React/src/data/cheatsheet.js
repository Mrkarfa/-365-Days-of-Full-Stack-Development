// React Cheat Sheet Data
export const cheatsheetData = {
  basics: [
    {
      title: "Create React App (Vite)",
      code: `npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev`,
      language: "bash",
    },
    {
      title: "Function Component",
      code: `function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Arrow function syntax
const Welcome = ({ name }) => (
  <h1>Hello, {name}!</h1>
);`,
      language: "jsx",
    },
    {
      title: "JSX Expression",
      code: `const name = 'React';
const element = <h1>Hello, {name}!</h1>;

// With expressions
const sum = <p>2 + 2 = {2 + 2}</p>;

// Conditional
const greeting = <p>{isLoggedIn ? 'Welcome!' : 'Please log in'}</p>;`,
      language: "jsx",
    },
    {
      title: "Fragments",
      code: `// Short syntax
return (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

// Full syntax (needed for keys)
return (
  <React.Fragment key={id}>
    <Item />
  </React.Fragment>
);`,
      language: "jsx",
    },
    {
      title: "Props",
      code: `// Passing props
<User name="John" age={25} isAdmin />

// Destructuring props
function User({ name, age, isAdmin = false }) {
  return (
    <div>
      <p>{name}, {age}</p>
      {isAdmin && <span>Admin</span>}
    </div>
  );
}

// Spread props
<Button {...buttonProps} />`,
      language: "jsx",
    },
    {
      title: "Children Prop",
      code: `function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

// Usage
<Card title="Welcome">
  <p>Card content here</p>
</Card>`,
      language: "jsx",
    },
    {
      title: "Conditional Rendering",
      code: `// Ternary
{isLoggedIn ? <Dashboard /> : <Login />}

// Logical AND
{hasNotifications && <Badge count={count} />}

// Null for nothing
if (!user) return null;

// Early return
if (loading) return <Spinner />;
if (error) return <Error message={error} />;
return <Content data={data} />;`,
      language: "jsx",
    },
    {
      title: "Lists & Keys",
      code: `const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
];

return (
  <ul>
    {items.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);`,
      language: "jsx",
    },
  ],
  hooks: [
    {
      title: "useState",
      code: `import { useState } from 'react';

// Basic
const [count, setCount] = useState(0);

// With object
const [user, setUser] = useState({ name: '', email: '' });
setUser({ ...user, name: 'John' });

// With callback (prev value)
setCount(prev => prev + 1);

// Lazy initialization
const [data, setData] = useState(() => expensiveComputation());`,
      language: "jsx",
    },
    {
      title: "useEffect",
      code: `import { useEffect } from 'react';

// Run on every render
useEffect(() => {
  console.log('Rendered');
});

// Run once (on mount)
useEffect(() => {
  fetchData();
}, []);

// Run when dependency changes
useEffect(() => {
  fetchUser(userId);
}, [userId]);

// Cleanup
useEffect(() => {
  const subscription = subscribe();
  return () => subscription.unsubscribe();
}, []);`,
      language: "jsx",
    },
    {
      title: "useContext",
      code: `import { createContext, useContext } from 'react';

// Create context
const ThemeContext = createContext('light');

// Provider
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

// Consume
function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click</button>;
}`,
      language: "jsx",
    },
    {
      title: "useRef",
      code: `import { useRef } from 'react';

// DOM reference
const inputRef = useRef(null);
<input ref={inputRef} />
inputRef.current.focus();

// Mutable value (no re-render)
const countRef = useRef(0);
countRef.current++;

// Previous value
const prevValue = useRef(value);
useEffect(() => {
  prevValue.current = value;
});`,
      language: "jsx",
    },
    {
      title: "useReducer",
      code: `import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0 });

<button onClick={() => dispatch({ type: 'increment' })}>
  Count: {state.count}
</button>`,
      language: "jsx",
    },
    {
      title: "useMemo & useCallback",
      code: `import { useMemo, useCallback } from 'react';

// Memoize computed value
const sortedList = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}, [items]);

// Memoize callback function
const handleClick = useCallback((id) => {
  setSelectedId(id);
}, []);

// With dependencies
const handleSubmit = useCallback(() => {
  submitForm(formData);
}, [formData]);`,
      language: "jsx",
    },
    {
      title: "Custom Hook",
      code: `function useLocalStorage(key, initialValue) {
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
const [theme, setTheme] = useLocalStorage('theme', 'dark');`,
      language: "jsx",
    },
  ],
  patterns: [
    {
      title: "Event Handling",
      code: `// Basic event
<button onClick={handleClick}>Click</button>

// With event object
<input onChange={(e) => setValue(e.target.value)} />

// Passing arguments
<button onClick={() => deleteItem(id)}>Delete</button>

// Prevent default
<form onSubmit={(e) => {
  e.preventDefault();
  handleSubmit();
}}>`,
      language: "jsx",
    },
    {
      title: "Controlled Input",
      code: `function Form() {
  const [value, setValue] = useState('');

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter text"
    />
  );
}`,
      language: "jsx",
    },
    {
      title: "Form Handling",
      code: `function LoginForm() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={form.email} onChange={handleChange} />
      <input name="password" type="password" value={form.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}`,
      language: "jsx",
    },
    {
      title: "Fetching Data",
      code: `function DataFetcher({ url }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`,
      language: "jsx",
    },
    {
      title: "React.memo",
      code: `import { memo } from 'react';

// Prevent re-renders if props haven't changed
const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  // Only re-renders when data changes
  return <div>{/* ... */}</div>;
});

// With custom comparison
const MemoizedList = memo(List, (prevProps, nextProps) => {
  return prevProps.items.length === nextProps.items.length;
});`,
      language: "jsx",
    },
    {
      title: "Lazy Loading",
      code: `import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}`,
      language: "jsx",
    },
    {
      title: "Portal",
      code: `import { createPortal } from 'react-dom';

function Modal({ children, isOpen }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}`,
      language: "jsx",
    },
    {
      title: "Forward Ref",
      code: `import { forwardRef, useRef } from 'react';

const FancyInput = forwardRef((props, ref) => (
  <input ref={ref} className="fancy-input" {...props} />
));

function Parent() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <FancyInput ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}`,
      language: "jsx",
    },
  ],
};

export const categories = [
  { id: "basics", label: "Basics", icon: "📦" },
  { id: "hooks", label: "Hooks", icon: "🎣" },
  { id: "patterns", label: "Patterns", icon: "🧩" },
];
