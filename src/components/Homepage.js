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
            <h1>🚀 Welcome to My Digital Portfolio</h1>
            <p>Hi, I'm <strong>Rohit Siwach</strong> - a passionate Senior Software Developer & Team Tech Lead based in Munich, Germany.</p>
            <p>I transform innovative ideas into powerful, scalable web applications that drive business growth and enhance user experiences.</p>
            <p>With over 6+ years of experience in full-stack development, I specialize in React, Next.js, and modern web technologies.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="card">
            <h3>🎯 My Mission</h3>
            <p>
              I'm driven by the challenge of creating software solutions that not only meet technical requirements but exceed user expectations. 
              As a Senior Software Developer & Team Tech Lead in Munich, I combine technical expertise with strategic thinking to deliver 
              innovative applications that solve real-world problems.
            </p>
            <p>
              My unique background in Electronics Engineering and Insurance Risk Management gives me a holistic perspective on problem-solving, 
              enabling me to approach challenges from both technical and business angles. I believe in writing clean, maintainable code and 
              fostering collaborative team environments that drive innovation.
            </p>
          </div>
          
          <div className="card">
            <h3>💻 Technical Expertise</h3>
            <p>
              I've mastered a comprehensive tech stack that enables me to build end-to-end solutions:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              <div>
                <h4 style={{ color: '#4facfe', marginBottom: '0.5rem' }}>🎨 Frontend Development</h4>
                <ul style={{ marginLeft: '1.5rem' }}>
                  <li>React.js & Next.js (Expert)</li>
                  <li>TypeScript & JavaScript</li>
                  <li>Vue.js & Angular</li>
                  <li>Flutter & Dart</li>
                  <li>Responsive Design & UI/UX</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#4facfe', marginBottom: '0.5rem' }}>⚙️ Backend & Database</h4>
                <ul style={{ marginLeft: '1.5rem' }}>
                  <li>Node.js & Express.js</li>
                  <li>PHP & Laravel</li>
                  <li>PostgreSQL & MongoDB</li>
                  <li>RESTful APIs & GraphQL</li>
                  <li>Python & C++</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#4facfe', marginBottom: '0.5rem' }}>🛠️ DevOps & Infrastructure</h4>
                <ul style={{ marginLeft: '1.5rem' }}>
                  <li>Docker & Kubernetes</li>
                  <li>AWS & Cloud Services</li>
                  <li>CI/CD Pipelines</li>
                  <li>Linux & Windows Systems</li>
                  <li>Network Administration</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>🎯 What I Bring to the Table</h3>
            <p>
              As a Senior Software Developer & Team Tech Lead, I excel at:
            </p>
            <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
              <li><strong>Technical Leadership:</strong> Leading development teams and mentoring junior developers</li>
              <li><strong>Architecture Design:</strong> Designing scalable, maintainable software architectures</li>
              <li><strong>Problem Solving:</strong> Resolving complex technical challenges with innovative solutions</li>
              <li><strong>Project Management:</strong> Delivering projects on time with high quality standards</li>
              <li><strong>Business Acumen:</strong> Understanding business requirements and translating them into technical solutions</li>
            </ul>
          </div>

          <div className="card">
            <h3>🏆 Key Achievements</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h4 style={{ color: '#4facfe', marginBottom: '0.5rem' }}>10,000+</h4>
                <p>Active Users</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h4 style={{ color: '#4facfe', marginBottom: '0.5rem' }}>80%</h4>
                <p>Efficiency Improvement</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h4 style={{ color: '#4facfe', marginBottom: '0.5rem' }}>15+</h4>
                <p>Projects Delivered</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h4 style={{ color: '#4facfe', marginBottom: '0.5rem' }}>6+</h4>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{ backgroundColor: '#f1f3f4' }}>
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div className="card">
            <h3>📞 Get In Touch</h3>
            <p>
              I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. 
              Whether you have a challenging project in mind or just want to connect, I'd love to hear from you!
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              <div>
                <h4 style={{ color: '#4facfe', marginBottom: '0.5rem' }}>📧 Email</h4>
                <p><a href="mailto:rohitsiwachroit@gmail.com" style={{ color: '#4facfe', textDecoration: 'none' }}>rohitsiwachroit@gmail.com</a></p>
              </div>
              <div>
                <h4 style={{ color: '#4facfe', marginBottom: '0.5rem' }}>📱 Phone</h4>
                <p><a href="tel:+491707806646" style={{ color: '#4facfe', textDecoration: 'none' }}>+49 170 780 6646</a></p>
              </div>
              <div>
                <h4 style={{ color: '#4facfe', marginBottom: '0.5rem' }}>📍 Location</h4>
                <p>Munich, 81379, Germany</p>
              </div>
              <div>
                <h4 style={{ color: '#4facfe', marginBottom: '0.5rem' }}>💼 LinkedIn</h4>
                <p><a href="https://www.linkedin.com/in/rohitsiwach/" target="_blank" rel="noopener noreferrer" style={{ color: '#4facfe', textDecoration: 'none' }}>linkedin.com/in/rohitsiwach</a></p>
              </div>
              <div>
                <h4 style={{ color: '#4facfe', marginBottom: '0.5rem' }}>🐙 GitHub</h4>
                <p><a href="https://github.com/rohitsiwach" target="_blank" rel="noopener noreferrer" style={{ color: '#4facfe', textDecoration: 'none' }}>github.com/rohitsiwach</a></p>
              </div>
            </div>
            <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#666' }}>
              "The best code is not just functional—it's elegant, maintainable, and makes a difference in people's lives."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage; 