import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Navbar/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
