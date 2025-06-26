import React from 'react';

function Homepage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <img 
              src={process.env.PUBLIC_URL + '/gallery/photo1.jpg'} 
              alt="Rohit Siwach profile" 
              style={{ width: 160, height: 160, objectFit: 'cover', borderRadius: '50%', boxShadow: '0 4px 24px rgba(0,0,0,0.12)', marginBottom: 24, border: '4px solid #fff' }}
            />
            <h1>Welcome to My Portfolio</h1>
            <p>Hi, I'm Rohit Siwach. I'm a Senior Software Developer & Team Tech Lead passionate about building scalable web applications and leading technical teams.</p>
            <p>Welcome to my personal portfolio where I showcase my work and experience in modern web development.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="card">
            <h3>Who I Am</h3>
            <p>
              I'm an experienced software developer with a strong foundation in web development, technical support, and IT infrastructure. 
              Currently working as a Senior Software Developer & Team Tech Lead in Munich, I specialize in React, Next.js, Node.js, and PHP 
              with hands-on experience managing server environments, network configurations, and hardware systems.
            </p>
            <p>
              I have a proven ability to lead teams, resolve complex technical issues, and build scalable and stable platforms for both 
              internal use and customer-facing applications. My background in both Electronics Engineering and Insurance Risk Management 
              gives me a unique perspective on problem-solving and data-driven decision making.
            </p>
          </div>
          
          <div className="card">
            <h3>My Technical Skills</h3>
            <p>
              I specialize in modern web development technologies and have extensive experience across the full stack:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              <div>
                <h4 style={{ color: '#4facfe', marginBottom: '0.5rem' }}>Frontend</h4>
                <ul style={{ marginLeft: '1.5rem' }}>
                  <li>ReactJS & NextJS</li>
                  <li>Vue.js & AngularJS</li>
                  <li>TypeScript</li>
                  <li>Dart & Flutter</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#4facfe', marginBottom: '0.5rem' }}>Backend</h4>
                <ul style={{ marginLeft: '1.5rem' }}>
                  <li>Node.js</li>
                  <li>PHP</li>
                  <li>SQL, PostgreSQL, MongoDB</li>
                  <li>Python, C++, C#</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#4facfe', marginBottom: '0.5rem' }}>Infrastructure</h4>
                <ul style={{ marginLeft: '1.5rem' }}>
                  <li>Network Administration</li>
                  <li>Server Configuration</li>
                  <li>Windows/Linux Systems</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>What I Do</h3>
            <p>
              As a Senior Software Developer & Team Tech Lead, I lead the development of modern web applications using React and TypeScript. 
              I manage small teams to build customer-facing applications, develop internal tools to automate workflows, and provide technical 
              support across frontend and backend systems. My role involves maintaining operational stability, resolving complex technical 
              issues, and supporting business stakeholders with technical insights.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{ backgroundColor: '#f1f3f4' }}>
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="card">
            <h3>Contact Information</h3>
            <p>
              I'm always interested in new opportunities, collaborations, and interesting projects. 
              Feel free to reach out to me through any of the following channels:
            </p>
            <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
              <li><strong>Email:</strong> <a href="mailto:rohitsiwachroit@gmail.com" style={{ color: '#4facfe', textDecoration: 'none' }}>rohitsiwachroit@gmail.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+491707806646" style={{ color: '#4facfe', textDecoration: 'none' }}>+49 170 780 6646</a></li>
              <li><strong>Location:</strong> Munich, 81379, Germany</li>
              <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rohitsiwach/" target="_blank" rel="noopener noreferrer" style={{ color: '#4facfe', textDecoration: 'none' }}>linkedin.com/in/rohitsiwach</a></li>
              <li><strong>GitHub:</strong> <a href="https://github.com/rohitsiwach" target="_blank" rel="noopener noreferrer" style={{ color: '#4facfe', textDecoration: 'none' }}>github.com/rohitsiwach</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage; 