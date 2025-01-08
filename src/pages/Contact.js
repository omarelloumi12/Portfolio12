import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faDownload,} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact</h2>
            <p className="intro-text">Ne soyez pas timide !</p>
            <p className="intro-text1">N'hésitez pas à me contacter. Je suis toujours ouverte à discuter de nouveaux projets, d'idées créatives ou d'opportunités de faire partie de vos visions.</p>

            <div className="contact-details">
                <div className="contact-item">
                    <h3><FontAwesomeIcon icon={faEnvelope} /> Envoyez-moi un mail</h3>
                    <p>Email: <a href="mailto:ryhabelmoncerr@gmail.com">omarelloumi64@gmail.com</a></p>
                </div>

                <div className="contact-item">
                    <h3><FontAwesomeIcon icon={faPhone} /> Appelez-moi</h3>
                    <p>Téléphone: <a href="tel:+21629418145">+216 97337694</a></p>
                </div>
            </div>
            <div className="socials-container">
    <div className="social-icons">
        <a href="https://www.linkedin.com/in/omar-elloumi-24268727a" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
    </div>
</div>
<p>"Un CV est une porte d’entrée, mais mon portfolio est une preuve !</p>

            <div className="cv-container">
                 <a href="/OMAR_ELLOUMI_CV.pdf" download="OMAR_ELLOUMI_CV.pdf">
                <button className="download-cv-btn">
                    <FontAwesomeIcon icon={faDownload} /> Télécharger mon CV
                </button>
                </a>
            </div>

        </div>
    );
}

export default Contact;
