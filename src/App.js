import './App.css';
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Homepage />
      <About />
      <Projects/>
    </div>
  );
}

export default App;
