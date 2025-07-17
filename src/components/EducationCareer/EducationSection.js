import React from 'react';
import './EducationSection.css';

function EducationSection() {
  const educationData = [
    {
      date: '2016',
      title: '🎯 Master\'s in Insurance and Risk Management',
      degree: 'University Degree',
      description: 'Specialized in advanced risk modeling, statistical analysis, and data-driven decision making. This unique background has equipped me with exceptional analytical thinking and the ability to approach complex software problems with a systematic, data-oriented mindset. The skills in financial forecasting and risk assessment translate directly to software architecture and system reliability planning.',
      skills: [
        'Advanced statistical modeling and predictive analytics',
        'Risk assessment and mitigation strategies',
        'Data-driven decision making and business intelligence',
        'Financial forecasting and quantitative analysis'
      ]
    },
    {
      date: '2012',
      title: '⚡ Bachelor\'s in Electronics and Communication Engineering',
      degree: 'University Degree',
      description: 'Comprehensive education in programming fundamentals, system architecture, embedded systems, and hardware-software integration. This engineering foundation has been crucial in my understanding of both low-level system operations and high-level software architecture, particularly in infrastructure management and performance optimization.',
      skills: [
        'Programming fundamentals and algorithm design',
        'System architecture and embedded systems',
        'Hardware-software integration and optimization',
        'Network protocols and communication systems'
      ]
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Academic Foundation</h2>
        <div className="timeline">
          {educationData.map((education, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{education.date}</div>
              <h3>{education.title}</h3>
              <p><strong>{education.degree}</strong></p>
              <p>{education.description}</p>
              <ul className="education-skills-list">
                {education.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection; 