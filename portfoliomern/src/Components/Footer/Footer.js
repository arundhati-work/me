import React from 'react';
import { Github, Linkedin, CodepenIcon, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="main-footer"  id="contact-section">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <div className="footer-content-wrapper">
        <div className="footer-grid">
          {/* Connect Section */}
          <div className="footer-section">
            <h3>Let's Connect</h3>
            <div className="social-icons">
              <a href="https://github.com/arundhati-work" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="social-icon">
                <Github size={24} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/arundhati-bandopadhyaya-519162191/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="social-icon">
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a href="https://codepen.io/overReacting" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="social-icon">
                <CodepenIcon size={24} />
                <span>CodePen</span>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <a href="mailto:bandopadhyaya.a@northeastern.edu" className="contact-item">
                <Mail size={20} />
                <span>bandopadhyaya.a@northeastern.edu</span>
              </a>
              <a href="tel:+18575655368" className="contact-item">
                <Phone size={20} />
                <span>+1 857-565-5368</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Arundhati Bandopadhyaya • All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;