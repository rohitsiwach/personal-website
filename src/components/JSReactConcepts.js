import React, { useState, useEffect } from 'react';
import JavaScriptFundamentals from './JSReactConcepts/JavaScriptFundamentals';
import ReactFundamentals from './JSReactConcepts/ReactFundamentals';
import BestPractices from './JSReactConcepts/BestPractices';
import './JSReactConcepts.css';

function JSReactConcepts() {
  // Initialize activeTab from localStorage or default to 'javascript'
  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem('jsReactConceptsActiveTab');
    return savedTab || 'javascript';
  });

  // Save activeTab to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('jsReactConceptsActiveTab', activeTab);
  }, [activeTab]);

  const tabs = [
    { 
      id: 'javascript', 
      label: 'JavaScript Fundamentals', 
      shortLabel: 'JS Fundamentals',
      icon: '🔧' 
    },
    { 
      id: 'react', 
      label: 'React Fundamentals', 
      shortLabel: 'React',
      icon: '⚛️' 
    },
    { 
      id: 'best-practices', 
      label: 'Best Practices', 
      shortLabel: 'Best Practices',
      icon: '🎯' 
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'javascript':
        return <JavaScriptFundamentals />;
      case 'react':
        return <ReactFundamentals />;
      case 'best-practices':
        return <BestPractices />;
      default:
        return <JavaScriptFundamentals />;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>📚 JS & React Concepts</h1>
            <p>Essential JavaScript and React concepts that every developer should know.</p>
            <p>From fundamentals to advanced patterns, explore the core concepts that power modern web development.</p>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="section">
        <div className="container">
          {/* Modern Tab Navigation */}
          <div className="tab-navigation">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              >
                <span>{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
                <span className="tab-label-mobile">{tab.shortLabel}</span>
              </button>
            ))}
          </div>

          {/* Tab Content with Animation */}
          <div className="tab-content">
            {renderTabContent()}
          </div>
        </div>
      </section>
    </div>
  );
}

export default JSReactConcepts; 