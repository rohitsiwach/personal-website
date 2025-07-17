import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PDFDownload from './PDFDownload';
import './DetailPages.css';

function ComponentsJSX() {
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
            <h1>🧩 Components & JSX</h1>
            <p>Understanding React components, JSX syntax, and component composition.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
              <Link to="/js-react-concepts" className="back-link">
                ← Back to JS & React Concepts
              </Link>
              <PDFDownload pageTitle="Components & JSX" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="detail-content">
            <div className="card" id="jsx-fundamentals">
              <h2>JSX Fundamentals</h2>
              
              <div className="code-example">
                <h3>Basic JSX Syntax</h3>
                <p className="explanation">
                  JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It gets transformed into regular JavaScript function calls by the build tools. JSX makes React components more readable and intuitive to write.
                </p>
                <pre><code>{`// JSX syntax
const element = <h1>Hello, World!</h1>;

// JSX with attributes
const element = <div className="container" id="main">Content</div>;

// JSX with JavaScript expressions
const name = 'John';
const element = <h1>Hello, {name}!</h1>;

// JSX with multiple lines
const element = (
  <div>
    <h1>Title</h1>
    <p>This is a paragraph</p>
  </div>
);

// JSX with conditional rendering
const isLoggedIn = true;
const element = (
  <div>
    {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
  </div>
);

// JSX with arrays
const items = ['Apple', 'Banana', 'Orange'];
const element = (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

// JSX with event handlers
const handleClick = () => {
  alert('Button clicked!');
};

const element = <button onClick={handleClick}>Click me</button>;

// JSX with inline styles (camelCase)
const element = (
  <div style={{ 
    backgroundColor: 'blue', 
    color: 'white',
    padding: '10px'
  }}>
    Styled content
  </div>
);`}</code></pre>
              </div>

              <div className="code-example">
                <h3>JSX vs HTML Differences</h3>
                <p className="explanation">
                  While JSX looks similar to HTML, there are important differences. Attributes use camelCase, some HTML attributes have different names in JSX, and you can embed JavaScript expressions. Understanding these differences is crucial for writing correct JSX code.
                </p>
                <pre><code>{`// HTML attributes vs JSX attributes
// HTML
<div class="container" onclick="handleClick()">
  <label for="name">Name:</label>
  <input type="text" tabindex="1">
</div>

// JSX equivalent
<div className="container" onClick={handleClick}>
  <label htmlFor="name">Name:</label>
  <input type="text" tabIndex="1" />
</div>

// Common attribute differences
const element = (
  <div>
    {/* class -> className */}
    <div className="container">Content</div>
    
    {/* for -> htmlFor */}
    <label htmlFor="email">Email:</label>
    
    {/* onclick -> onClick */}
    <button onClick={handleClick}>Click</button>
    
    {/* onchange -> onChange */}
    <input onChange={handleChange} />
    
    {/* onsubmit -> onSubmit */}
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
    
    {/* Self-closing tags must have /> */}
    <input type="text" />
    <img src="image.jpg" alt="Description" />
    <br />
  </div>
);

// JavaScript expressions in JSX
const user = { name: 'John', age: 30 };
const isActive = true;

const element = (
  <div>
    {/* Object properties */}
    <p>Name: {user.name}</p>
    <p>Age: {user.age}</p>
    
    {/* Conditional rendering */}
    {isActive && <span>Active</span>}
    
    {/* Ternary operators */}
    {user.age >= 18 ? <span>Adult</span> : <span>Minor</span>}
    
    {/* Function calls */}
    <p>Greeting: {getGreeting(user.name)}</p>
    
    {/* Array methods */}
    {['a', 'b', 'c'].map((letter, index) => (
      <span key={index}>{letter}</span>
    ))}
  </div>
);

function getGreeting(name) {
  return \`Hello, \${name}!\`;
}`}</code></pre>
              </div>
            </div>

            <div className="card" id="function-components">
              <h2>Function Components</h2>
              
              <div className="code-example">
                <h3>Basic Function Components</h3>
                <p className="explanation">
                  Function components are the simplest way to create React components. They are JavaScript functions that return JSX. Function components are lightweight, easy to test, and are the preferred way to write components in modern React (especially with hooks).
                </p>
                <pre><code>{`// Simple function component
function Greeting() {
  return <h1>Hello, World!</h1>;
}

// Arrow function component
const Greeting = () => {
  return <h1>Hello, World!</h1>;
};

// Implicit return (single expression)
const Greeting = () => <h1>Hello, World!</h1>;

// Component with props
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Destructured props
function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old</p>
    </div>
  );
}

// Component with default props
function Greeting({ name = 'Guest', age = 0 }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old</p>
    </div>
  );
}

// Component with children
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

// Using the Card component
function App() {
  return (
    <Card title="Welcome">
      <p>This is the card content</p>
      <button>Click me</button>
    </Card>
  );
}`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Component Composition</h3>
                <p className="explanation">
                  Component composition is the practice of building complex components by combining simpler ones. This promotes reusability, maintainability, and follows the single responsibility principle. Components can be nested, passed as props, or used as children.
                </p>
                <pre><code>{`// Simple components
const Header = ({ title }) => <header><h1>{title}</h1></header>;
const Sidebar = ({ items }) => (
  <aside>
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  </aside>
);
const Main = ({ children }) => <main>{children}</main>;
const Footer = () => <footer>&copy; 2024 My App</footer>;

// Composed layout component
function Layout({ title, sidebarItems, children }) {
  return (
    <div className="layout">
      <Header title={title} />
      <div className="content">
        <Sidebar items={sidebarItems} />
        <Main>{children}</Main>
      </div>
      <Footer />
    </div>
  );
}

// Using the composed component
function App() {
  const sidebarItems = ['Home', 'About', 'Contact'];
  
  return (
    <Layout title="My Website" sidebarItems={sidebarItems}>
      <h2>Welcome to our site!</h2>
      <p>This is the main content area.</p>
    </Layout>
  );
}

// Component as prop pattern
function Button({ children, onClick, variant = 'primary' }) {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function IconButton({ icon, ...props }) {
  return (
    <Button {...props}>
      <span className="icon">{icon}</span>
      {props.children}
    </Button>
  );
}

// Higher-order component pattern
function withErrorBoundary(WrappedComponent) {
  return function ErrorBoundaryComponent(props) {
    try {
      return <WrappedComponent {...props} />;
    } catch (error) {
      return <div>Something went wrong: {error.message}</div>;
    }
  };
}

const SafeComponent = withErrorBoundary(SomeComponent);`}</code></pre>
              </div>
            </div>

            <div className="card" id="class-components">
              <h2>Class Components</h2>
              
              <div className="code-example">
                <h3>Class Component Basics</h3>
                <p className="explanation">
                  Class components are the traditional way to create React components with state and lifecycle methods. While function components with hooks are now preferred, understanding class components is important for maintaining legacy code and understanding React's evolution.
                </p>
                <pre><code>{`// Basic class component
class Greeting extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}

// Class component with props
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

// Class component with state
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Class component with lifecycle methods
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true
    };
  }

  componentDidMount() {
    // Fetch user data when component mounts
    this.fetchUser();
  }

  componentDidUpdate(prevProps) {
    // Re-fetch when userId changes
    if (prevProps.userId !== this.props.userId) {
      this.fetchUser();
    }
  }

  componentWillUnmount() {
    // Cleanup when component unmounts
    this.cancelRequest();
  }

  fetchUser = async () => {
    try {
      this.setState({ loading: true });
      const response = await fetch(\`/api/users/\${this.props.userId}\`);
      const user = await response.json();
      this.setState({ user, loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error.message });
    }
  };

  cancelRequest = () => {
    // Cancel any pending requests
  };

  render() {
    const { user, loading, error } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>User not found</div>;

    return (
      <div>
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
      </div>
    );
  }
}`}</code></pre>
              </div>

              <div className="code-example">
                <h3>State Management in Class Components</h3>
                <p className="explanation">
                  State in class components is managed through the this.state object and updated using this.setState(). State updates are asynchronous and can be batched for performance. Understanding how state works in class components helps when working with legacy code or understanding React's state management patterns.
                </p>
                <pre><code>{`// State initialization
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: 'Counter',
      items: []
    };
  }

  // State updates
  increment = () => {
    // Object-based update
    this.setState({ count: this.state.count + 1 });
  };

  incrementMultiple = () => {
    // Multiple updates - React batches these
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    // Only the last update will be applied!
  };

  incrementCorrectly = () => {
    // Function-based update for dependent state
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  addItem = (item) => {
    // Updating arrays immutably
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }));
  };

  updateItem = (index, newItem) => {
    // Updating specific array item
    this.setState(prevState => ({
      items: prevState.items.map((item, i) => 
        i === index ? newItem : item
      )
    }));
  };

  removeItem = (index) => {
    // Removing array item
    this.setState(prevState => ({
      items: prevState.items.filter((_, i) => i !== index)
    }));
  };

  // Complex state update
  updateUser = (updates) => {
    this.setState(prevState => ({
      user: { ...prevState.user, ...updates }
    }));
  };

  render() {
    const { count, name, items } = this.state;
    
    return (
      <div>
        <h1>{name}: {count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.incrementCorrectly}>Increment Correctly</button>
        
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        
        <button onClick={() => this.addItem('New Item')}>Add Item</button>
      </div>
    );
  }
}`}</code></pre>
              </div>
            </div>

            <div className="card" id="props-component-communication">
              <h2>Props and Component Communication</h2>
              
              <div className="code-example">
                <h3>Props Basics</h3>
                <p className="explanation">
                  Props (properties) are the primary way to pass data from parent to child components. Props are read-only and help create reusable components. Understanding how to use props effectively is essential for building maintainable React applications.
                </p>
                <pre><code>{`// Passing props to components
function UserCard({ name, email, age, isActive }) {
  return (
    <div className={\`user-card \${isActive ? 'active' : 'inactive'}\`}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <span>{isActive ? '🟢 Active' : '🔴 Inactive'}</span>
    </div>
  );
}

// Using the component with props
function App() {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    isActive: true
  };

  return (
    <div>
      <UserCard 
        name={user.name}
        email={user.email}
        age={user.age}
        isActive={user.isActive}
      />
      
      {/* Spread operator for multiple props */}
      <UserCard {...user} />
      
      {/* Default props */}
      <UserCard name="Jane" email="jane@example.com" />
    </div>
  );
}

// Props validation with PropTypes
import PropTypes from 'prop-types';

function UserCard({ name, email, age, isActive }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <span>{isActive ? 'Active' : 'Inactive'}</span>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number,
  isActive: PropTypes.bool
};

UserCard.defaultProps = {
  age: 0,
  isActive: false
};`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Callback Props and Event Handling</h3>
                <p className="explanation">
                  Callback props allow child components to communicate with parent components by calling functions passed down as props. This is the primary way to handle events and state updates in React's unidirectional data flow.
                </p>
                <pre><code>{`// Parent component with state and callbacks
function ParentComponent() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John', isActive: true },
    { id: 2, name: 'Jane', isActive: false }
  ]);

  const handleToggleActive = (userId) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId
          ? { ...user, isActive: !user.isActive }
          : user
      )
    );
  };

  const handleDeleteUser = (userId) => {
    setUsers(prevUsers =>
      prevUsers.filter(user => user.id !== userId)
    );
  };

  const handleAddUser = (newUser) => {
    setUsers(prevUsers => [...prevUsers, { ...newUser, id: Date.now() }]);
  };

  return (
    <div>
      <h1>User Management</h1>
      
      <UserList 
        users={users}
        onToggleActive={handleToggleActive}
        onDeleteUser={handleDeleteUser}
      />
      
      <AddUserForm onAddUser={handleAddUser} />
    </div>
  );
}

// Child component using callback props
function UserList({ users, onToggleActive, onDeleteUser }) {
  return (
    <div>
      {users.map(user => (
        <UserItem
          key={user.id}
          user={user}
          onToggleActive={() => onToggleActive(user.id)}
          onDelete={() => onDeleteUser(user.id)}
        />
      ))}
    </div>
  );
}

function UserItem({ user, onToggleActive, onDelete }) {
  return (
    <div className="user-item">
      <span>{user.name}</span>
      <button onClick={onToggleActive}>
        {user.isActive ? 'Deactivate' : 'Activate'}
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

// Form component with callback
function AddUserForm({ onAddUser }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onAddUser({ name: name.trim() });
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button type="submit">Add User</button>
    </form>
  );
}`}</code></pre>
              </div>
            </div>

            <div className="card" id="best-practices">
              <h2>Best Practices</h2>
              <ul className="best-practices">
                <li><strong>Use function components with hooks</strong> - They're simpler and more performant</li>
                <li><strong>Keep components small and focused</strong> - Single responsibility principle</li>
                <li><strong>Use descriptive component names</strong> - Start with capital letters</li>
                <li><strong>Extract reusable logic into custom hooks</strong> - Better than HOCs or render props</li>
                <li><strong>Use PropTypes for type checking</strong> - Catch bugs early in development</li>
                <li><strong>Prefer composition over inheritance</strong> - More flexible and maintainable</li>
                <li><strong>Use meaningful prop names</strong> - Make components self-documenting</li>
                <li><strong>Avoid prop drilling</strong> - Use Context or state management libraries</li>
                <li><strong>Use React.memo for performance</strong> - Prevent unnecessary re-renders</li>
                <li><strong>Keep JSX readable</strong> - Use proper formatting and meaningful variable names</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ComponentsJSX; 