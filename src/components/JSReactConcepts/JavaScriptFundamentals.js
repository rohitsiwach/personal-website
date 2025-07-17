import React from 'react';
import { Link } from 'react-router-dom';
import './JavaScriptFundamentals.css';

function JavaScriptFundamentals() {
  const sections = [
    {
      title: 'Core JavaScript Concepts',
      icon: '🔧',
      categories: [
        {
          title: 'Variables & Scope',
          items: [
            { text: 'let, const, var differences', anchor: '#variable-declarations' },
            { text: 'Block scope vs function scope', anchor: '#scope-types' },
            { text: 'Hoisting and temporal dead zone', anchor: '#hoisting-temporal-dead-zone' },
            { text: 'Closures and lexical scoping', anchor: '#closures-lexical-scoping' }
          ],
          path: '/js-react-concepts/variables-scope'
        },
        {
          title: 'Functions & Execution',
          items: [
            { text: 'Function declarations vs expressions', anchor: '#function-declarations-expressions' },
            { text: 'Arrow functions and this binding', anchor: '#arrow-functions' },
            { text: 'Higher-order functions', anchor: '#higher-order-functions' },
            { text: 'Call, apply, and bind methods', anchor: '#call-apply-bind' }
          ],
          path: '/js-react-concepts/functions-execution'
        },
        {
          title: 'Objects & Prototypes',
          items: [
            { text: 'Object literals and constructors', anchor: '#object-literals-constructors' },
            { text: 'Prototypal inheritance', anchor: '#prototypal-inheritance' },
            { text: 'ES6 classes and inheritance', anchor: '#es6-classes-inheritance' },
            { text: 'Object destructuring and spread', anchor: '#object-destructuring-spread' }
          ],
          path: '/js-react-concepts/objects-prototypes'
        }
      ]
    },
    {
      title: 'Modern JavaScript Features',
      icon: '⚡',
      categories: [
        {
          title: 'ES6+ Features',
          items: [
            { text: 'Template literals and string interpolation', anchor: '#template-literals' },
            { text: 'Destructuring assignment', anchor: '#destructuring-assignment' },
            { text: 'Default parameters and rest/spread', anchor: '#spread-rest-operators' },
            { text: 'Modules (import/export)', anchor: '#modules-import-export' }
          ],
          path: '/js-react-concepts/es6-features'
        },
        {
          title: 'Async Programming',
          items: [
            { text: 'Promises and promise chaining', anchor: '#promises' },
            { text: 'Async/await syntax', anchor: '#async-await' },
            { text: 'Error handling with try/catch', anchor: '#async-await' },
            { text: 'Promise.all() and Promise.race()', anchor: '#promise-methods' }
          ],
          path: '/js-react-concepts/async-programming'
        },
        {
          title: 'Functional Programming',
          items: [
            { text: 'Pure functions and side effects', anchor: '#pure-functions' },
            { text: 'Array methods (map, filter, reduce)', anchor: '#array-methods' },
            { text: 'Immutability and object freezing', anchor: '#immutability' },
            { text: 'Composition over inheritance', anchor: '#higher-order-functions' }
          ],
          path: '/js-react-concepts/functional-programming'
        }
      ]
    }
  ];

  return (
    <div>
      <div className="section-header">
        <h2>JavaScript Fundamentals</h2>
        <p>Essential JavaScript concepts that every developer should know.</p>
      </div>

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="card section-card">
          <h3>
            <span style={{ marginRight: '0.5rem' }}>{section.icon}</span>
            {section.title}
          </h3>
          <div className="section-grid">
            {section.categories.map((category, categoryIndex) => (
              <Link 
                key={categoryIndex} 
                to={category.path}
                className="category-item-link"
              >
                <div className="category-item">
                  <h4>{category.title}</h4>
                  <ul>
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {typeof item === 'string' ? (
                          item
                        ) : (
                          <Link to={`${category.path}${item.anchor}`} className="item-link">
                            {item.text}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default JavaScriptFundamentals; 