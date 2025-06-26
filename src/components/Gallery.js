import React, { useState, useRef } from 'react';

const images = [
  { src: process.env.PUBLIC_URL + '/gallery/photo2.jpg', alt: 'Rohit Siwach 2' },
  { src: process.env.PUBLIC_URL + '/gallery/photo3.jpg', alt: 'Rohit Siwach 3' },
  { src: process.env.PUBLIC_URL + '/gallery/photo4.jpg', alt: 'Rohit Siwach 4' },
];

function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [zoom, setZoom] = useState(1);
  const imgRef = useRef();

  const openModal = (img) => {
    setSelectedImg(img);
    setModalOpen(true);
    setZoom(1);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImg(null);
    setZoom(1);
  };

  // Zoom in/out on wheel
  const handleWheel = (e) => {
    e.preventDefault();
    setZoom(z => Math.max(1, Math.min(3, z + (e.deltaY < 0 ? 0.2 : -0.2))));
  };

  // Zoom in on click
  const handleClick = () => {
    setZoom(z => (z === 1 ? 2 : 1));
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
            <div
              style={{
                display: 'inline-block',
                cursor: 'zoom-in',
                position: 'relative',
              }}
            >
              <img
                ref={imgRef}
                src={selectedImg.src}
                alt={selectedImg.alt}
                style={{
                  maxWidth: '90vw',
                  maxHeight: '80vh',
                  borderRadius: '20px',
                  transform: `scale(${zoom})`,
                  transition: 'transform 0.2s',
                  cursor: 'url("data:image/svg+xml,%3Csvg width=\'32\' height=\'32\' viewBox=\'0 0 32 32\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'14\' cy=\'14\' r=\'10\' stroke=\'%23ffffff\' stroke-width=\'3\'/%3E%3Cline x1=\'21.7071\' y1=\'21.2929\' x2=\'29\' y2=\'28.5858\' stroke=\'%23ffffff\' stroke-width=\'3\' stroke-linecap=\'round\'/%3E%3C/svg%3E") 16 16, zoom-in',
                }}
                onWheel={handleWheel}
                onClick={handleClick}
                draggable={false}
              />
            </div>
            <button className="gallery-modal-close" onClick={closeModal}>&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery; 