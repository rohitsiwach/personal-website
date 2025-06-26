import React, { useState } from 'react';

const images = [
  { src: process.env.PUBLIC_URL + '/gallery/photo2.jpg', alt: 'Rohit Siwach 2' },
  { src: process.env.PUBLIC_URL + '/gallery/photo3.jpg', alt: 'Rohit Siwach 3' },
];

function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (img) => {
    setSelectedImg(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImg(null);
  };

  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Gallery</h1>
            <p>A collection of my favorite professional moments and portraits.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Photo Gallery</h2>
          <div className="gallery-grid">
            {images.map((img, idx) => (
              <div className="gallery-item" key={idx} onClick={() => openModal(img)} style={{ cursor: 'pointer' }}>
                <img src={img.src} alt={img.alt} style={{ width: '100%', height: 'auto', borderRadius: '16px', objectFit: 'cover', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {modalOpen && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImg.src} alt={selectedImg.alt} style={{ maxWidth: '90vw', maxHeight: '80vh', borderRadius: '20px' }} />
            <button className="gallery-modal-close" onClick={closeModal}>&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery; 