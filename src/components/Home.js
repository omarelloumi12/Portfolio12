import React, { useState } from 'react';
import logo from '../logo.jpg'; // Assurez-vous que le chemin de l'image est correct
import './Home.css';
 
function Home() {
  const [showMore, setShowMore] = useState(false);

  const toggleMoreInfo = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <header className="App-header">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="intro-text">
          <p className="name">Omar Elloumi</p>
          <p className="profession">Software Engineer | Full Stack Web Developer</p>
          <p className="bio">
          "Je suis un ingénieur passionné qui croit que la technologie peut améliorer le monde. Je travaille dur pour transformer les idées en solutions qui comptent."
          </p>
          <button onClick={toggleMoreInfo} className="more-info-btn">
            {showMore ? 'Voir moins' : 'En savoir plus sur moi'}
          </button>
          {showMore && (
            <div className="more-info">
              <p>
                En tant qu’ingénieur logiciel, je m’efforce d’apporter des solutions efficaces et créatives aux problèmes complexes, tout en optimisant les processus et en collaborant avec des équipes multidisciplinaires pour atteindre les objectifs communs. J’ai une passion pour l’apprentissage continu et l’exploration de nouvelles technologies pour toujours rester à la pointe de l’innovation.
              </p>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Home;
