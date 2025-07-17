import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PDFDownload from './PDFDownload';
import './DetailPages.css';

function VariablesScope() {
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <h1 style={{ margin: 0 }}>🔧 Variables & Scope</h1>
              <PDFDownload pageTitle="Variables & Scope" />
            </div>
            <p>Understanding JavaScript variable declarations, scope, and hoisting.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
              <Link to="/js-react-concepts" className="back-link">
                ← Back to JS & React Concepts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="detail-content">
            <div className="card" id="variable-declarations">
              <h2>Variable Declarations: let, const, var</h2>
              
              <div className="code-example">
                <h3>let - Block-scoped variables</h3>
                <p className="explanation">
                  The <code>let</code> keyword was introduced in ES6 to address the scoping issues with <code>var</code>. 
                  Variables declared with <code>let</code> are block-scoped, meaning they are only accessible within the 
                  block (curly braces) where they are declared. This prevents variable hoisting issues and provides 
                  better control over variable scope.
                </p>
                <pre><code>{`// Block scope - variables are only accessible within the block
{
  let x = 10;
  console.log(x); // 10 - accessible inside the block
}
// console.log(x); // ReferenceError: x is not defined - not accessible outside

// Reassignment is allowed with let
let count = 0;
count = 1; // ✅ Valid - let allows reassignment

// No hoisting - variables are not accessible before declaration
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 5;`}</code></pre>
              </div>

              <div className="code-example">
                <h3>const - Block-scoped constants</h3>
                <p className="explanation">
                  The <code>const</code> keyword creates read-only references to values. While the variable itself 
                  cannot be reassigned, the properties of objects and elements of arrays declared with <code>const</code> 
                  can still be modified. This is because <code>const</code> prevents reassignment of the reference, 
                  not the mutation of the referenced value.
                </p>
                <pre><code>{`// const must be initialized when declared
const PI = 3.14159;

// Cannot reassign the variable itself
// PI = 3.14; // TypeError: Assignment to constant variable

// However, object properties can be mutated
const user = { name: 'John' };
user.name = 'Jane'; // ✅ Valid - modifying object property
user.age = 25; // ✅ Valid - adding new property

// Arrays can also be modified
const numbers = [1, 2, 3];
numbers.push(4); // ✅ Valid - adding element
numbers[0] = 10; // ✅ Valid - modifying element

// But you cannot reassign the entire object/array
// user = { name: 'Jane' }; // TypeError: Assignment to constant variable`}</code></pre>
              </div>

              <div className="code-example">
                <h3>var - Function-scoped variables (avoid in modern JS)</h3>
                <p className="explanation">
                  The <code>var</code> keyword was the original way to declare variables in JavaScript. Variables 
                  declared with <code>var</code> are function-scoped (or globally-scoped if declared outside a function) 
                  and are hoisted to the top of their scope. This can lead to unexpected behavior and is generally 
                  avoided in modern JavaScript in favor of <code>let</code> and <code>const</code>.
                </p>
                <pre><code>{`// Function scope - var is accessible throughout the entire function
function example() {
  var x = 10;
  if (true) {
    var x = 20; // Same variable! This overwrites the previous x
  }
  console.log(x); // 20 - the value was overwritten
}

// Hoisting - var declarations are moved to the top during execution
console.log(z); // undefined (not ReferenceError) - hoisted but not initialized
var z = 5;

// This is equivalent to:
var z; // Declaration is hoisted
console.log(z); // undefined
z = 5; // Assignment happens here`}</code></pre>
              </div>
            </div>

            <div className="card" id="scope-types">
              <h2>Scope Types</h2>
              
              <div className="scope-section">
                <h3>Global Scope</h3>
                <p className="explanation">
                  Global scope is the outermost scope in JavaScript. Variables and functions declared in global scope 
                  are accessible from anywhere in your code. However, it's generally considered bad practice to use 
                  global variables as they can lead to naming conflicts and make code harder to maintain. Modern 
                  JavaScript uses modules to avoid global scope pollution.
                </p>
                <pre><code>{`// Variables declared outside any function are in global scope
const globalVar = 'I am global';

function testFunction() {
  console.log(globalVar); // Accessible - global variables are available everywhere
}

// Avoid global variables when possible
// Use modules instead to encapsulate code
// Global variables can cause naming conflicts and make debugging difficult`}</code></pre>
              </div>

              <div className="scope-section">
                <h3>Function Scope</h3>
                <p className="explanation">
                  Function scope means that variables declared inside a function are only accessible within that 
                  function and any nested functions. This creates a hierarchy where inner functions can access 
                  variables from outer functions (closures), but outer functions cannot access variables from 
                  inner functions.
                </p>
                <pre><code>{`function outerFunction() {
  const outerVar = 'I am in outer function';
  
  function innerFunction() {
    const innerVar = 'I am in inner function';
    console.log(outerVar); // Accessible - inner functions can access outer variables
    console.log(innerVar); // Accessible - variables in same function
  }
  
  // console.log(innerVar); // ReferenceError - outer functions cannot access inner variables
  innerFunction();
}

// This demonstrates the concept of closures
// Inner functions "remember" the variables from their outer scope`}</code></pre>
              </div>

              <div className="scope-section">
                <h3>Block Scope</h3>
                <p className="explanation">
                  Block scope was introduced with <code>let</code> and <code>const</code> in ES6. Variables declared 
                  with these keywords are only accessible within the block (curly braces) where they are declared. 
                  This includes if statements, loops, and any other code blocks. The <code>var</code> keyword does 
                  not respect block scope and is function-scoped instead.
                </p>
                <pre><code>{`{
  const blockVar = 'I am in block';
  let blockLet = 'I am also in block';
  var blockVarOld = 'I am function-scoped';
}

// console.log(blockVar); // ReferenceError - block-scoped variables not accessible
// console.log(blockLet); // ReferenceError - block-scoped variables not accessible
console.log(blockVarOld); // Accessible! var is function-scoped, not block-scoped

// This is why var can be problematic - it doesn't respect block boundaries`}</code></pre>
              </div>
            </div>

            <div className="card" id="hoisting-temporal-dead-zone">
              <h2>Hoisting & Temporal Dead Zone</h2>
              
              <div className="hoisting-section">
                <h3>Function Hoisting</h3>
                <p className="explanation">
                  Function declarations are hoisted in JavaScript, meaning they are moved to the top of their scope 
                  during the creation phase. This allows you to call functions before they are declared in the code. 
                  However, function expressions (functions assigned to variables) are not hoisted and behave like 
                  regular variables.
                </p>
                <pre><code>{`// Function declarations are hoisted
sayHello(); // ✅ Works - function is hoisted to the top

function sayHello() {
  console.log('Hello!');
}

// Function expressions are NOT hoisted
// sayGoodbye(); // TypeError: sayGoodbye is not a function

const sayGoodbye = function() {
  console.log('Goodbye!');
};

// The difference is that function declarations are hoisted
// while function expressions follow variable hoisting rules`}</code></pre>
              </div>

              <div className="hoisting-section">
                <h3>Temporal Dead Zone (TDZ)</h3>
                <p className="explanation">
                  The Temporal Dead Zone (TDZ) is the period between entering a scope and the actual declaration 
                  of a variable. During this time, the variable exists but cannot be accessed. This is a feature 
                  of <code>let</code> and <code>const</code> that prevents the confusing behavior of <code>var</code> 
                  where variables are accessible but undefined before declaration.
                </p>
                <pre><code>{`// TDZ for let/const - variables exist but cannot be accessed
console.log(tdzVar); // ReferenceError: Cannot access 'tdzVar' before initialization

let tdzVar = 'I am in TDZ';

// The time between entering scope and variable declaration
// is called the Temporal Dead Zone

// This prevents the confusing behavior of var:
console.log(varVar); // undefined (not ReferenceError)
var varVar = 'I am hoisted';`}</code></pre>
              </div>

              <div className="hoisting-section">
                <h3>Variable Hoisting</h3>
                <p className="explanation">
                  Variable hoisting is a JavaScript mechanism where variable declarations are moved to the top of 
                  their scope during the creation phase. However, only the declarations are hoisted, not the 
                  initializations. This means that variables declared with <code>var</code> are accessible but 
                  undefined before their actual declaration in the code.
                </p>
                <pre><code>{`// Variable hoisting with var
console.log(hoistedVar); // undefined (not ReferenceError)

var hoistedVar = 'I am hoisted';

// This is equivalent to:
var hoistedVar; // Declaration is hoisted
console.log(hoistedVar); // undefined
hoistedVar = 'I am hoisted'; // Assignment happens here

// let and const are NOT hoisted in the same way
// console.log(notHoisted); // ReferenceError: Cannot access 'notHoisted' before initialization
// let notHoisted = 'I am not hoisted';`}</code></pre>
              </div>
            </div>

            <div className="card" id="closures-lexical-scoping">
              <h2>Closures and Lexical Scoping</h2>
              
              <div className="closure-section">
                <h3>What are Closures?</h3>
                <p className="explanation">
                  A closure is a function that has access to variables in its outer (enclosing) scope even after 
                  the outer function has returned. Closures are created when a function is defined inside another 
                  function, and the inner function "remembers" the environment in which it was created. This is 
                  one of the most powerful features of JavaScript and is used extensively in modern JavaScript 
                  development.
                </p>
                <pre><code>{`// Basic closure example
function outerFunction(x) {
  return function innerFunction(y) {
    return x + y; // innerFunction has access to x from outerFunction
  };
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8

// The inner function "remembers" the value of x (5)
// even after outerFunction has finished executing

// Another example with multiple variables
function createCounter() {
  let count = 0;
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.getCount()); // 0
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1

// Each method has access to the private 'count' variable
// This is a common pattern for creating private variables in JavaScript`}</code></pre>
              </div>

              <div className="closure-section">
                <h3>Lexical Scoping</h3>
                <p className="explanation">
                  Lexical scoping (also called static scoping) means that the scope of a variable is determined 
                  by its location within the source code, and nested functions have access to variables declared 
                  in their outer scope. This is the foundation of closures and is what makes them work.
                </p>
                <pre><code>{`// Lexical scoping example
let globalVar = 'I am global';

function firstLevel() {
  let firstLevelVar = 'I am in first level';
  
  function secondLevel() {
    let secondLevelVar = 'I am in second level';
    
    function thirdLevel() {
      let thirdLevelVar = 'I am in third level';
      
      // Can access variables from all outer scopes
      console.log(globalVar); // "I am global"
      console.log(firstLevelVar); // "I am in first level"
      console.log(secondLevelVar); // "I am in second level"
      console.log(thirdLevelVar); // "I am in third level"
    }
    
    thirdLevel();
    
    // Can access variables from outer scopes
    console.log(globalVar); // "I am global"
    console.log(firstLevelVar); // "I am in first level"
    console.log(secondLevelVar); // "I am in second level"
    // console.log(thirdLevelVar); // ReferenceError - cannot access inner scope
  }
  
  secondLevel();
  
  // Can access variables from outer scopes
  console.log(globalVar); // "I am global"
  console.log(firstLevelVar); // "I am in first level"
  // console.log(secondLevelVar); // ReferenceError - cannot access inner scope
}

firstLevel();`}</code></pre>
              </div>

              <div className="closure-section">
                <h3>Practical Uses of Closures</h3>
                <p className="explanation">
                  Closures are used in many practical scenarios in JavaScript, including data privacy, function 
                  factories, partial application, and maintaining state in asynchronous operations. Understanding 
                  closures is essential for writing clean, maintainable JavaScript code.
                </p>
                <pre><code>{`// Data privacy with closures
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  
  return {
    deposit: function(amount) {
      balance += amount;
      return \`Deposited \${amount}. New balance: \${balance}\`;
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        return \`Withdrew \${amount}. New balance: \${balance}\`;
      } else {
        return 'Insufficient funds';
      }
    },
    getBalance: function() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
console.log(account.getBalance()); // 1000
console.log(account.deposit(500)); // "Deposited 500. New balance: 1500"
console.log(account.withdraw(200)); // "Withdrew 200. New balance: 1300"

// The balance variable is private and cannot be accessed directly
// console.log(account.balance); // undefined

// Function factory
function multiply(x) {
  return function(y) {
    return x * y;
  };
}

const multiplyByTwo = multiply(2);
const multiplyByTen = multiply(10);

console.log(multiplyByTwo(5)); // 10
console.log(multiplyByTen(5)); // 50

// Maintaining state in async operations
function createAsyncCounter() {
  let count = 0;
  
  return function() {
    return new Promise((resolve) => {
      setTimeout(() => {
        count++;
        resolve(count);
      }, 1000);
    });
  };
}

const asyncCounter = createAsyncCounter();
asyncCounter().then(count => console.log(count)); // 1
asyncCounter().then(count => console.log(count)); // 2`}</code></pre>
              </div>
            </div>

            <div className="card" id="best-practices">
              <h2>Best Practices</h2>
              <ul className="best-practices">
                <li><strong>Use const by default</strong> - Only use let when you need to reassign. This prevents accidental reassignment and makes your intent clear.</li>
                <li><strong>Avoid var</strong> - Use let/const for better scoping. var has confusing hoisting behavior and function-scoping that can lead to bugs.</li>
                <li><strong>Declare variables at the top</strong> - Makes code more readable and helps avoid hoisting confusion. Group related variables together.</li>
                <li><strong>Use meaningful names</strong> - Descriptive variable names improve code clarity and make debugging easier. Use camelCase for variables.</li>
                <li><strong>Minimize global variables</strong> - Use modules and closures instead. Global variables can cause naming conflicts and make code harder to test.</li>
                <li><strong>Understand hoisting</strong> - Know how different declarations behave. Function declarations are fully hoisted, while let/const are hoisted but not initialized.</li>
                <li><strong>Use block scope appropriately</strong> - Leverage let/const block scoping to limit variable accessibility and prevent pollution.</li>
                <li><strong>Be careful with closures</strong> - They're powerful but can cause memory leaks if not used carefully. Avoid creating closures in loops when possible.</li>
                <li><strong>Use strict mode</strong> - Enable strict mode to catch common mistakes and prevent certain error-prone behaviors.</li>
                <li><strong>Consider TypeScript</strong> - For large projects, TypeScript provides better type safety and helps catch scope-related errors.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VariablesScope; 