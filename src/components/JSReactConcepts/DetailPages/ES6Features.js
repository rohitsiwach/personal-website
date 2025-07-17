import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PDFDownload from './PDFDownload';
import './DetailPages.css';

function ES6Features() {
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
            <h1>🚀 ES6+ Features</h1>
            <p>Modern JavaScript features that make coding more efficient and readable.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
              <Link to="/js-react-concepts" className="back-link">
                ← Back to JS & React Concepts
              </Link>
              <PDFDownload pageTitle="ES6+ Features" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="detail-content">
            <div className="card" id="arrow-functions">
              <h2>Arrow Functions</h2>
              
              <div className="code-example">
                <h3>Basic Arrow Functions</h3>
                <p className="explanation">
                  Arrow functions provide a concise syntax for writing functions. They have implicit returns for single expressions and automatically bind 'this' to the surrounding context. This makes them perfect for callbacks and short functions, but they can't be used as constructors.
                </p>
                <pre><code>{`// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function equivalent
const add = (a, b) => a + b;

// Multiple parameters need parentheses
const multiply = (a, b, c) => a * b * c;

// Single parameter can omit parentheses
const square = x => x * x;

// No parameters need empty parentheses
const getRandom = () => Math.random();

// Multiple lines need curly braces and return
const processData = (data) => {
  const filtered = data.filter(item => item.active);
  return filtered.map(item => item.name);
};

console.log(add(5, 3)); // 8
console.log(square(4)); // 16`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Arrow Functions and 'this'</h3>
                <p className="explanation">
                  Arrow functions don't have their own 'this' binding. They inherit 'this' from the enclosing scope, which makes them perfect for callbacks and event handlers where you want to preserve the context. This eliminates the need for .bind() or storing 'this' in a variable.
                </p>
                <pre><code>{`// Traditional function with 'this' issues
function Timer() {
  this.seconds = 0;
  
  // 'this' refers to window/undefined in strict mode
  setInterval(function() {
    this.seconds++; // ❌ 'this' is wrong
  }, 1000);
}

// Arrow function preserves 'this'
function Timer() {
  this.seconds = 0;
  
  // 'this' correctly refers to Timer instance
  setInterval(() => {
    this.seconds++; // ✅ 'this' is correct
  }, 1000);
}

// Event handler example
class Button {
  constructor() {
    this.clicked = 0;
    this.button = document.querySelector('button');
    
    // Arrow function preserves 'this'
    this.button.addEventListener('click', () => {
      this.clicked++;
      console.log(\`Clicked \${this.clicked} times\`);
    });
  }
}

// Array methods with arrow functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(evens); // [2, 4]
console.log(sum); // 15`}</code></pre>
              </div>
            </div>

            <div className="card" id="template-literals">
              <h2>Template Literals</h2>
              
              <div className="code-example">
                <h3>Basic Template Literals</h3>
                <p className="explanation">
                  Template literals use backticks (`) instead of quotes and allow embedded expressions using ${}. They support multi-line strings without escape characters and provide a much cleaner way to create dynamic strings compared to string concatenation.
                </p>
                <pre><code>{`// Traditional string concatenation
const name = 'John';
const age = 30;
const message = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// Template literal equivalent
const message = \`Hello, my name is \${name} and I am \${age} years old.\`;

// Multi-line strings
const html = \`
  <div class="user-card">
    <h2>\${name}</h2>
    <p>Age: \${age}</p>
  </div>
\`;

// Expressions in template literals
const price = 19.99;
const quantity = 3;
const total = \`Total: $\${(price * quantity).toFixed(2)}\`;

// Conditional expressions
const user = { name: 'John', isAdmin: true };
const greeting = \`Hello \${user.name}\${user.isAdmin ? ' (Admin)' : ''}!\`;

console.log(message); // "Hello, my name is John and I am 30 years old."
console.log(total); // "Total: $59.97"
console.log(greeting); // "Hello John (Admin)!"`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Tagged Template Literals</h3>
                <p className="explanation">
                  Tagged template literals allow you to process template literals with a function. The tag function receives the string parts and expressions separately, enabling powerful string processing, internationalization, and custom formatting.
                </p>
                <pre><code>{`// Tag function
function highlight(strings, ...values) {
  let result = '';
  strings.forEach((string, i) => {
    result += string;
    if (i < values.length) {
      result += \`<span class="highlight">\${values[i]}</span>\`;
    }
  });
  return result;
}

const name = 'John';
const age = 30;
const highlighted = highlight\`Hello \${name}, you are \${age} years old.\`;

// Sanitization tag function
function sanitize(strings, ...values) {
  return strings.reduce((result, string, i) => {
    const value = values[i] || '';
    return result + string + String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }, '');
}

const userInput = '<script>alert("xss")</script>';
const safe = sanitize\`User input: \${userInput}\`;

// Internationalization tag function
function i18n(strings, ...values) {
  const translations = {
    'Hello': 'Hola',
    'years old': 'años'
  };
  
  return strings.reduce((result, string, i) => {
    const value = values[i] || '';
    const translatedString = translations[string.trim()] || string;
    return result + translatedString + value;
  }, '');
}

const greeting = i18n\`Hello \${name}, you are \${age} years old.\`;
console.log(greeting); // "Hola John, you are 30 años."`}</code></pre>
              </div>
            </div>

            <div className="card" id="destructuring-assignment">
              <h2>Destructuring Assignment</h2>
              
              <div className="code-example">
                <h3>Array Destructuring</h3>
                <p className="explanation">
                  Array destructuring allows you to extract values from arrays into individual variables. It's a concise way to assign multiple variables at once and is especially useful for working with function returns, API responses, and swapping variables.
                </p>
                <pre><code>{`// Basic array destructuring
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;

console.log(first); // "red"
console.log(second); // "green"
console.log(third); // "blue"

// Skipping elements
const [primary, , tertiary] = colors;
console.log(primary); // "red"
console.log(tertiary); // "blue"

// Default values
const [a, b, c, d = 'yellow'] = colors;
console.log(d); // "yellow"

// Rest operator
const [head, ...tail] = colors;
console.log(head); // "red"
console.log(tail); // ["green", "blue"]

// Swapping variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2, 1

// Function return destructuring
function getCoordinates() {
  return [10, 20];
}

const [lat, lng] = getCoordinates();
console.log(lat, lng); // 10, 20

// Nested destructuring
const matrix = [[1, 2], [3, 4]];
const [[a, b], [c, d]] = matrix;
console.log(a, b, c, d); // 1, 2, 3, 4`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Object Destructuring</h3>
                <p className="explanation">
                  Object destructuring extracts properties from objects into variables. It's particularly useful for function parameters, API responses, and working with configuration objects. You can rename variables, provide default values, and destructure nested objects.
                </p>
                <pre><code>{`// Basic object destructuring
const user = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
};

const { name, age, email } = user;
console.log(name, age, email); // "John", 30, "john@example.com"

// Renaming variables
const { name: userName, age: userAge } = user;
console.log(userName, userAge); // "John", 30

// Default values
const { name, age, role = 'user' } = user;
console.log(role); // "user"

// Nested destructuring
const config = {
  server: {
    host: 'localhost',
    port: 3000
  },
  database: {
    name: 'myapp',
    user: 'admin'
  }
};

const { server: { host, port }, database: { name: dbName } } = config;
console.log(host, port, dbName); // "localhost", 3000, "myapp"

// Function parameters
function processUser({ name, age, email = 'default@email.com' }) {
  console.log(\`Processing \${name} (\${age})\`);
  return { name, age, email };
}

const result = processUser(user);

// API response example
const apiResponse = {
  data: {
    users: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ],
    total: 2
  },
  status: 'success'
};

const { data: { users, total }, status } = apiResponse;
console.log(users, total, status); // [...], 2, "success"`}</code></pre>
              </div>
            </div>

            <div className="card" id="spread-rest-operators">
              <h2>Spread and Rest Operators</h2>
              
              <div className="code-example">
                <h3>Spread Operator</h3>
                <p className="explanation">
                  The spread operator (...) expands iterables into individual elements. For arrays, it creates copies, merges arrays, and spreads elements into function arguments. For objects, it creates copies and merges objects. It's essential for working with immutable data.
                </p>
                <pre><code>{`// Array spread
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

// Creating copies
const copy = [...numbers];
console.log(copy); // [1, 2, 3]

// Merging arrays
const combined = [...numbers, ...moreNumbers];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Adding elements
const withZero = [0, ...numbers];
const withEnd = [...numbers, 7, 8];
console.log(withZero); // [0, 1, 2, 3]
console.log(withEnd); // [1, 2, 3, 7, 8]

// Function arguments
function sum(a, b, c) {
  return a + b + c;
}

const result = sum(...numbers);
console.log(result); // 6

// Object spread
const person = { name: 'John', age: 30 };
const details = { city: 'NYC', job: 'Developer' };

// Creating copies
const copy = { ...person };
console.log(copy); // { name: 'John', age: 30 }

// Merging objects
const profile = { ...person, ...details };
console.log(profile); // { name: 'John', age: 30, city: 'NYC', job: 'Developer' }

// Adding properties
const withId = { id: 1, ...person };
console.log(withId); // { id: 1, name: 'John', age: 30 }

// Overriding properties
const updated = { ...person, age: 31 };
console.log(updated); // { name: 'John', age: 31 }

// Shallow copy limitation
const nested = { a: 1, b: { c: 2 } };
const shallowCopy = { ...nested };
shallowCopy.b.c = 3;
console.log(nested.b.c); // 3 (original modified!)`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Rest Operator</h3>
                <p className="explanation">
                  The rest operator (...) collects multiple elements into an array. In function parameters, it gathers remaining arguments. In destructuring, it collects remaining elements. It's the opposite of spread and is essential for creating flexible functions.
                </p>
                <pre><code>{`// Function parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20)); // 30

// Mixed parameters
function processUser(name, age, ...hobbies) {
  console.log(\`\${name} (\${age}) likes: \${hobbies.join(', ')}\`);
}

processUser('John', 30, 'reading', 'gaming', 'cooking');
// "John (30) likes: reading, gaming, cooking"

// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first, second); // 1, 2
console.log(rest); // [3, 4, 5]

// Object destructuring
const { name, age, ...otherProps } = {
  name: 'John',
  age: 30,
  city: 'NYC',
  job: 'Developer',
  hobby: 'reading'
};

console.log(name, age); // "John", 30
console.log(otherProps); // { city: 'NYC', job: 'Developer', hobby: 'reading' }

// Practical examples
function createUser(name, age, ...additionalInfo) {
  const user = { name, age };
  
  // Process additional info in pairs
  for (let i = 0; i < additionalInfo.length; i += 2) {
    const key = additionalInfo[i];
    const value = additionalInfo[i + 1];
    if (key && value !== undefined) {
      user[key] = value;
    }
  }
  
  return user;
}

const user = createUser('John', 30, 'city', 'NYC', 'job', 'Developer');
console.log(user); // { name: 'John', age: 30, city: 'NYC', job: 'Developer' }

// Combining spread and rest
function logWithPrefix(prefix, ...args) {
  console.log(prefix, ...args);
}

logWithPrefix('DEBUG:', 'User logged in', 'at', new Date());
// "DEBUG: User logged in at [Date object]"`}</code></pre>
              </div>
            </div>

            <div className="card" id="modules-import-export">
              <h2>Modules and Import/Export</h2>
              
              <div className="code-example">
                <h3>Export Statements</h3>
                <p className="explanation">
                  ES6 modules provide a standardized way to organize and share code. You can export individual items, default exports, or re-export from other modules. This creates a clean separation of concerns and enables better code organization.
                </p>
                <pre><code>{`// Named exports
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
  return a + b;
}

export class Calculator {
  constructor() {
    this.result = 0;
  }
  
  add(value) {
    this.result += value;
    return this;
  }
  
  getResult() {
    return this.result;
  }
}

// Default export (only one per module)
export default class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  getInfo() {
    return \`\${this.name} (\${this.email})\`;
  }
}

// Export list
const utils = {
  formatDate(date) {
    return date.toLocaleDateString();
  },
  
  validateEmail(email) {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  }
};

export { utils };

// Re-exporting
export { default as UserModel } from './user-model.js';
export { formatDate } from './utils.js';`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Import Statements</h3>
                <p className="explanation">
                  Import statements allow you to use code from other modules. You can import named exports, default exports, or entire modules. The import syntax is flexible and supports aliasing and selective importing.
                </p>
                <pre><code>{`// Named imports
import { add, PI, Calculator } from './math.js';

console.log(add(5, 3)); // 8
console.log(PI); // 3.14159

const calc = new Calculator();
calc.add(10).add(5);
console.log(calc.getResult()); // 15

// Default import
import User from './user.js';

const user = new User('John', 'john@example.com');
console.log(user.getInfo()); // "John (john@example.com)"

// Mixed imports
import User, { utils } from './user.js';

// Aliasing imports
import { add as sum, PI as PI_VALUE } from './math.js';
import { default as UserClass } from './user.js';

// Namespace import
import * as MathUtils from './math.js';

console.log(MathUtils.add(1, 2)); // 3
console.log(MathUtils.PI); // 3.14159

// Dynamic imports (ES2020)
async function loadModule() {
  const module = await import('./dynamic-module.js');
  return module.default;
}

// Conditional imports
if (process.env.NODE_ENV === 'development') {
  import('./dev-tools.js').then(module => {
    module.initDevTools();
  });
}

// Import with side effects
import './styles.css';
import './analytics.js';`}</code></pre>
              </div>
            </div>

            <div className="card" id="best-practices">
              <h2>Best Practices</h2>
              <ul className="best-practices">
                <li><strong>Use arrow functions for callbacks</strong> - Cleaner syntax and automatic 'this' binding</li>
                <li><strong>Prefer template literals over concatenation</strong> - More readable and maintainable</li>
                <li><strong>Use destructuring for clean variable assignment</strong> - Reduces repetition and improves readability</li>
                <li><strong>Leverage spread operator for immutable operations</strong> - Creates copies instead of mutating originals</li>
                <li><strong>Use rest parameters for flexible functions</strong> - Accepts variable number of arguments</li>
                <li><strong>Organize code with ES6 modules</strong> - Better separation of concerns and reusability</li>
                <li><strong>Use default exports sparingly</strong> - Named exports are more explicit and enable better tree-shaking</li>
                <li><strong>Combine destructuring with function parameters</strong> - Clean API design with default values</li>
                <li><strong>Use object spread for configuration merging</strong> - More readable than Object.assign()</li>
                <li><strong>Consider using dynamic imports for code splitting</strong> - Improves initial load performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ES6Features; 