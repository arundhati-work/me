import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle clicks outside navbar to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('#nav-menu') && !event.target.closest('#hamburger')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header>
      <div id="hamburger" className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav id="nav-menu" className={isOpen ? 'active' : ''}>
        <div className="nav-top">
          <a href="#home-section">
            <div className="nav-item">
              <div className="nav-icon">
                <img src="/icons/home.png" alt="Home" />
              </div>
              <p>Home</p>
            </div>
          </a>
          <a href="#work-exp-section">
            <div className="nav-item">
              <div className="nav-icon">
                <img src="/icons/work.png" alt="Work Experience" />
              </div>
              <p>Work Experience</p>
            </div>
          </a>
          <a href="#skills-section">
            <div className="nav-item">
              <div className="nav-icon">
                <img src="/icons/skills.png" alt="Skills" />
              </div>
              <p>Skills</p>
            </div>
          </a>
          <a href="#recent-works-section">
            <div className="nav-item">
              <div className="nav-icon">
                <img src="/icons/projects.png" alt="Recent Works" />
              </div>
              <p>Recent Works</p>
            </div>
          </a>
          <a href="#certifications-section">
            <div className="nav-item">
              <div className="nav-icon">
                <img src="/icons/certs.png" alt="Certifications" />
              </div>
              <p>Certifications</p>
            </div>
          </a>
          <a href="#contact-section">
            <div className="nav-item">
              <div className="nav-icon">
                <img src="/icons/contact.png" alt="Contact Me" />
              </div>
              <p>Contact Me</p>
            </div>
          </a>
          <a href="resume.pdf" download>
            <div className="nav-item">
              <div className="nav-icon">
                <img src="/icons/download.png" alt="Download Resume" />
              </div>
              <p>Download Resume</p>
            </div>
          </a>
        </div>
        <div className="nav-bottom">
          <a href="mailto:bandopadhyaya.a@northeastern.edu">
            <div className="nav-item">
              <div className="nav-icon">
                <img src="/icons/email.png" alt="Email" />
              </div>
              <p>Email</p>
            </div>
          </a>
          <a href="tel:+18575655368">
            <div className="nav-item">
              <div className="nav-icon">
                <img src="/icons/call.png" alt="Phone" />
              </div>
              <p>Phone</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;