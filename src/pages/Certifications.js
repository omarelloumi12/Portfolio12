import React from "react";
import "./Certifications.css";

function Certifications() {
  return (
    <section className="certifications-section">
      <h1 className="section-title">
        MES <span className="highlight">CERTIFICATIONS</span>
      </h1>
     <div className="certification-card">
  <img src={`${process.env.PUBLIC_URL}/images/certifbigdata.png`} alt="Certification" className="certification-image" />

  <div className="certification-details">
    <h2>Big Data Engineer Certificate</h2>
    <p>
      <strong>Date d'obtention :</strong> 27 DEC 2023
    </p>
    <p>
      <strong>Description :</strong>
    </p>
    <ul>
      <li>
        - Expertise dans l'utilisation des technologies Big Data comme Apache Spark, Hadoop, HDFS et MapReduce pour le traitement de données massives.
      </li>
      <li>
        - Compétences en gestion et optimisation des pipelines de données distribués grâce à Yarn et Zookeeper.
      </li>
      <li>
        - Mise en œuvre de solutions innovantes pour résoudre des défis métier complexes via des architectures Big Data modernes.
      </li>
    </ul>
    <p>
      <strong>Mots clés :</strong> Apache Spark, Big Data, Hadoop, HDFS, Zookeeper, Yarn, MapReduce
    </p>
  </div>
</div>

      <div className="certification-card">
        <img
          src="/images/certif logo.png" // Remplacez par le chemin réel de l'image
          alt="Certification"
          className="certification-image"
        />
        <div className="certification-details">
          <h2>Professional Logo Production with IA</h2>
          <p>
            <strong>Date d'obtention :</strong> 24 Oct 2024
          </p>
          <p>
            <strong>Description :</strong>
          </p>
          <ul>
            <li>
            - Prompt Engineering for Logo Production with Artificial Intelligence
            </li>
            <li>
            - Use of Artificial Intelligence Logo Production Applications
            </li>
            <li>
            - Content Production with Artificial Intelligence
            </li>
          </ul>
          <p>
            <strong>Mots clés : </strong>
             Ideogram - IA - Logo
          </p>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
