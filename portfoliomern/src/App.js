import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import Skills from './Components/Skills/Skills';
import ProjectGrid from './Components/ProjectGrid/ProjectGrid';
import ProjectDetail from './Components/ProjectDetail/ProjectDetail';
import Certifications from './Components/Certifications/Certifications';
import Footer from './Components/Footer/Footer';

// Create a wrapper component to handle scroll effects
const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const scrollTarget = sessionStorage.getItem('scrollTarget');
      if (scrollTarget) {
        sessionStorage.removeItem('scrollTarget');
        setTimeout(() => {
          const targetElement = document.getElementById(scrollTarget);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router  basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <ScrollManager />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <WorkExperience />
                <ProjectGrid />
                <Skills />
                <Certifications/>
              </>
            } />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;