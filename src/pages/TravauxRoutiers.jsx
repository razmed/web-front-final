import React, { useState, useEffect, useRef } from 'react';
import { FaRoad, FaTools, FaHardHat, FaCheckCircle, FaCogs, FaUsers, FaLeaf, FaClipboardCheck, FaArrowRight, FaDownload, FaChevronLeft, FaChevronRight, FaTrain, FaTruck, FaMountain, FaRoute, FaTrophy, FaProjectDiagram, FaSun, FaDrawPolygon, FaLightbulb, FaTasks } from 'react-icons/fa';
import './TravauxRoutiers.css';


const TravauxRoutiers = () => {
  // Cartes "Notre Expertise Clé" - Section Mission Principale
  const expertiseCards = [
    {
      id: 1,
      icon: <FaRoad />,
      title: "Routes & Autoroutes",
      description: "Conception et réalisation d'infrastructures routières modernes, du terrassement à la signalisation."
    },
    {
      id: 2,
      icon: <FaTools />,
      title: "Entretien & Réhabilitation",
      description: "Maintenance préventive et curative pour prolonger la durée de vie de vos infrastructures existantes."
    },
    {
      id: 3,
      icon: <FaHardHat />,
      title: "Ouvrages d'Art",
      description: "Construction de ponts, viaducs et tunnels avec expertise technique et respect des normes internationales."
    }
  ];


  // Cartes "Nos Moyens" (Section Capacité)
  const capaciteCards = [
    {
      id: 1,
      image: "/images/equipements-modernes.jpg",
      title: "Équipements de pointe"
    },
    {
      id: 2,
      image: "/images/laboratoire.jpg",
      title: "Laboratoires accrédités"
    },
    {
      id: 3,
      image: "/images/equipes.jpg",
      title: "Équipes qualifiées"
    },
    {
      id: 4,
      image: "/images/gestion-projet.jpg",
      title: "Gestion de projets"
    }
  ];


  // Données d'expertise détaillée pour le carrousel
  const expertiseDetaillee = [
    {
      id: 1,
      title: "Solutions d'ingénierie routière avancées"
    },
    {
      id: 2,
      title: "Construction d'autoroutes et de voies rapides multivoies de dernière génération"
    },
    {
      id: 3,
      title: "Développement de corridors autoroutiers stratégiques"
    },
    {
      id: 4,
      title: "Conception et réalisation de routes nationales et de rocades par SNTP"
    },
    {
      id: 5,
      title: "Systèmes modernes de chaussées doubles réalisés en collaboration avec le groupement GRAZB"
    },
    {
      id: 6,
      title: "Construction de sections routières à 5, 4 et 2 voies"
    },
    {
      id: 7,
      title: "Réalisation de la route R2 sur 3,5 km en phase primaire, suivie d'une phase secondaire d'un kilomètre"
    },
    {
      id: 8,
      title: "Lot n°4 d'une valeur d'environ 97 millions USD"
    },
    {
      id: 9,
      title: "Tronçon de 3,55 km d'une valeur de 24 millions USD"
    },
    {
      id: 10,
      title: "Modernisation de la Route Nationale 54 entre Bordj Omar Driss et Amguid, s'étendant sur 50 kilomètres"
    },
    {
      id: 11,
      title: "Spécialisation dans les travaux CW au KP 234, couvrant 50 kilomètres"
    }
  ];

  // Données pour Développement d'Infrastructures Critiques
  const infrastructuresCritiques = [
    {
      id: 1,
      icon: <FaCogs />,
      title: "Solutions d'ingénierie routière avancées"
    },
    {
      id: 2,
      icon: <FaRoute />,
      title: "Systèmes autoroutiers multivoies de pointe"
    },
    {
      id: 3,
      icon: <FaTrain />,
      title: "Connexions ferroviaires stratégiques"
    },
    {
      id: 4,
      icon: <FaTruck />,
      title: "Corridors logistiques modernes"
    },
    {
      id: 5,
      icon: <FaMountain />,
      title: "Solutions adaptées aux contraintes géographiques extrêmes"
    }
  ];

  // Données pour Opérations Spécialisées
  const operationsSpecialisees = [
    {
      id: 1,
      icon: <FaTrophy />,
      title: "Excellence de projet"
    },
    {
      id: 2,
      icon: <FaProjectDiagram />,
      title: "Méthodologies de construction de projet"
    },
    {
      id: 3,
      icon: <FaSun />,
      title: "Construction en milieu désertique de pointe"
    },
    {
      id: 4,
      icon: <FaDrawPolygon />,
      title: "Solutions avancées d'ingénierie de chaussées"
    },
    {
      id: 5,
      icon: <FaLightbulb />,
      title: "Ingénierie adaptative moderne"
    },
    {
      id: 6,
      icon: <FaTasks />,
      title: "Systèmes complets de gestion de grands projets"
    }
  ];

  // État pour le carrousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Fonction pour aller à la carte suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === expertiseDetaillee.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour aller à la carte précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? expertiseDetaillee.length - 1 : prevIndex - 1
    );
  };

  // Auto-play du carrousel
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === expertiseDetaillee.length - 1 ? 0 : prevIndex + 1
        );
      }, 2500);

      return () => clearInterval(interval);
    }
  }, [isHovered, expertiseDetaillee.length]);

  // Barres de progression
  const progressData = [
    { label: "Normes de qualité respectées", percentage: 100 },
    { label: "Taux de satisfaction client", percentage: 97 },
    { label: "Projets livrés dans les délais", percentage: 92 }
  ];

  // Fonction pour obtenir les 3 cartes visibles
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % expertiseDetaillee.length;
      cards.push(expertiseDetaillee[index]);
    }
    return cards;
  };


  return (
    <div className="TravauxRoutiers">
      {/* ==================== HERO SECTION AVEC VIDÉO ==================== */}
      <section className="TravauxRoutiers-hero">
        {/* Vidéo de fond */}
        <video 
          className="TravauxRoutiers-hero-video"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/videos/route.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>

        <div className="TravauxRoutiers-hero-overlay" />
        <div className="TravauxRoutiers-container">
          <div className="TravauxRoutiers-hero-content">
            <h1 className="TravauxRoutiers-title">ROUTES ET AUTOROUTES  EXCELLENCE EN INGÉNIERIE DES GRANDS RÉSEAUX DE TRANSPORT</h1>
            <p className="TravauxRoutiers-description">
              Qualification Catégorie 9 en Travaux Publics, l'Excellence comme Norme
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SECTION NOTRE EXPERTISE - CARROUSEL ==================== */}
      <section className="TravauxRoutiers-expertise">
        <div className="TravauxRoutiers-container">
          {/* En-tête de section */}
          <div className="expertise-header">
            <h2 className="expertise-title">Notre Expertise</h2>
            <div className="expertise-divider"></div>
            
          </div>

          {/* Carrousel */}
          <div 
            className="carousel-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Bouton Précédent */}
            <button 
              className="carousel-arrow carousel-arrow-left" 
              onClick={prevSlide}
              aria-label="Précédent"
            >
              <FaChevronLeft />
            </button>

            {/* Cartes du carrousel */}
            <div className="carousel-wrapper">
              <div className="carousel-track">
                {getVisibleCards().map((item, index) => (
                  <div 
                    key={`${item.id}-${currentIndex}-${index}`} 
                    className="carousel-card"
                  >
                    <div className="carousel-card-content">
                      <p className="carousel-card-title">{item.title}</p>
                    </div>
                    <div className="carousel-card-footer">
                      <div className="carousel-card-line"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bouton Suivant */}
            <button 
              className="carousel-arrow carousel-arrow-right" 
              onClick={nextSlide}
              aria-label="Suivant"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* ==================== SECTION INFRASTRUCTURES CRITIQUES ==================== */}
<section className="infrastructures-critiques">
  <div className="TravauxRoutiers-container">
    {/* En-tête de section */}
    <div className="infrastructures-header">
      <h2 className="infrastructures-title">Développement d'Infrastructures Critiques</h2>
      
      
    </div>

    {/* Contenu avec image et liste */}
    <div className="infrastructures-content">
      {/* Image à gauche */}
      <div className="infrastructures-image-wrapper">
        <div className="infrastructures-image-container">
          <img 
            src="/images/developement.png" 
            alt="Développement d'infrastructures" 
            className="infrastructures-image"
          />
          <div className="infrastructures-image-overlay"></div>
        </div>
      </div>

      {/* Liste à droite */}
      <div className="infrastructures-list-wrapper">
        <ul className="infrastructures-list">
          <li className="infrastructures-list-item">
            <span className="infrastructures-item-text">
              Solutions d'ingénierie routière avancées
            </span>
          </li>
          <li className="infrastructures-list-item">
            <span className="infrastructures-item-text">
              Systèmes autoroutiers multivoies de pointe
            </span>
          </li>
          <li className="infrastructures-list-item">
            <span className="infrastructures-item-text">
              Connexions ferroviaires stratégiques
            </span>
          </li>
          <li className="infrastructures-list-item">
            <span className="infrastructures-item-text">
              Corridors logistiques modernes
            </span>
          </li>
          <li className="infrastructures-list-item">
            <span className="infrastructures-item-text">
              Solutions d'ingénierie adaptées aux contraintes géographiques extrêmes
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>



      {/* ==================== SECTION OPÉRATIONS SPÉCIALISÉES ==================== */}
      <section className="operations-specialisees">
        <div className="TravauxRoutiers-container">
          {/* En-tête de section */}
          <div className="operations-header">
            <h2 className="operations-title">Opérations Spécialisées</h2>
            
          </div>

          {/* Grille de cartes */}
          <div className="operations-grid">
            {operationsSpecialisees.map((item) => (
              <div key={item.id} className="operation-card">
                <div className="operation-icon-wrapper">
                  <div className="operation-icon">
                    {item.icon}
                  </div>
                </div>
                <h3 className="operation-card-title">{item.title}</h3>
                <div className="operation-card-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ==================== SECTION PORTFOLIO ROUTIER ==================== */}
<section className="portfolio-routier">
  <div className="portfolio-image-container">
    <img 
      src="/images/route.png" 
      alt="Portfolio des réalisations SNTP" 
      className="portfolio-image"
    />
    <div className="portfolio-overlay"></div>
    <div className="portfolio-content">
      <h2 className="portfolio-title">
        INGÉNIERIE ROUTIÈRE – PORTFOLIO SÉLECTIONNÉ DES RÉALISATIONS SNTP
      </h2>
      <div className="portfolio-line"></div>
    </div>
  </div>
</section>
{/* ==================== SECTION PROJETS INTERNATIONAUX ==================== */}
<section className="projets-internationaux">
  <div className="TravauxRoutiers-container">
    <h3 className="projets-section-title">Projets Internationaux Stratégiques</h3>

    {/* Projet 1 : Autoroute Transsaharienne */}
    <div className="projet-block">
      <div className="projet-title-wrapper">
        <h3 className="projet-title">Autoroute Transsaharienne Tlemcen-Trara (Algérie)</h3>
      </div>
      <div className="projet-content">
        <p className="projet-description">
          Réalisation pour Techniprom dans le cadre de la gestion du plan Bureau UA, d'une valeur approximative de 87 millions USD.
        </p>
      </div>
    </div>

    {/* Développement des Grands Axes Routiers Nationaux */}
<div className="projets-section">
  <h3 className="projets-section-title">Développement des Grands Axes Routiers Nationaux</h3>
  
  <div className="axes-routiers-container">
    <div className="axe-card">
      <div className="axe-card-content">
        <h4 className="axe-card-title">Construction Stratégique de la Route Nationale 127 (RN127) en Algérie</h4>
        <p className="axe-card-description">
          Système moderne de double chaussée exécuté en collaboration avec le groupement OB262.
        </p>
        <div className="axe-card-footer">
          <div className="axe-value-box">
            <span className="axe-value-label">VALEUR APPROXIMATIVE</span>
            <span className="axe-value-amount">32 millions USD</span>
          </div>
        </div>
      </div>
    </div>

    <div className="axe-card">
      <div className="axe-card-content">
        <h4 className="axe-card-title">Réalisation et Livraison</h4>
        <p className="axe-card-description">
          Contrats avancés en cours d'exécution à El Foula, s'étendant sur 50 kilomètres.
        </p>
        <div className="axe-card-footer">
          <div className="axe-distance-badge">50 km</div>
        </div>
      </div>
    </div>

    <div className="axe-card">
      <div className="axe-card-content">
        <h4 className="axe-card-title">Construction de la Route d'Accès Stratégique</h4>
        <p className="axe-card-description">
          Ingénierie et construction reliant plusieurs zones stratégiques.
        </p>
      </div>
    </div>

    <div className="axe-card">
      <div className="axe-card-content">
        <h4 className="axe-card-title">Réalisation de 5 Routes Principales</h4>
        <p className="axe-card-description">
          Construction de points de distribution secondaires et mise en œuvre de solutions intégrées.
        </p>
      </div>
    </div>

    <div className="axe-card">
      <div className="axe-card-content">
        <h4 className="axe-card-title">Extension de la Route Nationale 54</h4>
        <p className="axe-card-description">
          Entre Bordj Omar Driss et Amguid, projet d'envergure internationale au KP 234, s'étendant sur 50 kilomètres.
        </p>
        <div className="axe-card-footer">
          <div className="axe-distance-badge">50 km</div>
        </div>
      </div>
    </div>
  </div>
</div>


    {/* Développement du Réseau Stratégique Régional */}
    <div className="projets-section">
      <h3 className="projets-section-title">Développement du Réseau Stratégique Régional</h3>
      
      <div className="projets-list">
        <div className="projet-list-item">
          <div className="projet-list-icon">
            <div className="projet-list-dot"></div>
          </div>
          <div className="projet-list-content">
            <h4 className="projet-list-title">Programme Complet d'Infrastructure de Transport dans la Province d'El Oued</h4>
            <p className="projet-list-description">Livraison de plus de 50 kilomètres conformes aux normes internationales.</p>
          </div>
        </div>

        <div className="projet-list-item">
          <div className="projet-list-icon">
            <div className="projet-list-dot"></div>
          </div>
          <div className="projet-list-content">
            <h4 className="projet-list-title">Modernisation de la Route Nationale Q3 à El Tarf</h4>
            <p className="projet-list-description">Utilisant des solutions d'ingénierie avancées.</p>
          </div>
        </div>

        <div className="projet-list-item">
          <div className="projet-list-icon">
            <div className="projet-list-dot"></div>
          </div>
          <div className="projet-list-content">
            <h4 className="projet-list-title">Mise en Œuvre Étendue du Réseau Routier dans la Province de Tamanrasset</h4>
            <p className="projet-list-description">Livraison de plus de 145 kilomètres de voiries spécialisées.</p>
          </div>
        </div>

        <div className="projet-list-item">
          <div className="projet-list-icon">
            <div className="projet-list-dot"></div>
          </div>
          <div className="projet-list-content">
            <h4 className="projet-list-title">Projet à Thaouya</h4>
            <p className="projet-list-description">S'étendant sur plus de 195 kilomètres avec expertise géologique spécialisée et développement des transports.</p>
          </div>
        </div>

        <div className="projet-list-item">
          <div className="projet-list-icon">
            <div className="projet-list-dot"></div>
          </div>
          <div className="projet-list-content">
            <h4 className="projet-list-title">Développement du Réseau Routier dans la Province de Ouargla</h4>
            <p className="projet-list-description">Comprenant 50 kilomètres d'infrastructures de transport pour les opérations SONATRACH.</p>
          </div>
        </div>

        <div className="projet-list-item">
          <div className="projet-list-icon">
            <div className="projet-list-dot"></div>
          </div>
          <div className="projet-list-content">
            <h4 className="projet-list-title">Programme Étendu d'Infrastructures de Transport dans la Province de Béjaïa</h4>
            <p className="projet-list-description">Livraison de plus de 500 kilomètres de réseau de transport spécialisé.</p>
          </div>
        </div>

        <div className="projet-list-item">
          <div className="projet-list-icon">
            <div className="projet-list-dot"></div>
          </div>
          <div className="projet-list-content">
            <h4 className="projet-list-title">Développement et Revêtement en Béton Bitumineux</h4>
            <p className="projet-list-description">De la route du village de Tergja (sections 038 d'Enser Nadajdil).</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};


export default TravauxRoutiers;
