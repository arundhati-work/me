import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const certifications = [
    {
      title: "Meta Full Stack Engineer",
      image: "/certifications/fullStack.png",
      issuer: "Meta",
      date: "Aug 08, 2024",
      credential: "SU9qWMpo"
    },
    {
      title: "Meta Frontend Developer",
      image: "/certifications/frontend.png",
      issuer: "Meta",
      date: "Oct 27, 2023",
      credential: "ZU7QPSRQT2B6"
    },
    {
      title: "Meta Backend Developer",
      image: "/certifications/backend.png",
      issuer: "Meta",
      date: "July 19, 2024",
      credential: "X66JTVCLZY8Q"
    },
    {
      title: "Microsoft Azure Fundamentals",
      image: "/certifications/azure.png",
      issuer: "Microsoft",
      date: "June 11, 2022",
      credential: "I305-8238"
    },
    {
      title: "Salesforce JS Developer 1",
      image: "/certifications/jd1.png",
      issuer: "Salesforce",
      date: "July 25, 2023",
      credential: "3555773"
    },
    {
      title: "Salesforce Platform Developer 1",
      image: "/certifications/pd1.png",
      issuer: "Salesforce",
      date: "June 2025, 2023",
      credential: "3494189"
    },
    {
      title: "Salesforce Administrator",
      image: "/certifications/admin.png",
      issuer: "Salesforce",
      date: "November 06, 2022",
      credential: "2688777"
    },
    {
      title: "Salesforce Associate",
      image: "/certifications/associate.png",
      issuer: "Salesforce",
      date: "May 21, 2023",
      credential: "3416223"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextCert();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const nextCert = () => {
    setIsAnimating(true);
    setSelectedCert((prev) => (prev + 1) % certifications.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevCert = () => {
    setIsAnimating(true);
    setSelectedCert((prev) => (prev - 1 + certifications.length) % certifications.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleThumbnailClick = (index) => {
    if (index === selectedCert) return;
    setIsAnimating(true);
    setSelectedCert(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="certifications-section">
    <div className="certifications-container">
      <div className="cert-header">
        <h2 className="cert-title text-3xl">Certifications</h2>
      </div>

      <div className="cert-gallery">
        <div className="main-cert-display">
          <div className="cert-image-container">
            <img 
              src={certifications[selectedCert].image} 
              alt={certifications[selectedCert].title}
              className="cert-image"
            />
            <div className="nav-buttons">
              <button 
                onClick={prevCert}
                className="nav-button"
                disabled={isAnimating}
                aria-label="Previous certificate"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button 
                onClick={nextCert}
                className="nav-button"
                disabled={isAnimating}
                aria-label="Next certificate"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          </div>
          <div className="cert-details">
            <h3 className="cert-name text-xl">{certifications[selectedCert].title}</h3>
            <p className="cert-meta">
              {certifications[selectedCert].issuer} • {certifications[selectedCert].date}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Credential ID: {certifications[selectedCert].credential}
            </p>
          </div>
        </div>

        <div className="thumbnails-container">
          <div className="thumbnails-grid">
            {certifications.map((cert, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`thumbnail-button ${selectedCert === index ? 'selected-thumbnail' : ''}`}
                aria-label={`Select ${cert.title}`}
              >
                <div className="thumbnail-image">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="thumbnail-overlay">
                  <p className="thumbnail-text">
                    {cert.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Certifications;