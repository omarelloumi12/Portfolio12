import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "App E-commerce",
      description: "Développement d'une application mobile e-commerce pour un grossiste alimentaire en France, utilisant React Native.\n" + 
      "Connexion au site web PrestaShop via des API pour assurer la synchronisation des données",
      keywords: "React Native - PrestaShop - javascript - Css - Expo - Postman(API) - FileZilla - Apple Developer - Json - Mailtrap - chatbot - IA",
      images: ["images/project1.png", "images/project11.png", "images/project12.png", "images/project13.png", "images/project14.png", "images/project15.png", "images/project16.png", "images/project17.png"],
      companyLogo: "images/Bwslogo.webp", // Logo de l'entreprise
    },
    {
      id: 2,
      title: "Stage Professionnel",
      description: "Réalisation d'un programme d'extraction automatique d'informations à partir de chèques et rationalisation du processus de remplissage automatique des remises de chèques afin d'augmenter l'efficacité et minimiser les erreurs",
      keywords: "Java - Eclipse - OCR - Microsoft Word - Traitement d'image - Traineddata",
      images: ["images/project3.png", "images/project31.png"],
      companyLogo: "images/logodksoft.png", // Logo de l'entreprise
    },
    {
        id: 5,
        title: "PFA",
        description: "Conception et réalisation d'un site web e-commerce de matériel informatique en utilisant PHP et MySQL pour la gestion des produits et des commandes",
        keywords: "Laravel -PHP - MySQL- HTML - XAMPP - VScode",
        images: ["images/project5.png","images/project51.png","images/project52.png","images/project53.png","images/project54.png"],
        companyLogo: "images/logoiit.png", 
      },
      {
      id: 3,
      title: "Dashboard",
      description: "Réalisation d’un site web avec dashboard pour surveiller les  tâches des testeurs en utilisant le framework Angular * Développement d'interfaces utilisateur conviviales et intuitives",
      keywords: "Angular - HTML - Css - JWT - Jira - Scrum",
      images: ["images/project2.png","images/project21.png","images/project22.png"],
      companyLogo: "images/logoprimatec.png", 
    },
    {
        id: 6,
        title: "Projet . Net",
        description: "Réalisation d’une application desktop pour gérer les livres, les utilisateurs et les emprunts d'une bibliothèque",
        keywords: ".NET - SQL Server - Microsoft Visual Studio",
        images: ["images/project6.png","images/project61.png","images/project62.png"],
        companyLogo: "images/logoiit.png", 
      },
    {
      id: 4,
      title: "Smart Home",
      description: "Conception et réalisation d'une maison intelligente connectée via une application mobile pour automatiser les tâches et améliorer le confort des utilisateurs",
      keywords: "Uno - Mega - LDR - LCD - clavier - Capteur d'Humidité - Buzzer - App Inventor - SketchUp",
      images: ["images/project4.jpg","images/project41.jpg","images/project42.jpg"],
      companyLogo: "images/logoisgis.png", 
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const settings = {
    dots: true, // Afficher des points de navigation
    infinite: true, // Boucle infinie
    speed: 500, // Vitesse de transition
    slidesToShow: 1, // Afficher 1 image à la fois
    slidesToScroll: 1, // Scroll d'une image à la fois
    fade: true, // Transition de fondu
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">
        MON <span className="highlight">PORTFOLIO</span>
      </h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={`${process.env.PUBLIC_URL}/${project.images[0]}`}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-keywords">{project.keywords}</p>
            <div className="project-actions">
              <button
                className="project-button"
                onClick={() => openProjectDetails(project)}
              >
                Voir les détails
              </button>
              <img
                src={`${process.env.PUBLIC_URL}/${project.companyLogo}`}
                alt={`${project.title} logo`}
                className="company-logo"
              />
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-details-overlay">
          <div className="project-details">
            <button className="close-button" onClick={closeProjectDetails}>
              ×
            </button>
            <h2 className="project-details-title">{selectedProject.title}</h2>
            <p className="project-details-description">
              <i className="fas fa-info-circle"></i>
              <strong>Description :</strong> {selectedProject.description}
            </p>
            <p className="project-details-keywords">
              <i className="fas fa-tags"></i>
              <strong>Mots-clés :</strong> {selectedProject.keywords}
            </p>
            <Slider {...settings}>
              {selectedProject.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={`${process.env.PUBLIC_URL}/${image}`}
                    alt={`${selectedProject.title} - ${index + 1}`}
                    className="carousel-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
