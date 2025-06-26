import React from 'react';

function Contact() {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Contact</h1>
            <p>Get in touch with me for opportunities, collaborations, or just to say hello!</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Contact Form</h2>
          <div className="card">
            <form className="contact-form">
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="name">Name</label><br />
                <input type="text" id="name" name="name" placeholder="Your Name" required style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" name="email" placeholder="Your Email" required style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="message">Message</label><br />
                <textarea id="message" name="message" placeholder="Your Message" rows="5" required style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
              <button type="submit" style={{ background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)', color: 'white', padding: '0.75rem 2rem', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>Send</button>
            </form>
          </div>
          <div className="card" style={{ marginTop: '2rem' }}>
            <h3>Other Ways to Reach Me</h3>
            <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
              <li><strong>Email:</strong> <a href="mailto:rohitsiwachroit@gmail.com" style={{ color: '#4facfe', textDecoration: 'none' }}>rohitsiwachroit@gmail.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+491707806646" style={{ color: '#4facfe', textDecoration: 'none' }}>+49 170 780 6646</a></li>
              <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rohitsiwach/" target="_blank" rel="noopener noreferrer" style={{ color: '#4facfe', textDecoration: 'none' }}>linkedin.com/in/rohitsiwach</a></li>
              <li><strong>GitHub:</strong> <a href="https://github.com/rohitsiwach" target="_blank" rel="noopener noreferrer" style={{ color: '#4facfe', textDecoration: 'none' }}>github.com/rohitsiwach</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact; 