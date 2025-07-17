import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
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
          <div className="technical-expertise-grid">
            <div className="expertise-category">
              <h4>🎨 Frontend Development</h4>
              <ul>
                <li>React.js & Next.js (Expert)</li>
                <li>TypeScript & JavaScript</li>
                <li>Vue.js & Angular</li>
                <li>Flutter & Dart</li>
                <li>Responsive Design & UI/UX</li>
              </ul>
            </div>
            <div className="expertise-category">
              <h4>⚙️ Backend & Database</h4>
              <ul>
                <li>Node.js & Express.js</li>
                <li>PHP & Laravel</li>
                <li>PostgreSQL & MongoDB</li>
                <li>RESTful APIs & GraphQL</li>
                <li>Python & C++</li>
              </ul>
            </div>
            <div className="expertise-category">
              <h4>🛠️ DevOps & Infrastructure</h4>
              <ul>
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
          <ul className="what-i-bring-list">
            <li><strong>Technical Leadership:</strong> Leading development teams and mentoring junior developers</li>
            <li><strong>Architecture Design:</strong> Designing scalable, maintainable software architectures</li>
            <li><strong>Problem Solving:</strong> Resolving complex technical challenges with innovative solutions</li>
            <li><strong>Project Management:</strong> Delivering projects on time with high quality standards</li>
            <li><strong>Business Acumen:</strong> Understanding business requirements and translating them into technical solutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection; 