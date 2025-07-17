import React from 'react';
import './TechnicalStackSection.css';

function TechnicalStackSection() {
  const technicalAreas = [
    {
      title: '🎨 Frontend Development',
      description: 'I keep learning and improving my skills in modern frontend frameworks and tools for creating exceptional user experiences and responsive web applications.',
      skills: [
        { name: 'React.js & Next.js', detail: 'Building scalable, high-performance web applications with modern architecture' },
        { name: 'TypeScript', detail: 'Type-safe development ensuring code reliability and maintainability' },
        { name: 'Vue.js & Angular', detail: 'Limited knowledge, continuously learning and improving' },
        { name: 'Flutter & Dart', detail: 'Cross-platform development for mobile and web applications' },
        { name: 'UI/UX Design', detail: 'Creating intuitive, accessible, and engaging user interfaces' }
      ]
    },
    {
      title: '⚙️ Backend & Database Development',
      description: 'Full-stack development capabilities with robust backend technologies and scalable database solutions for enterprise applications.',
      skills: [
        { name: 'Node.js & Express.js', detail: 'High-performance server-side development and API design' },
        { name: 'PHP & Laravel', detail: 'Rapid web application development with modern frameworks' },
        { name: 'PostgreSQL & MongoDB', detail: 'Relational and NoSQL database design and optimization' },
        { name: 'RESTful APIs', detail: 'Scalable API architecture and data querying' },
        { name: 'GraphQL', detail: 'Limited knowledge, looking forward to gain expertise' },
        { name: 'Python', detail: 'Limited knowledge, looking forward to gain expertise' }
      ]
    },
    {
      title: '🛠️ DevOps & Infrastructure',
      description: 'Experience in managing and optimizing various systems and infrastructure components for scalable, reliable applications.',
      skills: [
        { name: 'Docker', detail: 'Containerization for scalable deployments' },
        { name: 'Kubernetes', detail: 'Limited knowledge, looking forward to gain expertise' },
        { name: 'AWS', detail: 'Limited knowledge, looking forward to gain expertise' },
        { name: 'CI/CD Pipelines', detail: 'Automated deployment and continuous integration workflows' },
        { name: 'Linux & Windows Systems', detail: 'Cross-platform server management and configuration' },
        { name: 'Network Security', detail: 'Infrastructure security and performance optimization' }
      ]
    }
  ];

  return (
    <section className="section technical-stack-section">
      <div className="container">
        <h2 className="section-title">Technical Expertise & Stack</h2>
        {technicalAreas.map((area, index) => (
          <div key={index} className="card">
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <ul className="technical-skills-list">
              {area.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>
                  <strong>{skill.name}:</strong> {skill.detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechnicalStackSection; 