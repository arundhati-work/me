import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('#nav-menu') && !event.target.closest('#hamburger')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Close mobile menu if open
      setIsOpen(false);
      
      // Smooth scroll to target
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header>
      <div id="hamburger" className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav id="nav-menu" className={isOpen ? 'active' : ''}>
        <div className="nav-top">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home-section')}>
            <div className="nav-item">
              <div className="nav-icon">
                <img src="/icons/home.png" alt="Home" />
              </div>
              <p>Home</p>
            </div>
          </a>
          <a href="#work-exp" onClick={(e) => handleNavClick(e, 'work-exp-section')}>
            <div className="nav-item">
              <div className="nav-icon">
                <img src="/icons/work.png" alt="Work Experience" />
              </div>
              <p>Work Experience</p>
            </div>
          </a>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills-section')}>
            <div className="nav-item">
              <div className="nav-icon">
                <img src="/icons/skills.png" alt="Skills" />
              </div>
              <p>Skills</p>
            </div>
          </a>
          <a href="#certifications" onClick={(e) => handleNavClick(e, 'certifications-section')}>
            <div className="nav-item">
              <div className="nav-icon">
                <img src="/icons/certs.png" alt="Certifications" />
              </div>
              <p>Certifications</p>
            </div>
          </a>
          <a href="#recent-works" onClick={(e) => handleNavClick(e, 'recent-works-section')}>
            <div className="nav-item">
              <div className="nav-icon">
                <img src="/icons/projects.png" alt="Recent Works" />
              </div>
              <p>Recent Works</p>
            </div>
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact-section')}>
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