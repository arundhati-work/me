import React from 'react';
import './Home.css';
import resume from "../../assets/arundhati_bandopadhyaya_resume.pdf";

const Home = () => {
    const handleResumeDownload = () => {
        // You'll need to place your resume.pdf in the public folder
        //const resumeUrl = '../';
        window.open(resume, '_blank');
      };

  return (
    <section id="home-section">
      <div className="outer-container">
        <div className="inner-container">
          <div className="home-text">
            <h4>Hi I'm</h4>
            <h1>Arundhati Bandopadhyaya.</h1>
            <h2>Full Stack Developer with Expertise in Salesforce, Frontend &#38; Backend Technologies</h2>
            <p>A passionate Full Stack Developer with hands-on experience in developing Lightning Web Components (LWC), 
              leading business analysis for Fortune 500 clients, and delivering high-quality web applications. 
              I am driven by solving complex technical challenges and creating scalable, efficient solutions.</p>
          </div>
          <div className="button-container">
            <button id="blogButton" onClick={handleResumeDownload}>DOWNLOAD RESUME &gt;&gt;&gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;