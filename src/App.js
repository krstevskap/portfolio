import './App.css';
import React from 'react';
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: false,
      startEvent: "scroll",
    });
  }, []);

  return (
    <div className="App">
      <Homepage />
      <About />
      <Projects />
    </div>
  );
}

export default App;
