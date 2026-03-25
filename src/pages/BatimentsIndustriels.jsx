import React from 'react';
import { FaIndustry, FaHardHat, FaCogs, FaCheckCircle, FaBuilding, FaWarehouse, FaCity, FaLeaf, FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa';
import './BatimentsIndustriels.css';
import batimentImage from '../images/batiment.png';
const BatimentsIndustriels = () => {
  // Introduction cards
  const introCards = [
    {
      id: 1,
      icon: <FaIndustry />,
      title: 'Expertise Complète',
      text: 'Conception, construction et livraison clés en main de bâtiments industriels adaptés à vos besoins spécifiques.'
    },
    {
      id: 2,
      icon: <FaHardHat />,
      title: 'Solutions Sur-Mesure',
      text: 'Chaque projet est unique. Nous concevons des infrastructures parfaitement adaptées à vos contraintes opérationnelles.'
    },
    {
      id: 3,
      icon: <FaCogs />,
      title: 'Innovation & Performance',
      text: 'Technologies de pointe et matériaux durables pour des bâtiments performants, économes et respectueux de l\'environnement.'
    }
  ];

  // Projects showcase
  const projects = [
    {
      id: 1,
      title: 'Complexe Industriel Hassi Messaoud',
      location: 'Hassi Messaoud, Ouargla',
      description: 'Construction d\'un complexe industriel de 15 000 m² pour le secteur pétrolier incluant zones de production, stockage et bureaux administratifs.',
      specs: [
        'Surface: 15 000 m²',
        'Hauteur sous plafond: 12 mètres',
        'Capacité de charge: 5 tonnes/m²',
        'Délai: 18 mois'
      ]
    },
    {
      id: 2,
      title: 'Plateforme Logistique Rouiba',
      location: 'Rouiba, Alger',
      description: 'Plateforme logistique moderne de 20 000 m² avec système de tri automatisé, quais de chargement et espaces de stockage climatisés.',
      specs: [
        'Surface: 20 000 m²',
        'Quais de chargement: 24 postes',
        'Système automatisé',
        'Certifié HQE'
      ]
    },
    {
      id: 3,
      title: 'Usine Pharmaceutique Sidi Abdellah',
      location: 'Sidi Abdellah, Alger',
      description: 'Usine de production pharmaceutique répondant aux normes internationales avec salles blanches, laboratoires et zones de conditionnement.',
      specs: [
        'Surface: 8 000 m²',
        'Salles blanches ISO 7',
        'Contrôle environnemental',
        'Normes GMP'
      ]
    }
  ];

  // Building types
  const buildingTypes = [
    {
      id: 1,
      title: 'Usines de Production',
      text: 'Espaces industriels optimisés pour la production manufacturière avec infrastructures techniques adaptées.'
    },
    {
      id: 2,
      title: 'Entrepôts & Stockage',
      text: 'Plateformes logistiques et entrepôts dimensionnés pour vos besoins de stockage et distribution.'
    },
    {
      id: 3,
      title: 'Ateliers Techniques',
      text: 'Espaces de travail équipés pour maintenance, assemblage et opérations techniques spécialisées.'
    },
    {
      id: 4,
      title: 'Hangars Industriels',
      text: 'Structures métalliques robustes pour activités industrielles lourdes et stockage de grande hauteur.'
    },
    {
      id: 5,
      title: 'Zones de Production',
      text: 'Environnements contrôlés pour industries pharmaceutiques, agroalimentaires et électroniques.'
    },
    {
      id: 6,
      title: 'Centres Logistiques',
      text: 'Plateformes multimodales intégrant tri, conditionnement et distribution avec systèmes automatisés.'
    }
  ];

  // Technical expertise
  const expertise = [
    {
      id: 1,
      number: '01',
      title: 'Conception Architecturale',
      text: 'Plans optimisés pour flux logistiques, ergonomie et efficacité opérationnelle.'
    },
    {
      id: 2,
      number: '02',
      title: 'Structure & Génie Civil',
      text: 'Fondations renforcées, structures métalliques et béton pour charges lourdes.'
    },
    {
      id: 3,
      number: '03',
      title: 'Équipements Techniques',
      text: 'HVAC industriel, électricité HT/BT, automatisation et systèmes de sécurité.'
    },
    {
      id: 4,
      number: '04',
      title: 'Aménagements Extérieurs',
      text: 'Voiries poids lourds, parkings, réseaux VRD et espaces de manœuvre.'
    },
    {
      id: 5,
      number: '05',
      title: 'Certifications & Normes',
      text: 'Conformité aux réglementations environnementales, sécurité et qualité.'
    },
    {
      id: 6,
      number: '06',
      title: 'Maintenance & Suivi',
      text: 'Services après-livraison, maintenance préventive et support technique.'
    }
  ];

  // Competitive advantages
  const advantages = [
    {
      id: 1,
      title: 'Expérience Industrielle',
      text: '45 ans d\'expertise dans la construction d\'infrastructures industrielles majeures en Algérie.'
    },
    {
      id: 2,
      title: 'Équipes Spécialisées',
      text: 'Ingénieurs et techniciens formés aux spécificités du bâtiment industriel.'
    },
    {
      id: 3,
      title: 'Gestion Intégrée',
      text: 'Maîtrise complète du projet de l\'étude de faisabilité à la réception des travaux.'
    },
    {
      id: 4,
      title: 'Respect des Délais',
      text: 'Planification rigoureuse et coordination optimale pour livraison dans les temps.'
    },
    {
      id: 5,
      title: 'Qualité Garantie',
      text: 'Contrôles qualité stricts et matériaux certifiés pour des ouvrages durables.'
    },
    {
      id: 6,
      title: 'Solutions Innovantes',
      text: 'Technologies modernes et approches éco-responsables pour performance optimale.'
    }
  ];

  return (
    <div className="BatimentsIndustriels-page">
      {/* Hero Section */}
      <section className="BatimentsIndustriels-hero" style={{backgroundImage: `url(${batimentImage})`}}>
        <div className="BatimentsIndustriels-hero-overlay"></div>
        <div className="BatimentsIndustriels-hero-content BatimentsIndustriels-container">
          
          <h1 className="BatimentsIndustriels-hero-title">
            Bâtiments Industriels
          </h1>
          <p className="BatimentsIndustriels-hero-subtitle">
            Construction de bâtiments industriels performants : usines, entrepôts, ateliers et plateformes logistiques conçus pour optimiser vos opérations de production et stockage.
          </p>
          
        </div>
      </section>

      {/* ==================== SECTION SOLUTIONS URBAINES INTÉGRÉES ==================== */}
      <section className="expertise-section">
        <div className="expertise-container">
          {/* En-tête de section */}
          <div className="expertise-header">
            <div className="expertise-header-line"></div>
            <h2 className="expertise-main-title">
              <span className="title-prefix">SOLUTIONS URBAINES INTÉGRÉES</span>
              <span className="title-emphasis">BÂTIR LES TERRITOIRES DE DEMAIN</span>
            </h2>
            <div className="expertise-header-line"></div>
          </div>

          {/* Carte principale - Solutions Urbaines */}
          <div className="expertise-featured-card">
            
            <div className="featured-card-content">
              <h3 className="featured-card-title">Acteur Majeur de la Transformation Urbaine</h3>
              <p className="featured-card-description">
                SNTP s'impose comme acteur majeur de la transformation urbaine en Algérie. L'entreprise conçoit et réalise des solutions infrastructurelles complètes qui allient performance fonctionnelle et durabilité environnementale, créant ainsi des espaces de vie durables adaptés aux réseaux urbains de demain.
              </p>
            </div>
            <div className="featured-card-decoration">
              <div className="decoration-circle circle-1"></div>
              <div className="decoration-circle circle-2"></div>
              <div className="decoration-circle circle-3"></div>
            </div>
          </div>

        </div>
      </section>

      
      {/* ==================== SECTION NOTRE EXPERTISE ==================== */}
<section className="expertise-skills-section">
  <div className="expertise-skills-container">
    {/* En-tête de section */}
    <div className="expertise-skills-header">
      <div className="expertise-skills-header-line"></div>
      <h2 className="expertise-skills-main-title">
        <span className="skills-title-text">NOTRE EXPERTISE</span>
      </h2>
      <div className="expertise-skills-header-line"></div>
    </div>

    {/* Grille des deux catégories principales */}
    <div className="expertise-skills-grid">
      
      {/* INFRASTRUCTURES CRITIQUES */}
      <div className="expertise-skills-card">
        <div className="skills-card-header">
          <div className="skills-card-icon">
            <FaBuilding />
          </div>
          <h3 className="skills-card-title">INFRASTRUCTURES CRITIQUES</h3>
        </div>
        <div className="skills-card-content">
          <p className="skills-card-subtitle">Solutions avancées de développement urbain :</p>
          <ul className="skills-card-list">
            <li>
              <span className="list-bullet"></span>
              <span className="list-text">Développement de complexes résidentiels à grande échelle</span>
            </li>
            <li>
              <span className="list-bullet"></span>
              <span className="list-text">Infrastructures pour grands équipements publics</span>
            </li>
            <li>
              <span className="list-bullet"></span>
              <span className="list-text">Réseaux urbains de pointe</span>
            </li>
            <li>
              <span className="list-bullet"></span>
              <span className="list-text">Solutions énergétiques innovantes</span>
            </li>
            <li>
              <span className="list-bullet"></span>
              <span className="list-text">Systèmes d'intégration pour villes intelligentes</span>
            </li>
          </ul>
        </div>
        <div className="skills-card-decoration">
          <div className="skills-decoration-line"></div>
        </div>
      </div>

      {/* OPÉRATIONS SPÉCIALISÉES */}
      <div className="expertise-skills-card">
        <div className="skills-card-header">
          <div className="skills-card-icon">
            <FaCogs />
          </div>
          <h3 className="skills-card-title">OPÉRATIONS SPÉCIALISÉES</h3>
        </div>
        <div className="skills-card-content">
          <p className="skills-card-subtitle">Interventions techniques avancées :</p>
          <ul className="skills-card-list">
            <li>
              <span className="list-bullet"></span>
              <span className="list-text">Réseaux de services optimisés</span>
            </li>
            <li>
              <span className="list-bullet"></span>
              <span className="list-text">Voiries urbaines à haute performance</span>
            </li>
            <li>
              <span className="list-bullet"></span>
              <span className="list-text">Intégration environnementale experte</span>
            </li>
            <li>
              <span className="list-bullet"></span>
              <span className="list-text">Solutions d'infrastructures durables</span>
            </li>
            <li>
              <span className="list-bullet"></span>
              <span className="list-text">Intégration environnementale certifiée ISO 14001</span>
            </li>
            <li>
              <span className="list-bullet"></span>
              <span className="list-text">Conception d'infrastructures résilientes face au climat</span>
            </li>
            <li>
              <span className="list-bullet"></span>
              <span className="list-text">Systèmes avancés de gestion des eaux pluviales</span>
            </li>
          </ul>
        </div>
        <div className="skills-card-decoration">
          <div className="skills-decoration-line"></div>
        </div>
      </div>

    </div>
  </div>
</section>
{/* ==================== SECTION RÉALISATIONS SNTP ==================== */}
<section className="realisations-section">
  <div className="realisations-container">
    {/* Grand titre de section */}
    <div className="realisations-header">
      <div className="realisations-header-line"></div>
      <h2 className="realisations-main-title">
        <span className="realisations-title-main">SÉLECTION DE RÉALISATIONS DE LA SNTP</span>
      </h2>
      <div className="realisations-header-line"></div>
    </div>

    {/* DÉVELOPPEMENTS RÉSIDENTIELS */}
    <div className="realisation-block">
      <div className="realisation-image-wrapper">
        <img 
          src={require('../images/indu1.png')} 
          alt="Développements Résidentiels" 
          className="realisation-image"
        />
        <div className="image-overlay"></div>
      </div>
      <div className="realisation-content">
        <div className="realisation-content-header">
          <div className="realisation-number">01</div>
          <h3 className="realisation-category-title">DÉVELOPPEMENTS RÉSIDENTIELS</h3>
        </div>
        <ul className="realisation-projects-list">
          <li className="project-item">
            <span className="project-bullet"></span>
            <p className="project-text">
              Développement et viabilisation complets des infrastructures pour le complexe résidentiel de <strong>8 000 logements</strong> d'EVNB à <strong>Bouinan</strong>.
            </p>
          </li>
          <li className="project-item">
            <span className="project-bullet"></span>
            <p className="project-text">
              Travaux d'infrastructures complets pour <strong>2 650 logements LPL</strong> à <strong>Béjaïa</strong>.
            </p>
          </li>
          <li className="project-item">
            <span className="project-bullet"></span>
            <p className="project-text">
              Mise en œuvre de réseaux d'infrastructures complets pour <strong>2 270 logements</strong> à <strong>Béjaïa</strong>.
            </p>
          </li>
          <li className="project-item">
            <span className="project-bullet"></span>
            <p className="project-text">
              Réalisation complète des infrastructures pour <strong>2 000 logements</strong> à <strong>Béjaïa</strong>.
            </p>
          </li>
          <li className="project-item">
            <span className="project-bullet"></span>
            <p className="project-text">
              Développement des infrastructures pour le projet résidentiel de <strong>3 000 logements</strong> à <strong>Bouinane</strong>.
            </p>
          </li>
          <li className="project-item">
            <span className="project-bullet"></span>
            <p className="project-text">
              Mise en œuvre d'infrastructures urbaines sur <strong>63 hectares</strong> à <strong>Bouinane Amroussa</strong>.
            </p>
          </li>
        </ul>
      </div>
    </div>

    {/* PROJETS D'ÉQUIPEMENTS PUBLICS */}
    <div className="realisation-block realisation-block-reverse">
      <div className="realisation-content">
        <div className="realisation-content-header">
          <div className="realisation-number">02</div>
          <h3 className="realisation-category-title">PROJETS D'ÉQUIPEMENTS PUBLICS</h3>
        </div>
        <ul className="realisation-projects-list">
          <li className="project-item">
            <span className="project-bullet"></span>
            <p className="project-text">
              Développement et viabilisation des infrastructures du complexe de <strong>stade multisports de 40 000 places</strong> sur <strong>40 hectares</strong> à <strong>Douira</strong>.
            </p>
          </li>
          <li className="project-item">
            <span className="project-bullet"></span>
            <p className="project-text">
              Mise en place de systèmes d'<strong>éclairage public photovoltaïque</strong> sur <strong>450 hectares</strong> dans la zone prioritaire de <strong>Bouinan</strong>.
            </p>
          </li>
          <li className="project-item">
            <span className="project-bullet"></span>
            <p className="project-text">
              Développement d'infrastructures complètes pour la <strong>zone industrielle d'Oued Nechou</strong> à <strong>Ghardaïa</strong>.
            </p>
          </li>
          <li className="project-item">
            <span className="project-bullet"></span>
            <p className="project-text">
              Développement des infrastructures de la <strong>zone industrielle de Dirah</strong> s'étendant sur <strong>130 hectares</strong> à <strong>Bouira</strong>.
            </p>
          </li>
        </ul>
      </div>
      <div className="realisation-image-wrapper">
        <img 
          src={require('../images/indu2.png')} 
          alt="Projets d'Équipements Publics" 
          className="realisation-image"
        />
        <div className="image-overlay"></div>
      </div>
    </div>

  </div>
</section>

      

      

      

      

      
    </div>
  );
};

export default BatimentsIndustriels;
