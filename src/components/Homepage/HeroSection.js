import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <img 
            src={process.env.PUBLIC_URL + '/gallery/photo1.jpg'} 
            alt="Rohit Siwach profile" 
            className="hero-profile-image"
          />
          <h1>🚀 Welcome to My Digital Portfolio</h1>
          <p>Hi, I'm <strong>Rohit Siwach</strong> - a passionate Senior Software Developer & Team Tech Lead based in Munich, Germany.</p>
          <p>I transform innovative ideas into powerful, scalable web applications that drive business growth and enhance user experiences.</p>
          <p>With over 6+ years of experience in full-stack development, I specialize in React, Next.js, and modern web technologies.</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection; 