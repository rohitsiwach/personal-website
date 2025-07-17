import React from 'react';

function ProjectIdeasSection() {
  const projectIdeas = [
    {
      title: '🎨 AI-Powered Creative Design Assistant',
      description: 'An intelligent design platform that leverages machine learning to help creators generate custom graphics, logos, and marketing materials. The system would analyze brand guidelines and user preferences to suggest design elements, color schemes, and layouts. Built with React, TensorFlow.js, and cloud-based AI services for real-time design generation and collaboration.'
    },
    {
      title: '🌱 Sustainable Living Smart Home Dashboard',
      description: 'A comprehensive IoT dashboard that monitors and optimizes home energy consumption, water usage, and waste management. The platform would provide actionable insights, automated recommendations, and gamification elements to encourage sustainable living practices. Features real-time data visualization, predictive analytics, and integration with smart home devices.'
    },
    {
      title: '🏥 Telemedicine Platform for Rural Communities',
      description: 'A mobile-first healthcare application designed to bridge the gap between rural patients and medical professionals. The platform would include video consultations, prescription management, health monitoring, and emergency response features. Built with React Native for cross-platform compatibility and offline functionality for areas with limited internet connectivity.'
    },
    {
      title: '🎓 Personalized Learning Analytics Platform',
      description: 'An educational technology platform that tracks student progress, learning patterns, and engagement metrics to provide personalized learning recommendations. The system would use machine learning to identify knowledge gaps, suggest study materials, and predict academic performance. Features include adaptive quizzes, progress tracking, and detailed analytics for educators and students.'
    },
    {
      title: '🛒 AR-Powered Virtual Shopping Experience',
      description: 'An augmented reality shopping application that allows users to visualize products in their real environment before purchasing. The app would include virtual try-on features for clothing, furniture placement visualization, and interactive product demonstrations. Built with React Native, ARKit/ARCore, and 3D rendering technologies for immersive shopping experiences.'
    },
    {
      title: '🚗 Smart City Transportation Hub',
      description: 'A comprehensive transportation management platform that integrates public transit, ride-sharing, bike-sharing, and parking services into a unified experience. The platform would provide real-time updates, route optimization, and multimodal journey planning. Features include predictive analytics for traffic patterns, carbon footprint tracking, and community-driven route suggestions.'
    },
    {
      title: '🎵 AI Music Composition & Collaboration Tool',
      description: 'A web-based music creation platform that uses artificial intelligence to assist musicians in composing, arranging, and collaborating on musical projects. The tool would include AI-powered melody generation, chord progression suggestions, and real-time collaboration features for remote musicians. Built with Web Audio API, machine learning models, and cloud-based collaboration tools.'
    },
    {
      title: '🏃‍♀️ Community Fitness & Wellness Network',
      description: 'A social fitness platform that connects local communities through group workouts, challenges, and wellness activities. The app would include workout tracking, community events, nutrition planning, and gamification elements to encourage healthy lifestyles. Features real-time leaderboards, achievement systems, and integration with wearable devices for comprehensive health monitoring.'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Innovative Project Ideas</h2>
        {projectIdeas.map((idea, index) => (
          <div key={index} className="card">
            <h3>{idea.title}</h3>
            <p>{idea.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectIdeasSection; 