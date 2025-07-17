import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PDFDownload from './PDFDownload';
import './DetailPages.css';

/* eslint-disable no-undef */

function HooksCustomHooks() {
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
            <h1>🎣 Hooks & Custom Hooks</h1>
            <p>Understanding React hooks, custom hook patterns, and advanced hook usage.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
              <Link to="/js-react-concepts" className="back-link">
                ← Back to JS & React Concepts
              </Link>
              <PDFDownload pageTitle="Hooks & Custom Hooks" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="detail-content">
            <div className="card" id="usestate-useeffect-usecontext">
              <h2>useState, useEffect, useContext</h2>
              
              <div className="code-example">
                <h3>useState Hook</h3>
                <p className="explanation">
                  useState is the most fundamental hook for managing state in function components. It returns an array with the current state value and a function to update it. useState can handle primitive values, objects, and arrays, and supports functional updates for complex state logic.
                </p>
                <pre><code>{`import React, { useState } from 'react';

// Basic useState usage
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
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

// Object state with functional updates
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

  const toggleActive = () => {
    setUser(prevUser => ({
      ...prevUser,
      isActive: !prevUser.isActive
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
          onChange={toggleActive}
        />
        Active
      </label>
      
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}`}</code></pre>
              </div>

              <div className="code-example">
                <h3>useEffect Hook</h3>
                <p className="explanation">
                  useEffect is used for handling side effects in function components. It replaces componentDidMount, componentDidUpdate, and componentWillUnmount from class components. useEffect runs after every render by default, but you can control when it runs using the dependency array.
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

// Async operations in useEffect
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
        
        // Simulate API call
        const response = await new Promise(resolve => 
          setTimeout(() => resolve({ message: 'Data loaded!' }), 1000)
        );
        
        // Only update state if component is still mounted
        if (isMounted) {
          setData(response);
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

  return <div>{data.message}</div>;
}`}</code></pre>
              </div>

              <div className="code-example">
                <h3>useContext Hook</h3>
                <p className="explanation">
                  useContext is used to consume context values in function components. It provides a way to pass data through the component tree without having to pass props down manually at every level. useContext is essential for sharing global state like themes, user authentication, or language preferences.
                </p>
                <pre><code>{`import React, { createContext, useContext, useState } from 'react';

// Create contexts
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser({ id: 1, name: 'John Doe', email: credentials.email });
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
            </div>

            <div className="card" id="usereducer-complex-state">
              <h2>useReducer for Complex State</h2>
              
              <div className="code-example">
                <h3>Basic useReducer</h3>
                <p className="explanation">
                  useReducer is an alternative to useState for managing complex state logic. It follows the reducer pattern from Redux, where state updates are handled by pure functions called reducers. useReducer is particularly useful when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
                </p>
                <pre><code>{`import React, { useReducer } from 'react';

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'SET_COUNT':
      return { count: action.payload };
    default:
      return state;
  }
}

// Component using useReducer
function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'SET_COUNT', payload: 10 })}>
        Set to 10
      </button>
    </div>
  );
}

// Complex state with multiple properties
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload,
          completed: false
        }]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    filter: 'all'
  });

  const addTodo = (text) => {
    dispatch({ type: 'ADD_TODO', payload: text });
  };

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const setFilter = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'active') return !todo.completed;
    if (state.filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Add todo"
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value.trim()) {
            addTodo(e.target.value.trim());
            e.target.value = '';
          }
        }}
      />
      
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Advanced useReducer Patterns</h3>
                <p className="explanation">
                  Advanced useReducer patterns include combining multiple reducers, using middleware-like patterns, and creating reusable reducer logic. These patterns help manage complex application state in a predictable and maintainable way.
                </p>
                <pre><code>{`// Combining multiple reducers
function combineReducers(reducers) {
  return (state = {}, action) => {
    const newState = {};
    Object.keys(reducers).forEach(key => {
      newState[key] = reducers[key](state[key], action);
    });
    return newState;
  };
}

// Separate reducers
function userReducer(state = { name: '', email: '' }, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, ...action.payload };
    case 'CLEAR_USER':
      return { name: '', email: '' };
    default:
      return state;
  }
}

function settingsReducer(state = { theme: 'light', language: 'en' }, action) {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    default:
      return state;
  }
}

// Combined app reducer
const appReducer = combineReducers({
  user: userReducer,
  settings: settingsReducer
});

function AppWithCombinedReducers() {
  const [state, dispatch] = useReducer(appReducer, {
    user: { name: '', email: '' },
    settings: { theme: 'light', language: 'en' }
  });

  return (
    <div>
      <h2>User: {state.user.name || 'Not set'}</h2>
      <h3>Theme: {state.settings.theme}</h3>
      
      <button onClick={() => dispatch({
        type: 'SET_USER',
        payload: { name: 'John Doe', email: 'john@example.com' }
      })}>
        Set User
      </button>
      
      <button onClick={() => dispatch({
        type: 'SET_THEME',
        payload: state.settings.theme === 'light' ? 'dark' : 'light'
      })}>
        Toggle Theme
      </button>
    </div>
  );
}

// Middleware-like pattern
function createReducerWithMiddleware(reducer, middleware) {
  return (state, action) => {
    // Apply middleware before reducer
    const processedAction = middleware ? middleware(action) : action;
    return reducer(state, processedAction);
  };
}

// Logging middleware
function loggingMiddleware(action) {
  console.log('Action:', action);
  return action;
}

// Throttling middleware
function throttlingMiddleware(action) {
  if (action.type === 'INCREMENT' && Date.now() - lastIncrement < 1000) {
    return { type: 'NOOP' }; // No operation
  }
  if (action.type === 'INCREMENT') {
    lastIncrement = Date.now();
  }
  return action;
}

let lastIncrement = 0;

// Reducer that ignores NOOP actions
function counterReducerWithMiddleware(state, action) {
  if (action.type === 'NOOP') return state;
  
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function CounterWithMiddleware() {
  const reducer = createReducerWithMiddleware(
    counterReducerWithMiddleware,
    loggingMiddleware
  );
  
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment (with logging)
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        Decrement
      </button>
    </div>
  );
}`}</code></pre>
              </div>
            </div>

            <div className="card" id="custom-hooks-composition">
              <h2>Custom Hooks and Composition</h2>
              
              <div className="code-example">
                <h3>Basic Custom Hooks</h3>
                <p className="explanation">
                  Custom hooks are functions that use React hooks and can be shared between components. They allow you to extract component logic into reusable functions. Custom hooks must start with "use" and can use any of React's built-in hooks or other custom hooks.
                </p>
                <pre><code>{`import React, { useState, useEffect } from 'react';

// Custom hook for form handling
function useForm(initialState) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    callback(values);
  };

  const reset = () => {
    setValues(initialState);
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    reset,
    setErrors
  };
}

// Using the custom hook
function UserForm() {
  const { values, errors, handleChange, handleSubmit, reset } = useForm({
    name: '',
    email: '',
    age: ''
  });

  const onSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Name"
      />
      {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      
      <input
        type="number"
        name="age"
        value={values.age}
        onChange={handleChange}
        placeholder="Age"
      />
      {errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}
      
      <button type="submit">Submit</button>
      <button type="button" onClick={reset}>Reset</button>
    </form>
  );
}

// Custom hook for API calls
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate API call
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
  }, [url]);

  return { data, loading, error };
}

// Using the API hook
function UserProfile({ userId }) {
  const { data: user, loading, error } = useApi(\`/api/users/\${userId}\`);

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

              <div className="code-example">
                <h3>Advanced Custom Hook Patterns</h3>
                <p className="explanation">
                  Advanced custom hook patterns include composition, parameterization, and creating hooks that work together. These patterns help create more flexible and reusable logic that can be combined in different ways.
                </p>
                <pre><code>{`// Custom hook composition
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Custom hook for window size
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

// Composing hooks together
function useResponsiveLocalStorage(key, initialValue) {
  const [value, setValue] = useLocalStorage(key, initialValue);
  const { width } = useWindowSize();
  
  // Only update localStorage on larger screens
  const setResponsiveValue = (newValue) => {
    setValue(newValue);
    if (width > 768) {
      // Additional logic for larger screens
      console.log('Large screen update');
    }
  };

  return [value, setResponsiveValue];
}

// Parameterized custom hook
function useCounter(initialValue = 0, step = 1) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + step);
  const decrement = () => setCount(prev => prev - step);
  const reset = () => setCount(initialValue);
  const setValue = (value) => setCount(value);

  return {
    count,
    increment,
    decrement,
    reset,
    setValue
  };
}

// Using parameterized hooks
function MultipleCounters() {
  const counter1 = useCounter(0, 1);
  const counter2 = useCounter(10, 5);
  const counter3 = useCounter(100, 10);

  return (
    <div>
      <div>
        <h3>Counter 1 (step: 1)</h3>
        <p>Count: {counter1.count}</p>
        <button onClick={counter1.increment}>+</button>
        <button onClick={counter1.decrement}>-</button>
        <button onClick={counter1.reset}>Reset</button>
      </div>
      
      <div>
        <h3>Counter 2 (step: 5)</h3>
        <p>Count: {counter2.count}</p>
        <button onClick={counter2.increment}>+</button>
        <button onClick={counter2.decrement}>-</button>
        <button onClick={counter2.reset}>Reset</button>
      </div>
      
      <div>
        <h3>Counter 3 (step: 10)</h3>
        <p>Count: {counter3.count}</p>
        <button onClick={counter3.increment}>+</button>
        <button onClick={counter3.decrement}>-</button>
        <button onClick={counter3.reset}>Reset</button>
      </div>
    </div>
  );
}

// Custom hook factory
function createToggleHook(initialValue = false) {
  return function useToggle() {
    const [value, setValue] = useState(initialValue);
    
    const toggle = () => setValue(prev => !prev);
    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);
    
    return [value, { toggle, setTrue, setFalse, setValue }];
  };
}

// Using hook factory
const useBoolean = createToggleHook(false);
const useFlag = createToggleHook(true);

function ToggleExamples() {
  const [isVisible, { toggle: toggleVisible }] = useBoolean();
  const [isEnabled, { toggle: toggleEnabled }] = useFlag();

  return (
    <div>
      <button onClick={toggleVisible}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      
      {isVisible && (
        <div>
          <h3>Visible Content</h3>
          <button onClick={toggleEnabled}>
            {isEnabled ? 'Disable' : 'Enable'} Feature
          </button>
        </div>
      )}
    </div>
  );
}`}</code></pre>
              </div>
            </div>

            <div className="card" id="hook-rules-dependencies">
              <h2>Hook Rules and Dependencies</h2>
              
              <div className="code-example">
                <h3>Rules of Hooks</h3>
                <p className="explanation">
                  Hooks have specific rules that must be followed to work correctly. These rules ensure that hooks are called in the same order every time a component renders, which is essential for React's state management to work properly.
                </p>
                <pre><code>{`// ✅ Correct: Hooks at the top level
function CorrectComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  useEffect(() => {
    console.log('Component mounted');
  }, []);
  
  return <div>Count: {count}</div>;
}

// ❌ Wrong: Hooks inside conditions
function WrongComponent({ shouldUseEffect }) {
  const [count, setCount] = useState(0);
  
  if (shouldUseEffect) {
    useEffect(() => {
      console.log('This will cause errors!');
    }, []);
  }
  
  return <div>Count: {count}</div>;
}

// ❌ Wrong: Hooks inside loops
function WrongLoopComponent() {
  const items = ['a', 'b', 'c'];
  
  items.forEach(item => {
    const [state, setState] = useState(item); // This will cause errors!
  });
  
  return <div>Component</div>;
}

// ❌ Wrong: Hooks inside nested functions
function WrongNestedComponent() {
  const handleClick = () => {
    const [state, setState] = useState(0); // This will cause errors!
  };
  
  return <button onClick={handleClick}>Click</button>;
}

// ✅ Correct: Custom hooks follow the same rules
function useCustomHook() {
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    console.log('Custom hook effect');
  }, []);
  
  return [value, setValue];
}

// ✅ Correct: Using custom hooks at the top level
function ComponentWithCustomHook() {
  const [value, setValue] = useCustomHook();
  
  return <div>Value: {value}</div>;
}`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Dependency Arrays and Optimization</h3>
                <p className="explanation">
                  Dependency arrays in useEffect control when the effect runs. Understanding how to properly specify dependencies is crucial for performance and preventing infinite loops. React provides tools like useCallback and useMemo to help optimize dependencies.
                </p>
                <pre><code>{`import React, { useState, useEffect, useCallback, useMemo } from 'react';

// Understanding dependency arrays
function DependencyExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Runs after every render
  useEffect(() => {
    console.log('Effect runs on every render');
  });

  // Runs only on mount
  useEffect(() => {
    console.log('Effect runs only on mount');
  }, []);

  // Runs when count changes
  useEffect(() => {
    console.log('Effect runs when count changes:', count);
  }, [count]);

  // Runs when name changes
  useEffect(() => {
    console.log('Effect runs when name changes:', name);
  }, [name]);

  // Runs when either count or name changes
  useEffect(() => {
    console.log('Effect runs when count or name changes');
  }, [count, name]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

// Preventing infinite loops
function InfiniteLoopExample() {
  const [count, setCount] = useState(0);

  // ❌ Wrong: This causes infinite loop
  // useEffect(() => {
  //   setCount(count + 1);
  // }, [count]);

  // ✅ Correct: Use functional update
  useEffect(() => {
    setCount(prev => prev + 1);
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}

// Using useCallback for stable references
function CallbackExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // ❌ Wrong: Function recreated on every render
  const handleClick = () => {
    console.log('Count:', count);
  };

  // ✅ Correct: Stable function reference
  const stableHandleClick = useCallback(() => {
    console.log('Count:', count);
  }, [count]);

  useEffect(() => {
    console.log('Effect runs when handleClick changes');
  }, [stableHandleClick]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button onClick={stableHandleClick}>Log Count</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

// Using useMemo for expensive calculations
function MemoExample() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [filter, setFilter] = useState('all');

  // ❌ Wrong: Expensive calculation on every render
  // const expensiveResult = numbers.reduce((sum, num) => sum + num, 0);

  // ✅ Correct: Memoized calculation
  const expensiveResult = useMemo(() => {
    console.log('Performing expensive calculation');
    return numbers.reduce((sum, num) => sum + num, 0);
  }, [numbers]);

  // Filtered numbers also memoized
  const filteredNumbers = useMemo(() => {
    if (filter === 'even') {
      return numbers.filter(num => num % 2 === 0);
    }
    if (filter === 'odd') {
      return numbers.filter(num => num % 2 !== 0);
    }
    return numbers;
  }, [numbers, filter]);

  return (
    <div>
      <p>Sum: {expensiveResult}</p>
      <p>Filtered: {filteredNumbers.join(', ')}</p>
      <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>
        Add Number
      </button>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="even">Even</option>
        <option value="odd">Odd</option>
      </select>
    </div>
  );
}`}</code></pre>
              </div>
            </div>

            <div className="card" id="best-practices">
              <h2>Best Practices</h2>
              <ul className="best-practices">
                <li><strong>Always call hooks at the top level</strong> - Never inside loops, conditions, or nested functions</li>
                <li><strong>Use custom hooks to extract reusable logic</strong> - Keep components focused and logic reusable</li>
                <li><strong>Include all dependencies in useEffect arrays</strong> - Use ESLint rules to catch missing dependencies</li>
                <li><strong>Use useCallback for stable function references</strong> - Prevent unnecessary re-renders in child components</li>
                <li><strong>Use useMemo for expensive calculations</strong> - Avoid recalculating on every render</li>
                <li><strong>Prefer useReducer for complex state logic</strong> - More predictable than multiple useState calls</li>
                <li><strong>Use custom hooks for side effects</strong> - Encapsulate API calls, subscriptions, and timers</li>
                <li><strong>Follow the naming convention "use" prefix</strong> - Makes it clear that a function is a hook</li>
                <li><strong>Keep custom hooks focused and composable</strong> - Single responsibility principle applies to hooks too</li>
                <li><strong>Test custom hooks thoroughly</strong> - Use testing libraries like @testing-library/react-hooks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HooksCustomHooks; 