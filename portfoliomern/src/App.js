import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <WorkExperience/>
        <Skills/>
      </main>
    </div>
  );
}

export default App;
