import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PDFDownload from './PDFDownload';
import './DetailPages.css';

/* eslint-disable no-undef */

function PerformanceOptimization() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>⚡ Performance Optimization</h1>
            <p>Learn techniques to optimize React applications for better performance and user experience.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
              <Link to="/js-react-concepts" className="back-link">
                ← Back to JS & React Concepts
              </Link>
              <PDFDownload pageTitle="Performance Optimization" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="detail-content">
            <div className="card" id="react-memoization">
              <h2>Memoization: useMemo & useCallback</h2>
              
              <div className="code-example">
                <h3>useMemo for Expensive Calculations</h3>
                <p className="explanation">
                  useMemo memoizes the result of expensive calculations, preventing unnecessary recalculations on every render. It's particularly useful for complex computations, data transformations, or API response processing that don't need to run on every render.
                </p>
                <pre><code>{`import React, { useState, useMemo } from 'react';

// ❌ Bad: Expensive calculation runs on every render
function BadComponent({ items }) {
  const [filter, setFilter] = useState('');
  
  // This runs on every render, even when items or filter haven't changed
  const expensiveFilteredItems = items
    .filter(item => item.name.includes(filter))
    .map(item => ({
      ...item,
      processed: complexProcessing(item.data)
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      {expensiveFilteredItems.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

// ✅ Good: Memoized expensive calculation
function GoodComponent({ items }) {
  const [filter, setFilter] = useState('');
  
  // This only runs when items or filter changes
  const expensiveFilteredItems = useMemo(() => {
    console.log('Performing expensive calculation...');
    return items
      .filter(item => item.name.includes(filter))
      .map(item => ({
        ...item,
        processed: complexProcessing(item.data)
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [items, filter]); // Dependencies array

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      {expensiveFilteredItems.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

// useMemo for derived state
function DerivedStateExample({ user, posts }) {
  const userStats = useMemo(() => {
    if (!user || !posts) return null;
    
    return {
      totalPosts: posts.length,
      publishedPosts: posts.filter(post => post.status === 'published').length,
      draftPosts: posts.filter(post => post.status === 'draft').length,
      averageLikes: posts.reduce((sum, post) => sum + post.likes, 0) / posts.length,
      mostPopularPost: posts.reduce((max, post) => 
        post.likes > max.likes ? post : max
      )
    };
  }, [user, posts]);

  if (!userStats) return <div>Loading...</div>;

  return (
    <div>
      <h3>User Statistics</h3>
      <p>Total Posts: {userStats.totalPosts}</p>
      <p>Published: {userStats.publishedPosts}</p>
      <p>Drafts: {userStats.draftPosts}</p>
      <p>Average Likes: {userStats.averageLikes.toFixed(1)}</p>
      <p>Most Popular: {userStats.mostPopularPost.title}</p>
    </div>
  );
}

// Complex data transformation
function DataTransformationExample({ rawData }) {
  const processedData = useMemo(() => {
    if (!rawData || rawData.length === 0) return [];
    
    return rawData
      .filter(item => item.active)
      .map(item => ({
        id: item.id,
        name: item.name.toUpperCase(),
        category: item.category || 'uncategorized',
        value: parseFloat(item.value) || 0,
        formattedValue: new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(parseFloat(item.value) || 0)
      }))
      .sort((a, b) => b.value - a.value)
      .reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      }, {});
  }, [rawData]);

  return (
    <div>
      {Object.entries(processedData).map(([category, items]) => (
        <div key={category}>
          <h4>{category}</h4>
          {items.map(item => (
            <div key={item.id}>
              {item.name}: {item.formattedValue}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}`}</code></pre>
              </div>

              <div className="code-example">
                <h3>useCallback for Stable Function References</h3>
                <p className="explanation">
                  useCallback memoizes function references, preventing unnecessary re-renders of child components that receive these functions as props. This is especially important when passing callbacks to optimized child components that use React.memo.
                </p>
                <pre><code>{`import React, { useState, useCallback, memo } from 'react';

// ❌ Bad: Function recreated on every render
function BadParent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // This function is recreated on every render
  const handleItemClick = (itemId) => {
    console.log('Item clicked:', itemId);
    setItems(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, selected: !item.selected }
        : item
    ));
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <ItemList items={items} onItemClick={handleItemClick} />
    </div>
  );
}

// ✅ Good: Memoized function reference
function GoodParent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // This function reference is stable
  const handleItemClick = useCallback((itemId) => {
    console.log('Item clicked:', itemId);
    setItems(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, selected: !item.selected }
        : item
    ));
  }, []); // Empty dependency array since it doesn't depend on any values

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <ItemList items={items} onItemClick={handleItemClick} />
    </div>
  );
}

// Memoized child component
const ItemList = memo(function ItemList({ items, onItemClick }) {
  console.log('ItemList rendering');
  
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <button onClick={() => onItemClick(item.id)}>
            {item.name} {item.selected ? '(Selected)' : ''}
          </button>
        </li>
      ))}
    </ul>
  );
});

// useCallback with dependencies
function SearchComponent({ onSearch, searchHistory }) {
  const [query, setQuery] = useState('');

  // Function depends on onSearch prop
  const handleSearch = useCallback((searchQuery) => {
    onSearch(searchQuery);
    // Add to history
    if (searchQuery.trim()) {
      searchHistory.add(searchQuery);
    }
  }, [onSearch, searchHistory]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    handleSearch(query);
  }, [query, handleSearch]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

// Custom hook with useCallback
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  const setValue = useCallback((value) => {
    setCount(value);
  }, []);

  return {
    count,
    increment,
    decrement,
    reset,
    setValue
  };
}`}</code></pre>
              </div>
            </div>

            <div className="card" id="react-memo">
              <h2>Component Memoization: React.memo</h2>
              
              <div className="code-example">
                <h3>Basic React.memo Usage</h3>
                <p className="explanation">
                  React.memo is a higher-order component that memoizes your component, preventing re-renders if the props haven't changed. It's particularly useful for components that receive the same props frequently or are expensive to render.
                </p>
                <pre><code>{`import React, { memo } from 'react';

// ❌ Without memoization - re-renders on every parent render
function ExpensiveComponent({ data, onAction }) {
  console.log('ExpensiveComponent rendering');
  
  // Simulate expensive rendering
  const processedData = data.map(item => ({
    ...item,
    processed: complexProcessing(item)
  }));

  return (
    <div>
      {processedData.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <button onClick={() => onAction(item.id)}>
            Action
          </button>
        </div>
      ))}
    </div>
  );
}

// ✅ With memoization - only re-renders when props change
const MemoizedExpensiveComponent = memo(function ExpensiveComponent({ data, onAction }) {
  console.log('ExpensiveComponent rendering');
  
  const processedData = data.map(item => ({
    ...item,
    processed: complexProcessing(item)
  }));

  return (
    <div>
      {processedData.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <button onClick={() => onAction(item.id)}>
            Action
          </button>
        </div>
      ))}
    </div>
  );
});

// Custom comparison function
const CustomMemoizedComponent = memo(
  function CustomComponent({ items, onItemClick }) {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => onItemClick(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    );
  },
  // Custom comparison function
  (prevProps, nextProps) => {
    // Only re-render if items array length or any item's id/name changed
    if (prevProps.items.length !== nextProps.items.length) {
      return false; // Re-render
    }
    
    return prevProps.items.every((item, index) => 
      item.id === nextProps.items[index].id && 
      item.name === nextProps.items[index].name
    );
  }
);

// Parent component demonstrating the difference
function ParentComponent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', title: 'Title 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', title: 'Title 2', description: 'Description 2' }
  ]);

  const handleAction = useCallback((itemId) => {
    console.log('Action performed on item:', itemId);
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count} (This will trigger parent re-render)
      </button>
      
      <h3>Without Memoization:</h3>
      <ExpensiveComponent data={items} onAction={handleAction} />
      
      <h3>With Memoization:</h3>
      <MemoizedExpensiveComponent data={items} onAction={handleAction} />
      
      <h3>With Custom Comparison:</h3>
      <CustomMemoizedComponent items={items} onItemClick={handleAction} />
    </div>
  );
}`}</code></pre>
              </div>

              <div className="code-example">
                <h3>When to Use React.memo</h3>
                <p className="explanation">
                  React.memo is most beneficial when your component re-renders frequently with the same props, or when the component is expensive to render. It's less useful for simple components or when props change frequently.
                </p>
                <pre><code>{`// ✅ Good candidates for React.memo

// 1. Expensive rendering components
const ExpensiveChart = memo(function ExpensiveChart({ data }) {
  // Complex chart rendering logic
  const chartData = processChartData(data);
  return <ChartComponent data={chartData} />;
});

// 2. Components that receive stable props
const UserAvatar = memo(function UserAvatar({ user, size = 'medium' }) {
  return (
    <img 
      src={user.avatar} 
      alt={user.name}
      style={{ width: size === 'large' ? '100px' : '50px' }}
    />
  );
});

// 3. List items that don't change often
const TodoItem = memo(function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
});

// ❌ Poor candidates for React.memo

// 1. Simple components (overhead > benefit)
const SimpleText = memo(function SimpleText({ text }) {
  return <p>{text}</p>; // Too simple to benefit from memoization
});

// 2. Components with frequently changing props
const Counter = memo(function Counter({ count, onIncrement }) {
  return (
    <div>
      <span>{count}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
  // count changes on every increment, so memoization provides no benefit
});

// 3. Components that always re-render due to parent state
function ParentWithFrequentUpdates() {
  const [state, setState] = useState(0);
  
  // This component will always re-render because parent state changes
  const ChildComponent = memo(function ChildComponent() {
    return <div>Child content</div>;
  });
  
  return (
    <div>
      <button onClick={() => setState(state + 1)}>
        Update Parent: {state}
      </button>
      <ChildComponent /> {/* Will still re-render */}
    </div>
  );
}`}</code></pre>
              </div>
            </div>

            <div className="card" id="list-virtualization">
              <h2>List Virtualization</h2>
              
              <div className="code-example">
                <h3>Basic Virtualization</h3>
                <p className="explanation">
                  List virtualization renders only the items that are currently visible in the viewport, dramatically improving performance for large lists. This is essential when dealing with thousands of items that would otherwise cause significant performance issues.
                </p>
                <pre><code>{`import React from 'react';
import { FixedSizeList as List } from 'react-window';

// ❌ Bad: Rendering all items
function BadLargeList({ items }) {
  return (
    <div style={{ height: '400px', overflow: 'auto' }}>
      {items.map(item => (
        <div key={item.id} style={{ height: '50px', padding: '10px' }}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

// ✅ Good: Virtualized list
function VirtualizedList({ items }) {
  const Row = ({ index, style }) => {
    const item = items[index];
    return (
      <div style={style}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    );
  };

  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </List>
  );
}

// Variable size virtualization
import { VariableSizeList as VariableList } from 'react-window';

function VariableSizeList({ items }) {
  const getItemSize = (index) => {
    const item = items[index];
    // Calculate size based on content
    return item.description.length > 100 ? 80 : 50;
  };

  const Row = ({ index, style }) => {
    const item = items[index];
    return (
      <div style={style}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    );
  };

  return (
    <VariableList
      height={400}
      itemCount={items.length}
      itemSize={getItemSize}
      width="100%"
    >
      {Row}
    </VariableList>
  );
}

// Horizontal virtualization
function HorizontalList({ items }) {
  const Column = ({ index, style }) => {
    const item = items[index];
    return (
      <div style={style}>
        <img src={item.image} alt={item.title} />
        <h4>{item.title}</h4>
      </div>
    );
  };

  return (
    <List
      height={200}
      itemCount={items.length}
      itemSize={150}
      width={600}
      layout="horizontal"
    >
      {Column}
    </List>
  );
}

// Custom virtualization hook
function useVirtualization(items, itemHeight, containerHeight) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef();

  const visibleItemCount = Math.ceil(containerHeight / itemHeight);
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + visibleItemCount + 1, items.length);

  const visibleItems = items.slice(startIndex, endIndex);
  const totalHeight = items.length * itemHeight;
  const offsetY = startIndex * itemHeight;

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  return {
    visibleItems,
    totalHeight,
    offsetY,
    handleScroll,
    containerRef
  };
}

// Custom virtualized component
function CustomVirtualizedList({ items, itemHeight = 50, containerHeight = 400 }) {
  const { visibleItems, totalHeight, offsetY, handleScroll, containerRef } = 
    useVirtualization(items, itemHeight, containerHeight);

  return (
    <div
      ref={containerRef}
      style={{
        height: containerHeight,
        overflow: 'auto'
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: \`translateY(\${offsetY}px)\` }}>
          {visibleItems.map((item, index) => (
            <div
              key={item.id}
              style={{
                height: itemHeight,
                padding: '10px',
                borderBottom: '1px solid #eee'
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`}</code></pre>
              </div>
            </div>

            <div className="card" id="code-splitting">
              <h2>Code Splitting & Lazy Loading</h2>
              
              <div className="code-example">
                <h3>React.lazy and Suspense</h3>
                <p className="explanation">
                  Code splitting allows you to split your bundle into smaller chunks that can be loaded on demand. React.lazy enables component-level code splitting, while Suspense provides a fallback UI while the component is loading.
                </p>
                <pre><code>{`import React, { Suspense, lazy } from 'react';

// Lazy load components
const Dashboard = lazy(() => import('./Dashboard'));
const UserProfile = lazy(() => import('./UserProfile'));
const Settings = lazy(() => import('./Settings'));
const Analytics = lazy(() => import('./Analytics'));

// Loading component
function LoadingSpinner() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '200px' 
    }}>
      <div>Loading...</div>
    </div>
  );
}

// Error boundary for lazy components
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error loading component:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// App with lazy loading
function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'profile':
        return <UserProfile />;
      case 'settings':
        return <Settings />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('dashboard')}>Dashboard</button>
        <button onClick={() => setCurrentPage('profile')}>Profile</button>
        <button onClick={() => setCurrentPage('settings')}>Settings</button>
        <button onClick={() => setCurrentPage('analytics')}>Analytics</button>
      </nav>
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          {renderPage()}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

// Route-based code splitting
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function AppWithRoutes() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

// Conditional lazy loading
function ConditionalLazyComponent({ shouldLoad, componentProps }) {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    if (shouldLoad && !Component) {
      // Dynamically import component
      import('./HeavyComponent').then(module => {
        setComponent(() => module.default);
      });
    }
  }, [shouldLoad, Component]);

  if (!shouldLoad) {
    return <div>Component not needed</div>;
  }

  if (!Component) {
    return <LoadingSpinner />;
  }

  return <Component {...componentProps} />;
}

// Preloading components
function usePreloadComponent(importFn) {
  const [Component, setComponent] = useState(null);

  const preload = useCallback(() => {
    importFn().then(module => {
      setComponent(() => module.default);
    });
  }, [importFn]);

  return [Component, preload];
}

function AppWithPreloading() {
  const [HeavyComponent, preloadHeavyComponent] = usePreloadComponent(
    () => import('./HeavyComponent')
  );

  return (
    <div>
      <button onMouseEnter={preloadHeavyComponent}>
        Hover to preload component
      </button>
      
      {HeavyComponent && <HeavyComponent />}
    </div>
  );
}`}</code></pre>
              </div>
            </div>

            <div className="card" id="avoid-re-renders">
              <h2>Avoiding Unnecessary Re-renders</h2>
              
              <div className="code-example">
                <h3>Common Re-render Issues and Solutions</h3>
                <p className="explanation">
                  Understanding what causes unnecessary re-renders and how to prevent them is crucial for React performance. Common issues include creating new objects/arrays on every render, missing dependencies in hooks, and improper use of context.
                </p>
                <pre><code>{`import React, { useState, useEffect, useCallback, useMemo } from 'react';

// ❌ Bad: Creating new object on every render
function BadComponent({ user }) {
  const [count, setCount] = useState(0);
  
  // This object is recreated on every render
  const userConfig = {
    theme: user.preferences.theme,
    language: user.preferences.language,
    notifications: user.preferences.notifications
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <UserSettings config={userConfig} /> {/* Will re-render every time */}
    </div>
  );
}

// ✅ Good: Memoized object
function GoodComponent({ user }) {
  const [count, setCount] = useState(0);
  
  // This object is only recreated when user changes
  const userConfig = useMemo(() => ({
    theme: user.preferences.theme,
    language: user.preferences.language,
    notifications: user.preferences.notifications
  }), [user.preferences]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <UserSettings config={userConfig} /> {/* Won't re-render unnecessarily */}
    </div>
  );
}

// ❌ Bad: Inline function in render
function BadParent() {
  const [items, setItems] = useState([]);
  
  return (
    <div>
      {items.map(item => (
        <ItemComponent
          key={item.id}
          item={item}
          onDelete={() => setItems(items.filter(i => i.id !== item.id))} // New function every render
        />
      ))}
    </div>
  );
}

// ✅ Good: Stable callback
function GoodParent() {
  const [items, setItems] = useState([]);
  
  const handleDelete = useCallback((itemId) => {
    setItems(prev => prev.filter(item => item.id !== itemId));
  }, []);

  return (
    <div>
      {items.map(item => (
        <ItemComponent
          key={item.id}
          item={item}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
    </div>
  );
}

// Context optimization
const ThemeContext = React.createContext();

// ❌ Bad: Context value changes on every render
function BadThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ✅ Good: Memoized context value
function GoodThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const value = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// useEffect dependency issues
function BadEffectComponent({ userId }) {
  const [user, setUser] = useState(null);
  
  // ❌ Bad: Missing dependency
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, []); // Missing userId dependency

  return <div>{user?.name}</div>;
}

function GoodEffectComponent({ userId }) {
  const [user, setUser] = useState(null);
  
  // ✅ Good: Proper dependencies
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]); // Include all dependencies

  return <div>{user?.name}</div>;
}

// List optimization
function OptimizedList({ items, onItemClick }) {
  const MemoizedItem = useMemo(() => 
    React.memo(function Item({ item, onClick }) {
      return (
        <div onClick={() => onClick(item.id)}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      );
    }), []
  );

  return (
    <div>
      {items.map(item => (
        <MemoizedItem
          key={item.id}
          item={item}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
}`}</code></pre>
              </div>
            </div>

            <div className="card" id="best-practices">
              <h2>Best Practices</h2>
              <ul className="best-practices">
                <li><strong>Profile before optimizing</strong> - Use React DevTools Profiler to identify bottlenecks</li>
                <li><strong>Keep components small and focused</strong> - Smaller components are easier to optimize</li>
                <li><strong>Use production builds for performance testing</strong> - Development builds are slower</li>
                <li><strong>Defer non-critical work</strong> - Use requestIdleCallback or setTimeout for low-priority tasks</li>
                <li><strong>Use Suspense and lazy loading for heavy components</strong> - Split your bundle intelligently</li>
                <li><strong>Minimize re-renders by memoizing values and callbacks</strong> - Use useMemo and useCallback appropriately</li>
                <li><strong>Virtualize long lists</strong> - Only render visible items in large datasets</li>
                <li><strong>Monitor bundle size</strong> - Use tools like webpack-bundle-analyzer</li>
                <li><strong>Optimize images and assets</strong> - Compress and use appropriate formats</li>
                <li><strong>Use React.memo for expensive components</strong> - But only when it provides real benefits</li>
                <li><strong>Avoid creating objects/arrays in render</strong> - Memoize or move outside component</li>
                <li><strong>Use proper keys in lists</strong> - Stable, unique keys help React optimize updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PerformanceOptimization; 