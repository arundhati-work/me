import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import WorkExperience from './Components/WorkExperience/WorkExperience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <WorkExperience/>
      </main>
    </div>
  );
}

export default App;
