import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './DetailPages.css';

function FunctionalProgramming() {
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
            <h1>🔄 Functional Programming</h1>
            <p>Understanding functional programming concepts and techniques in JavaScript.</p>
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
            <div className="card" id="pure-functions">
              <h2>Pure Functions</h2>
              
              <div className="code-example">
                <h3>Pure vs Impure Functions</h3>
                <p className="explanation">
                  Pure functions are the foundation of functional programming. They always return the same output for the same input and have no side effects. Pure functions are predictable, testable, and easier to reason about. Impure functions, on the other hand, can have side effects or depend on external state.
                </p>
                <pre><code>{`// Pure function - same input always produces same output
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (always the same)

// Pure function with objects
function updateUser(user, newName) {
  return { ...user, name: newName };
}

const user = { id: 1, name: 'John', email: 'john@example.com' };
const updatedUser = updateUser(user, 'Jane');
console.log(updatedUser); // { id: 1, name: 'Jane', email: 'john@example.com' }
console.log(user); // { id: 1, name: 'John', email: 'john@example.com' } (unchanged)

// Impure function - has side effects
let counter = 0;
function incrementCounter() {
  counter++; // Side effect: modifies external state
  return counter;
}

console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2 (different result each time)

// Impure function - depends on external state
function getCurrentUser() {
  return currentUser; // Depends on external variable
}

// Impure function - has side effects
function logUser(user) {
  console.log(user); // Side effect: logs to console
  return user;
}

// Pure function alternative
function createUserLogger() {
  return function(user) {
    console.log(user); // Side effect, but isolated
    return user;
  };
}

const logger = createUserLogger();
const result = logger({ name: 'John' }); // Logs and returns user`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Benefits of Pure Functions</h3>
                <p className="explanation">
                  Pure functions offer several advantages: they're easier to test, can be memoized for performance, and are more predictable. They also enable better parallel processing and make code more maintainable. Understanding these benefits helps you write better functional code.
                </p>
                <pre><code>{`// Easy to test - no setup or teardown needed
function calculateTax(income, rate) {
  return income * (rate / 100);
}

// Test cases are simple and predictable
console.log(calculateTax(1000, 10) === 100); // true
console.log(calculateTax(2000, 15) === 300); // true

// Memoization - cache results for performance
function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const memoizedCalculateTax = memoize(calculateTax);

// First call computes the result
console.log(memoizedCalculateTax(1000, 10)); // 100 (computed)

// Second call with same arguments returns cached result
console.log(memoizedCalculateTax(1000, 10)); // 100 (cached)

// Predictable behavior - no hidden dependencies
function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
}

// Always produces the same result for the same input
console.log(formatCurrency(100)); // "$100.00"
console.log(formatCurrency(100)); // "$100.00"

// Parallel processing friendly
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2); // Can be parallelized
const squared = numbers.map(n => n * n); // Can be parallelized

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(squared); // [1, 4, 9, 16, 25]`}</code></pre>
              </div>
            </div>

            <div className="card" id="array-methods">
              <h2>Array Methods</h2>
              
              <div className="code-example">
                <h3>map(), filter(), reduce()</h3>
                <p className="explanation">
                  These three methods are the cornerstone of functional programming with arrays. map() transforms each element, filter() selects elements based on a condition, and reduce() combines all elements into a single value. They're chainable and create new arrays instead of modifying the original.
                </p>
                <pre><code>{`// map() - transforms each element
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
];

const names = users.map(user => user.name);
console.log(names); // ['John', 'Jane', 'Bob']

const userCards = users.map(user => ({
  ...user,
  displayName: \`\${user.name} (\${user.age})\`
}));
console.log(userCards);
// [
//   { id: 1, name: 'John', age: 30, displayName: 'John (30)' },
//   { id: 2, name: 'Jane', age: 25, displayName: 'Jane (25)' },
//   { id: 3, name: 'Bob', age: 35, displayName: 'Bob (35)' }
// ]

// filter() - selects elements based on condition
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers); // [2, 4]

const adults = users.filter(user => user.age >= 30);
console.log(adults); // [{ id: 1, name: 'John', age: 30 }, { id: 3, name: 'Bob', age: 35 }]

// reduce() - combines all elements into single value
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

const userAges = users.reduce((acc, user) => acc + user.age, 0);
console.log(userAges); // 90

// Group users by age range
const groupedUsers = users.reduce((acc, user) => {
  const range = user.age < 30 ? 'young' : 'adult';
  if (!acc[range]) acc[range] = [];
  acc[range].push(user);
  return acc;
}, {});

console.log(groupedUsers);
// { young: [{ id: 2, name: 'Jane', age: 25 }], adult: [{ id: 1, name: 'John', age: 30 }, { id: 3, name: 'Bob', age: 35 }] }`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Method Chaining and Composition</h3>
                <p className="explanation">
                  Array methods can be chained together to create powerful data transformations. Each method returns a new array, allowing you to build complex operations step by step. This creates readable, declarative code that clearly shows the data transformation pipeline.
                </p>
                <pre><code>{`// Method chaining example
const products = [
  { id: 1, name: 'Laptop', price: 999, category: 'electronics' },
  { id: 2, name: 'Book', price: 19, category: 'books' },
  { id: 3, name: 'Phone', price: 699, category: 'electronics' },
  { id: 4, name: 'Pen', price: 2, category: 'office' },
  { id: 5, name: 'Tablet', price: 399, category: 'electronics' }
];

// Complex transformation using chaining
const expensiveElectronics = products
  .filter(product => product.category === 'electronics')
  .filter(product => product.price > 500)
  .map(product => ({
    ...product,
    priceWithTax: product.price * 1.1,
    displayPrice: \`$\${product.price}\`
  }))
  .sort((a, b) => b.price - a.price);

console.log(expensiveElectronics);
// [
//   { id: 1, name: 'Laptop', price: 999, category: 'electronics', priceWithTax: 1098.9, displayPrice: '$999' },
//   { id: 3, name: 'Phone', price: 699, category: 'electronics', priceWithTax: 768.9, displayPrice: '$699' }
// ]

// Data processing pipeline
const orders = [
  { id: 1, items: ['laptop', 'mouse'], total: 1050 },
  { id: 2, items: ['book'], total: 19 },
  { id: 3, items: ['phone', 'case', 'charger'], total: 750 },
  { id: 4, items: ['pen'], total: 2 }
];

const highValueOrders = orders
  .filter(order => order.total > 100)
  .map(order => ({
    ...order,
    itemsCount: order.items.length,
    averageItemPrice: order.total / order.items.length
  }))
  .sort((a, b) => b.total - a.total);

console.log(highValueOrders);
// [
//   { id: 1, items: ['laptop', 'mouse'], total: 1050, itemsCount: 2, averageItemPrice: 525 },
//   { id: 3, items: ['phone', 'case', 'charger'], total: 750, itemsCount: 3, averageItemPrice: 250 }
// ]

// Functional composition
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const addTax = price => price * 1.1;
const formatPrice = price => \`$\${price.toFixed(2)}\`;
const addPrefix = prefix => text => \`\${prefix}: \${text}\`;

const processPrice = compose(
  addPrefix('Final Price'),
  formatPrice,
  addTax
);

console.log(processPrice(100)); // "Final Price: $110.00"`}</code></pre>
              </div>
            </div>

            <div className="card" id="immutability">
              <h2>Immutability</h2>
              
              <div className="code-example">
                <h3>Creating Immutable Data</h3>
                <p className="explanation">
                  Immutability means data cannot be changed after creation. Instead of modifying existing data, you create new copies with the desired changes. This prevents bugs, makes code more predictable, and enables better performance optimizations through reference equality checks.
                </p>
                <pre><code>{`// Mutable approach (avoid this)
const user = { name: 'John', age: 30 };
user.age = 31; // Mutates original object
console.log(user); // { name: 'John', age: 31 }

// Immutable approach (prefer this)
const user = { name: 'John', age: 30 };
const updatedUser = { ...user, age: 31 }; // Creates new object
console.log(user); // { name: 'John', age: 30 } (unchanged)
console.log(updatedUser); // { name: 'John', age: 31 }

// Immutable array operations
const numbers = [1, 2, 3, 4, 5];

// Adding element
const newNumbers = [...numbers, 6];
console.log(numbers); // [1, 2, 3, 4, 5] (unchanged)
console.log(newNumbers); // [1, 2, 3, 4, 5, 6]

// Removing element
const filteredNumbers = numbers.filter(n => n !== 3);
console.log(numbers); // [1, 2, 3, 4, 5] (unchanged)
console.log(filteredNumbers); // [1, 2, 4, 5]

// Updating element
const updatedNumbers = numbers.map(n => n === 3 ? 30 : n);
console.log(numbers); // [1, 2, 3, 4, 5] (unchanged)
console.log(updatedNumbers); // [1, 2, 30, 4, 5]

// Deep immutability with nested objects
const user = {
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'New York'
  },
  hobbies: ['reading', 'gaming']
};

// Immutable update of nested object
const updatedUser = {
  ...user,
  address: {
    ...user.address,
    city: 'Los Angeles'
  }
};

console.log(user.address.city); // "New York" (unchanged)
console.log(updatedUser.address.city); // "Los Angeles"

// Immutable update of nested array
const userWithNewHobby = {
  ...user,
  hobbies: [...user.hobbies, 'cooking']
};

console.log(user.hobbies); // ['reading', 'gaming'] (unchanged)
console.log(userWithNewHobby.hobbies); // ['reading', 'gaming', 'cooking']`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Object.freeze() and Deep Freezing</h3>
                <p className="explanation">
                  Object.freeze() makes objects immutable at the top level, preventing property addition, deletion, and modification. However, it only creates a shallow freeze. For deep immutability, you need to recursively freeze nested objects or use libraries like Immer.
                </p>
                <pre><code>{`// Shallow freeze
const user = Object.freeze({
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York'
  }
});

// user.name = 'Jane'; // TypeError in strict mode
// user.newProp = 'value'; // TypeError in strict mode

// But nested objects can still be modified
user.address.city = 'Los Angeles'; // This works!
console.log(user.address.city); // "Los Angeles"

// Deep freeze function
function deepFreeze(obj) {
  Object.keys(obj).forEach(prop => {
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      deepFreeze(obj[prop]);
    }
  });
  return Object.freeze(obj);
}

const deepFrozenUser = deepFreeze({
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York'
  },
  hobbies: ['reading', 'gaming']
});

// Now even nested objects are frozen
// deepFrozenUser.address.city = 'Los Angeles'; // TypeError in strict mode
// deepFrozenUser.hobbies.push('cooking'); // TypeError in strict mode

// Checking if object is frozen
console.log(Object.isFrozen(user)); // true
console.log(Object.isFrozen(deepFrozenUser)); // true

// Practical example with configuration
const config = deepFreeze({
  api: {
    baseUrl: 'https://api.example.com',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  },
  features: {
    caching: true,
    logging: false
  }
});

// This would throw an error in strict mode
// config.api.timeout = 10000; // TypeError

// Instead, create a new config
const newConfig = {
  ...config,
  api: {
    ...config.api,
    timeout: 10000
  }
};

console.log(config.api.timeout); // 5000 (unchanged)
console.log(newConfig.api.timeout); // 10000`}</code></pre>
              </div>
            </div>

            <div className="card" id="higher-order-functions">
              <h2>Higher-Order Functions</h2>
              
              <div className="code-example">
                <h3>Functions as Arguments and Return Values</h3>
                <p className="explanation">
                  Higher-order functions are functions that take other functions as arguments or return functions. They enable powerful abstractions and code reuse. Common examples include map, filter, reduce, and function decorators that add behavior to existing functions.
                </p>
                <pre><code>{`// Function as argument
function processArray(arr, processor) {
  return arr.map(processor);
}

const numbers = [1, 2, 3, 4, 5];

const doubled = processArray(numbers, n => n * 2);
const squared = processArray(numbers, n => n * n);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(squared); // [1, 4, 9, 16, 25]

// Function that returns a function
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

const multiplyByTwo = multiplyBy(2);
const multiplyByTen = multiplyBy(10);

console.log(multiplyByTwo(5)); // 10
console.log(multiplyByTen(5)); // 50

// Higher-order function with multiple arguments
function createFilter(predicate) {
  return function(arr) {
    return arr.filter(predicate);
  };
}

const filterEven = createFilter(n => n % 2 === 0);
const filterPositive = createFilter(n => n > 0);

const numbers2 = [-2, -1, 0, 1, 2, 3, 4];

console.log(filterEven(numbers2)); // [-2, 0, 2, 4]
console.log(filterPositive(numbers2)); // [1, 2, 3, 4]

// Function decorator
function withLogging(fn) {
  return function(...args) {
    console.log(\`Calling \${fn.name} with args:\`, args);
    const result = fn.apply(this, args);
    console.log(\`\${fn.name} returned:\`, result);
    return result;
  };
}

function add(a, b) {
  return a + b;
}

const addWithLogging = withLogging(add);
addWithLogging(2, 3);
// "Calling add with args: [2, 3]"
// "add returned: 5"

// Partial application
function partial(fn, ...args) {
  return function(...moreArgs) {
    return fn.apply(this, [...args, ...moreArgs]);
  };
}

function greet(greeting, name) {
  return \`\${greeting}, \${name}!\`;
}

const sayHello = partial(greet, 'Hello');
const sayGoodbye = partial(greet, 'Goodbye');

console.log(sayHello('John')); // "Hello, John!"
console.log(sayGoodbye('Jane')); // "Goodbye, Jane!"`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Currying and Function Composition</h3>
                <p className="explanation">
                  Currying transforms a function that takes multiple arguments into a series of functions that each take a single argument. Function composition combines multiple functions into a single function. These techniques enable powerful functional programming patterns and better code reuse.
                </p>
                <pre><code>{`// Currying function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}

// Example function to curry
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6

// Practical currying example
const createUser = curry(function(name, email, age) {
  return { name, email, age };
});

const createJohn = createUser('John');
const createJohnWithEmail = createJohn('john@example.com');

const user1 = createJohnWithEmail(30);
const user2 = createJohnWithEmail(25);

console.log(user1); // { name: 'John', email: 'john@example.com', age: 30 }
console.log(user2); // { name: 'John', email: 'john@example.com', age: 25 }

// Function composition
function compose(...fns) {
  return function(x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

function pipe(...fns) {
  return function(x) {
    return fns.reduce((acc, fn) => fn(acc), x);
  };
}

// Example functions
const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;
const toString = x => \`Result: \${x}\`;

// Compose: f(g(h(x))) - right to left
const composed = compose(toString, square, double, addOne);
console.log(composed(5)); // "Result: 144" (toString(square(double(addOne(5)))))

// Pipe: h(g(f(x))) - left to right
const piped = pipe(addOne, double, square, toString);
console.log(piped(5)); // "Result: 144" (toString(square(double(addOne(5)))))

// Practical composition example
const users = [
  { name: 'John', age: 30, score: 85 },
  { name: 'Jane', age: 25, score: 92 },
  { name: 'Bob', age: 35, score: 78 }
];

const processUsers = pipe(
  users => users.filter(user => user.age >= 30),
  users => users.map(user => ({ ...user, score: user.score + 10 })),
  users => users.sort((a, b) => b.score - a.score),
  users => users.map(user => \`\${user.name}: \${user.score}\`)
);

console.log(processUsers(users));
// ["John: 95", "Bob: 88"]`}</code></pre>
              </div>
            </div>

            <div className="card" id="best-practices">
              <h2>Best Practices</h2>
              <ul className="best-practices">
                <li><strong>Write pure functions whenever possible</strong> - They're easier to test and reason about</li>
                <li><strong>Use array methods over loops</strong> - map, filter, reduce are more declarative</li>
                <li><strong>Prefer immutability over mutation</strong> - Use spread operator and Object.assign()</li>
                <li><strong>Use function composition for complex operations</strong> - Break down complex logic into smaller functions</li>
                <li><strong>Leverage higher-order functions</strong> - Create reusable abstractions</li>
                <li><strong>Avoid side effects in pure functions</strong> - Keep functions predictable</li>
                <li><strong>Use currying for partial application</strong> - Create specialized functions from general ones</li>
                <li><strong>Prefer declarative over imperative code</strong> - Focus on what, not how</li>
                <li><strong>Use Object.freeze() for immutable data</strong> - Prevent accidental mutations</li>
                <li><strong>Consider using functional libraries</strong> - Lodash/fp, Ramda for advanced patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FunctionalProgramming; 