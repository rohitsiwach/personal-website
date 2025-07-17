import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PDFDownload from './PDFDownload';
import './DetailPages.css';

function FunctionsExecution() {
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
            <h1>⚡ Functions & Execution</h1>
            <p>Mastering JavaScript functions, execution context, and advanced function patterns.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
              <Link to="/js-react-concepts" className="back-link">
                ← Back to JS & React Concepts
              </Link>
              <PDFDownload pageTitle="Functions & Execution" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="detail-content">
            <div className="card" id="function-declarations-expressions">
              <h2>Function Declarations vs Expressions</h2>
              
              <div className="code-example">
                <h3>Function Declaration</h3>
                <p className="explanation">
                  Function declarations are hoisted to the top of their scope during the creation phase, which means 
                  you can call them before they appear in the code. They are the most common way to define functions 
                  and are generally preferred for their clarity and hoisting behavior. Function declarations create 
                  a named function that can be called by its name.
                </p>
                <pre><code>{`// Function declaration (hoisted)
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Can be called before declaration - hoisting allows this
console.log(greet('John')); // "Hello, John!"

// Function declarations are hoisted to the top
// of their scope during the creation phase
// This means the entire function is available before execution

// Function declarations create a named function
// that can be referenced by its name throughout the scope`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Function Expression</h3>
                <p className="explanation">
                  Function expressions are functions assigned to variables. Unlike function declarations, they are 
                  not hoisted and behave like regular variables. This means you cannot call them before they are 
                  declared. Function expressions are useful when you need to assign functions to variables or pass 
                  them as arguments to other functions.
                </p>
                <pre><code>{`// Function expression (not hoisted)
const greet = function(name) {
  return \`Hello, \${name}!\`;
};

// Cannot be called before declaration
// console.log(greet('John')); // TypeError: greet is not a function

// Function expressions are not hoisted
// They behave like regular variables
// The variable is hoisted but initialized to undefined

// Function expressions are useful for:
// - Assigning functions to variables
// - Passing functions as arguments
// - Creating anonymous functions`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Named Function Expression</h3>
                <p className="explanation">
                  Named function expressions are function expressions that have a name. This provides better debugging 
                  experience as the function name appears in stack traces. Named function expressions also allow for 
                  self-reference, which is useful for recursion. The name is only accessible within the function itself.
                </p>
                <pre><code>{`// Named function expression
const factorial = function calculateFactorial(n) {
  if (n <= 1) return 1;
  return n * calculateFactorial(n - 1); // Self-reference using the name
};

console.log(factorial(5)); // 120

// Benefits of named function expressions:
// - Better stack traces in debugging
// - Self-reference for recursion
// - More readable code
// - The name is only accessible within the function

// The name 'calculateFactorial' is only available inside the function
// console.log(calculateFactorial); // ReferenceError`}</code></pre>
              </div>
            </div>

            <div className="card" id="arrow-functions">
              <h2>Arrow Functions</h2>
              
              <div className="code-example">
                <h3>Basic Arrow Function Syntax</h3>
                <p className="explanation">
                  Arrow functions were introduced in ES6 as a more concise way to write functions. They have a 
                  shorter syntax and do not bind their own <code>this</code> value. Arrow functions are particularly 
                  useful for short, single-expression functions and when you want to preserve the lexical scope of <code>this</code>.
                </p>
                <pre><code>{`// Single parameter (parentheses optional)
const square = x => x * x;

// Multiple parameters (parentheses required)
const add = (a, b) => a + b;

// No parameters (parentheses required)
const getRandom = () => Math.random();

// Multiple lines (braces and return required)
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

// Object literal return (parentheses required)
const createUser = (name, age) => ({
  name,
  age,
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
});

// Arrow functions are great for:
// - Short, single-expression functions
// - Callback functions
// - When you want lexical 'this' binding`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Arrow Functions and 'this' Binding</h3>
                <p className="explanation">
                  One of the key differences between arrow functions and regular functions is how they handle the 
                  <code>this</code> keyword. Arrow functions do not have their own <code>this</code> binding; instead, 
                  they inherit <code>this</code> from the enclosing scope. This makes them particularly useful in 
                  callbacks and event handlers where you want to preserve the context.
                </p>
                <pre><code>{`// Traditional function - 'this' is dynamic
const person = {
  name: 'John',
  greet: function() {
    setTimeout(function() {
      console.log('Hello, ' + this.name); // undefined - 'this' refers to window/global
    }, 100);
  }
};

// Arrow function - 'this' is lexical (inherited from scope)
const personArrow = {
  name: 'John',
  greet: function() {
    setTimeout(() => {
      console.log('Hello, ' + this.name); // "Hello, John" - 'this' inherited from personArrow
    }, 100);
  }
};

// Arrow functions don't have their own 'this'
// They inherit 'this' from the enclosing scope
// This is called "lexical scoping" of 'this'

// When to use arrow functions:
// - When you want to preserve 'this' context
// - For short, simple functions
// - In callbacks and event handlers`}</code></pre>
              </div>
            </div>

            <div className="card" id="higher-order-functions">
              <h2>Higher-Order Functions</h2>
              
              <div className="code-example">
                <h3>Functions as Arguments</h3>
                <p className="explanation">
                  Higher-order functions are functions that either take other functions as arguments or return 
                  functions as their result. This is a fundamental concept in functional programming. Functions 
                  that take other functions as arguments are commonly used for callbacks, event handlers, and 
                  array methods like <code>map</code>, <code>filter</code>, and <code>reduce</code>.
                </p>
                <pre><code>{`// Function that takes another function as argument
function processArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

// Usage with different callback functions
const numbers = [1, 2, 3, 4, 5];

const doubled = processArray(numbers, x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const squared = processArray(numbers, x => x ** 2);
console.log(squared); // [1, 4, 9, 16, 25]

// Built-in higher-order functions
const filtered = numbers.filter(x => x > 2);
const mapped = numbers.map(x => x * 3);
const reduced = numbers.reduce((sum, x) => sum + x, 0);

// Higher-order functions enable:
// - Code reusability
// - Functional programming patterns
// - Separation of concerns
// - More readable and maintainable code`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Functions Returning Functions</h3>
                <p className="explanation">
                  Functions that return other functions are powerful for creating specialized functions and 
                  implementing patterns like currying and partial application. This pattern allows you to create 
                  functions with preset parameters or to build complex function compositions. It's a key concept 
                  in functional programming and modern JavaScript development.
                </p>
                <pre><code>{`// Function that returns another function
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Currying example - transforming a function that takes multiple arguments
// into a series of functions that each take a single argument
function add(a) {
  return function(b) {
    return a + b;
  };
}

const add5 = add(5);
console.log(add5(3)); // 8

// Modern arrow function syntax for currying
const createMultiplierArrow = factor => number => number * factor;
const doubleArrow = createMultiplierArrow(2);

// This pattern is useful for:
// - Creating specialized functions
// - Partial application
// - Function composition
// - Building reusable utilities`}</code></pre>
              </div>
            </div>

            <div className="card" id="call-apply-bind">
              <h2>Call, Apply, and Bind Methods</h2>
              
              <div className="code-example">
                <h3>Call Method</h3>
                <p className="explanation">
                  The <code>call()</code> method allows you to invoke a function with a specified <code>this</code> 
                  value and arguments provided individually. It's useful when you want to borrow methods from other 
                  objects or when you need to explicitly set the context of a function. The arguments are passed 
                  as separate parameters.
                </p>
                <pre><code>{`// call() invokes function with given 'this' and arguments
function greet(greeting, punctuation) {
  return \`\${greeting}, \${this.name}\${punctuation}\`;
}

const person = { name: 'John' };

// Using call() to set 'this' context
console.log(greet.call(person, 'Hello', '!')); // "Hello, John!"

// call() passes arguments individually
greet.call(person, 'Hi', '?'); // "Hi, John?"

// call() is useful for:
// - Borrowing methods from other objects
// - Setting explicit 'this' context
// - Invoking functions with specific arguments
// - Method delegation

// Example: Borrowing array methods
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
const array = Array.prototype.slice.call(arrayLike);`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Apply Method</h3>
                <p className="explanation">
                  The <code>apply()</code> method is similar to <code>call()</code>, but it takes arguments as an 
                  array. This is particularly useful when you have an array of arguments that you want to pass to 
                  a function. In modern JavaScript, the spread operator often provides a cleaner alternative to 
                  <code>apply()</code>.
                </p>
                <pre><code>{`// apply() invokes function with given 'this' and array of arguments
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

// Using apply() with array of arguments
console.log(sum.apply(null, numbers)); // 6

// apply() passes arguments as an array
// Modern alternative: spread operator
console.log(sum(...numbers)); // 6

// apply() is useful when:
// - You have arguments in an array
// - You want to pass array elements as individual arguments
// - Working with functions that expect individual parameters

// Example: Finding maximum value in array
const max = Math.max.apply(null, [1, 2, 3, 4, 5]);
// Modern equivalent: Math.max(...[1, 2, 3, 4, 5])`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Bind Method</h3>
                <p className="explanation">
                  The <code>bind()</code> method creates a new function with a fixed <code>this</code> value and 
                  optionally preset arguments. Unlike <code>call()</code> and <code>apply()</code>, <code>bind()</code> 
                  doesn't immediately invoke the function. It returns a new function that can be called later. This 
                  is particularly useful for event handlers and callbacks.
                </p>
                <pre><code>{`// bind() creates new function with fixed 'this' and optional arguments
const person = {
  name: 'John',
  greet: function(greeting) {
    return \`\${greeting}, \${this.name}!\`;
  }
};

const greetJohn = person.greet.bind(person, 'Hello');
console.log(greetJohn()); // "Hello, John!"

// bind() is useful for event handlers
const button = document.querySelector('button');
button.addEventListener('click', person.greet.bind(person, 'Hi'));

// Partial application with bind
function multiply(a, b) {
  return a * b;
}

const multiplyByTwo = multiply.bind(null, 2);
console.log(multiplyByTwo(5)); // 10

// bind() vs call()/apply():
// - bind() returns a new function
// - call()/apply() immediately invoke the function
// - bind() is useful for creating reusable functions
// - bind() is great for event handlers and callbacks`}</code></pre>
              </div>
            </div>

            <div className="card" id="execution-context-call-stack">
              <h2>Execution Context and Call Stack</h2>
              
              <div className="code-example">
                <h3>Global Execution Context</h3>
                <p className="explanation">
                  The global execution context is the default context that is created when JavaScript code starts 
                  executing. It represents the global scope and contains all variables and functions declared in 
                  the global scope. In browsers, the global object is <code>window</code>, while in Node.js it's 
                  <code>global</code>.
                </p>
                <pre><code>{`// Global execution context
// Variables and functions declared in global scope
const globalVar = 'I am global';

function globalFunction() {
  console.log('I am global function');
}

// 'this' refers to global object (window in browser, global in Node.js)
console.log(this === window); // true (in browser)

// Global context characteristics:
// - Contains global variables and functions
// - 'this' refers to global object
// - Is the outermost execution context
// - Exists throughout the entire program execution

// Avoid polluting global scope
// Use modules and proper scoping instead`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Function Execution Context</h3>
                <p className="explanation">
                  Every time a function is called, a new execution context is created for that function. This 
                  context contains the function's local variables, parameters, and the <code>this</code> value. 
                  Function execution contexts are stacked on top of each other, creating the call stack. When a 
                  function completes, its execution context is removed from the stack.
                </p>
                <pre><code>{`function outer() {
  const outerVar = 'I am in outer';
  
  function inner() {
    const innerVar = 'I am in inner';
    console.log(outerVar); // Accessible - closure
    console.log(innerVar); // Accessible - same context
  }
  
  inner();
}

outer();

// Each function call creates new execution context
// Context includes: variables, functions, 'this', scope chain

// Execution context lifecycle:
// 1. Creation phase - variables and functions are hoisted
// 2. Execution phase - code is executed line by line
// 3. Cleanup phase - context is destroyed when function completes

// Call stack shows the current execution context chain`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Call Stack Example</h3>
                <p className="explanation">
                  The call stack is a data structure that keeps track of function calls in your program. When a 
                  function is called, it's added to the top of the stack. When a function returns, it's removed 
                  from the stack. The call stack follows the Last-In-First-Out (LIFO) principle. Understanding 
                  the call stack is crucial for debugging and understanding how your code executes.
                </p>
                <pre><code>{`function first() {
  console.log('First function');
  second();
}

function second() {
  console.log('Second function');
  third();
}

function third() {
  console.log('Third function');
}

first();

// Call stack execution:
// 1. first() is pushed to stack
// 2. second() is pushed to stack (on top of first)
// 3. third() is pushed to stack (on top of second)
// 4. third() completes, popped from stack
// 5. second() completes, popped from stack
// 6. first() completes, popped from stack

// Call stack is important for:
// - Understanding execution flow
// - Debugging stack traces
// - Recursion and function calls
// - Error handling and stack overflow detection`}</code></pre>
              </div>
            </div>

            <div className="card" id="best-practices">
              <h2>Best Practices</h2>
              <ul className="best-practices">
                <li><strong>Use arrow functions for short, simple functions</strong> - Especially when you need lexical 'this' binding. Arrow functions are more concise and prevent 'this' binding issues.</li>
                <li><strong>Prefer function declarations for complex functions</strong> - Better hoisting and debugging. Function declarations are more readable for complex logic.</li>
                <li><strong>Use meaningful function names</strong> - Makes code self-documenting and easier to debug. Function names should clearly describe what the function does.</li>
                <li><strong>Keep functions small and focused</strong> - Single responsibility principle. Each function should do one thing well, making code more testable and maintainable.</li>
                <li><strong>Use default parameters</strong> - More readable than parameter checking. Default parameters provide clear intent and reduce boilerplate code.</li>
                <li><strong>Understand 'this' binding</strong> - Know when to use arrow functions vs regular functions. 'this' binding can be confusing, so choose the right approach for your use case.</li>
                <li><strong>Use higher-order functions</strong> - Leverage functional programming patterns. Higher-order functions make code more reusable and expressive.</li>
                <li><strong>Avoid nested functions when possible</strong> - Can make code harder to read and test. Consider extracting nested functions to improve readability.</li>
                <li><strong>Use call, apply, and bind appropriately</strong> - Each has specific use cases. Understand when each method is most appropriate for your needs.</li>
                <li><strong>Be mindful of the call stack</strong> - Avoid deep recursion and understand execution context. Deep call stacks can lead to stack overflow errors.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FunctionsExecution; 