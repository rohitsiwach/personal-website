import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PDFDownload from './PDFDownload';
import './DetailPages.css';

const EventHandling = () => {
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
            <h1>🎯 Event Handling in JavaScript & React</h1>
            <p>Master the art of handling user interactions and events in both vanilla JavaScript and React applications.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
              <Link to="/js-react-concepts" className="back-link">
                ← Back to JS & React Concepts
              </Link>
              <PDFDownload pageTitle="Event Handling in JavaScript & React" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="detail-content">
            <div className="card" id="preventing-default-behavior">
              <h2>DOM Events in JavaScript</h2>
              <p>DOM events are actions or occurrences that happen in the browser, such as clicks, key presses, form submissions, and more. Understanding how to handle these events is crucial for creating interactive web applications.</p>
              
              <div className="code-example">
                <h3>Basic Event Handling</h3>
                <p>Learn how to attach event listeners to DOM elements and handle user interactions.</p>
                <pre><code>{`// HTML: <button id="myButton">Click me</button>

// JavaScript
const button = document.getElementById('myButton');

// Method 1: Using addEventListener (recommended)
button.addEventListener('click', function(event) {
  console.log('Button clicked!');
  console.log('Event object:', event);
  console.log('Target element:', event.target);
});

// Method 2: Using onclick (not recommended)
button.onclick = function(event) {
  console.log('Button clicked via onclick!');
};

// Method 3: Inline HTML (avoid this)
// <button onclick="handleClick()">Click me</button>`}</code></pre>
                <div className="explanation">
                  <p><strong>Explanation:</strong> This example shows three different ways to handle click events. The <code>addEventListener</code> method is the most flexible and recommended approach as it allows multiple event handlers and provides better control over event handling. The event object contains information about the event, including the target element that triggered it.</p>
                </div>
              </div>

              <div className="code-example">
                <h3>Event Object Properties</h3>
                <p>Explore the properties and methods available on the event object to understand what happened.</p>
                <pre><code>{`document.addEventListener('click', function(event) {
  console.log('Event type:', event.type);           // 'click'
  console.log('Target element:', event.target);     // The element that was clicked
  console.log('Current target:', event.currentTarget); // The element with the listener
  console.log('Mouse position:', event.clientX, event.clientY); // Mouse coordinates
  console.log('Prevented default:', event.defaultPrevented); // Whether preventDefault() was called
  console.log('Event phase:', event.eventPhase);    // 1=capture, 2=target, 3=bubble
});

// Prevent default behavior
document.querySelector('a').addEventListener('click', function(event) {
  event.preventDefault(); // Prevents navigation
  console.log('Link click prevented');
});

// Stop event propagation
document.querySelector('.parent').addEventListener('click', function(event) {
  console.log('Parent clicked');
  event.stopPropagation(); // Prevents bubbling to parent elements
});`}</code></pre>
                <div className="explanation">
                  <p><strong>Explanation:</strong> The event object provides rich information about the event. <code>preventDefault()</code> stops the default browser behavior (like form submission or link navigation), while <code>stopPropagation()</code> prevents the event from bubbling up to parent elements. Understanding these methods is crucial for controlling event flow in complex applications.</p>
                </div>
              </div>
            </div>

            <div className="card" id="event-handlers-callbacks">
              <h2>Common Event Types</h2>
              <p>JavaScript supports many different types of events. Here are the most commonly used ones:</p>
              
              <div className="code-example">
                <h3>Mouse Events</h3>
                <p>Handle mouse interactions like clicks, hovers, and movements.</p>
                <pre><code>{`const element = document.querySelector('.interactive');

// Mouse events
element.addEventListener('click', handleClick);
element.addEventListener('dblclick', handleDoubleClick);
element.addEventListener('mousedown', handleMouseDown);
element.addEventListener('mouseup', handleMouseUp);
element.addEventListener('mouseenter', handleMouseEnter);
element.addEventListener('mouseleave', handleMouseLeave);
element.addEventListener('mousemove', handleMouseMove);
element.addEventListener('mouseover', handleMouseOver);
element.addEventListener('mouseout', handleMouseOut);

function handleClick(event) {
  console.log('Single click at:', event.clientX, event.clientY);
}

function handleDoubleClick(event) {
  console.log('Double click detected!');
}

function handleMouseEnter(event) {
  event.target.style.backgroundColor = '#e0e0e0';
}

function handleMouseLeave(event) {
  event.target.style.backgroundColor = '';
}`}</code></pre>
                <div className="explanation">
                  <p><strong>Explanation:</strong> Mouse events allow you to respond to various mouse interactions. <code>mouseenter</code> and <code>mouseleave</code> are useful for hover effects, while <code>mousedown</code> and <code>mouseup</code> give you fine-grained control over mouse button states. The <code>clientX</code> and <code>clientY</code> properties provide the mouse coordinates relative to the viewport.</p>
                </div>
              </div>

              <div className="code-example">
                <h3>Keyboard Events</h3>
                <p>Handle keyboard input and key combinations.</p>
                <pre><code>{`document.addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key);
  console.log('Key code:', event.code);
  console.log('Modifier keys:', {
    ctrl: event.ctrlKey,
    shift: event.shiftKey,
    alt: event.altKey,
    meta: event.metaKey
  });
  
  // Handle specific keys
  if (event.key === 'Enter') {
    console.log('Enter key pressed');
  }
  
  // Handle key combinations
  if (event.ctrlKey && event.key === 's') {
    event.preventDefault();
    console.log('Save shortcut pressed');
  }
});

document.addEventListener('keyup', function(event) {
  console.log('Key released:', event.key);
});

document.addEventListener('keypress', function(event) {
  // Only fires for keys that produce a character
  console.log('Character typed:', event.key);
});`}</code></pre>
                <div className="explanation">
                  <p><strong>Explanation:</strong> Keyboard events help you create keyboard shortcuts and handle text input. <code>keydown</code> fires when a key is pressed down, <code>keyup</code> when released, and <code>keypress</code> only for keys that produce characters. The <code>key</code> property gives you the actual character, while <code>code</code> provides the physical key location. Modifier key properties let you detect combinations like Ctrl+S.</p>
                </div>
              </div>

              <div className="code-example">
                <h3>Form Events</h3>
                <p>Handle form interactions and validation.</p>
                <pre><code>{`const form = document.querySelector('form');
const input = document.querySelector('input');

// Form events
form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submitted');
  
  // Validate form data
  const formData = new FormData(form);
  const email = formData.get('email');
  
  if (!email.includes('@')) {
    alert('Please enter a valid email');
    return;
  }
  
  // Submit form data
  console.log('Form data:', Object.fromEntries(formData));
});

// Input events
input.addEventListener('input', function(event) {
  console.log('Input value changed:', event.target.value);
});

input.addEventListener('change', function(event) {
  console.log('Input value finalized:', event.target.value);
});

input.addEventListener('focus', function(event) {
  event.target.style.borderColor = '#007bff';
});

input.addEventListener('blur', function(event) {
  event.target.style.borderColor = '';
  
  // Validate on blur
  if (!event.target.value) {
    event.target.style.borderColor = 'red';
  }
});`}</code></pre>
                <div className="explanation">
                  <p><strong>Explanation:</strong> Form events are essential for handling user input and form validation. <code>submit</code> fires when the form is submitted, <code>input</code> fires on every keystroke, and <code>change</code> fires when the input loses focus and the value has changed. <code>focus</code> and <code>blur</code> events are useful for styling and validation feedback.</p>
                </div>
              </div>
            </div>

            <div className="card" id="event-delegation">
              <h2>Event Delegation</h2>
              <p>Event delegation is a technique where you attach an event listener to a parent element to handle events from child elements, even those added dynamically.</p>
              
              <div className="code-example">
                <h3>Basic Event Delegation</h3>
                <p>Use event delegation to handle events from multiple child elements efficiently.</p>
                <pre><code>{`// HTML structure
// <div id="container">
//   <button class="btn">Button 1</button>
//   <button class="btn">Button 2</button>
//   <button class="btn">Button 3</button>
// </div>

const container = document.getElementById('container');

// Instead of adding listeners to each button
container.addEventListener('click', function(event) {
  // Check if the clicked element is a button
  if (event.target.classList.contains('btn')) {
    console.log('Button clicked:', event.target.textContent);
    event.target.style.backgroundColor = '#007bff';
  }
});

// Add new buttons dynamically
function addNewButton() {
  const newButton = document.createElement('button');
  newButton.className = 'btn';
  newButton.textContent = 'New Button';
  container.appendChild(newButton);
  // No need to add event listener - delegation handles it!
}

// Add a new button every 2 seconds
setInterval(addNewButton, 2000);`}</code></pre>
                <div className="explanation">
                  <p><strong>Explanation:</strong> Event delegation works by leveraging event bubbling. When a child element is clicked, the event bubbles up to the parent. By checking <code>event.target</code>, you can determine which specific child element was clicked. This approach is more efficient than adding listeners to each child element and works with dynamically added elements.</p>
                </div>
              </div>

              <div className="code-example">
                <h3>Advanced Event Delegation</h3>
                <p>Handle different types of elements and actions with a single delegated listener.</p>
                <pre><code>{`// HTML structure with different elements
// <div id="app">
//   <button data-action="delete" data-id="1">Delete Item 1</button>
//   <button data-action="edit" data-id="1">Edit Item 1</button>
//   <a href="#" data-action="view" data-id="1">View Item 1</a>
//   <span data-action="toggle" data-id="1">Toggle Item 1</span>
// </div>

const app = document.getElementById('app');

app.addEventListener('click', function(event) {
  const action = event.target.dataset.action;
  const id = event.target.dataset.id;
  
  if (!action || !id) return;
  
  switch (action) {
    case 'delete':
      event.preventDefault();
      deleteItem(id);
      break;
    case 'edit':
      event.preventDefault();
      editItem(id);
      break;
    case 'view':
      viewItem(id);
      break;
    case 'toggle':
      event.preventDefault();
      toggleItem(id);
      break;
  }
});

function deleteItem(id) {
  console.log('Deleting item:', id);
  // API call or DOM manipulation
}

function editItem(id) {
  console.log('Editing item:', id);
  // Open edit form
}

function viewItem(id) {
  console.log('Viewing item:', id);
  // Navigate to item page
}

function toggleItem(id) {
  console.log('Toggling item:', id);
  // Toggle visibility or state
}`}</code></pre>
                <div className="explanation">
                  <p><strong>Explanation:</strong> This advanced example shows how to handle multiple different actions using data attributes. The <code>dataset</code> property provides access to custom data attributes. This pattern is very useful for building interactive interfaces where you have many similar elements that perform different actions based on their data attributes.</p>
                </div>
              </div>
            </div>

            <div className="card" id="synthetic-events">
              <h2>Event Handling in React</h2>
              <p>React provides a cross-browser wrapper around native DOM events called Synthetic Events, which work consistently across all browsers.</p>
              
              <div className="code-example">
                <h3>Basic React Event Handling</h3>
                <p>Handle events in React components using camelCase event names and function handlers.</p>
                <pre><code>{`import React, { useState } from 'react';

function EventExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Event handler functions
  const handleClick = (event) => {
    console.log('Button clicked!');
    console.log('Event object:', event);
    setCount(prev => prev + 1);
  };

  const handleInputChange = (event) => {
    console.log('Input changed:', event.target.value);
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with text:', text);
  };

  const handleMouseEnter = (event) => {
    event.target.style.backgroundColor = '#e0e0e0';
  };

  const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = '';
  };

  return (
    <div>
      <h3>Event Handling Examples</h3>
      
      {/* Click event */}
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
      
      {/* Form events */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          onFocus={() => console.log('Input focused')}
          onBlur={() => console.log('Input blurred')}
          placeholder="Type something..."
        />
        <button type="submit">Submit</button>
      </form>
      
      {/* Mouse events */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          cursor: 'pointer'
        }}
      >
        Hover over me
      </div>
    </div>
  );
}`}</code></pre>
                <div className="explanation">
                  <p><strong>Explanation:</strong> React events use camelCase naming (e.g., <code>onClick</code> instead of <code>onclick</code>) and are passed as props to JSX elements. Event handlers receive a SyntheticEvent object that wraps the native DOM event. React automatically handles event pooling and cleanup, making event handling more efficient and consistent across browsers.</p>
                </div>
              </div>

              <div className="code-example">
                <h3>Event Handler with Parameters</h3>
                <p>Pass additional parameters to event handlers using arrow functions or bind.</p>
                <pre><code>{`import React, { useState } from 'react';

function EventWithParams() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]);

  // Method 1: Arrow function in JSX
  const handleDelete = (id) => {
    console.log('Deleting item:', id);
    setItems(prev => prev.filter(item => item.id !== id));
  };

  // Method 2: Using bind (less common)
  const handleEdit = function(id, event) {
    console.log('Editing item:', id);
    console.log('Event:', event);
  };

  // Method 3: Inline arrow function
  const handleSelect = (id, isSelected) => {
    console.log('Item', id, 'selected:', isSelected);
  };

  return (
    <div>
      <h3>Event Handlers with Parameters</h3>
      
      {items.map(item => (
        <div key={item.id} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}>
          <span>{item.name}</span>
          
          {/* Method 1: Arrow function */}
          <button onClick={() => handleDelete(item.id)}>
            Delete
          </button>
          
          {/* Method 2: Using bind */}
          <button onClick={handleEdit.bind(null, item.id)}>
            Edit
          </button>
          
          {/* Method 3: Inline with multiple parameters */}
          <button onClick={() => handleSelect(item.id, true)}>
            Select
          </button>
        </div>
      ))}
    </div>
  );
}`}</code></pre>
                <div className="explanation">
                  <p><strong>Explanation:</strong> When you need to pass parameters to event handlers, you can use arrow functions in JSX, the <code>bind</code> method, or inline arrow functions. Arrow functions are the most common and readable approach. The <code>bind</code> method is useful when you need to pass the event object along with other parameters.</p>
                </div>
              </div>

              <div className="code-example">
                <h3>Custom Hooks for Event Handling</h3>
                <p>Create reusable custom hooks to encapsulate event handling logic.</p>
                <pre><code>{`import React, { useState, useEffect, useCallback } from 'react';

// Custom hook for keyboard events
function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = useCallback(({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }, [targetKey]);

  const upHandler = useCallback(({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  }, [targetKey]);

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [downHandler, upHandler]);

  return keyPressed;
}

// Custom hook for click outside
function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

// Component using custom hooks
function CustomHooksExample() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = React.useRef();
  
  const enterPressed = useKeyPress('Enter');
  const escapePressed = useKeyPress('Escape');

  useClickOutside(modalRef, () => setIsOpen(false));

  useEffect(() => {
    if (enterPressed) {
      console.log('Enter key pressed!');
    }
  }, [enterPressed]);

  useEffect(() => {
    if (escapePressed) {
      setIsOpen(false);
    }
  }, [escapePressed]);

  return (
    <div>
      <h3>Custom Event Hooks</h3>
      
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      
      {isOpen && (
        <div
          ref={modalRef}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            border: '1px solid #ccc',
            backgroundColor: 'white',
            zIndex: 1000
          }}
        >
          <h4>Modal Content</h4>
          <p>Press Escape to close or click outside</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
      
      <p>Enter pressed: {enterPressed ? 'Yes' : 'No'}</p>
      <p>Escape pressed: {escapePressed ? 'Yes' : 'No'}</p>
    </div>
  );
}`}</code></pre>
                <div className="explanation">
                  <p><strong>Explanation:</strong> Custom hooks allow you to extract and reuse event handling logic across components. The <code>useKeyPress</code> hook monitors specific key presses, while <code>useClickOutside</code> detects clicks outside a specified element. These patterns are very useful for building interactive components like modals, dropdowns, and keyboard shortcuts.</p>
                </div>
              </div>
            </div>

            <div className="card" id="best-practices">
              <h2>Event Handling Best Practices</h2>
              <p>Follow these best practices to write clean, efficient, and maintainable event handling code.</p>
              
              <div className="code-example">
                <h3>Performance Optimization</h3>
                <p>Optimize event handling for better performance in React applications.</p>
                <pre><code>{`import React, { useState, useCallback, useMemo } from 'react';

function OptimizedEventHandling() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // Memoize event handlers to prevent unnecessary re-renders
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const handleItemClick = useCallback((id) => {
    console.log('Item clicked:', id);
  }, []);

  // Memoize expensive computations
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);

  // Debounced event handler
  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      console.log('Searching for:', searchTerm);
      // API call here
    }, 300),
    []
  );

  const handleSearchChange = (event) => {
    debouncedSearch(event.target.value);
  };

  return (
    <div>
      <h3>Optimized Event Handling</h3>
      
      <button onClick={handleClick}>
        Count: {count}
      </button>
      
      <input
        type="text"
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      
      <div>
        {items.map(item => (
          <div
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            style={{ cursor: 'pointer', padding: '5px' }}
          >
            {item.name}
          </div>
        ))}
      </div>
      
      <p>Expensive value: {expensiveValue}</p>
    </div>
  );
}

// Debounce utility function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}`}</code></pre>
                <div className="explanation">
                  <p><strong>Explanation:</strong> Performance optimization in event handling involves memoizing event handlers with <code>useCallback</code> to prevent unnecessary re-renders, using <code>useMemo</code> for expensive computations, and implementing debouncing for frequent events like search input. These techniques help maintain smooth user experience in complex applications.</p>
                </div>
              </div>

              <div className="code-example">
                <h3>Error Handling and Cleanup</h3>
                <p>Implement proper error handling and cleanup for event listeners.</p>
                <pre><code>{`import React, { useEffect, useRef } from 'react';

function EventCleanupExample() {
  const buttonRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    
    const handleClick = (event) => {
      try {
        console.log('Button clicked');
        
        // Simulate async operation
        timeoutRef.current = setTimeout(() => {
          console.log('Async operation completed');
        }, 1000);
        
      } catch (error) {
        console.error('Error in click handler:', error);
        // Handle error gracefully
      }
    };

    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleClick(event);
      }
    };

    // Add event listeners
    if (button) {
      button.addEventListener('click', handleClick);
      button.addEventListener('keypress', handleKeyPress);
    }

    // Cleanup function
    return () => {
      if (button) {
        button.removeEventListener('click', handleClick);
        button.removeEventListener('keypress', handleKeyPress);
      }
      
      // Clear any pending timeouts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h3>Event Cleanup Example</h3>
      <button ref={buttonRef}>
        Click me (with cleanup)
      </button>
    </div>
  );
}

// Custom hook for safe event handling
function useSafeEventHandler(handler) {
  return useCallback((...args) => {
    try {
      handler(...args);
    } catch (error) {
      console.error('Event handler error:', error);
      // Log to error reporting service
      // Show user-friendly error message
    }
  }, [handler]);}`}</code></pre>
                <div className="explanation">
                  <p><strong>Explanation:</strong> Proper cleanup is essential to prevent memory leaks and unexpected behavior. Always remove event listeners in cleanup functions, clear timeouts and intervals, and handle errors gracefully. The <code>useSafeEventHandler</code> custom hook provides a wrapper for error handling that can be reused across components.</p>
                </div>
              </div>

              <div className="code-example">
                <h3>Accessibility in Event Handling</h3>
                <p>Ensure your event handling is accessible to all users, including those using assistive technologies.</p>
                <pre><code>{`import React, { useState } from 'react';

function AccessibleEventHandling() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        setIsOpen(!isOpen);
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      case 'ArrowDown':
        event.preventDefault();
        setActiveIndex(prev => Math.min(prev + 1, 2));
        break;
      case 'ArrowUp':
        event.preventDefault();
        setActiveIndex(prev => Math.max(prev - 1, 0));
        break;
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h3>Accessible Event Handling</h3>
      
      {/* Accessible button with keyboard support */}
      <button
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      
      {isOpen && (
        <ul
          id="dropdown-menu"
          role="menu"
          aria-label="Options menu"
        >
          {['Option 1', 'Option 2', 'Option 3'].map((option, index) => (
            <li
              key={index}
              role="menuitem"
              tabIndex={activeIndex === index ? 0 : -1}
              aria-selected={activeIndex === index}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  console.log('Selected:', option);
                  setIsOpen(false);
                }
              }}
              onClick={() => {
                console.log('Selected:', option);
                setIsOpen(false);
              }}
              style={{
                backgroundColor: activeIndex === index ? '#e0e0e0' : 'transparent',
                padding: '10px',
                cursor: 'pointer'
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      
      {/* Focus management */}
      <div>
        <button
          onFocus={() => console.log('Button focused')}
          onBlur={() => console.log('Button blurred')}
        >
          Focusable Button
        </button>
      </div>
    </div>
  );
}`}</code></pre>
                <div className="explanation">
                  <p><strong>Explanation:</strong> Accessibility in event handling involves supporting keyboard navigation, providing proper ARIA attributes, managing focus, and ensuring screen readers can understand your interface. Always test your event handling with keyboard-only navigation and screen readers to ensure all users can interact with your application effectively.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventHandling; 