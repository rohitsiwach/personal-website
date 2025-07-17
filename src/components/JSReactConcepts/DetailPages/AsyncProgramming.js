import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './DetailPages.css';

function AsyncProgramming() {
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
            <h1>⏱️ Async Programming</h1>
            <p>Understanding asynchronous JavaScript with callbacks, promises, and async/await.</p>
            <Link to="/js-react-concepts" className="back-link">
              ← Back to JS & React Concepts
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="detail-content">
            <div className="card" id="callbacks-callback-hell">
              <h2>Callbacks and the Callback Hell</h2>
              
              <div className="code-example">
                <h3>Basic Callbacks</h3>
                <p className="explanation">
                  Callbacks are functions passed as arguments to other functions, executed when the main function completes. They're the foundation of asynchronous programming in JavaScript, but can lead to deeply nested code known as "callback hell" when chaining multiple async operations.
                </p>
                <pre><code>{`// Simple callback example
function fetchUser(id, callback) {
  setTimeout(() => {
    const user = { id, name: 'John Doe', email: 'john@example.com' };
    callback(null, user);
  }, 1000);
}

// Using the callback
fetchUser(1, (error, user) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('User:', user);
  }
});

// Callback with error handling
function fetchData(url, callback) {
  // Simulate API call
  setTimeout(() => {
    if (url === 'error') {
      callback(new Error('Failed to fetch data'), null);
    } else {
      callback(null, { data: 'Success!' });
    }
  }, 500);
}

fetchData('https://api.example.com/data', (error, data) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log('Data:', data);
  }
});`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Callback Hell Problem</h3>
                <p className="explanation">
                  When you need to chain multiple asynchronous operations, callbacks can create deeply nested code that's hard to read and maintain. This is known as "callback hell" or "pyramid of doom." Each nested callback makes the code more complex and harder to debug.
                </p>
                <pre><code>{`// Callback hell example
function getUser(id, callback) {
  setTimeout(() => callback(null, { id, name: 'John' }), 100);
}

function getUserPosts(userId, callback) {
  setTimeout(() => callback(null, [{ id: 1, title: 'Post 1' }]), 100);
}

function getPostComments(postId, callback) {
  setTimeout(() => callback(null, [{ id: 1, text: 'Great post!' }]), 100);
}

// Nested callbacks - hard to read and maintain
getUser(1, (error, user) => {
  if (error) {
    console.error('Error fetching user:', error);
  } else {
    console.log('User:', user);
    
    getUserPosts(user.id, (error, posts) => {
      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        console.log('Posts:', posts);
        
        getPostComments(posts[0].id, (error, comments) => {
          if (error) {
            console.error('Error fetching comments:', error);
          } else {
            console.log('Comments:', comments);
            // More nested operations would make this even worse
          }
        });
      }
    });
  }
});

// Error handling becomes repetitive and verbose
function processData(data, callback) {
  validateData(data, (error, validData) => {
    if (error) {
      callback(error);
    } else {
      transformData(validData, (error, transformedData) => {
        if (error) {
          callback(error);
        } else {
          saveData(transformedData, (error, result) => {
            if (error) {
              callback(error);
            } else {
              callback(null, result);
            }
          });
        }
      });
    }
  });
}`}</code></pre>
              </div>
            </div>

            <div className="card" id="promises">
              <h2>Promises</h2>
              
              <div className="code-example">
                <h3>Creating and Using Promises</h3>
                <p className="explanation">
                  Promises represent the eventual completion (or failure) of an asynchronous operation. They provide a cleaner way to handle async code compared to callbacks. A Promise can be in one of three states: pending, fulfilled, or rejected. Once settled, a Promise cannot change its state.
                </p>
                <pre><code>{`// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  // Simulate async operation
  setTimeout(() => {
    const random = Math.random();
    if (random > 0.5) {
      resolve('Success!');
    } else {
      reject(new Error('Failed!'));
    }
  }, 1000);
});

// Using .then() and .catch()
myPromise
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

// Promise constructor pattern
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: 'John Doe', email: 'john@example.com' });
      } else {
        reject(new Error('Invalid user ID'));
      }
    }, 1000);
  });
}

// Using the Promise
fetchUser(1)
  .then(user => {
    console.log('User:', user);
    return user.name; // Pass value to next .then()
  })
  .then(name => {
    console.log('Name:', name);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

// Promise.resolve() and Promise.reject()
const resolvedPromise = Promise.resolve('Immediate success');
const rejectedPromise = Promise.reject(new Error('Immediate failure'));

resolvedPromise.then(value => console.log(value)); // "Immediate success"
rejectedPromise.catch(error => console.error(error.message)); // "Immediate failure"`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Promise Chaining</h3>
                <p className="explanation">
                  Promise chaining allows you to execute multiple asynchronous operations in sequence. Each .then() returns a new Promise, enabling you to chain operations together. This eliminates callback hell and makes async code more readable and maintainable.
                </p>
                <pre><code>{`// Promise chaining example
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: 'John' }), 100);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ id: 1, title: 'Post 1' }]), 100);
  });
}

function fetchPostComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ id: 1, text: 'Great post!' }]), 100);
  });
}

// Clean promise chaining
fetchUser(1)
  .then(user => {
    console.log('User:', user);
    return fetchUserPosts(user.id); // Return next promise
  })
  .then(posts => {
    console.log('Posts:', posts);
    return fetchPostComments(posts[0].id); // Return next promise
  })
  .then(comments => {
    console.log('Comments:', comments);
  })
  .catch(error => {
    console.error('Error in chain:', error);
  });

// Error handling in chains
function processData(data) {
  return new Promise((resolve, reject) => {
    if (!data) {
      reject(new Error('No data provided'));
    } else {
      resolve(data.toUpperCase());
    }
  });
}

processData('hello')
  .then(result => {
    console.log('Processed:', result); // "HELLO"
    return processData(null); // This will reject
  })
  .then(result => {
    console.log('This won\'t run');
  })
  .catch(error => {
    console.error('Caught error:', error.message); // "No data provided"
  });

// Returning values in chains
fetchUser(1)
  .then(user => {
    return user.name; // Return a value
  })
  .then(name => {
    return \`Hello, \${name}!\`; // Return another value
  })
  .then(greeting => {
    console.log(greeting); // "Hello, John!"
  });`}</code></pre>
              </div>
            </div>

            <div className="card" id="async-await">
              <h2>Async/Await</h2>
              
              <div className="code-example">
                <h3>Basic Async/Await</h3>
                <p className="explanation">
                  Async/await is syntactic sugar over Promises that makes asynchronous code look and behave more like synchronous code. The 'async' keyword declares an asynchronous function, and 'await' pauses execution until a Promise resolves. This makes async code much more readable and easier to understand.
                </p>
                <pre><code>{`// Basic async function
async function fetchUser(id) {
  // Simulate API call
  const response = await new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: 'John Doe' }), 1000);
  });
  
  return response;
}

// Using async/await
async function getUser() {
  try {
    const user = await fetchUser(1);
    console.log('User:', user);
    return user;
  } catch (error) {
    console.error('Error:', error);
  }
}

getUser();

// Async function with error handling
async function fetchData(url) {
  const response = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'error') {
        reject(new Error('Failed to fetch'));
      } else {
        resolve({ data: 'Success!' });
      }
    }, 500);
  });
  
  return response;
}

async function processData() {
  try {
    const data = await fetchData('https://api.example.com');
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

processData();

// Async functions always return Promises
async function getGreeting(name) {
  return \`Hello, \${name}!\`;
}

// Even though we return a string, it's wrapped in a Promise
getGreeting('John').then(greeting => {
  console.log(greeting); // "Hello, John!"
});`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Async/Await with Multiple Operations</h3>
                <p className="explanation">
                  Async/await makes it easy to handle multiple asynchronous operations, both sequential and parallel. Sequential operations use multiple await statements, while parallel operations can use Promise.all() or Promise.race() for better performance.
                </p>
                <pre><code>{`// Sequential operations
async function getUserData(userId) {
  try {
    const user = await fetchUser(userId);
    console.log('User:', user);
    
    const posts = await fetchUserPosts(user.id);
    console.log('Posts:', posts);
    
    const comments = await fetchPostComments(posts[0].id);
    console.log('Comments:', comments);
    
    return { user, posts, comments };
  } catch (error) {
    console.error('Error:', error);
  }
}

// Parallel operations with Promise.all()
async function fetchAllData(userId) {
  try {
    const user = fetchUser(userId);
    const posts = fetchUserPosts(userId);
    const comments = fetchPostComments(1);
    
    // Wait for all promises to resolve
    const [userData, postsData, commentsData] = await Promise.all([
      user, posts, comments
    ]);
    
    console.log('All data:', { userData, postsData, commentsData });
    return { userData, postsData, commentsData };
  } catch (error) {
    console.error('Error:', error);
  }
}

// Promise.race() - returns the first resolved promise
async function fetchWithTimeout(url, timeout = 5000) {
  const fetchPromise = fetch(url);
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Request timeout')), timeout);
  });
  
  try {
    const response = await Promise.race([fetchPromise, timeoutPromise]);
    return response.json();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Error handling with async/await
async function robustDataFetch() {
  try {
    const user = await fetchUser(1);
    const posts = await fetchUserPosts(user.id);
    
    if (!posts.length) {
      throw new Error('No posts found');
    }
    
    return { user, posts };
  } catch (error) {
    if (error.message === 'No posts found') {
      console.log('User has no posts');
      return { user: await fetchUser(1), posts: [] };
    } else {
      console.error('Unexpected error:', error);
      throw error; // Re-throw to be handled by caller
    }
  }
}`}</code></pre>
              </div>
            </div>

            <div className="card" id="promise-methods">
              <h2>Promise Methods</h2>
              
              <div className="code-example">
                <h3>Promise.all() and Promise.allSettled()</h3>
                <p className="explanation">
                  Promise.all() waits for all promises to resolve and returns an array of results. If any promise rejects, the entire operation fails. Promise.allSettled() waits for all promises to complete (resolve or reject) and returns status information for each, making it more robust for handling mixed success/failure scenarios.
                </p>
                <pre><code>{`// Promise.all() - all must succeed
async function fetchMultipleUsers() {
  const promises = [
    fetchUser(1),
    fetchUser(2),
    fetchUser(3)
  ];
  
  try {
    const users = await Promise.all(promises);
    console.log('All users:', users);
    return users;
  } catch (error) {
    console.error('One or more requests failed:', error);
  }
}

// Promise.allSettled() - handles mixed results
async function fetchWithMixedResults() {
  const promises = [
    fetchUser(1), // Will succeed
    fetchUser(-1), // Will fail
    fetchUser(3)  // Will succeed
  ];
  
  const results = await Promise.allSettled(promises);
  
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(\`User \${index + 1}: Success\`, result.value);
    } else {
      console.log(\`User \${index + 1}: Failed\`, result.reason);
    }
  });
  
  return results;
}

// Practical example with API calls
async function fetchUserData(userIds) {
  const userPromises = userIds.map(id => fetchUser(id));
  
  try {
    const users = await Promise.all(userPromises);
    console.log('All users fetched successfully');
    return users;
  } catch (error) {
    console.error('Some users failed to fetch:', error);
    // Fallback: try to get as many as possible
    const results = await Promise.allSettled(userPromises);
    const successfulUsers = results
      .filter(result => result.status === 'fulfilled')
      .map(result => result.value);
    
    console.log(\`Successfully fetched \${successfulUsers.length} users\`);
    return successfulUsers;
  }
}`}</code></pre>
              </div>

              <div className="code-example">
                <h3>Promise.race() and Promise.any()</h3>
                <p className="explanation">
                  Promise.race() returns the result of the first promise to settle (resolve or reject). Promise.any() returns the result of the first promise to fulfill (resolve), ignoring rejections. These are useful for implementing timeouts, fallback strategies, and performance optimization.
                </p>
                <pre><code>{`// Promise.race() - first to settle
async function fetchWithTimeout(url, timeout = 5000) {
  const fetchPromise = fetch(url);
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Timeout')), timeout);
  });
  
  try {
    const response = await Promise.race([fetchPromise, timeoutPromise]);
    return response.json();
  } catch (error) {
    console.error('Request failed:', error.message);
  }
}

// Promise.any() - first to fulfill
async function fetchFromMultipleSources(urls) {
  const promises = urls.map(url => fetch(url));
  
  try {
    const response = await Promise.any(promises);
    return response.json();
  } catch (error) {
    console.error('All sources failed:', error);
  }
}

// Practical timeout example
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Timeout')), 5000);
      });
      
      const fetchPromise = fetch(url);
      const response = await Promise.race([fetchPromise, timeoutPromise]);
      return response.json();
    } catch (error) {
      console.log(\`Attempt \${i + 1} failed: \${error.message}\`);
      if (i === maxRetries - 1) throw error;
      await delay(1000 * (i + 1)); // Exponential backoff
    }
  }
}

// Fallback strategy with Promise.any()
async function fetchDataWithFallback() {
  const primarySource = fetch('https://api.primary.com/data');
  const backupSource = fetch('https://api.backup.com/data');
  
  try {
    const response = await Promise.any([primarySource, backupSource]);
    return response.json();
  } catch (error) {
    console.error('Both sources failed:', error);
    throw error;
  }
}`}</code></pre>
              </div>
            </div>

            <div className="card" id="best-practices">
              <h2>Best Practices</h2>
              <ul className="best-practices">
                <li><strong>Use async/await over raw promises</strong> - More readable and easier to debug</li>
                <li><strong>Always handle errors in async functions</strong> - Use try/catch blocks or .catch()</li>
                <li><strong>Use Promise.all() for parallel operations</strong> - Improves performance when operations are independent</li>
                <li><strong>Use Promise.allSettled() for mixed success/failure scenarios</strong> - More robust than Promise.all()</li>
                <li><strong>Implement timeouts for network requests</strong> - Use Promise.race() with timeout promises</li>
                <li><strong>Avoid callback hell</strong> - Use promises or async/await instead</li>
                <li><strong>Don't forget to await async functions</strong> - Missing await can cause unexpected behavior</li>
                <li><strong>Use Promise.any() for fallback strategies</strong> - Try multiple sources and use the first successful one</li>
                <li><strong>Handle promise rejections properly</strong> - Don't let unhandled promise rejections crash your app</li>
                <li><strong>Consider using AbortController for cancellable requests</strong> - Allows canceling ongoing requests</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AsyncProgramming; 