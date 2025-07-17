import React from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    <section className="section contact-section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="card">
          <h3>📞 Get In Touch</h3>
          <p>
            I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. 
            Whether you have a challenging project in mind or just want to connect, I'd love to hear from you!
          </p>
          <div className="contact-grid">
            <div className="contact-item">
              <h4>📧 Email</h4>
              <p><a href="mailto:rohitsiwachroit@gmail.com" className="contact-link">rohitsiwachroit@gmail.com</a></p>
            </div>
            <div className="contact-item">
              <h4>📱 Phone</h4>
              <p><a href="tel:+491707806646" className="contact-link">+49 170 780 6646</a></p>
            </div>
            <div className="contact-item">
              <h4>📍 Location</h4>
              <p>Munich, 81379, Germany</p>
            </div>
            <div className="contact-item">
              <h4>💼 LinkedIn</h4>
              <p><a href="https://www.linkedin.com/in/rohitsiwach/" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/rohitsiwach</a></p>
            </div>
            <div className="contact-item">
              <h4>🐙 GitHub</h4>
              <p><a href="https://github.com/rohitsiwach" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/rohitsiwach</a></p>
            </div>
          </div>
          <p className="contact-quote">
            "The best code is not just functional—it's elegant, maintainable, and makes a difference in people's lives."
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection; 