// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import Skills from './Components/Skills/Skills';
import ProjectGrid from './Components/ProjectGrid/ProjectGrid';
import ProjectDetail from './Components/ProjectDetail/ProjectDetail';
import Certifications from './Components/Certifications/Certifications';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <WorkExperience />
                <Skills />
                <Certifications/>
                <ProjectGrid />
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