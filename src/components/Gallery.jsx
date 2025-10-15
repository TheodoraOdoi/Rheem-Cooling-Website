import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryImages = [
    {
      url: '/images/Modern Split AC Installation.jpg',
      title: 'Modern Split AC Installation',
      description: 'Professional installation of split AC units'
    },
    {
      url: '/images/Window AC Units.avif',
      title: 'Window AC Units',
      description: 'Compact window AC solutions for small spaces'
    },
    {
      url: '/images/20250723_2145_Sleek Minimalist Air Conditioner_simple_compose_01k0w9jra3fgy8fk6asczzr59y.png',
      title: 'Cassette AC Systems',
      description: 'Premium cassette AC for commercial spaces'
    },
    {
      url: '/images/Efficient Energy Solutions.jpeg',
      title: 'Energy Efficient Solutions',
      description: 'Latest energy-efficient AC technology'
    },
    {
      url: '/images/Smart AC Controls.png',
      title: 'Smart AC Controls',
      description: 'Modern smart AC control systems'
    },
    {
      url: '/images/Professional Service.jpeg',
      title: 'Professional Service',
      description: 'Expert installation and maintenance services'
    },
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="gallery-section">
      <div className="container">
        <div className="section-header">
          <h2>Gallery</h2>
          <p>Explore our premium AC installations and services</p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openModal(index)}
            >
              <img src={image.url} alt={image.title} />
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="gallery-modal">
            <div className="gallery-modal-content">
              <button onClick={() => setIsModalOpen(false)} className="gallery-close">
                <X className="icon" />
              </button>

              <img
                src={galleryImages[currentImageIndex].url}
                alt={galleryImages[currentImageIndex].title}
                className="gallery-modal-image"
              />

              <div className="gallery-modal-info">
                <h3>{galleryImages[currentImageIndex].title}</h3>
                <p>{galleryImages[currentImageIndex].description}</p>
              </div>

              <button onClick={prevImage} className="gallery-nav prev">
                <ChevronLeft className="icon" />
              </button>

              <button onClick={nextImage} className="gallery-nav next">
                <ChevronRight className="icon" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;