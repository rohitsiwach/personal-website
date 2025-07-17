import React from 'react';
import CareerSection from './EducationCareer/CareerSection';
import TechnicalStackSection from './EducationCareer/TechnicalStackSection';
import EducationSection from './EducationCareer/EducationSection';

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

      <CareerSection />
      <TechnicalStackSection />
      <EducationSection />
    </div>
  );
}

export default EducationCareer; 