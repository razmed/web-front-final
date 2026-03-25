// src/pages/Maritimes.jsx

import React from 'react';
import {
  FaShip,
  FaAnchor,
  FaIndustry,
  FaCogs,
  FaShieldAlt,
  FaHardHat,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa';
import './Maritimes.css';

import marHero    from '../images/maritime/mar.jpg';
import marMain    from '../images/maritime/mar2.png';
import imgCherchel from '../images/maritime/cherchel.jpg';
import imgJijel   from '../images/maritime/jijel.jpg';
import imgBejaia  from '../images/maritime/bejaia.png';
import imgMosta   from '../images/maritime/mosta.png';
import imgArzew   from '../images/maritime/arzew.png';
import imgOran    from '../images/maritime/oran.png';
import imgSaf     from '../images/maritime/saf.png';
import imgSaf2    from '../images/maritime/saf2.png';
import imgSaf3    from '../images/maritime/saf3.png';
import imgOran2   from '../images/maritime/oran2.png';
import imgSidi    from '../images/maritime/sidi.png';

const Maritimes = () => {

  const servicesCards = [
    {
      id: 1,
      icon: <FaShip />,
      title: 'Construction Portuaire',
      description: "Conception et réalisation de quais, jetées, terminaux maritimes et infrastructures portuaires complexes avec expertise technique avancée.",
    },
    {
      id: 2,
      icon: <FaAnchor />,
      title: 'Ouvrages de Protection',
      description: "Digues, brise-lames, épis et ouvrages de défense côtière garantissant la sécurité maritime et la protection des installations.",
    },
    {
      id: 3,
      icon: <FaIndustry />,
      title: 'Aménagements Industriels',
      description: "Zones industrialo-portuaires, bases logistiques maritimes et plateformes offshore avec solutions intégrées et durables.",
    },
    {
      id: 4,
      icon: <FaCogs />,
      title: 'Dragage & Remblayage',
      description: "Opérations de dragage d'entretien et d'approfondissement, remblaiement hydraulique et génie civil sous-marin spécialisé.",
    },
    {
      id: 5,
      icon: <FaShieldAlt />,
      title: 'Maintenance Maritime',
      description: "Entretien préventif et curatif des infrastructures maritimes, réhabilitation d'ouvrages et services de maintenance continue.",
    },
    {
      id: 6,
      icon: <FaHardHat />,
      title: 'Ingénierie Spécialisée',
      description: "Études techniques maritimes, calculs de stabilité, modélisation hydraulique et solutions innovantes d'ingénierie marine.",
    },
  ];

  const features = [
    "Expertise technique reconnue dans les travaux maritimes complexes et stratégiques",
    "Équipements modernes et flotte maritime spécialisée pour tous types d'interventions",
    "Conformité aux normes internationales et standards de sécurité maritime les plus exigeants",
    "Équipes qualifiées et certifiées avec expérience avérée en milieu maritime difficile",
  ];

  const portfolioProjects = [
    {
      id: 1,
      category: 'Développement de Port Stratégique',
      title: 'Port Central de Cherchell',
      location: 'Cherchell, Tipaza',
      detail: 'En consortium avec CSCEC, COSIDER et MEDITRAM',
      image: imgCherchel,
      featured: true,
    },
    {
      id: 2,
      category: 'Travaux de Traitement de Surface Portuaire',
      title: 'Amélioration du Port de Jijel',
      location: 'Jijel',
      image: imgJijel,
    },
    {
      id: 3,
      category: 'Travaux de Traitement de Surface Portuaire',
      title: 'Modernisation du Port de Béjaïa',
      location: 'Béjaïa',
      image: imgBejaia,
    },
    {
      id: 4,
      category: 'Programmes de Réhabilitation de Plateformes',
      title: 'Mise à niveau du Port de Mostaganem',
      location: 'Mostaganem',
      image: imgMosta,
    },
    {
      id: 5,
      category: 'Programmes de Réhabilitation de Plateformes',
      title: "Réhabilitation du Port d'Arzew",
      location: 'Arzew, Oran',
      image: imgArzew,
    },
    {
      id: 6,
      category: 'Programmes de Réhabilitation de Plateformes',
      title: "Modernisation du Port d'Oran",
      location: 'Oran',
      image: imgOran,
    },
    {
      id: 7,
      category: 'Programmes de Réhabilitation de Plateformes',
      title: 'Amélioration du Port de Beni-Saf',
      location: 'Beni-Saf, Aïn Témouchent',
      image: imgSaf,
    },
    {
      id: 8,
      category: 'Opérations de Dragage Spécialisées',
      title: 'Port Commercial de Beni-Saf',
      location: 'Beni-Saf, Aïn Témouchent',
      image: imgSaf2,
    },
    {
      id: 9,
      category: 'Opérations de Dragage Spécialisées',
      title: 'Port de Pêche de Beni-Saf',
      location: 'Beni-Saf, Aïn Témouchent',
      image: imgSaf3,
    },
    {
      id: 10,
      category: "Développement d'Infrastructures Portuaires",
      title: "Travaux de Développement du Port d'Arzew-Oran",
      location: 'Arzew-Oran',
      image: imgOran2,
    },
    {
      id: 11,
      category: "Développement d'Infrastructures Portuaires",
      title: 'Opérations de Dragage du Port de Sidi Lakhdar',
      location: 'Sidi Lakhdar, Mostaganem',
      image: imgSidi,
    },
  ];

  const achievements = [
    { number: '50+', label: 'Projets Maritimes',  detail: 'Livrés avec succès'    },
    { number: '2M',  label: 'm³ Dragués',         detail: 'Volume total traité'   },
    { number: '15',  label: 'Ports Équipés',       detail: 'Infrastructure moderne' },
    { number: '30+', label: "Ans d'Expertise",     detail: 'Savoir-faire confirmé' },
  ];

  return (
    <div className="Maritimes-page">

      {/* ==================== HERO ==================== */}
      <section
        className="Maritimes-hero"
        style={{ backgroundImage: `url(${marHero})` }}
      >
        <div className="Maritimes-hero-overlay"></div>
        <div className="Maritimes-hero-content">
          <h1 className="Maritimes-title">Infrastructures Maritimes</h1>
          <p className="Maritimes-description">
            <strong>EXPERTISE AVÉRÉE EN INFRASTRUCTURES PORTUAIRES ET MARITIMES STRATÉGIQUES</strong>
            En tant que spécialiste dans la mise en œuvre d'infrastructures maritimes
            stratégiques, SNTP maîtrise de manière exhaustive l'ensemble de la chaîne
            de valeur des travaux de génie maritime.
          </p>
        </div>
      </section>

      {/* ==================== SECTION PRINCIPALE ==================== */}
      <section className="Maritimes-main-section">

        {/* Titre centré — pleine largeur */}
        <div className="Maritimes-main-header">
          <span className="Maritimes-subtitle">NOTRE EXPERTISE</span>
          <h2 className="Maritimes-main-title">
            Spécialiste des Infrastructures Maritimes Stratégiques
          </h2>
        </div>

        {/* Grille : texte gauche | image droite */}
        <div className="Maritimes-content-grid">

          <div className="Maritimes-text-box">
            <p className="Maritimes-description-text">
              La SNTP commande une maîtrise complète de la chaîne de valeur des travaux
              d'ingénierie marine. Notre expertise offre des solutions portuaires durables
              qui intègrent harmonieusement l'innovation technique à l'excellence opérationnelle.
            </p>
            <ul className="Maritimes-features-list">
              {features.map((feature, index) => (
                <li key={index} className="Maritimes-feature-item">
                  <span className="Maritimes-feature-bullet"><FaCheckCircle /></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="Maritimes-image-wrapper">
            <div className="Maritimes-image-container">
              <img src={marMain} alt="Infrastructure Maritime SNTP" className="Maritimes-img" />
              <div className="Maritimes-sntp-badge">
                <FaShip />
                <span>SNTP Maritime</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== SECTION SERVICES ==================== */}
      <section className="Maritimes-projects-section">
        <div className="Maritimes-projects-header">
          <p className="Maritimes-projects-subtitle">INFRASTRUCTURES CRITIQUES ET OPÉRATIONS SPÉCIALISÉES</p>
          <h2 className="Maritimes-projects-title">Nos Services Maritimes</h2>
          <div className="Maritimes-projects-divider"></div>
          <p className="Maritimes-projects-intro">
            Solutions complètes d'ingénierie maritime couvrant l'ensemble du cycle de vie
            des infrastructures portuaires et côtières stratégiques.
          </p>
        </div>
        <div className="Maritimes-projects-grid">
          {servicesCards.map((card) => (
            <div key={card.id} className="Maritimes-project-card">
              <div className="Maritimes-project-icon">{card.icon}</div>
              <h3 className="Maritimes-project-card-title">{card.title}</h3>
              <p className="Maritimes-project-card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION PORTFOLIO ==================== */}
      <section className="Maritimes-portfolio-section">
        <div className="Maritimes-portfolio-header">
          <p className="Maritimes-portfolio-subtitle">RÉALISATIONS STRATÉGIQUES</p>
          <h2 className="Maritimes-portfolio-title">Portfolio Sélectionné des Réalisations SNTP</h2>
          <div className="Maritimes-portfolio-divider"></div>
          <p className="Maritimes-portfolio-intro">
            Découvrez nos projets phares d'infrastructures portuaires à travers l'Algérie,
            témoignant de notre expertise technique et de notre excellence opérationnelle.
          </p>
        </div>
        <div className="Maritimes-portfolio-grid">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className={`Maritimes-portfolio-project-card${project.featured ? ' featured' : ''}`}
            >
              <div className="Maritimes-portfolio-project-image">
                <img src={project.image} alt={project.title} />
                <div className="Maritimes-portfolio-project-overlay"></div>
              </div>
              <div className="Maritimes-portfolio-project-content">
                <span className="Maritimes-portfolio-project-category">{project.category}</span>
                <h3 className="Maritimes-portfolio-project-title">{project.title}</h3>
                <p className="Maritimes-portfolio-project-location">
                  <FaShip /> {project.location}
                </p>
                {project.detail && (
                  <div className="Maritimes-portfolio-project-detail">{project.detail}</div>
                )}
              </div>
              {project.featured && (
                <div className="Maritimes-portfolio-project-badge">
                  <FaShip />
                  <span>Projet Phare</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION ACHIEVEMENTS ==================== */}
      <section className="Maritimes-achievements-section">
        <div className="Maritimes-achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="Maritimes-achievement-item">
              <div className="Maritimes-achievement-number">{achievement.number}</div>
              <div className="Maritimes-achievement-label">{achievement.label}</div>
              <div className="Maritimes-achievement-detail">{achievement.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION CTA ==================== */}
      <section className="Maritimes-cta-section">
        <div className="Maritimes-cta-content">
          <h2 className="Maritimes-cta-title">Excellence en Génie Maritime</h2>
          <p className="Maritimes-cta-description">
            Développement et modernisation portuaire avancés • Expertise en opérations
            de dragage spécialisées • Solutions d'infrastructures côtières haute performance
            • Développement d'installations marines de pointe
          </p>
          <a href="/contact" className="Maritimes-cta-btn">
            <span>Démarrer Votre Projet</span>
            <FaArrowRight />
          </a>
        </div>
      </section>

    </div>
  );
};

export default Maritimes;
