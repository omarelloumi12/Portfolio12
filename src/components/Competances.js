import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaTools, FaPencilRuler, FaChartLine } from 'react-icons/fa'; // Importation des icônes
import './Competances.css'; // Importez le fichier CSS

function Competances() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "DÉVELOPPEMENT WEB",
      description:
        "Créer des sites Web réactifs et dynamiques avec des technologies modernes telles que HTML, CSS, JavaScript et Angular.",
    },
    {
      icon: <FaMobileAlt />,
      title: "DÉVELOPPEMENT MOBILE",
      description:
        "Créez des applications mobiles multiplateformes à l'aide de React Native , Flutter  pour des expériences utilisateur fluides.",
    },
    {
      icon: <FaDatabase />,
      title: "DÉVELOPPEMENT DU BACKEND",
      description:
        "Développement de systèmes backend robustes avec Java, Spring Boot, MongoDB et MySQL pour des API sécurisées.",
    },
    {
      icon: <FaTools />,
      title: "SOLUTIONS DEVOPS",
      description:
        "Mise en œuvre des pratiques DevOps et DevSecOps pour automatiser et sécuriser les pipelines de développement.",
    },
    {
      icon: <FaPencilRuler />,
      title: "SOLUTIONS DE CONCEPTION FIGMA",
      description:
        "Créer des conceptions centrées sur l'utilisateur avec Figma pour des interfaces visuellement attrayantes et interactives.",
    },
    {
      icon: <FaChartLine />,
      title: "ANALYSE ET OPTIMISATION",
      description:
        "Analyser et optimiser les performances des applications pour une meilleure évolutivité et satisfaction utilisateur.",
    },
  ];

  return (
    <section className="competances-section">
      <h2 className="competances-title">
        MES <span className="highlight">COMPÉTENCES</span>
      </h2>
      <h3 className="competances-subtitle">MES SERVICES</h3>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Competances;
