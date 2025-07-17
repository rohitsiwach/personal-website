import React from 'react';
import ProjectIdeasSection from './IdeasProjects/ProjectIdeasSection';
import CompletedProjectsSection from './IdeasProjects/CompletedProjectsSection';

function IdeasProjects() {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Ideas & Projects</h1>
            <p>Discover my innovative ideas and successful projects that showcase my passion for creating impactful software solutions.</p>
          </div>
        </div>
      </section>
      <ProjectIdeasSection />
      <CompletedProjectsSection />
    </div>
  );
}

export default IdeasProjects; 