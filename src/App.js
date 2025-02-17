// import './App.css';
import Navbar from './components/Navbar'
import Hero from './Container/Hero/Hero'
import About from './Container/About/About'
import Skills from './Container/Skills/Skills'
import Projects from './Container/Projects/Projects'
import Contact from './Container/Contact/Contact'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={ <Hero /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/skills" element={ <Skills /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/contact" element={ <Contact / >} />
          <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
