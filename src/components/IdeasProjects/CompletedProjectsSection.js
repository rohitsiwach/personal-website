import React from 'react';
import './CompletedProjectsSection.css';

function CompletedProjectsSection() {
  const completedProjects = [
    {
      title: '💳 Customer Loyalty Card Enrollment Platform',
      technologies: 'Next.js, React, TypeScript, Node.js, PostgreSQL',
      role: 'Team Lead & Full-Stack Developer',
      duration: '2022 - Present',
      impact: '10,000+ active users, 95% customer satisfaction',
      description: 'Successfully led a cross-functional team in developing a cutting-edge customer loyalty card enrollment system that revolutionized customer engagement. The platform features advanced user authentication, real-time data synchronization, and seamless integration with existing business infrastructure. The solution has significantly improved customer retention rates and streamlined enrollment processes.',
      achievements: [
        'Architected scalable microservices architecture with 99.9% uptime',
        'Implemented advanced security features including OAuth 2.0 and JWT tokens',
        'Designed responsive UI/UX that increased conversion rates by 40%',
        'Established CI/CD pipelines reducing deployment time by 70%',
        'Mentored junior developers and conducted code reviews for quality assurance'
      ]
    },
    {
      title: '🖼️ Intelligent Image Processing Automation Tool',
      technologies: 'React, Node.js, OpenCV, AWS S3, Redis',
      role: 'Full-Stack Developer',
      duration: '2022 - 2023',
      impact: '80% reduction in processing time, 10,000+ images processed daily',
      description: 'Developed a sophisticated internal web application that revolutionized image processing workflows through intelligent automation. The tool incorporates advanced computer vision algorithms, batch processing capabilities, and machine learning models to handle complex image operations with unprecedented efficiency and accuracy.',
      achievements: [
        'Built scalable image processing pipeline handling 1000+ concurrent operations',
        'Implemented AI-powered image quality enhancement and format optimization',
        'Created intuitive drag-and-drop interface for non-technical users',
        'Integrated cloud storage solutions for seamless file management',
        'Reduced manual processing costs by $50,000 annually'
      ]
    },
    {
      title: '🎓 Interactive E-Learning Platform',
      technologies: 'React, WebSockets, WebRTC, MongoDB',
      role: 'Frontend Developer',
      duration: '2021',
      impact: '500+ students, 90% completion rate',
      description: 'Engineered a dynamic e-learning demonstration platform for JMarquardt eLearning GmbH that showcases the future of digital education. The platform features real-time collaboration tools, interactive assessments, and adaptive learning algorithms that personalize the educational experience for each student.',
      achievements: [
        'Implemented real-time video conferencing and screen sharing capabilities',
        'Designed gamified learning modules with progress tracking and achievements',
        'Built adaptive assessment system with instant feedback and analytics',
        'Created responsive design optimized for tablets and mobile devices',
        'Integrated third-party APIs for content management and user authentication'
      ]
    },
    {
      title: '🏢 Enterprise Resource Management System',
      technologies: 'React, Node.js, PostgreSQL, Redis, Docker',
      role: 'Full-Stack Developer',
      duration: '2017 - 2021',
      impact: '200+ daily users, 50% improvement in operational efficiency',
      description: 'Developed a comprehensive enterprise-grade web application for Dartware GmbH that transformed internal operations through intelligent data management and process automation. The system handles complex user management, inventory tracking, and business analytics with enterprise-level security and scalability.',
      achievements: [
        'Built robust user authentication and role-based access control system',
        'Implemented real-time inventory tracking with automated reorder notifications',
        'Created interactive dashboards with advanced data visualization and reporting',
        'Designed RESTful APIs supporting 1000+ concurrent requests',
        'Established comprehensive backup and disaster recovery procedures'
      ]
    }
  ];

  return (
    <section className="section completed-projects-section">
      <div className="container">
        <h2 className="section-title">Completed Projects</h2>
        {completedProjects.map((project, index) => (
          <div key={index} className="card">
            <h3>{project.title}</h3>
            <p>
              <strong>Technologies:</strong> {project.technologies}<br/>
              <strong>Role:</strong> {project.role}<br/>
              <strong>Duration:</strong> {project.duration}<br/>
              <strong>Impact:</strong> {project.impact}
            </p>
            <p>{project.description}</p>
            <ul className="project-achievements-list">
              {project.achievements.map((achievement, achievementIndex) => (
                <li key={achievementIndex}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CompletedProjectsSection; 