import React from 'react';
import { Link } from 'react-router-dom';
import './ReactFundamentals.css';

function ReactFundamentals() {
  const sections = [
    {
      title: 'Core React Concepts',
      icon: '⚛️',
      categories: [
        {
          title: 'Components & JSX',
          items: [
            { text: 'Functional vs class components', anchor: '#function-components' },
            { text: 'JSX syntax and expressions', anchor: '#jsx-fundamentals' },
            { text: 'Component composition', anchor: '#function-components' },
            { text: 'Props and prop drilling', anchor: '#props-component-communication' }
          ],
          path: '/js-react-concepts/components-jsx'
        },
        {
          title: 'State & Lifecycle',
          items: [
            { text: 'useState hook and state updates', anchor: '#usestate-hook' },
            { text: 'useEffect and side effects', anchor: '#useeffect-hook' },
            { text: 'Component lifecycle methods', anchor: '#class-component-lifecycle' },
            { text: 'State immutability patterns', anchor: '#usestate-hook' }
          ],
          path: '/js-react-concepts/state-lifecycle'
        },
        {
          title: 'Event Handling',
          items: [
            { text: 'Synthetic events', anchor: '#synthetic-events' },
            { text: 'Event handlers and callbacks', anchor: '#event-handlers-callbacks' },
            { text: 'Preventing default behavior', anchor: '#preventing-default-behavior' },
            { text: 'Event delegation', anchor: '#event-delegation' }
          ],
          path: '/js-react-concepts/event-handling'
        }
      ]
    },
    {
      title: 'Advanced React Patterns',
      icon: '🔄',
      categories: [
        {
          title: 'Hooks & Custom Hooks',
          items: [
            { text: 'useState, useEffect, useContext', anchor: '#usestate-useeffect-usecontext' },
            { text: 'useReducer for complex state', anchor: '#usereducer-complex-state' },
            { text: 'Custom hooks and composition', anchor: '#custom-hooks-composition' },
            { text: 'Hook rules and dependencies', anchor: '#hook-rules-dependencies' }
          ],
          path: '/js-react-concepts/hooks-custom-hooks'
        },
        {
          title: 'Context & State Management',
          items: [
            { text: 'React Context API', anchor: '#react-context-api' },
            { text: 'State management patterns', anchor: '#state-management-patterns' },
            { text: 'Advanced state management', anchor: '#advanced-state-management' },
            { text: 'Best practices', anchor: '#best-practices' }
          ],
          path: '/js-react-concepts/context-state-management'
        },
        {
          title: 'Performance Optimization',
          items: [
            { text: 'Memoization: useMemo & useCallback', anchor: '#react-memoization' },
            { text: 'Component Memoization: React.memo', anchor: '#react-memo' },
            { text: 'List Virtualization', anchor: '#list-virtualization' },
            { text: 'Code Splitting & Lazy Loading', anchor: '#code-splitting' }
          ],
          path: '/js-react-concepts/performance-optimization'
        }
      ]
    }
  ];

  return (
    <div>
      <div className="section-header">
        <h2>React Fundamentals</h2>
        <p>Core React concepts and patterns for building modern web applications.</p>
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

export default ReactFundamentals; 