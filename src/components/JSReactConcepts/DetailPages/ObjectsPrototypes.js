import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PDFDownload from './PDFDownload';
import './DetailPages.css';

function ObjectsPrototypes() {
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
            <h1>🔧 Objects & Prototypes</h1>
            <p>Understanding JavaScript objects, prototypes, inheritance, and modern ES6 classes.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
              <Link to="/js-react-concepts" className="back-link">
                ← Back to JS & React Concepts
              </Link>
              <PDFDownload pageTitle="Objects & Prototypes" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="detail-content">
            <div className="card" id="object-literals-constructors">
              <h2>Object Literals and Constructors</h2>
              
              <div className="code-example">
                <h3>Object Literals</h3>
                <p className="explanation">
                  Object literals are the most common way to create objects in JavaScript. They provide a concise syntax for creating objects with properties and methods. ES6 introduced shorthand property names and computed property names for even more flexibility.
                </p>
                <pre><code>{`// Object literal syntax
const person = {
  name: 'John',
  age: 30,
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
};

console.log(person.name); // "John"
console.log(person.greet()); // "Hello, I'm John"

// Shorthand property names (ES6)
const name = 'Jane';
const age = 25;
const person2 = { name, age }; // { name: 'Jane', age: 25 }

// Computed property names
const propertyName = 'email';
const user = {
  [propertyName]: 'john@example.com',
  ['user_' + propertyName]: 'john@example.com'
};`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Object Constructors</h3>
                <p className="explanation">
                  Constructor functions are used to create multiple objects with the same structure. They use the 'new' keyword to create instances. The constructor pattern was the traditional way to create object blueprints before ES6 classes, and it's still important to understand as classes are syntactic sugar over constructors.
                </p>
                <pre><code>{`// Constructor function (traditional way)
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    return \`Hello, I'm \${this.name}\`;
  };
}

// Creating instances
const john = new Person('John', 30);
const jane = new Person('Jane', 25);

console.log(john.greet()); // "Hello, I'm John"
console.log(jane.greet()); // "Hello, I'm Jane"

// Constructor with prototype methods (more efficient)
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getInfo = function() {
  return \`\${this.brand} \${this.model}\`;
};

const myCar = new Car('Toyota', 'Camry');
console.log(myCar.getInfo()); // "Toyota Camry"`}</code></pre>
              </div>
            </div>

            <div className="card" id="prototypal-inheritance">
              <h2>Prototypal Inheritance</h2>
              
              <div className="code-example">
                <h3>Prototype Chain</h3>
                <p className="explanation">
                  JavaScript uses prototypal inheritance where objects inherit properties and methods from their prototype. Every object has a prototype, and the prototype chain allows objects to access properties from their prototype's prototype, creating a chain of inheritance. This is the foundation of JavaScript's object-oriented features.
                </p>
                <pre><code>{`// Every object has a prototype
const obj = {};
console.log(obj.__proto__ === Object.prototype); // true

// Prototype chain example
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return \`\${this.name} makes a sound\`;
};

function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add Dog-specific methods
Dog.prototype.bark = function() {
  return \`\${this.name} barks: Woof!\`;
};

const myDog = new Dog('Buddy', 'Golden Retriever');
console.log(myDog.speak()); // "Buddy makes a sound"
console.log(myDog.bark()); // "Buddy barks: Woof!"`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Object.create() Method</h3>
                <p className="explanation">
                  Object.create() is a modern way to create objects with a specific prototype. It's more explicit than constructor functions and provides better control over the prototype chain. This method is often preferred for creating object hierarchies as it's more readable and less error-prone than manual prototype manipulation.
                </p>
                <pre><code>{`// Creating objects with specific prototypes
const animal = {
  speak() {
    return \`\${this.name} makes a sound\`;
  }
};

const dog = Object.create(animal, {
  name: { value: 'Buddy' },
  bark: {
    value: function() {
      return \`\${this.name} barks: Woof!\`;
    }
  }
});

console.log(dog.speak()); // "Buddy makes a sound"
console.log(dog.bark()); // "Buddy barks: Woof!"

// Checking prototype relationships
console.log(Object.getPrototypeOf(dog) === animal); // true
console.log(dog.hasOwnProperty('name')); // true
console.log(dog.hasOwnProperty('speak')); // false`}</code></pre>
              </div>
            </div>

            <div className="card" id="es6-classes-inheritance">
              <h2>ES6 Classes and Inheritance</h2>
              
              <div className="code-example">
                <h3>Class Declaration</h3>
                <p className="explanation">
                  ES6 classes provide a cleaner, more familiar syntax for creating object blueprints. They are syntactic sugar over constructor functions and prototypes, making the code more readable and maintainable. Classes support static methods, getters, setters, and other modern JavaScript features while maintaining the same underlying prototypal inheritance.
                </p>
                <pre><code>{`// ES6 Class syntax (syntactic sugar over prototypes)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
  
  // Static method
  static create(name, age) {
    return new Person(name, age);
  }
  
  // Getter
  get info() {
    return \`\${this.name} (\${this.age} years old)\`;
  }
  
  // Setter
  set info(value) {
    const [name, age] = value.split(' ');
    this.name = name;
    this.age = parseInt(age);
  }
}

const person = new Person('John', 30);
console.log(person.greet()); // "Hello, I'm John"
console.log(person.info); // "John (30 years old)"

// Using static method
const jane = Person.create('Jane', 25);`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Class Inheritance</h3>
                <p className="explanation">
                  Class inheritance in ES6 uses the 'extends' keyword and 'super()' to call the parent constructor. This provides a clean way to create class hierarchies while maintaining the prototypal inheritance under the hood. The 'super' keyword can be used to access parent class methods and properties.
                </p>
                <pre><code>{`// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

// Derived class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }
  
  speak() {
    return \`\${this.name} barks: Woof!\`;
  }
  
  getInfo() {
    return \`\${this.name} is a \${this.breed}\`;
  }
}

// Derived class with additional inheritance
class GuardDog extends Dog {
  constructor(name, breed, training) {
    super(name, breed);
    this.training = training;
  }
  
  guard() {
    return \`\${this.name} is guarding with \${this.training} training\`;
  }
}

const guardDog = new GuardDog('Rex', 'German Shepherd', 'K9');
console.log(guardDog.speak()); // "Rex barks: Woof!"
console.log(guardDog.getInfo()); // "Rex is a German Shepherd"
console.log(guardDog.guard()); // "Rex is guarding with K9 training"`}</code></pre>
              </div>
            </div>

            <div className="card" id="object-destructuring-spread">
              <h2>Object Destructuring and Spread</h2>
              
              <div className="code-example">
                <h3>Object Destructuring</h3>
                <p className="explanation">
                  Object destructuring allows you to extract properties from objects into individual variables. It's a powerful feature that makes code more concise and readable. You can use default values, rename variables, and destructure nested objects. This is especially useful for function parameters and working with API responses.
                </p>
                <pre><code>{`// Basic destructuring
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  country: 'USA'
};

const { name, age } = person;
console.log(name); // "John"
console.log(age); // 30

// Destructuring with default values
const { name: personName, age: personAge, email = 'default@email.com' } = person;
console.log(personName); // "John"
console.log(email); // "default@email.com"

// Nested destructuring
const user = {
  id: 1,
  profile: {
    firstName: 'John',
    lastName: 'Doe',
    address: {
      street: '123 Main St',
      city: 'New York'
    }
  }
};

const { profile: { firstName, address: { city } } } = user;
console.log(firstName); // "John"
console.log(city); // "New York"

// Destructuring in function parameters
function greet({ name, age }) {
  return \`Hello \${name}, you are \${age} years old\`;
}

console.log(greet(person)); // "Hello John, you are 30 years old"`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Spread Operator</h3>
                <p className="explanation">
                  The spread operator (...) for objects allows you to create copies, merge objects, and add properties. It's a more readable alternative to Object.assign() and provides a clean way to work with object immutability. However, it only creates shallow copies, so nested objects still reference the original.
                </p>
                <pre><code>{`// Object spread (ES2018)
const baseConfig = {
  host: 'localhost',
  port: 3000,
  timeout: 5000
};

const devConfig = {
  ...baseConfig,
  port: 3001,
  debug: true
};

console.log(devConfig);
// { host: 'localhost', port: 3001, timeout: 5000, debug: true }

// Merging objects
const user = { name: 'John', age: 30 };
const preferences = { theme: 'dark', language: 'en' };
const settings = { notifications: true };

const userProfile = { ...user, ...preferences, ...settings };
console.log(userProfile);
// { name: 'John', age: 30, theme: 'dark', language: 'en', notifications: true }

// Creating copies
const original = { a: 1, b: 2, c: 3 };
const copy = { ...original };
const copyWithChanges = { ...original, b: 5, d: 4 };

console.log(copy); // { a: 1, b: 2, c: 3 }
console.log(copyWithChanges); // { a: 1, b: 5, c: 3, d: 4 }

// Shallow copy vs deep copy
const nested = { a: 1, b: { c: 2 } };
const shallowCopy = { ...nested };
shallowCopy.b.c = 3;
console.log(nested.b.c); // 3 (original is modified!)

// Deep copy (using JSON - limited)
const deepCopy = JSON.parse(JSON.stringify(nested));
deepCopy.b.c = 4;
console.log(nested.b.c); // 3 (original unchanged)`}</code></pre>
              </div>
            </div>

            <div className="card" id="object-methods-properties">
              <h2>Object Methods and Properties</h2>
              
              <div className="code-example">
                <h3>Object.keys(), values(), entries()</h3>
                <p className="explanation">
                  These static methods provide convenient ways to work with object properties. Object.keys() returns property names, Object.values() returns property values, and Object.entries() returns key-value pairs as arrays. These methods are essential for iterating over objects and converting them to arrays for further processing.
                </p>
                <pre><code>{`const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Object.keys() - returns array of property names
const keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'city']

// Object.values() - returns array of property values
const values = Object.values(person);
console.log(values); // ['John', 30, 'New York']

// Object.entries() - returns array of [key, value] pairs
const entries = Object.entries(person);
console.log(entries); // [['name', 'John'], ['age', 30], ['city', 'New York']]

// Practical usage
entries.forEach(([key, value]) => {
  console.log(\`\${key}: \${value}\`);
});

// Converting back to object
const newPerson = Object.fromEntries(entries);
console.log(newPerson); // { name: 'John', age: 30, city: 'New York' }`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Object.assign() and Freezing</h3>
                <p className="explanation">
                  Object.assign() copies properties from source objects to a target object, while Object.freeze(), Object.seal(), and Object.preventExtensions() provide different levels of object immutability. These methods are useful for creating immutable objects and preventing accidental modifications, which is important for maintaining data integrity.
                </p>
                <pre><code>{`// Object.assign() - copies properties from source to target
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target); // { a: 1, b: 2, c: 3 }

// Object.freeze() - makes object immutable
const frozen = Object.freeze({ name: 'John', age: 30 });

// frozen.name = 'Jane'; // TypeError in strict mode
// frozen.newProp = 'value'; // TypeError in strict mode

console.log(Object.isFrozen(frozen)); // true

// Object.seal() - prevents adding/removing properties but allows modification
const sealed = Object.seal({ name: 'John', age: 30 });
sealed.age = 31; // ✅ Allowed
// sealed.newProp = 'value'; // ❌ Not allowed

console.log(Object.isSealed(sealed)); // true

// Object.preventExtensions() - prevents adding new properties
const extensible = { name: 'John' };
Object.preventExtensions(extensible);
extensible.name = 'Jane'; // ✅ Allowed
// extensible.age = 30; // ❌ Not allowed

console.log(Object.isExtensible(extensible)); // false`}</code></pre>
              </div>
            </div>

            <div className="card" id="best-practices">
              <h2>Best Practices</h2>
              <ul className="best-practices">
                <li><strong>Use object literals for simple objects</strong> - Cleaner syntax than constructors</li>
                <li><strong>Prefer ES6 classes over constructor functions</strong> - More readable and maintainable</li>
                <li><strong>Use Object.create() for prototypal inheritance</strong> - More explicit than constructor functions</li>
                <li><strong>Leverage destructuring for clean code</strong> - Reduces repetition and improves readability</li>
                <li><strong>Use spread operator for object copying</strong> - More readable than Object.assign()</li>
                <li><strong>Understand shallow vs deep copying</strong> - Use appropriate method for your use case</li>
                <li><strong>Use Object.freeze() for immutable objects</strong> - Prevents accidental modifications</li>
                <li><strong>Prefer composition over inheritance</strong> - More flexible and maintainable</li>
                <li><strong>Use meaningful property names</strong> - Makes code self-documenting</li>
                <li><strong>Consider using TypeScript for large projects</strong> - Provides better type safety</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ObjectsPrototypes; 