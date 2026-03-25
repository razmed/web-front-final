import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import {
  FaBuilding,
  FaRoad,
  FaTint,
  FaHardHat,
  FaTrain,
  FaShip
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const swiperRef = useRef(null);
  const autoplayIntervalRef = useRef(null);
  const navigate = useNavigate();

  // Services data alignés sur le burger menu "Nos Métiers"
  const servicesData = [
    {
      id: 1,
      category: 'TRAVAUX ROUTIERS',
      title: 'INFRASTRUCTURES ROUTIÈRES',
      description: 'Construction et réhabilitation d\'infrastructures routières de haute qualité. Nos équipes spécialisées maîtrisent toutes les techniques modernes de construction routière, du terrassement à la pose de revêtements bitumineux. Respect strict des normes de sécurité et engagement pour des infrastructures durables.',
      buttonText: 'En Savoir Plus',
      link: '/travaux-routiers',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=1600&fit=crop',
      cardTitle: 'TRAVAUX ROUTIERS',
      icon: <FaRoad />
    },
    {
      id: 2,
      category: 'TRAVAUX FERROVIAIRES',
      title: 'INFRASTRUCTURES FERROVIAIRES',
      description: 'Expertise dans la construction et la modernisation de lignes ferroviaires. Pose de voies, électrification, signalisation et ouvrages d\'art ferroviaires. Nos équipes qualifiées garantissent des infrastructures ferroviaires fiables et performantes pour le transport de demain.',
      buttonText: 'En Savoir Plus',
      link: '/travaux-ferroviaires',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&h=1600&fit=crop',
      cardTitle: 'TRAVAUX FERROVIAIRES',
      icon: <FaTrain />
    },
    {
      id: 3,
      category: 'TRAVAUX HYDRAULIQUES',
      title: 'GESTION DE L\'EAU',
      description: 'Conception et réalisation d\'ouvrages hydrauliques complexes pour la gestion durable de l\'eau. Barrages, stations de pompage, réseaux d\'adduction et systèmes d\'irrigation modernes. Notre expertise garantit des solutions techniques fiables et respectueuses de l\'environnement.',
      buttonText: 'En Savoir Plus',
      link: '/hydraulique',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=1600&fit=crop',
      cardTitle: 'TRAVAUX HYDRAULIQUES',
      icon: <FaTint />
    },
    {
      id: 4,
      category: 'TRAVAUX MARITIMES',
      title: 'OUVRAGES MARITIMES & PORTUAIRES',
      description: 'Réalisation d\'infrastructures maritimes et portuaires : quais, digues, ports de commerce et de plaisance. Travaux de dragage, protection côtière et aménagements maritimes. Une expertise technique éprouvée dans les environnements marins les plus exigeants.',
      buttonText: 'En Savoir Plus',
      link: '/Maritimes',
      image: 'https://images.unsplash.com/photo-1578489758854-f134a358f08b?w=1200&h=1600&fit=crop',
      cardTitle: 'TRAVAUX MARITIMES',
      icon: <FaShip />
    },
    {
      id: 5,
      category: 'INFRASTRUCTURES & GÉNIE CIVIL',
      title: 'CONSTRUCTION & GÉNIE CIVIL',
      description: 'Expertise complète en génie civil pour tous types de projets d\'infrastructure. De la conception structurale à la réalisation, nous assurons la solidité et la pérennité de vos ouvrages. Ponts, tunnels, fondations spéciales et structures complexes sont notre spécialité.',
      buttonText: 'En Savoir Plus',
      link: '/genie-civil',
      image: 'https://images.unsplash.com/photo-1590586767908-20d6d1b6db58?w=1200&h=1600&fit=crop',
      cardTitle: 'INFRASTRUCTURES & GÉNIE CIVIL',
      icon: <FaHardHat />
    },
    {
      id: 6,
      category: 'TRANSFORMATION URBAINE',
      title: 'BÂTIMENTS & TRANSFORMATION URBAINE',
      description: 'Réalisation de projets de transformation urbaine : immeubles résidentiels, complexes commerciaux, bâtiments publics et espaces collectifs. Nous créons des espaces de vie modernes, durables et adaptés aux besoins des communautés. Architecture innovante et respect du patrimoine urbain.',
      buttonText: 'En Savoir Plus',
      link: '/batiments',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&h=1600&fit=crop',
      cardTitle: 'TRANSFORMATION URBAINE',
      icon: <FaBuilding />
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Analyse approfondie de vos besoins et définition du cahier des charges'
    },
    {
      number: '02',
      title: 'Conception',
      description: 'Élaboration des plans techniques et validation des solutions'
    },
    {
      number: '03',
      title: 'Réalisation',
      description: 'Exécution des travaux avec suivi qualité permanent'
    },
    {
      number: '04',
      title: 'Livraison',
      description: 'Réception des ouvrages et accompagnement post-livraison'
    }
  ];

  // Features list
  const features = [
    {
      number: '01',
      title: 'Expertise Technique',
      description: 'Des ingénieurs et techniciens formés aux dernières technologies'
    },
    {
      number: '02',
      title: 'Respect des Délais',
      description: 'Une planification rigoureuse pour livrer vos projets à temps'
    },
    {
      number: '03',
      title: 'Qualité Certifiée',
      description: 'Certifications ISO 9001, ISO 14001 et OHSAS 18001'
    },
    {
      number: '04',
      title: 'Innovation',
      description: 'Équipements modernes et techniques innovantes'
    },
    {
      number: '05',
      title: 'Durabilité',
      description: 'Construction durable et respect de l\'environnement'
    }
  ];

  // Initialisation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Autoplay automatique toutes les 3 secondes
  useEffect(() => {
    autoplayIntervalRef.current = setInterval(() => {
      const newIndex = (currentSlide + 1) % servicesData.length;
      setCurrentSlide(newIndex);
    }, 3000); // 3 secondes

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [currentSlide, servicesData.length]);

  // Synchroniser le Swiper avec currentSlide
  useEffect(() => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideToLoop(currentSlide);
    }
  }, [currentSlide]);

  const handleSlideChange = (index) => {
    setPreviousSlide(currentSlide);
    setCurrentSlide(index);
    
    // Réinitialiser l'autoplay
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
  };

  const handleSwiperSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    setPreviousSlide(currentSlide);
    setCurrentSlide(realIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = currentSlide === 0 ? servicesData.length - 1 : currentSlide - 1;
    handleSlideChange(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentSlide + 1) % servicesData.length;
    handleSlideChange(newIndex);
  };

  const handleButtonClick = () => {
    navigate(servicesData[currentSlide].link);
  };

  return (
    <div className="Services-page">
      {/* HERO SLIDER SECTION */}
      <section className={`Services-hero-slider ${isLoaded ? 'Services-loaded' : ''}`}>
        {/* Background animé */}
        <div className="Services-hero-slider-background">
          {servicesData.map((service, index) => (
            <img
              key={service.id}
              src={service.image}
              alt={service.title}
              className={index === currentSlide ? 'Services-active' : ''}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </div>

        {/* Overlay gradient */}
        <div className="Services-hero-slider-overlay" />

        {/* Wrapper principal */}
        <div className="Services-hero-slider-wrapper">
          <div className="Services-hero-content-container">
            {/* DOTS NAVIGATION VERTICALE */}
            <div className="Services-hero-dots">
              {servicesData.map((service, index) => (
                <button
                  key={service.id}
                  className={`Services-hero-dot ${index === currentSlide ? 'Services-active' : ''}`}
                  onClick={() => handleSlideChange(index)}
                  aria-label={`Aller au service ${index + 1}`}
                />
              ))}
            </div>

            {/* CONTENU PRINCIPAL */}
            <div className="Services-hero-main-content">
              <div className="Services-hero-content-box">
                <div className="Services-hero-content-inner">
                  <div className="Services-hero-category">
                    {servicesData[currentSlide].category}
                  </div>
                  <h1 className="Services-hero-title">
                    {servicesData[currentSlide].title}
                  </h1>
                  <p className="Services-hero-description">
                    {servicesData[currentSlide].description}
                  </p>
                  <button 
                    className="Services-hero-cta-button"
                    onClick={handleButtonClick}
                  >
                    {servicesData[currentSlide].buttonText}
                  </button>
                </div>
              </div>
            </div>

            {/* CAROUSEL 3D CARDS */}
            <div className="Services-hero-cards-carousel">
              <Swiper
                ref={swiperRef}
                effect="cards"
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                className="Services-hero-swiper-cards"
                cardsEffect={{
                  perSlideOffset: 12,
                  perSlideRotate: 3,
                  rotate: true,
                  slideShadows: true
                }}
                loop={true}
                autoplay={{
                  delay: 3000, // 3 secondes
                  disableOnInteraction: false
                }}
                speed={800}
                onSlideChange={handleSwiperSlideChange}
                initialSlide={currentSlide}
              >
                {servicesData.map((service) => (
                  <SwiperSlide key={service.id}>
                    <div className="Services-hero-card-3d">
                      <div className="Services-hero-card-image-wrapper">
                        <img src={service.image} alt={service.cardTitle} loading="lazy" />
                      </div>
                      <div className="Services-hero-card-gradient" />
                      <div className="Services-hero-card-label">
                        <h3 className="Services-hero-card-label-text">{service.cardTitle}</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="Services-hero-navigation">
            <button
              className="Services-hero-nav-btn"
              onClick={goToPrevSlide}
              aria-label="Diapositive précédente"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              className="Services-hero-nav-btn"
              onClick={goToNextSlide}
              aria-label="Diapositive suivante"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="Services-process-section">
        <div className="Services-container">
          <div className="Services-section-header Services-text-center">
            <div className="Services-section-label Services-section-label-white">
              NOTRE MÉTHODOLOGIE
            </div>
            <h2 className="Services-section-title Services-section-title-white">
              Un Processus Éprouvé
            </h2>
            <div className="Services-section-divider-white" />
            <p className="Services-section-description Services-section-description-white">
              Une méthodologie éprouvée pour garantir la réussite de vos projets
            </p>
          </div>

          <div className="Services-process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="Services-process-step">
                <div className="Services-step-number">{step.number}</div>
                <h3 className="Services-step-title">{step.title}</h3>
                <p className="Services-step-description">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="Services-step-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="Services-why-choose-section">
        <div className="Services-container">
          <div className="Services-why-choose-grid">
            <div className="Services-why-choose-content">
              <div className="Services-section-label">NOTRE EXPERTISE</div>
              <h2 className="Services-section-title">
                Pourquoi Choisir SNTP ?
              </h2>
              <div className="Services-section-divider-red" />
              <p className="Services-section-description">
                Une expertise reconnue dans tous les domaines de la construction
              </p>

              <div className="Services-features-list">
                {features.map((feature, index) => (
                  <div key={index} className="Services-feature-item">
                    <div className="Services-feature-icon">{feature.number}</div>
                    <div className="Services-feature-content">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="Services-why-choose-image">
              <div className="Services-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=1000&fit=crop"
                  alt="Équipe SNTP au travail"
                  loading="lazy"
                />
              </div>
              <div className="Services-image-decoration" />
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Services;
