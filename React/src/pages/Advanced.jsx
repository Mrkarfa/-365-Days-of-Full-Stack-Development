import CodeBlock from "../components/CodeBlock";
import Sidebar from "../components/Sidebar";
import AnimatedText from "../components/AnimatedText";
import "../components/Sidebar.css";
import "../components/CodeBlock.css";

const Advanced = () => {
  return (
    <div className="doc-layout">
      <Sidebar />
      <main className="doc-content">
        <AnimatedText as="div" className="doc-header">
          <span className="badge badge-purple">Advanced</span>
          <h1>Advanced React Patterns</h1>
          <p className="doc-intro">
            Take your React skills to the next level with advanced patterns,
            performance optimization, and architectural best practices.
          </p>
        </AnimatedText>

        <section id="context" className="doc-section">
          <h2>Context API Patterns</h2>
          <p>
            The Context API provides a way to pass data through the component
            tree without having to pass props manually at every level.
          </p>

          <h3>Context with Reducer Pattern</h3>
          <CodeBlock
            code={`import { createContext, useContext, useReducer } from 'react';

// Define actions
const ACTIONS = {
  ADD_TODO: 'add_todo',
  TOGGLE_TODO: 'toggle_todo',
  DELETE_TODO: 'delete_todo',
};

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, {
        id: Date.now(),
        text: action.payload,
        done: false,
      }];
    case ACTIONS.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, done: !todo.done }
          : todo
      );
    case ACTIONS.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

// Create contexts
const TodoContext = createContext();
const TodoDispatchContext = createContext();

// Provider component
function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

// Custom hooks for accessing context
function useTodos() {
  return useContext(TodoContext);
}

function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

// Usage in components
function AddTodo() {
  const dispatch = useTodoDispatch();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: text });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}`}
            language="jsx"
            filename="ContextReducer.jsx"
            showLineNumbers={true}
          />
        </section>

        <section id="performance" className="doc-section">
          <h2>Performance Optimization</h2>
          <p>
            Learn techniques to optimize your React application's performance.
          </p>

          <h3>React.memo</h3>
          <CodeBlock
            code={`import { memo, useState } from 'react';

// Wrap component with memo to prevent unnecessary re-renders
const ExpensiveComponent = memo(function ExpensiveComponent({ 
  data,
  onClick 
}) {
  console.log('ExpensiveComponent rendered');
  
  return (
    <div onClick={onClick}>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
});

// Custom comparison function
const MemoizedList = memo(
  function List({ items }) {
    return items.map(item => <Item key={item.id} {...item} />);
  },
  // Custom comparison: only re-render if items length changes
  (prevProps, nextProps) => {
    return prevProps.items.length === nextProps.items.length;
  }
);`}
            language="jsx"
            filename="ReactMemo.jsx"
            showLineNumbers={true}
          />

          <h3>Code Splitting with lazy()</h3>
          <CodeBlock
            code={`import { lazy, Suspense } from 'react';

// Lazy load components
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));
const Profile = lazy(() => import('./pages/Profile'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

// Loading component
function LoadingSpinner() {
  return (
    <div className="loading">
      <div className="spinner" />
      <p>Loading...</p>
    </div>
  );
}`}
            language="jsx"
            filename="CodeSplitting.jsx"
            showLineNumbers={true}
          />
        </section>

        <section id="error-boundaries" className="doc-section">
          <h2>Error Boundaries</h2>
          <p>
            Error boundaries catch JavaScript errors in their child component
            tree, log them, and display a fallback UI.
          </p>

          <CodeBlock
            code={`import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to an error reporting service
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>Something went wrong.</h2>
          <details>
            <summary>Error details</summary>
            <pre>{this.state.error?.toString()}</pre>
          </details>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <Header />
      <ErrorBoundary>
        <MainContent />
      </ErrorBoundary>
      <Footer />
    </ErrorBoundary>
  );
}`}
            language="jsx"
            filename="ErrorBoundary.jsx"
            showLineNumbers={true}
          />
        </section>

        <section id="suspense" className="doc-section">
          <h2>Suspense & Lazy Loading</h2>
          <p>
            Suspense lets you specify a loading state while waiting for code or
            data to load.
          </p>

          <CodeBlock
            code={`import { Suspense, lazy } from 'react';

// Lazy load a heavy component
const HeavyChart = lazy(() => import('./HeavyChart'));
const DataTable = lazy(() => import('./DataTable'));

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      
      {/* Each Suspense can have its own fallback */}
      <Suspense fallback={<ChartSkeleton />}>
        <HeavyChart />
      </Suspense>
      
      <Suspense fallback={<TableSkeleton />}>
        <DataTable />
      </Suspense>
    </div>
  );
}

// Skeleton components for better UX
function ChartSkeleton() {
  return (
    <div className="skeleton chart-skeleton">
      <div className="skeleton-header" />
      <div className="skeleton-body" />
    </div>
  );
}

function TableSkeleton() {
  return (
    <div className="skeleton table-skeleton">
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} className="skeleton-row" />
      ))}
    </div>
  );
}`}
            language="jsx"
            filename="Suspense.jsx"
            showLineNumbers={true}
          />
        </section>

        <section id="patterns" className="doc-section">
          <h2>Design Patterns</h2>

          <h3>Compound Components Pattern</h3>
          <CodeBlock
            code={`import { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

function Tabs({ children, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div className="tab-list">{children}</div>;
}

function Tab({ id, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  
  return (
    <button
      className={\`tab \${activeTab === id ? 'active' : ''}\`}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </button>
  );
}

function TabPanel({ id, children }) {
  const { activeTab } = useContext(TabsContext);
  
  if (activeTab !== id) return null;
  return <div className="tab-panel">{children}</div>;
}

// Attach sub-components
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

// Usage
function App() {
  return (
    <Tabs defaultTab="profile">
      <Tabs.List>
        <Tabs.Tab id="profile">Profile</Tabs.Tab>
        <Tabs.Tab id="settings">Settings</Tabs.Tab>
        <Tabs.Tab id="notifications">Notifications</Tabs.Tab>
      </Tabs.List>
      
      <Tabs.Panel id="profile">
        <h2>Profile Content</h2>
      </Tabs.Panel>
      <Tabs.Panel id="settings">
        <h2>Settings Content</h2>
      </Tabs.Panel>
      <Tabs.Panel id="notifications">
        <h2>Notifications Content</h2>
      </Tabs.Panel>
    </Tabs>
  );
}`}
            language="jsx"
            filename="CompoundComponents.jsx"
            showLineNumbers={true}
          />

          <h3>Render Props Pattern</h3>
          <CodeBlock
            code={`import { useState, useEffect } from 'react';

// Render Props component
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return render(position);
}

// Usage
function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <div>
          <h1>Move your mouse!</h1>
          <p>Position: ({x}, {y})</p>
          <div 
            className="cursor-follower"
            style={{ left: x, top: y }}
          />
        </div>
      )}
    />
  );
}`}
            language="jsx"
            filename="RenderProps.jsx"
            showLineNumbers={true}
          />
        </section>

        <div className="doc-nav">
          <a href="/hooks" className="nav-prev">
            ← Hooks
          </a>
          <a href="/cheatsheet" className="nav-next">
            Next: Cheat Sheet →
          </a>
        </div>
      </main>
    </div>
  );
};

export default Advanced;
