import React, { useState, useEffect } from 'react';
import { FaTruck, FaTools, FaCogs, FaCheckCircle, FaPhoneAlt, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import './LocationMateriel.css';
import loc1 from '../images/location/loc1.png';
import loc2 from '../images/location/loc2.png';
import loc3 from '../images/location/loc3.png';
import loc4 from '../images/location/loc4.png';

const LocationMateriel = () => {
  // Images pour le slider Hero (changez les URLs par vos images)
  //const heroImages = [
    //"https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&auto=format&fit=crop",
    //"https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1600&auto=format&fit=crop",
    //"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&auto=format&fit=crop",
    //"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop"
  //];
// Import des images locales

// Array des images
const heroImages = [
  loc1,
  loc2,
  loc3,
  loc4
];
  // OU utilisez vos images locales :
  // const heroImages = [
  //   "/images/hero-1.jpg",
  //   "/images/hero-2.jpg",
  //   "/images/hero-3.jpg",
  //   "/images/hero-4.jpg"
  // ];

  // Catégories d'équipements
  const equipmentCategories = [
    {
      id: 1,
      icon: <FaTruck />,
      title: "Engins de Terrassement",
      description: "Pelleteuses, bulldozers, chargeuses et niveleuses pour tous vos travaux de terrassement et d'excavation."
    },
    {
      id: 2,
      icon: <FaTools />,
      title: "Matériel de Levage",
      description: "Grues mobiles, chariots élévateurs et équipements de manutention pour vos opérations de levage."
    },
    {
      id: 3,
      icon: <FaCogs />,
      title: "Équipements Spécialisés",
      description: "Compacteurs, finisseurs et matériel spécialisé pour des travaux techniques et de précision."
    }
  ];

  // Caractéristiques de l'armada
  const armadaFeatures = [
    "Matériel moderne et performant",
    "Maintenance préventive rigoureuse",
    "Disponibilité immédiate 24/7",
    "Assistance technique garantie",
    "Tarifs compétitifs et flexibles"
  ];

  // État du slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide toutes les 2 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Fonction pour scroller vers la section suivante
  const scrollToContent = () => {
    const categoriesSection = document.querySelector('.LocationMateriel-categories-section');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="LocationMateriel-page">
      {/* Hero Section avec Slider */}
      <section className="LocationMateriel-hero">
        {/* Slider d'images */}
        <div className="LocationMateriel-hero-slider">
          {heroImages.map((image, index) => (
            <div 
              key={index}
              className={`LocationMateriel-hero-slide ${index === currentImageIndex ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${image})`
              }}
            />
          ))}
        </div>

        {/* Overlay sombre */}
        <div className="LocationMateriel-hero-overlay"></div>

        {/* Contenu Hero */}
        <div className="LocationMateriel-hero-content">
          <div className="LocationMateriel-hero-title-wrapper">
            <h1 className="LocationMateriel-hero-title-line1">
              MAÎTRE DANS L'ART
            </h1>
            <h1 className="LocationMateriel-hero-title-line2">
              D'ÉLEVER VOS PROJETS
            </h1>
          </div>
          
          <p className="LocationMateriel-hero-description-text">
            La SNTP est spécialisée dans la location d'engins de chantier et possède le parc de matériel le plus considérable en Algérie.
          </p>

          {/* Bouton DÉFILER - EXACTEMENT comme l'image */}
          <div className="LocationMateriel-defiler-wrapper">
            <button 
              className="LocationMateriel-defiler-button" 
              onClick={scrollToContent}
              aria-label="Défiler vers le contenu"
            >
              DÉFILER
            </button>
            <FaChevronDown className="LocationMateriel-defiler-arrow-icon" onClick={scrollToContent} />
          </div>
        </div>
      </section>

      {/* Categories Section - FOND NOIR */}
      <section className="LocationMateriel-categories-section LocationMateriel-categories-dark">
        <div className="LocationMateriel-container">
          <div className="LocationMateriel-section-header">
            <p className="LocationMateriel-section-subtitle">NOTRE OFFRE</p>
            <h2 className="LocationMateriel-section-title">ÉQUIPEMENTS DISPONIBLES</h2>
            <div className="LocationMateriel-section-divider"></div>
          </div>

          <div className="LocationMateriel-categories-grid">
            {equipmentCategories.map((category) => (
              <div key={category.id} className="LocationMateriel-category-card">
                <div className="LocationMateriel-category-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="LocationMateriel-category-card-title">{category.title}</h3>
                <p className="LocationMateriel-category-description">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Armada Section */}
      <section className="LocationMateriel-armada-section">
        <div className="LocationMateriel-container">
          <div className="LocationMateriel-armada-grid">
            {/* Content */}
            <div className="LocationMateriel-armada-content">
              <p className="LocationMateriel-section-subtitle">Excellence & Fiabilité</p>
              <h2 className="LocationMateriel-section-title">Notre Engagement</h2>
              <div className="LocationMateriel-section-divider"></div>
              <p className="LocationMateriel-armada-description">
                Notre service repose sur une approche simple : <strong>vous fournir des équipements
                puissants, immédiatement disponibles et parfaitement entretenus.</strong>
              </p>

              {/* Liste des caractéristiques */}
              <div className="LocationMateriel-armada-features-list">
                {armadaFeatures.map((feature, index) => (
                  <div key={index} className="LocationMateriel-armada-feature-item">
                    <div className="LocationMateriel-feature-icon-wrapper">
                      <FaCheckCircle className="LocationMateriel-feature-check-icon" />
                    </div>
                    <span className="LocationMateriel-feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="LocationMateriel-armada-image-wrapper">
              <div className="LocationMateriel-image-container">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800"
                  alt="Flotte de matériel SNTP"
                  className="LocationMateriel-armada-img"
                />
                <div className="LocationMateriel-image-overlay-badge">
                  <FaTruck className="LocationMateriel-overlay-icon" />
                  <span>Flotte Complète & Moderne</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default LocationMateriel;
