import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { FaProjectDiagram, FaCertificate, FaEnvelope, FaHome, FaCog, FaPen } from 'react-icons/fa';  // Importation de FaPen pour le blog
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


// Importer les pages
import Home from './components/Home';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Competances from './components/Competances';
import Projects from './components/Projects';
import Blog from './components/Blog';  // Assurez-vous d'avoir cette page

function App() {
  return (
    <Router>
      <div className="portfolio-title">
          <Link to="/home">Portfolio</Link>
        </div>
      <div className="App">
        <div className="icons-container">
          <div className="icon-item">
            <Link to="/home">
              <FaHome size={30} />
            </Link>
          </div>
          <div className="icon-item">
            <Link to="/projects">
              <FaProjectDiagram size={30} />
            </Link>
          </div>
          <div className="icon-item">
            <Link to="/certifications">
              <FaCertificate size={30} />
            </Link>
          </div>
          <div className="icon-item">
            <Link to="/competances">
              <FaCog size={30} />
            </Link>
          </div>
          <div className="icon-item">
            <Link to="/contact">
              <FaEnvelope size={30} />
            </Link>
          </div>
          {/* Ajout de l'icône du blog */}
          <div className="icon-item">
            <Link to="/blog">
              <FaPen size={30} />
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/competances" element={<Competances />} />
          <Route path="/contact" element={<Contact />} />
          {/* Ajout de la route pour le blog */}
          <Route path="/blog" element={<Blog />} />
        </Routes>

        <p className="copyright">© 2025 Omar Elloumi. Tous droits réservés.</p>
      </div>
    </Router>
  );
}

export default App;
