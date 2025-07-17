import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Homepage from './components/Homepage';
import EducationCareer from './components/EducationCareer';
import Gallery from './components/Gallery';
import IdeasProjects from './components/IdeasProjects';
import Contact from './components/Contact';
import JSReactConcepts from './components/JSReactConcepts';
// Import detail pages
import VariablesScope from './components/JSReactConcepts/DetailPages/VariablesScope';
import FunctionsExecution from './components/JSReactConcepts/DetailPages/FunctionsExecution';
import ObjectsPrototypes from './components/JSReactConcepts/DetailPages/ObjectsPrototypes';
import ES6Features from './components/JSReactConcepts/DetailPages/ES6Features';
import AsyncProgramming from './components/JSReactConcepts/DetailPages/AsyncProgramming';
import FunctionalProgramming from './components/JSReactConcepts/DetailPages/FunctionalProgramming';
import ComponentsJSX from './components/JSReactConcepts/DetailPages/ComponentsJSX';
import StateLifecycle from './components/JSReactConcepts/DetailPages/StateLifecycle';
import EventHandling from './components/JSReactConcepts/DetailPages/EventHandling';
import HooksCustomHooks from './components/JSReactConcepts/DetailPages/HooksCustomHooks';
import ContextStateManagement from './components/JSReactConcepts/DetailPages/ContextStateManagement';
import PerformanceOptimization from './components/JSReactConcepts/DetailPages/PerformanceOptimization';
import './App.css';

function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
            My Portfolio
          </Link>
          <ul className="navbar-nav">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/education-career" 
                className={`nav-link ${location.pathname === '/education-career' ? 'active' : ''}`}
              >
                Education & Career
              </Link>
            </li>
            <li>
              <Link 
                to="/js-react-concepts" 
                className={`nav-link ${location.pathname.startsWith('/js-react-concepts') ? 'active' : ''}`}
              >
                JS & React Concepts
              </Link>
            </li>
            <li>
              <Link 
                to="/ideas-projects" 
                className={`nav-link ${location.pathname === '/ideas-projects' ? 'active' : ''}`}
              >
                Ideas & Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/gallery" 
                className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
          
          <div className="burger-menu" onClick={toggleMobileMenu}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMobileMenu}>
          ✕
        </button>
        <ul className="mobile-nav">
          <li>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/education-career" 
              className={`nav-link ${location.pathname === '/education-career' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Education & Career
            </Link>
          </li>
          <li>
            <Link 
              to="/js-react-concepts" 
              className={`nav-link ${location.pathname.startsWith('/js-react-concepts') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              JS & React Concepts
            </Link>
          </li>
          <li>
            <Link 
              to="/ideas-projects" 
              className={`nav-link ${location.pathname === '/ideas-projects' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Ideas & Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/gallery" 
              className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/personal-website" element={<Homepage />} />
          <Route path="/education-career" element={<EducationCareer />} />
          <Route path="/js-react-concepts" element={<JSReactConcepts />} />
          {/* Detail page routes */}
          <Route path="/js-react-concepts/variables-scope" element={<VariablesScope />} />
          <Route path="/js-react-concepts/functions-execution" element={<FunctionsExecution />} />
          <Route path="/js-react-concepts/objects-prototypes" element={<ObjectsPrototypes />} />
          <Route path="/js-react-concepts/es6-features" element={<ES6Features />} />
          <Route path="/js-react-concepts/async-programming" element={<AsyncProgramming />} />
          <Route path="/js-react-concepts/functional-programming" element={<FunctionalProgramming />} />
          <Route path="/js-react-concepts/components-jsx" element={<ComponentsJSX />} />
          <Route path="/js-react-concepts/state-lifecycle" element={<StateLifecycle />} />
          <Route path="/js-react-concepts/event-handling" element={<EventHandling />} />
          <Route path="/js-react-concepts/hooks-custom-hooks" element={<HooksCustomHooks />} />
          <Route path="/js-react-concepts/context-state-management" element={<ContextStateManagement />} />
          <Route path="/js-react-concepts/performance-optimization" element={<PerformanceOptimization />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/ideas-projects" element={<IdeasProjects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 My Personal Portfolio. All rights reserved. | <Link to="/contact" className="nav-link" style={{ color: '#ffd700', textDecoration: 'underline' }}>Contact</Link></p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App; 