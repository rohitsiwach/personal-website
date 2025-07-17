import React from 'react';
import './CareerSection.css';

function CareerSection() {
  const careerData = [
    {
      date: 'January 2022 - Present',
      title: '🚀 Senior Software Developer & Team Tech Lead',
      company: 'Hirmer Eckerle Services, Munich',
      description: 'Leading innovative web application development and managing high-performing technical teams in a fast-paced, dynamic environment. Driving digital transformation through cutting-edge technology solutions.',
      achievements: [
        { label: 'Architecture Leadership', detail: 'Designed and implemented modern headless frontend architecture using React and TypeScript, improving performance by 60%' },
        { label: 'Innovation', detail: 'Developed intelligent image processing automation tool reducing manual effort by 80% and processing 10,000+ images daily' },
        { label: 'Team Management', detail: 'Led cross-functional team of 5 developers to deliver customer loyalty platform serving 10,000+ active users' },
        { label: 'Technical Excellence', detail: 'Established CI/CD pipelines reducing deployment time by 70% and improving code quality' },
        { label: 'Problem Solving', detail: 'Resolved critical system issues within 2 hours, maintaining 99.9% uptime' },
        { label: 'Business Impact', detail: 'Increased customer engagement by 40% through improved user experience and system reliability' }
      ]
    },
    {
      date: 'July 2021 - November 2021',
      title: '💻 Software Developer',
      company: 'JMarquardt eLearning GmbH, Munich',
      description: 'Contributed to cutting-edge e-learning platform development and provided expert technical support for customer integrations, helping revolutionize digital education experiences.',
      achievements: [
        { label: 'Platform Development', detail: 'Built interactive e-learning demo website using React and real-time webhooks' },
        { label: 'Customer Success', detail: 'Provided technical support for 15+ customer integrations with 100% satisfaction rate' },
        { label: 'Innovation', detail: 'Implemented real-time feedback systems improving student engagement by 50%' },
        { label: 'Technical Support', detail: 'Resolved complex integration issues and provided ongoing system maintenance' }
      ]
    },
    {
      date: 'March 2017 - June 2021',
      title: '🛠️ Software Developer & Technical Support',
      company: 'Dartware GmbH, Munich',
      description: 'Developed comprehensive internal tools and provided expert technical support across diverse systems and infrastructure, establishing robust technical foundations for business operations.',
      achievements: [
        { label: 'System Development', detail: 'Built enterprise-grade web tool managing 1000+ users and inventory data' },
        { label: 'Hardware Integration', detail: 'Developed Windows-based sensor testing application with 99% accuracy' },
        { label: 'Infrastructure Management', detail: 'Installed and maintained 50+ servers across Windows/Linux environments' },
        { label: 'Network Security', detail: 'Configured and secured network infrastructure serving 200+ users' },
        { label: 'Technical Leadership', detail: 'Provided 24/7 technical support with 95% first-call resolution rate' }
      ]
    },
    {
      date: 'October 2015 - July 2016',
      title: '📊 Non-life Actuary',
      company: 'Generali Versicherung AG, Munich',
      description: 'Applied advanced analytical skills to insurance data analysis and contributed to pioneering IT analytics projects, laying the foundation for data-driven software development.',
      achievements: [
        { label: 'Data Analysis', detail: 'Analyzed 100,000+ property insurance claims using statistical modeling' },
        { label: 'Innovation', detail: 'Contributed to pioneering telematics motor insurance analytics platform' },
        { label: 'Predictive Modeling', detail: 'Developed forecasting models with 85% accuracy for claims prediction' },
        { label: 'Technical Reports', detail: 'Created comprehensive technical reports influencing business decisions' }
      ]
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Professional Journey</h2>
        <div className="timeline">
          {careerData.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{job.date}</div>
              <h3>{job.title}</h3>
              <p><strong>{job.company}</strong></p>
              <p>{job.description}</p>
              <ul className="career-achievements-list">
                {job.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex}>
                    <strong>{achievement.label}:</strong> {achievement.detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerSection; 