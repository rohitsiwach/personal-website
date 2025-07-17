import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './DetailPages.css';

function StateLifecycle() {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Remove the # from the hash
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);
      
      if (element) {
        // Add a small delay to ensure the component is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>🔄 State & Lifecycle</h1>
            <p>Understanding React state management and component lifecycle methods.</p>
            <Link to="/js-react-concepts" className="back-link">
              ← Back to JS & React Concepts
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="detail-content">
            <div className="card" id="usestate-hook">
              <h2>useState Hook</h2>
              
              <div className="code-example">
                <h3>Basic useState Usage</h3>
                <p className="explanation">
                  The useState hook is the most fundamental hook for managing state in function components. It returns an array with the current state value and a function to update it. useState replaces the need for class components just to manage local state.
                </p>
                <pre><code>{`import React, { useState } from 'react';

// Basic counter with useState
function Counter() {
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
}

// Multiple state variables
function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, age });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value) || 0)}
        placeholder="Age"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Object state
function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0,
    isActive: false
  });

  const updateUser = (field, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }));
  };

  return (
    <div>
      <input
        type="text"
        value={user.name}
        onChange={(e) => updateUser('name', e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={user.email}
        onChange={(e) => updateUser('email', e.target.value)}
        placeholder="Email"
      />
      <input
        type="number"
        value={user.age}
        onChange={(e) => updateUser('age', parseInt(e.target.value) || 0)}
        placeholder="Age"
      />
      <label>
        <input
          type="checkbox"
          checked={user.isActive}
          onChange={(e) => updateUser('isActive', e.target.checked)}
        />
        Active
      </label>
      
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Functional Updates and Dependencies</h3>
                <p className="explanation">
                  When updating state based on the previous state, always use the functional form of setState. This ensures you're working with the most current state value and prevents race conditions. This is especially important when multiple state updates happen in quick succession.
                </p>
                <pre><code>{`// Functional updates
function Counter() {
  const [count, setCount] = useState(0);

  // ❌ Wrong - may not use latest state
  const incrementWrong = () => {
    setCount(count + 1);
    setCount(count + 1); // This will not work as expected
  };

  // ✅ Correct - uses functional update
  const incrementCorrect = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1); // This works correctly
  };

  // Complex state updates
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  const removeItem = (index) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  const updateItem = (index, updatedItem) => {
    setItems(prevItems =>
      prevItems.map((item, i) => i === index ? updatedItem : item)
    );
  };

  const toggleItem = (index) => {
    setItems(prevItems =>
      prevItems.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementWrong}>Increment Wrong</button>
      <button onClick={incrementCorrect}>Increment Correct</button>
      
      <div>
        <button onClick={() => addItem(\`Item \${items.length + 1}\`)}>
          Add Item
        </button>
        {items.map((item, index) => (
          <div key={index}>
            <span>{item}</span>
            <button onClick={() => removeItem(index)}>Remove</button>
            <button onClick={() => toggleItem(index)}>Toggle</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Lazy initialization
function ExpensiveComponent() {
  // ❌ Wrong - expensive calculation runs on every render
  const [data, setData] = useState(expensiveCalculation());

  // ✅ Correct - expensive calculation runs only once
  const [data, setData] = useState(() => expensiveCalculation());

  function expensiveCalculation() {
    console.log('Running expensive calculation...');
    return Math.random() * 1000;
  }

  return <div>Data: {data}</div>;
}`}</code></pre>
              </div>
            </div>

            <div className="card" id="useeffect-hook">
              <h2>useEffect Hook</h2>
              
              <div className="code-example">
                <h3>Basic useEffect Patterns</h3>
                <p className="explanation">
                  useEffect is the hook for handling side effects in function components. It replaces componentDidMount, componentDidUpdate, and componentWillUnmount from class components. useEffect runs after every render by default, but you can control when it runs using the dependency array.
                </p>
                <pre><code>{`import React, { useState, useEffect } from 'react';

// Basic useEffect - runs after every render
function BasicEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component rendered, count is:', count);
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// useEffect with dependency array - runs only when dependencies change
function EffectWithDependencies() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Runs only when count changes
  useEffect(() => {
    console.log('Count changed to:', count);
  }, [count]);

  // Runs only when name changes
  useEffect(() => {
    console.log('Name changed to:', name);
  }, [name]);

  // Runs only on mount (empty dependency array)
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Cleanup function
function EffectWithCleanup() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup function - runs before next effect or unmount
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []); // Empty array means this runs only on mount

  return (
    <div>
      <p>Status: {isOnline ? '🟢 Online' : '🔴 Offline'}</p>
    </div>
  );
}

// Multiple effects
function MultipleEffects() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  // Effect for fetching user data
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/user');
      const userData = await response.json();
      setUser(userData);
    };

    fetchUser();
  }, []); // Runs only on mount

  // Effect for fetching posts when user changes
  useEffect(() => {
    if (!user) return;

    const fetchPosts = async () => {
      const response = await fetch(\`/api/users/\${user.id}/posts\`);
      const postsData = await response.json();
      setPosts(postsData);
    };

    fetchPosts();
  }, [user]); // Runs when user changes

  return (
    <div>
      {user && <h1>Welcome, {user.name}!</h1>}
      <div>
        {posts.map(post => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </div>
  );
}`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Advanced useEffect Patterns</h3>
                <p className="explanation">
                  Advanced useEffect patterns include handling async operations, preventing infinite loops, and managing complex state dependencies. Understanding these patterns helps you write more efficient and bug-free React components.
                </p>
                <pre><code>{`// Async operations in useEffect
function AsyncEffect() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/data');
        const result = await response.json();
        
        // Only update state if component is still mounted
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to prevent memory leaks
    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data</div>;

  return <div>{JSON.stringify(data)}</div>;
}

// Preventing infinite loops
function InfiniteLoopExample() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: 'John', age: 30 });

  // ❌ Wrong - causes infinite loop
  useEffect(() => {
    setCount(count + 1);
  }, [count]); // count changes, effect runs, count changes again...

  // ✅ Correct - only runs when user changes
  useEffect(() => {
    console.log('User changed:', user);
  }, [user.name, user.age]); // Specific dependencies

  // ✅ Better - use useCallback for functions
  const updateUser = useCallback((updates) => {
    setUser(prev => ({ ...prev, ...updates }));
  }, []); // Empty dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increment Age
      </button>
    </div>
  );
}

// Custom hook for data fetching
function useDataFetching(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(url);
        const result = await response.json();
        
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]); // Re-fetch when URL changes

  return { data, loading, error };
}

// Using the custom hook
function UserProfile({ userId }) {
  const { data: user, loading, error } = useDataFetching(\`/api/users/\${userId}\`);

  if (loading) return <div>Loading user...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}`}</code></pre>
              </div>
            </div>

            <div className="card" id="usecontext-hook">
              <h2>useContext Hook</h2>
              
              <div className="code-example">
                <h3>Creating and Using Context</h3>
                <p className="explanation">
                  Context provides a way to pass data through the component tree without having to pass props down manually at every level. useContext is the hook for consuming context values. It's useful for sharing global state like themes, user authentication, or language preferences.
                </p>
                <pre><code>{`import React, { createContext, useContext, useState } from 'react';

// Create a context
const ThemeContext = createContext();
const UserContext = createContext();

// Custom hook for using theme context
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Custom hook for using user context
function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

// Theme provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme,
    colors: theme === 'light' 
      ? { background: '#fff', text: '#000' }
      : { background: '#333', text: '#fff' }
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// User provider component
function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

// Components using context
function Header() {
  const { theme, toggleTheme, colors } = useTheme();
  const { user, logout, isAuthenticated } = useUser();

  return (
    <header style={{ 
      backgroundColor: colors.background, 
      color: colors.text,
      padding: '1rem'
    }}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      {isAuthenticated && (
        <div>
          <span>Welcome, {user.name}!</span>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </header>
  );
}

function Content() {
  const { colors } = useTheme();
  const { isAuthenticated } = useUser();

  return (
    <main style={{ 
      backgroundColor: colors.background, 
      color: colors.text,
      padding: '2rem'
    }}>
      {isAuthenticated ? (
        <h2>Welcome to the dashboard!</h2>
      ) : (
        <h2>Please log in to continue</h2>
      )}
    </main>
  );
}

// App component with providers
function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Context Best Practices</h3>
                <p className="explanation">
                  While Context is powerful, it should be used judiciously. Overusing Context can make components harder to test and reason about. It's best for truly global state that many components need access to. For local state, prefer useState and prop drilling for simple cases.
                </p>
                <pre><code>{`// ❌ Bad - Context for everything
const CounterContext = createContext();

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

// ✅ Good - Context for shared state
const AppStateContext = createContext();

function AppStateProvider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  const value = {
    user, setUser,
    theme, setTheme,
    language, setLanguage
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

// Splitting contexts for better performance
const UserContext = createContext();
const ThemeContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Using multiple contexts efficiently
function UserProfile() {
  const { user } = useUser();
  const { theme } = useTheme();

  // Only re-renders when user or theme changes
  return (
    <div className={\`profile \${theme}\`}>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  );
}

// Context with reducer for complex state
const initialState = {
  user: null,
  theme: 'light',
  language: 'en'
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    default:
      return state;
  }
}

const AppContext = createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = {
    ...state,
    dispatch,
    setUser: (user) => dispatch({ type: 'SET_USER', payload: user }),
    setTheme: (theme) => dispatch({ type: 'SET_THEME', payload: theme }),
    setLanguage: (language) => dispatch({ type: 'SET_LANGUAGE', payload: language })
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}`}</code></pre>
              </div>
            </div>

            <div className="card" id="class-component-lifecycle">
              <h2>Class Component Lifecycle</h2>
              
              <div className="code-example">
                <h3>Lifecycle Methods Overview</h3>
                <p className="explanation">
                  Class components have specific lifecycle methods that are called at different stages of a component's existence. Understanding these methods is important for maintaining legacy code and understanding React's component lifecycle. Modern React prefers function components with hooks.
                </p>
                <pre><code>{`import React from 'react';

class LifecycleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: null
    };
    console.log('1. Constructor called');
  }

  // Mounting phase
  componentDidMount() {
    console.log('3. Component did mount');
    // Perfect place for API calls, subscriptions, etc.
    this.fetchData();
  }

  // Updating phase
  componentDidUpdate(prevProps, prevState) {
    console.log('4. Component did update');
    console.log('Previous props:', prevProps);
    console.log('Previous state:', prevState);
    
    // Only fetch data if userId changed
    if (prevProps.userId !== this.props.userId) {
      this.fetchData();
    }
  }

  // Unmounting phase
  componentWillUnmount() {
    console.log('5. Component will unmount');
    // Clean up subscriptions, timers, etc.
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  // Error boundary
  componentDidCatch(error, errorInfo) {
    console.log('Error caught:', error);
    console.log('Error info:', errorInfo);
    this.setState({ hasError: true });
  }

  fetchData = async () => {
    try {
      const response = await fetch(\`/api/users/\${this.props.userId}\`);
      const data = await response.json();
      this.setState({ data });
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    console.log('2. Render called');
    
    if (this.state.hasError) {
      return <div>Something went wrong!</div>;
    }

    return (
      <div>
        <h1>Lifecycle Example</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        {this.state.data && (
          <div>
            <h2>User Data:</h2>
            <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  }
}

// Using the component
function App() {
  const [userId, setUserId] = useState(1);
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <button onClick={() => setUserId(userId + 1)}>
        Change User ID
      </button>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Hide' : 'Show'} Component
      </button>
      
      {showComponent && <LifecycleExample userId={userId} />}
    </div>
  );
}`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Advanced Lifecycle Patterns</h3>
                <p className="explanation">
                  Advanced lifecycle patterns include shouldComponentUpdate for performance optimization, getDerivedStateFromProps for state updates based on prop changes, and getSnapshotBeforeUpdate for capturing information before the DOM updates. These methods are powerful but should be used carefully.
                </p>
                <pre><code>{`class AdvancedLifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      previousCount: 0,
      scrollPosition: 0
    };
  }

  // Performance optimization
  shouldComponentUpdate(nextProps, nextState) {
    // Only re-render if count actually changed
    if (this.state.count !== nextState.count) {
      return true;
    }
    
    // Don't re-render if only unrelated state changed
    return false;
  }

  // Update state based on prop changes
  static getDerivedStateFromProps(props, state) {
    // If userId changed, reset count
    if (props.userId !== state.userId) {
      return {
        count: 0,
        userId: props.userId
      };
    }
    
    return null; // No state update needed
  }

  // Capture information before DOM update
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Capture scroll position before update
    if (this.listRef.current) {
      return this.listRef.current.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Restore scroll position after update
    if (snapshot !== null && this.listRef.current) {
      this.listRef.current.scrollTop = snapshot;
    }
  }

  // Error boundary for this component tree
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to service
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong!</h1>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return (
      <div>
        <h1>Advanced Lifecycle</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState(prev => ({ count: prev.count + 1 }))}>
          Increment
        </button>
      </div>
    );
  }
}

// Timer example with cleanup
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div>
        <h2>Timer: {this.state.seconds} seconds</h2>
      </div>
    );
  }
}`}</code></pre>
              </div>
            </div>

            <div className="card" id="best-practices">
              <h2>Best Practices</h2>
              <ul className="best-practices">
                <li><strong>Prefer function components with hooks</strong> - Simpler, more performant, easier to test</li>
                <li><strong>Use useState for local component state</strong> - Keep state as close to where it's used as possible</li>
                <li><strong>Always use functional updates with useState</strong> - Prevents race conditions and ensures latest state</li>
                <li><strong>Include cleanup functions in useEffect</strong> - Prevent memory leaks and unexpected behavior</li>
                <li><strong>Use dependency arrays correctly in useEffect</strong> - Include all values used inside the effect</li>
                <li><strong>Use Context sparingly</strong> - Only for truly global state that many components need</li>
                <li><strong>Split large contexts into smaller ones</strong> - Better performance and easier maintenance</li>
                <li><strong>Use custom hooks to extract reusable logic</strong> - Better than HOCs or render props</li>
                <li><strong>Handle loading and error states</strong> - Provide good user experience</li>
                <li><strong>Use React.memo and useMemo for performance</strong> - Prevent unnecessary re-renders</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StateLifecycle; 