import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PDFDownload from './PDFDownload';
import './DetailPages.css';

const ContextStateManagement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
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
            <h1>🔄 Context & State Management</h1>
            <p>Master React's Context API and state management patterns for building scalable applications.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
              <Link to="/js-react-concepts" className="back-link">
                ← Back to JS & React Concepts
              </Link>
              <PDFDownload pageTitle="Context & State Management" />
            </div>
          </div>
        </div>
      </section>
      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="detail-content">
            {/* ... keep only the rendered JSX for the educational content ... */}
            {/* Remove any actual function definitions or code blocks that are not JSX for display */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContextStateManagement; 