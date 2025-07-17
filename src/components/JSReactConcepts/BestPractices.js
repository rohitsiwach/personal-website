import React from 'react';
import { Link } from 'react-router-dom';
import './BestPractices.css';

function BestPractices() {
  const sections = [
    {
      title: 'Code Organization & Structure',
      icon: '🎯',
      categories: [
        {
          title: 'Component Design',
          items: [
            'Single responsibility principle',
            'Component composition patterns',
            'Prop types and validation',
            'Default props and fallbacks'
          ]
        },
        {
          title: 'State Management',
          items: [
            'Local vs global state',
            'State normalization',
            'Immutable update patterns',
            'State persistence strategies'
          ]
        },
        {
          title: 'Error Handling',
          items: [
            'Error boundaries',
            'Try-catch in async operations',
            'User-friendly error messages',
            'Error logging and monitoring'
          ]
        }
      ]
    },
    {
      title: 'Performance & Optimization',
      icon: '🚀',
      categories: [
        {
          title: 'Rendering Optimization',
          items: [
            'Preventing unnecessary re-renders',
            'React DevTools Profiler',
            'Bundle size optimization',
            'Tree shaking and dead code elimination'
          ]
        },
        {
          title: 'Data Fetching',
          items: [
            'API integration patterns',
            'Caching strategies',
            'Loading and error states',
            'Real-time data updates'
          ]
        },
        {
          title: 'Testing Strategies',
          items: [
            'Unit testing with Jest',
            'Component testing with React Testing Library',
            'Integration testing',
            'E2E testing with Cypress'
          ]
        }
      ]
    }
  ];

  return (
    <div>
      <div className="section-header">
        <h2>Best Practices & Patterns</h2>
        <p>Essential patterns and practices for building maintainable React applications.</p>
      </div>

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="card section-card">
          <h3>
            <span style={{ marginRight: '0.5rem' }}>{section.icon}</span>
            {section.title}
          </h3>
          <div className="section-grid">
            {section.categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="category-item">
                <h4>{category.title}</h4>
                <ul>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BestPractices; 