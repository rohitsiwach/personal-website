import React from 'react';

function IdeasProjects() {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Ideas & Projects</h1>
            <p>Explore my creative ideas and completed projects in software development.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Project Ideas</h2>
          <div className="card">
            <h3>AI-Powered Image Processing Platform</h3>
            <p>
              Building on my experience with image processing tools, I'm exploring the development of an AI-powered 
              platform that can automatically categorize, enhance, and process images for e-commerce applications. 
              This would integrate computer vision APIs with React frontend and Node.js backend for real-time processing.
            </p>
          </div>
          <div className="card">
            <h3>Cross-Platform Mobile App for Team Management</h3>
            <p>
              A Flutter-based mobile application for team collaboration and project management, incorporating 
              real-time notifications, task tracking, and team communication features. This would leverage my 
              experience with both mobile development and team leadership.
            </p>
          </div>
          <div className="card">
            <h3>Headless CMS with Next.js and TypeScript</h3>
            <p>
              A modern content management system built with Next.js, TypeScript, and a headless architecture. 
              This project would showcase advanced frontend development skills and provide a scalable solution 
              for content-heavy websites.
            </p>
          </div>
        </div>
      </section>
      <section className="section" style={{ backgroundColor: '#f1f3f4' }}>
        <div className="container">
          <h2 className="section-title">Completed Projects</h2>
          <div className="card">
            <h3>Customer Loyalty Card Enrollment Website</h3>
            <p>
              <strong>Technologies:</strong> Next.js, React, TypeScript, Node.js<br/>
              <strong>Role:</strong> Team Lead & Full-Stack Developer<br/>
              <strong>Duration:</strong> 2022 - Present
            </p>
            <p>
              Led a small team to develop a comprehensive customer loyalty card enrollment system. The project 
              involved building a modern, responsive web application with user authentication, data management, 
              and integration with existing business systems. Successfully delivered a scalable solution that 
              improved customer engagement and streamlined the enrollment process.
            </p>
            <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
              <li>Implemented modern React patterns and TypeScript for type safety</li>
              <li>Designed responsive UI/UX for optimal user experience</li>
              <li>Integrated with backend APIs and database systems</li>
              <li>Managed team collaboration and code review processes</li>
            </ul>
          </div>
          <div className="card">
            <h3>Internal Image Processing Tool</h3>
            <p>
              <strong>Technologies:</strong> React, Node.js, Image Processing Libraries<br/>
              <strong>Role:</strong> Full-Stack Developer<br/>
              <strong>Duration:</strong> 2022 - 2023
            </p>
            <p>
              Developed an internal web application to automate image processing workflows, significantly reducing 
              manual effort and processing time. The tool handles batch image operations, format conversions, 
              and quality optimization for various business needs.
            </p>
            <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
              <li>Built automated image processing pipeline</li>
              <li>Implemented batch processing capabilities</li>
              <li>Created user-friendly interface for non-technical users</li>
              <li>Reduced manual processing time by 80%</li>
            </ul>
          </div>
          <div className="card">
            <h3>E-Learning Platform Demo</h3>
            <p>
              <strong>Technologies:</strong> React, Webhooks, Real-time Communication<br/>
              <strong>Role:</strong> Frontend Developer<br/>
              <strong>Duration:</strong> 2021
            </p>
            <p>
              Built a demonstration e-learning website using React and webhooks for JMarquardt eLearning GmbH. 
              The platform showcased interactive learning features, real-time feedback systems, and seamless 
              integration capabilities for educational institutions.
            </p>
            <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
              <li>Implemented real-time feedback and communication features</li>
              <li>Designed responsive learning interface</li>
              <li>Integrated webhook systems for external service communication</li>
              <li>Provided technical support for customer implementations</li>
            </ul>
          </div>
          <div className="card">
            <h3>Internal Web Management Tool</h3>
            <p>
              <strong>Technologies:</strong> Web Technologies, Database Management<br/>
              <strong>Role:</strong> Full-Stack Developer<br/>
              <strong>Duration:</strong> 2017 - 2021
            </p>
            <p>
              Developed a comprehensive internal web application for managing user and inventory data at Dartware GmbH. 
              The tool streamlined internal processes and provided efficient data management capabilities for 
              the organization.
            </p>
            <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
              <li>Built user management and authentication system</li>
              <li>Created inventory tracking and reporting features</li>
              <li>Implemented data visualization and analytics</li>
              <li>Provided ongoing technical support and maintenance</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IdeasProjects; 