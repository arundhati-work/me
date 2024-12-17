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
            <h2>Full Stack Developer Specializing in MERN Stack Development</h2>
            <p>A passionate Full Stack Developer with expertise in building modern web applications using the MERN stack. I combine React and Redux for dynamic front-end interfaces with Node.js, Express, and MongoDB for scalable backend solutions. With experience in both startup and enterprise environments, I focus on creating performant applications with clean, maintainable code and robust API architectures. I'm driven by solving complex technical challenges and delivering seamless user experiences through modern web development practices.</p>
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