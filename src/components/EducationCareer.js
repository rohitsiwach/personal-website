import React from 'react';

function EducationCareer() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>🎓 Education & Career Journey</h1>
            <p>My academic foundation and professional evolution in the world of software development</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Academic Foundation</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2016</div>
              <h3>🎯 Master's in Insurance and Risk Management</h3>
              <p><strong>University Degree</strong></p>
              <p>
                Specialized in advanced risk modeling, statistical analysis, and data-driven decision making. 
                This unique background has equipped me with exceptional analytical thinking and the ability to 
                approach complex software problems with a systematic, data-oriented mindset. The skills in 
                financial forecasting and risk assessment translate directly to software architecture and 
                system reliability planning.
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
                <li>Advanced statistical modeling and predictive analytics</li>
                <li>Risk assessment and mitigation strategies</li>
                <li>Data-driven decision making and business intelligence</li>
                <li>Financial forecasting and quantitative analysis</li>
              </ul>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2012</div>
              <h3>⚡ Bachelor's in Electronics and Communication Engineering</h3>
              <p><strong>University Degree</strong></p>
              <p>
                Comprehensive education in programming fundamentals, system architecture, embedded systems, 
                and hardware-software integration. This engineering foundation has been crucial in my 
                understanding of both low-level system operations and high-level software architecture, 
                particularly in infrastructure management and performance optimization.
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
                <li>Programming fundamentals and algorithm design</li>
                <li>System architecture and embedded systems</li>
                <li>Hardware-software integration and optimization</li>
                <li>Network protocols and communication systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="section" style={{ backgroundColor: '#f1f3f4' }}>
        <div className="container">
          <h2 className="section-title">Professional Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">January 2022 - Present</div>
              <h3>🚀 Senior Software Developer & Team Tech Lead</h3>
              <p><strong>Hirmer Eckerle Services, Munich</strong></p>
              <p>
                Leading innovative web application development and managing high-performing technical teams 
                in a fast-paced, dynamic environment. Driving digital transformation through cutting-edge 
                technology solutions.
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
                <li><strong>Architecture Leadership:</strong> Designed and implemented modern headless frontend architecture using React and TypeScript, improving performance by 60%</li>
                <li><strong>Innovation:</strong> Developed intelligent image processing automation tool reducing manual effort by 80% and processing 10,000+ images daily</li>
                <li><strong>Team Management:</strong> Led cross-functional team of 5 developers to deliver customer loyalty platform serving 10,000+ active users</li>
                <li><strong>Technical Excellence:</strong> Established CI/CD pipelines reducing deployment time by 70% and improving code quality</li>
                <li><strong>Problem Solving:</strong> Resolved critical system issues within 2 hours, maintaining 99.9% uptime</li>
                <li><strong>Business Impact:</strong> Increased customer engagement by 40% through improved user experience and system reliability</li>
              </ul>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">July 2021 - November 2021</div>
              <h3>💻 Software Developer</h3>
              <p><strong>JMarquardt eLearning GmbH, Munich</strong></p>
              <p>
                Contributed to cutting-edge e-learning platform development and provided expert technical 
                support for customer integrations, helping revolutionize digital education experiences.
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
                <li><strong>Platform Development:</strong> Built interactive e-learning demo website using React and real-time webhooks</li>
                <li><strong>Customer Success:</strong> Provided technical support for 15+ customer integrations with 100% satisfaction rate</li>
                <li><strong>Innovation:</strong> Implemented real-time feedback systems improving student engagement by 50%</li>
                <li><strong>Technical Support:</strong> Resolved complex integration issues and provided ongoing system maintenance</li>
              </ul>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">March 2017 - June 2021</div>
              <h3>🛠️ Software Developer & Technical Support</h3>
              <p><strong>Dartware GmbH, Munich</strong></p>
              <p>
                Developed comprehensive internal tools and provided expert technical support across diverse 
                systems and infrastructure, establishing robust technical foundations for business operations.
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
                <li><strong>System Development:</strong> Built enterprise-grade web tool managing 1000+ users and inventory data</li>
                <li><strong>Hardware Integration:</strong> Developed Windows-based sensor testing application with 99% accuracy</li>
                <li><strong>Infrastructure Management:</strong> Installed and maintained 50+ servers across Windows/Linux environments</li>
                <li><strong>Network Security:</strong> Configured and secured network infrastructure serving 200+ users</li>
                <li><strong>Technical Leadership:</strong> Provided 24/7 technical support with 95% first-call resolution rate</li>
              </ul>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">October 2015 - July 2016</div>
              <h3>📊 Non-life Actuary</h3>
              <p><strong>Generali Versicherung AG, Munich</strong></p>
              <p>
                Applied advanced analytical skills to insurance data analysis and contributed to pioneering 
                IT analytics projects, laying the foundation for data-driven software development.
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
                <li><strong>Data Analysis:</strong> Analyzed 100,000+ property insurance claims using statistical modeling</li>
                <li><strong>Innovation:</strong> Contributed to pioneering telematics motor insurance analytics platform</li>
                <li><strong>Predictive Modeling:</strong> Developed forecasting models with 85% accuracy for claims prediction</li>
                <li><strong>Technical Reports:</strong> Created comprehensive technical reports influencing business decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Technical Expertise & Stack</h2>
          <div className="card">
            <h3>🎨 Frontend Mastery</h3>
            <p>
              Expert-level proficiency in modern frontend frameworks and tools for creating exceptional 
              user experiences and responsive web applications.
            </p>
            <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
              <li><strong>React.js & Next.js:</strong> Building scalable, high-performance web applications with modern architecture</li>
              <li><strong>TypeScript:</strong> Type-safe development ensuring code reliability and maintainability</li>
              <li><strong>Vue.js & Angular:</strong> Versatile framework expertise for diverse project requirements</li>
              <li><strong>Flutter & Dart:</strong> Cross-platform development for mobile and web applications</li>
              <li><strong>UI/UX Design:</strong> Creating intuitive, accessible, and engaging user interfaces</li>
            </ul>
          </div>

          <div className="card">
            <h3>⚙️ Backend & Database Excellence</h3>
            <p>
              Full-stack development capabilities with robust backend technologies and scalable database 
              solutions for enterprise applications.
            </p>
            <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
              <li><strong>Node.js & Express.js:</strong> High-performance server-side development and API design</li>
              <li><strong>PHP & Laravel:</strong> Rapid web application development with modern frameworks</li>
              <li><strong>PostgreSQL & MongoDB:</strong> Relational and NoSQL database design and optimization</li>
              <li><strong>RESTful APIs & GraphQL:</strong> Scalable API architecture and data querying</li>
              <li><strong>Python & C++:</strong> Specialized programming for data science and system-level development</li>
            </ul>
          </div>

          <div className="card">
            <h3>🛠️ DevOps & Infrastructure</h3>
            <p>
              Comprehensive experience in managing and optimizing various systems and infrastructure 
              components for scalable, reliable applications.
            </p>
            <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
              <li><strong>Docker & Kubernetes:</strong> Containerization and orchestration for scalable deployments</li>
              <li><strong>AWS & Cloud Services:</strong> Cloud infrastructure management and optimization</li>
              <li><strong>CI/CD Pipelines:</strong> Automated deployment and continuous integration workflows</li>
              <li><strong>Linux & Windows Systems:</strong> Cross-platform server management and configuration</li>
              <li><strong>Network Security:</strong> Infrastructure security and performance optimization</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EducationCareer; 