import React from 'react';

function EducationCareer() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Education & Career</h1>
            <p>My academic journey and professional experience in software development</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2016</div>
              <h3>Master's in Insurance and Risk Management</h3>
              <p><strong>University Degree</strong></p>
              <p>
                Specialized in risk modeling, data-driven decision making, and financial forecasting. 
                This background provides me with a unique perspective on analytical thinking and 
                data-driven approaches to problem-solving in software development.
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2012</div>
              <h3>Bachelor's in Electronics and Communication Engineering</h3>
              <p><strong>University Degree</strong></p>
              <p>
                Comprehensive education in programming, system architecture, embedded systems, and problem-solving. 
                This foundation in electronics and communication engineering has been instrumental in my 
                understanding of both hardware and software systems, particularly in infrastructure management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="section" style={{ backgroundColor: '#f1f3f4' }}>
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">January 2022 - Present</div>
              <h3>Senior Software Developer & Team Tech Lead</h3>
              <p><strong>Hirmer Eckerle Services, Munich</strong></p>
              <p>
                Leading the development of modern web applications and managing technical teams in a dynamic environment.
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
                <li>Led the setup of a modern headless frontend architecture using React and TypeScript</li>
                <li>Developed an internal image processing tool to automate workflows and reduce manual effort</li>
                <li>Managed a small team to build a customer loyalty card enrollment website using Next.js</li>
                <li>Provided technical support and troubleshooting across frontend and backend systems</li>
                <li>Maintained operational stability by identifying and resolving system errors quickly</li>
                <li>Supported business stakeholders with technical insights and daily issue resolution</li>
              </ul>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">July 2021 - November 2021</div>
              <h3>Software Developer</h3>
              <p><strong>JMarquardt eLearning GmbH, Munich</strong></p>
              <p>
                Contributed to e-learning platform development and provided technical support for customer integrations.
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
                <li>Built a demo e-learning website using React and webhooks</li>
                <li>Provided technical support for customer integration and implementation of real-time feedback</li>
                <li>Participated in ongoing system maintenance and issue resolution</li>
              </ul>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">March 2017 - June 2021</div>
              <h3>Software Developer & Technical Support</h3>
              <p><strong>Dartware GmbH, Munich</strong></p>
              <p>
                Developed internal tools and provided comprehensive technical support across various systems and infrastructure.
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
                <li>Developed an internal web tool for managing user and inventory data</li>
                <li>Built a Windows-based application for sensor testing and provided related support</li>
                <li>Installed and maintained servers, networking hardware, and infrastructure components</li>
                <li>Handled network configurations, security protocols, and server deployments (Windows/Linux)</li>
                <li>Delivered technical support and troubleshooting for internal teams and client environments</li>
              </ul>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">October 2015 - July 2016</div>
              <h3>Non-life Actuary</h3>
              <p><strong>Generali Versicherung AG, Munich</strong></p>
              <p>
                Applied analytical skills to insurance data analysis and contributed to early-stage IT analytics projects.
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
                <li>Conducted analysis of large property insurance claims and drafted technical reports</li>
                <li>Contributed to early-stage IT analytics for telematics motor insurance</li>
                <li>Supported the development of models for claims and revenue forecasting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Technical Stack & Expertise</h2>
          <div className="card">
            <h3>Frontend Technologies</h3>
            <p>
              Extensive experience with modern frontend frameworks and tools for building responsive, 
              user-friendly web applications.
            </p>
            <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
              <li><strong>ReactJS & NextJS:</strong> Building modern, scalable web applications</li>
              <li><strong>Vue.js & AngularJS:</strong> Alternative frontend frameworks for diverse project needs</li>
              <li><strong>TypeScript:</strong> Type-safe JavaScript development</li>
              <li><strong>Dart & Flutter:</strong> Cross-platform mobile and web development</li>
            </ul>
          </div>

          <div className="card">
            <h3>Backend & Database Technologies</h3>
            <p>
              Full-stack development capabilities with various backend technologies and database systems.
            </p>
            <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
              <li><strong>Node.js:</strong> Server-side JavaScript development</li>
              <li><strong>PHP:</strong> Web application development</li>
              <li><strong>SQL, PostgreSQL, MongoDB:</strong> Database design and management</li>
              <li><strong>Python, C++, C#:</strong> Additional programming languages for specific use cases</li>
            </ul>
          </div>

          <div className="card">
            <h3>Systems & Infrastructure</h3>
            <p>
              Comprehensive experience in managing and configuring various systems and infrastructure components.
            </p>
            <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
              <li><strong>Network Administration:</strong> Network setup, configuration, and maintenance</li>
              <li><strong>Server Configuration:</strong> Windows and Linux server management</li>
              <li><strong>Hardware Setup:</strong> Physical infrastructure installation and maintenance</li>
              <li><strong>Firebase:</strong> Cloud-based development and hosting solutions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EducationCareer; 