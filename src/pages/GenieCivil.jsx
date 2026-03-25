import React, { useState, useEffect } from 'react';
import { FaBuilding, FaHardHat, FaCheckCircle, FaCogs, FaShieldAlt, FaWarehouse, FaIndustry, FaBorderAll, FaStore, FaRuler } from 'react-icons/fa';
import './GenieCivil.css';
import civilImage from '../images/civil.png';
const GenieCivil = () => {
  // Excellence SNTP Cards
  const excellenceCards = [
    {
      id: 1,
      icon: <FaShieldAlt />,
      value: 'Cat. 9',
      label: 'Qualification',
      desc: 'Leader en Génie Civil avec qualification catégorie 9, garantissant l\'excellence dans la livraison d\'infrastructures stratégiques de classe mondiale.'
    },
    {
      id: 2,
      icon: <FaCogs />,
      value: 'BIM/ISO',
      label: 'Innovation',
      desc: 'Conception avancée assistée par BIM et exécution de précision, dépassant les normes internationales BSI et ISO pour des développements durables.'
    },
    {
      id: 3,
      icon: <FaBuilding />,
      value: '100%',
      label: 'Solutions Intégrées',
      desc: 'Pionniers de l\'innovation en développement territorial, couvrant l\'ensemble de la chaîne de valeur de la conception à l\'exécution.'
    }
  ];

  // Notre Expertise - Domaines stratégiques
  const expertiseDomains = [
    {
      id: 1,
      icon: <FaIndustry />,
      title: 'Infrastructures Stratégiques',
      items: [
        'Installations de Stockage Stratégique',
        'Installations Administratives et Techniques',
        'Infrastructures de Postes Frontaliers',
        'Infrastructures de Services Publics'
      ]
    },
    {
      id: 2,
      icon: <FaHardHat />,
      title: 'Opérations Spécialisées',
      items: [
        'Conception et Ingénierie Intégrées',
        'Structures Complexes',
        'Gestion de Projets Multidimensionnels',
        'Installations Techniques Spécialisées'
      ]
    }
  ];

  // Portfolio Réalisations
  const portfolio = [
    {
      id: 1,
      icon: <FaWarehouse />,
      title: 'Complexe de Stockage de Carburant',
      location: 'Ouargla',
      description: 'Développement du Complexe de Stockage de Carburant d\'Ouargla, d\'une capacité de 20 000 m³'
    },
    {
      id: 2,
      icon: <FaBorderAll />,
      title: 'Poste Frontalier Provisoire Algérie-Mauritanie',
      location: 'Province de Tindouf',
      description: 'Construction du Poste Frontalier Provisoire Algérie-Mauritanie dans la Province de Tindouf'
    },
    {
      id: 3,
      icon: <FaBorderAll />,
      title: 'Postes Frontaliers Permanents',
      location: 'Axe Algérie-Mauritanie - Tindouf',
      description: 'Conception et Mise en Œuvre de Postes Frontaliers Permanents le long de l\'axe Algérie-Mauritanie dans la Province de Tindouf'
    },
    {
      id: 4,
      icon: <FaBuilding />,
      title: 'Siège du Ministère du Commerce',
      location: 'National',
      description: 'Réhabilitation Complète et Achèvement du Siège du Ministère du Commerce, comprenant les Tours Jumelles, Base Administrative et 2 Parkings'
    },
    {
      id: 5,
      icon: <FaBuilding />,
      title: 'Siège Direction Générale Algérie Télécom',
      location: 'Direction Générale',
      description: 'Conception et Construction du Siège de la Direction Générale d\'Algérie Télécom : Complexe Administratif R+3 avec Sous-sol'
    }
  ];

  // État du carrousel - défilement infini
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Créer un tableau étendu pour le défilement infini
  const extendedPortfolio = [...portfolio, ...portfolio, ...portfolio];

  // Défilement automatique toutes les 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Réinitialiser l'index pour créer une boucle infinie
  useEffect(() => {
    if (currentIndex >= portfolio.length) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(0);
      }, 800);
    }
  }, [currentIndex, portfolio.length]);

  // Projets En Cours
  const ongoingProjects = [
    {
      id: 1,
      icon: <FaWarehouse />,
      title: 'Silos de Stockage de Céréales',
      location: 'Lot 30 : Wilaya de Tissemsilt',
      description: 'Projet stratégique pour la construction de trente (30) silos de stockage de céréales pour conservation à long terme'
    },
    {
      id: 2,
      icon: <FaWarehouse />,
      title: 'Silos à Grains 100 000 Tonnes',
      location: 'Lot 24 : Wilaya d\'El Oued',
      description: 'Projet de construction de silos à grains d\'une capacité de 100 000 tonnes'
    },
    {
      id: 3,
      icon: <FaBuilding />,
      title: 'Développement Résidentiel et VRD',
      location: 'Tindouf',
      description: 'Projet de développement résidentiel et d\'aménagement de site : Conception et construction de logements et de réseaux divers (VRD) pour 80 + 40 unités'
    },
    {
      id: 4,
      icon: <FaStore />,
      title: 'Zone Franche Commerciale',
      location: 'Wilaya de Tindouf',
      description: 'Poste Frontalier de Zone Franche Commerciale - Wilaya de Tindouf'
    }
  ];

  // Statistiques SNTP
  const stats = [
    {
      id: 1,
      value: 'Cat. 9',
      label: 'Qualification',
      desc: 'Génie Civil Excellence'
    },
    {
      id: 2,
      value: '60+',
      label: 'Années',
      desc: 'Expérience Infrastructure'
    },
    {
      id: 3,
      value: 'ISO/BSI',
      label: 'Normes',
      desc: 'Conformité Internationale'
    },
    {
      id: 4,
      value: '48',
      label: 'Wilayas',
      desc: 'Couverture Nationale'
    }
  ];

  return (
    <div className="GenieCivil-page">
      {/* Hero Section */}
      <section 
        className="GenieCivil-hero"
        style={{
           backgroundImage: `url(${civilImage})`
          }}
      >
        <div className="GenieCivil-hero-overlay"></div>
        <div className="GenieCivil-container">
          <div className="GenieCivil-hero-content">
            
            <h1 className="GenieCivil-hero-title">
              Pionniers de l'Innovation
            </h1>
            <p className="GenieCivil-hero-subtitle">
              Qualification Catégorie 9 en Génie Civil. Leader du développement des infrastructures 
              stratégiques avec une expertise reconnue en livraison de projets de classe mondiale. 
              De la conception BIM à l'exécution de précision, nous garantissons des développements 
              durables qui dépassent les normes internationales BSI et ISO.
            </p>
            
          </div>
        </div>
      </section>

      {/* Section Excellence SNTP - FOND NOIR */}
      <section className="GenieCivil-section GenieCivil-excellence">
        <div className="GenieCivil-container">
          <div className="GenieCivil-section-header">
            <h2 className="GenieCivil-section-title">
              Excellence SNTP
            </h2>
            <p className="GenieCivil-section-subtitle">
              En tant que leader du développement des infrastructures, SNTP réalise des projets 
              de construction de classe mondiale qui illustrent la synergie entre l'innovation 
              technique de pointe et l'excellence en construction.
            </p>
          </div>

          <div className="GenieCivil-excellence-grid">
            {excellenceCards.map((card) => (
              <div key={card.id} className="GenieCivil-excellence-card">
                <div className="GenieCivil-excellence-icon">
                  {card.icon}
                </div>
                <div className="GenieCivil-excellence-value">{card.value}</div>
                <div className="GenieCivil-excellence-label">{card.label}</div>
                <p className="GenieCivil-excellence-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Notre Expertise */}
      <section className="GenieCivil-section GenieCivil-expertise">
        <div className="GenieCivil-container">
          <div className="GenieCivil-section-header">
            <h2 className="GenieCivil-section-title">
              Notre Expertise
            </h2>
            <p className="GenieCivil-section-subtitle">
              Approche commerciale complète couvrant l'ensemble de la chaîne de valeur, 
              de la conception avancée à l'exécution de précision.
            </p>
          </div>

          <div className="GenieCivil-expertise-grid">
            {expertiseDomains.map((domain) => (
              <div key={domain.id} className="GenieCivil-expertise-card">
                <div className="GenieCivil-expertise-icon">
                  {domain.icon}
                </div>
                <h3 className="GenieCivil-expertise-title">{domain.title}</h3>
                <ul className="GenieCivil-expertise-list">
                  {domain.items.map((item, index) => (
                    <li key={index} className="GenieCivil-expertise-item">
                      <FaCheckCircle className="GenieCivil-check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Portfolio Carrousel - 3 Cartes Automatique */}
      <section className="GenieCivil-section GenieCivil-portfolio">
        <div className="GenieCivil-container">
          <div className="GenieCivil-section-header">
            <h2 className="GenieCivil-section-title">
              Portfolio Sélectionné des Réalisations SNTP
            </h2>
            <p className="GenieCivil-section-subtitle">
              Découvrez nos réalisations majeures qui témoignent de notre expertise reconnue en 
              développement d'infrastructures stratégiques à travers le territoire national.
            </p>
          </div>

          <div className="GenieCivil-carousel-container">
            <div 
              className="GenieCivil-carousel-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                transition: isAnimating ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
              }}
            >
              {extendedPortfolio.map((project, index) => (
                <div key={`${project.id}-${index}`} className="GenieCivil-carousel-card">
                  <div className="GenieCivil-card-icon">
                    {project.icon}
                  </div>
                  <h3 className="GenieCivil-card-title">{project.title}</h3>
                  <p className="GenieCivil-card-location">
                    <FaRuler style={{ marginRight: '6px', fontSize: '0.85rem' }} />
                    {project.location}
                  </p>
                  <p className="GenieCivil-card-description">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets Stratégiques En Cours */}
      <section className="GenieCivil-section GenieCivil-ongoing">
        <div className="GenieCivil-container">
          <div className="GenieCivil-section-header">
            <h2 className="GenieCivil-section-title">
              Projets Stratégiques en Cours
            </h2>
            <p className="GenieCivil-section-subtitle">
              Développements majeurs actuellement en exécution, illustrant notre capacité à gérer 
              des projets complexes et stratégiques à l'échelle nationale.
            </p>
          </div>

          <div className="GenieCivil-ongoing-grid">
            {ongoingProjects.map((project) => (
              <div key={project.id} className="GenieCivil-ongoing-card">
                <div className="GenieCivil-ongoing-badge">En Cours</div>
                <div className="GenieCivil-ongoing-icon">
                  {project.icon}
                </div>
                <h3 className="GenieCivil-ongoing-title">{project.title}</h3>
                <p className="GenieCivil-ongoing-location">
                  <FaRuler style={{ marginRight: '6px', fontSize: '0.85rem' }} />
                  {project.location}
                </p>
                <p className="GenieCivil-ongoing-description">{project.description}</p>
                <div className="GenieCivil-ongoing-progress">
                  <div className="GenieCivil-ongoing-progress-bar"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      
    </div>
  );
};

export default GenieCivil;
