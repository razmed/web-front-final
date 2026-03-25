import React, { useEffect, useRef, useState } from 'react';
import { FaTrain, FaTools, FaHardHat, FaCogs, FaCheckCircle } from 'react-icons/fa';
import './TravauxFerroviaires.css';
import fero1 from '../images/fero1.png';
import fero2 from '../images/fero2.png';

const TravauxFerroviaires = () => {
  const heroRef = useRef(null);
  const titleSectionRef = useRef(null);
  const clipPathRef = useRef(null);
  const revealImageRef = useRef(null);
  const heroWrapperRef = useRef(null);
  const mousePositionRef = useRef({ x: -1000, y: -1000 });
  const blobPositionRef = useRef({ x: -1000, y: -1000 });
  const animationFrameRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Détecter si mobile et nettoyer les styles
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Nettoyer les styles quand on change de mode
      const hero = heroRef.current;
      const revealImage = revealImageRef.current;
      const heroWrapper = heroWrapperRef.current;
      
      if (!mobile && hero && revealImage && heroWrapper) {
        // Reset pour desktop
        hero.classList.remove('mobile-scroll-reveal', 'reveal-complete');
        revealImage.style.clipPath = '';
        heroWrapper.style.height = '';
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Effet blob pour desktop UNIQUEMENT
  useEffect(() => {
    if (isMobile) return;

    const hero = heroRef.current;
    const titleSection = titleSectionRef.current;
    const clipPath = clipPathRef.current;

    if (!hero || !clipPath) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mousePositionRef.current = { x, y };
    };

    const handleMouseEnter = (e) => {
      const rect = hero.getBoundingClientRect();
      mousePositionRef.current = { 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      };
      blobPositionRef.current = { 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      };
    };

    const handleMouseLeave = () => {
      mousePositionRef.current = { x: -1000, y: -1000 };
      blobPositionRef.current = { x: -1000, y: -1000 };
      if (clipPath) {
        clipPath.setAttribute('cx', '-1000');
        clipPath.setAttribute('cy', '-1000');
      }
      if (titleSection) {
        titleSection.classList.remove('hovered');
      }
    };

    const animateBlob = () => {
      const targetX = mousePositionRef.current.x;
      const targetY = mousePositionRef.current.y;
      const ease = 0.15;

      blobPositionRef.current.x += (targetX - blobPositionRef.current.x) * ease;
      blobPositionRef.current.y += (targetY - blobPositionRef.current.y) * ease;

      const currentX = blobPositionRef.current.x;
      const currentY = blobPositionRef.current.y;

      if (clipPath) {
        clipPath.setAttribute('cx', currentX);
        clipPath.setAttribute('cy', currentY);
      }

      if (titleSection) {
        const titleRect = titleSection.getBoundingClientRect();
        const heroRect = hero.getBoundingClientRect();
        
        const titleCenterX = titleRect.left - heroRect.left + titleRect.width / 2;
        const titleCenterY = titleRect.top - heroRect.top + titleRect.height / 2;

        const distance = Math.sqrt(
          (currentX - titleCenterX) ** 2 +
          (currentY - titleCenterY) ** 2
        );

        if (distance < 250) {
          titleSection.classList.add('hovered');
        } else {
          titleSection.classList.remove('hovered');
        }
      }

      animationFrameRef.current = requestAnimationFrame(animateBlob);
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseenter', handleMouseEnter);
    hero.addEventListener('mouseleave', handleMouseLeave);
    animationFrameRef.current = requestAnimationFrame(animateBlob);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseenter', handleMouseEnter);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isMobile]);

  // Reveal on scroll pour mobile UNIQUEMENT
  useEffect(() => {
    if (!isMobile) return;

    const hero = heroRef.current;
    const revealImage = revealImageRef.current;
    const heroWrapper = heroWrapperRef.current;

    if (!hero || !revealImage || !heroWrapper) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const wrapperRect = heroWrapper.getBoundingClientRect();
          const heroHeight = window.innerHeight;
          const scrolled = -wrapperRect.top;
          
          // Phase 1: Révélation progressive (0 à heroHeight)
          if (scrolled < heroHeight) {
            const scrollProgress = Math.max(0, Math.min(1, scrolled / heroHeight));
            const insetValue = Math.max(0, 100 - (scrollProgress * 100));
            
            revealImage.style.clipPath = `inset(${insetValue}% 0 0 0)`;
            
            hero.classList.add('mobile-scroll-reveal');
            hero.classList.remove('reveal-complete');
          } 
          // Phase 2: Révélation complète, scroll normal (heroHeight à 2*heroHeight)
          else if (scrolled >= heroHeight && scrolled < heroHeight * 2) {
            revealImage.style.clipPath = `inset(0% 0 0 0)`;
            
            hero.classList.remove('mobile-scroll-reveal');
            hero.classList.add('reveal-complete');
          }
          // Phase 3: Hero sort de l'écran naturellement
          else {
            hero.classList.remove('mobile-scroll-reveal');
            hero.classList.remove('reveal-complete');
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      hero.classList.remove('mobile-scroll-reveal', 'reveal-complete');
      revealImage.style.clipPath = '';
    };
  }, [isMobile]);

  return (
    <div className="TravauxFerroviaires-page">
      {/* SVG Clip Path caché (pour desktop) */}
      {!isMobile && (
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <clipPath id="hero-blob-clip" clipPathUnits="userSpaceOnUse">
              <circle ref={clipPathRef} cx="-1000" cy="-1000" r="150" />
            </clipPath>
          </defs>
        </svg>
      )}

      {/* Wrapper pour mobile scroll reveal */}
      <div 
        className={`hero-wrapper ${isMobile ? 'mobile-hero-wrapper' : ''}`}
        ref={heroWrapperRef}
      >
        {/* Hero Section */}
        <section className="TravauxFerroviaires-hero-blob" ref={heroRef}>
          {/* Image de base (fero1.png) */}
          <div 
            className="hero-background-base"
            style={{
              backgroundImage: `url(${fero1})`
            }}
          ></div>

          {/* Image révélée (fero2.png) */}
          <div 
            className={`hero-background-reveal ${isMobile ? '' : 'desktop-reveal'}`}
            ref={revealImageRef}
            style={{
              backgroundImage: `url(${fero2})`
            }}
          ></div>

          {/* Overlay */}
          <div className="hero-overlay"></div>

          {/* Contenu */}
          <div className="hero-content-wrapper">
            <div className="hero-title-section" ref={titleSectionRef}>
              <p className="hero-breadcrumb">SNTP ENGINEERING</p>
              <h1 className="hero-main-title">
                TRAVAUX FERROVIAIRES
              </h1>
              <p className="hero-subtitle">
                Conception, construction et maintenance d'infrastructures ferroviaires modernes : 
                voies ferrées, tramways, métros et systèmes de transport guidé.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Section Ingénierie */}
      <section className="ingenierie-section">
        <div className="ingenierie-container">
          <div className="ingenierie-bg-decoration">
            <div className="decoration-line line-1"></div>
            <div className="decoration-line line-2"></div>
            <div className="decoration-line line-3"></div>
          </div>

          <div className="ingenierie-content">
            <h2 className="ingenierie-title">
              <span className="title-line">INGÉNIERIE FERROVIAIRE :</span>
              <span className="title-highlight">EXCELLENCE EN MOBILITÉ DURABLE</span>
            </h2>

            <div className="ingenierie-divider">
              <div className="divider-line"></div>
              <div className="divider-dot"></div>
              <div className="divider-line"></div>
            </div>

            <p className="ingenierie-description">
              SNTP se positionne comme un <strong>acteur majeur</strong> dans le développement d'infrastructures ferroviaires stratégiques, avec une expertise approfondie sur l'ensemble de la chaîne de valeur des projets complexes. Nos capacités éprouvées garantissent la livraison de <strong>solutions ferroviaires intégrées</strong> qui allient innovation technique et excellence opérationnelle, particulièrement dans des conditions environnementales extrêmes.
            </p>

            <div className="ingenierie-highlights">
              <div className="highlight-item">
                <div className="highlight-icon-wrapper">
                  <FaCogs className="highlight-icon" />
                </div>
                <div className="highlight-text">
                  <h4>Projets Complexes</h4>
                  <p>Maîtrise de la chaîne de valeur complète</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon-wrapper">
                  <FaCheckCircle className="highlight-icon" />
                </div>
                <div className="highlight-text">
                  <h4>Solutions Intégrées</h4>
                  <p>Innovation technique & excellence opérationnelle</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon-wrapper">
                  <FaHardHat className="highlight-icon" />
                </div>
                <div className="highlight-text">
                  <h4>Conditions Extrêmes</h4>
                  <p>Expertise en environnements difficiles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Expertise */}
      <section className="expertise-section">
        <div className="expertise-container">
          <div className="expertise-header">
            <div className="expertise-header-line"></div>
            <h2 className="expertise-main-title">
              <span className="title-prefix">NOTRE</span>
              <span className="title-emphasis">EXPERTISE</span>
            </h2>
            <div className="expertise-header-line"></div>
          </div>

          <div className="expertise-subtitle-wrapper">
            <div className="subtitle-icon">
              <FaTrain />
            </div>
            <h3 className="expertise-subtitle">Solutions Ferroviaires Intégrées</h3>
          </div>

          <div className="expertise-points-grid">
            <div className="expertise-point">
              <div className="point-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="point-content">
                <div className="point-icon-wrapper">
                  <FaCogs className="point-icon" />
                </div>
                <p className="point-text">
                  Conception et réalisation de lignes ferroviaires stratégiques dans des environnements difficiles
                </p>
              </div>
            </div>

            <div className="expertise-point">
              <div className="point-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="point-content">
                <div className="point-icon-wrapper">
                  <FaTools className="point-icon" />
                </div>
                <p className="point-text">
                  Développement de connexions ferroviaires stratégiques
                </p>
              </div>
            </div>

            <div className="expertise-point">
              <div className="point-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="point-content">
                <div className="point-icon-wrapper">
                  <FaTrain className="point-icon" />
                </div>
                <p className="point-text">
                  Maîtrise des corridors logistiques
                </p>
              </div>
            </div>

            <div className="expertise-point">
              <div className="point-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="point-content">
                <div className="point-icon-wrapper">
                  <FaHardHat className="point-icon" />
                </div>
                <p className="point-text">
                  Expertise spécialisée dans les projets ferroviaires miniers
                </p>
              </div>
            </div>

            <div className="expertise-point">
              <div className="point-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="point-content">
                <div className="point-icon-wrapper">
                  <FaCheckCircle className="point-icon" />
                </div>
                <p className="point-text">
                  Capacités avancées en infrastructures de plateformes ferroviaires et superstructures
                </p>
              </div>
            </div>

            <div className="expertise-point">
              <div className="point-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="point-content">
                <div className="point-icon-wrapper">
                  <FaCogs className="point-icon" />
                </div>
                <p className="point-text">
                  Solutions d'ingénierie adaptées aux contraintes géographiques extrêmes
                </p>
              </div>
            </div>
          </div>

          <div className="expertise-bg-decoration">
            <div className="bg-rail bg-rail-1"></div>
            <div className="bg-rail bg-rail-2"></div>
          </div>
        </div>
      </section>

      {/* Section Portfolio */}
      <section className="portfolio-section">
        <div className="portfolio-container">
          <div className="portfolio-header">
            <h2 className="portfolio-title">
              PORTFOLIO SÉLECTIONNÉ<br />
              <span className="portfolio-title-highlight">DES RÉALISATIONS SNTP</span>
            </h2>
          </div>

          <div className="portfolio-grid">
            <div className="portfolio-project">
              <div className="project-animated-border"></div>
              
              <div className="project-header">
                <div className="project-distance">
                  <FaTrain className="distance-icon" />
                  <span>175 km</span>
                </div>
              </div>
              
              <div className="project-body">
                <h3 className="project-title">
                  Ligne Ferroviaire Minière Stratégique<br />
                  Béchar-Tindouf - Gara Djebilet
                </h3>
                
                <div className="project-divider">
                  <div className="divider-dot-left"></div>
                  <div className="divider-line-center"></div>
                  <div className="divider-dot-right"></div>
                </div>
                
                <p className="project-description">
                  Dans le cadre d'un consortium, SNTP contribue à ce projet d'infrastructure ferroviaire de 175 kilomètres.
                </p>
              </div>
              
              <div className="project-footer">
                <div className="footer-tag">
                  <FaHardHat className="tag-icon" />
                  <span>Projet Minier</span>
                </div>
                <div className="footer-tag">
                  <FaCogs className="tag-icon" />
                  <span>Consortium</span>
                </div>
              </div>
              
              <div className="project-accent-line"></div>
            </div>

            <div className="portfolio-project">
              <div className="project-animated-border"></div>
              
              <div className="project-header">
                <div className="project-distance">
                  <FaTrain className="distance-icon" />
                  <span>20 km</span>
                </div>
              </div>
              
              <div className="project-body">
                <h3 className="project-title">
                  Connexion Ferroviaire<br />
                  Khenchela - Aïn El Beida
                </h3>
                
                <div className="project-divider">
                  <div className="divider-dot-left"></div>
                  <div className="divider-line-center"></div>
                  <div className="divider-dot-right"></div>
                </div>
                
                <p className="project-description">
                  Développement de cette infrastructure de transport de 20 kilomètres, mise en œuvre selon les standards de construction ferroviaire.
                </p>
              </div>
              
              <div className="project-footer">
                <div className="footer-tag">
                  <FaTools className="tag-icon" />
                  <span>Transport</span>
                </div>
                <div className="footer-tag">
                  <FaCheckCircle className="tag-icon" />
                  <span>Standards Internationaux</span>
                </div>
              </div>
              
              <div className="project-accent-line"></div>
            </div>

            <div className="portfolio-project">
              <div className="project-animated-border"></div>
              
              <div className="project-header">
                <div className="project-distance">
                  <FaTrain className="distance-icon" />
                  <span>121 km</span>
                </div>
              </div>
              
              <div className="project-body">
                <h3 className="project-title">
                  Construction du Segment Ferroviaire<br />
                  Bouchegouf-Souk Ahras-Drea
                </h3>
                
                <div className="project-divider">
                  <div className="divider-dot-left"></div>
                  <div className="divider-line-center"></div>
                  <div className="divider-dot-right"></div>
                </div>
                
                <p className="project-description">
                  Réalisation d'une infrastructure ferroviaire de 121 kilomètres.
                </p>
              </div>
              
              <div className="project-footer">
                <div className="footer-tag">
                  <FaCogs className="tag-icon" />
                  <span>Infrastructure</span>
                </div>
                <div className="footer-tag">
                  <FaHardHat className="tag-icon" />
                  <span>Construction</span>
                </div>
              </div>
              
              <div className="project-accent-line"></div>
            </div>
          </div>
        </div>
        
        <div className="portfolio-bg-pattern">
          <div className="pattern-line pattern-1"></div>
          <div className="pattern-line pattern-2"></div>
          <div className="pattern-line pattern-3"></div>
        </div>
      </section>
    </div>
  );
};

export default TravauxFerroviaires;
