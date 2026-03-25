import React, { useEffect } from 'react';
import './SNTPFerroviaire.css';
import manageImg from '../images/managefero.png';
import heroFero from '../images/herofero.png';
const SNTPFerroviaire = () => {
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.SF-fade-in-section');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/eHsgP5sJLmeCZxBy9', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="SF-page">

      {/* ==================== HERO SECTION ==================== */}
      <section className="SF-hero-section" style={{ backgroundImage: `url(${heroFero})` }}>

        <div className="SF-hero-overlay"></div>
        <div className="SF-hero-content">
          
          <h1 className="SF-hero-title">SNTP FERROVIAIRE</h1>
          <p className="SF-hero-subtitle">
            <span className="SF-highlight">L'EXCELLENCE</span> AU SERVICE DE LA MOBILITÉ DURABLE
          </p>
          <p className="SF-hero-description">
            L'Unité SNTP Ferroviaire joue un rôle central dans l'ingénierie et le développement des infrastructures de transport ferroviaire. Forte d'une expertise reconnue et d'une maîtrise technique confirmée, elle se positionne comme un acteur incontournable dans la réalisation de projets ferroviaires complexes à grande échelle.
          </p>
          
        </div>
        <div className="SF-hero-scroll-indicator">
          <div className="SF-scroll-dot"></div>
        </div>
      </section>

      {/* ==================== NOTRE EXPERTISE ==================== */}
      <section className="SF-expertise-section SF-fade-in-section">
        <div className="SF-container">
          <div className="SF-section-header">
            <h2 className="SF-section-title">NOTRE EXPERTISE</h2>
            <div className="SF-section-underline"></div>
            <p className="SF-section-subtitle">
              Notre unité dispose de compétences intégrées couvrant l'ensemble de la chaîne de valeur ferroviaire.
            </p>
          </div>

          <div className="SF-expertise-grid">
            <div className="SF-expertise-card">
              <div className="SF-expertise-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7H6V5h12v5z"/>
                </svg>
              </div>
              <div className="SF-expertise-content">
                <h3 className="SF-expertise-card-title">Lignes Ferroviaires Stratégiques</h3>
                <p className="SF-expertise-card-desc">Conception et réalisation de lignes ferroviaires en environnements contraignants.</p>
              </div>
              <div className="SF-expertise-card-number">01</div>
            </div>

            <div className="SF-expertise-card">
              <div className="SF-expertise-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div className="SF-expertise-content">
                <h3 className="SF-expertise-card-title">Réseaux Ferroviaires Nationaux</h3>
                <p className="SF-expertise-card-desc">Développement et interconnexion de réseaux ferroviaires à l'échelle nationale.</p>
              </div>
              <div className="SF-expertise-card-number">02</div>
            </div>

            <div className="SF-expertise-card">
              <div className="SF-expertise-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
              <div className="SF-expertise-content">
                <h3 className="SF-expertise-card-title">Corridors Logistiques</h3>
                <p className="SF-expertise-card-desc">Maîtrise des corridors logistiques et de transport de marchandises à grande échelle.</p>
              </div>
              <div className="SF-expertise-card-number">03</div>
            </div>

            <div className="SF-expertise-card">
              <div className="SF-expertise-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>
                </svg>
              </div>
              <div className="SF-expertise-content">
                <h3 className="SF-expertise-card-title">Chemins de Fer Miniers</h3>
                <p className="SF-expertise-card-desc">Expertise spécialisée dans les chemins de fer miniers et industriels.</p>
              </div>
              <div className="SF-expertise-card-number">04</div>
            </div>

            <div className="SF-expertise-card">
              <div className="SF-expertise-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/>
                </svg>
              </div>
              <div className="SF-expertise-content">
                <h3 className="SF-expertise-card-title">Plateformes & Superstructures</h3>
                <p className="SF-expertise-card-desc">Ingénierie des plateformes et superstructures ferroviaires de haute précision.</p>
              </div>
              <div className="SF-expertise-card-number">05</div>
            </div>

            <div className="SF-expertise-card">
              <div className="SF-expertise-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                </svg>
              </div>
              <div className="SF-expertise-content">
                <h3 className="SF-expertise-card-title">Engineering Adaptatif</h3>
                <p className="SF-expertise-card-desc">Solutions d'engineering adaptées aux contraintes géographiques et climatiques extrêmes.</p>
              </div>
              <div className="SF-expertise-card-number">06</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CAPACITÉS MANAGÉRIALES ==================== */}
      <section className="SF-management-section SF-fade-in-section">
        <div className="SF-container">
          <div className="SF-management-layout">
            <div className="SF-management-text">
              <div className="SF-section-header SF-section-header-left">
                <h2 className="SF-section-title">CAPACITÉS ORGANISATIONNELLES & MANAGÉRIALES</h2>
                <div className="SF-section-underline"></div>
              </div>
              <p className="SF-management-para">
                Au-delà de son expertise technique, l'Unité SNTP Ferroviaire se distingue par de solides compétences en organisation et en management. La réalisation de grands projets ferroviaires nécessite de coordonner de nombreux acteurs : partenaires, sous-traitants, fournisseurs et autorités, dans des environnements souvent complexes.
              </p>
              <p className="SF-management-para">
                Notre unité s'appuie sur des méthodes de gestion de projet efficaces et des outils de planification et de suivi permettant d'assurer la cohérence et la bonne avancée des travaux. Habitués à piloter des consortiums multi-entreprises, nous savons organiser la gouvernance, faciliter la communication et clarifier les responsabilités de chacun.
              </p>
             
            </div>

            
          {/* ---- IMAGE DROITE ---- */}
      <div className="SF-management-image-wrapper">
        <img
          src={manageImg}
          alt="Capacités managériales SNTP Ferroviaire"
          className="SF-management-image"
        />
        <div className="SF-management-image-overlay"></div>
        
      </div>

    </div>
  </div>
</section>

      {/* ==================== IMPACT STRATÉGIQUE ==================== */}
      <section className="SF-impact-section SF-fade-in-section">
        <div className="SF-container">
          <div className="SF-section-header">
            <h2 className="SF-section-title SF-section-title-light">IMPACT STRATÉGIQUE</h2>
            <div className="SF-section-underline SF-section-underline-light"></div>
            <p className="SF-section-subtitle SF-section-subtitle-light">
              L'action de l'Unité SNTP Ferroviaire génère des retombées majeures sur plusieurs dimensions.
            </p>
          </div>

          <div className="SF-impact-grid">
            <div className="SF-impact-card">
              <div className="SF-impact-card-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                </svg>
              </div>
              <h3 className="SF-impact-card-title">Développement Minier</h3>
              <p className="SF-impact-card-desc">Désenclavement et valorisation des gisements stratégiques, notamment Gara Djebilet.</p>
              <div className="SF-impact-card-bar"></div>
            </div>

            <div className="SF-impact-card SF-impact-card-accent">
              <div className="SF-impact-card-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7H6V5h12v5z"/>
                </svg>
              </div>
              <h3 className="SF-impact-card-title">Réseau National</h3>
              <p className="SF-impact-card-desc">Modernisation et extension du réseau ferroviaire algérien.</p>
              <div className="SF-impact-card-bar"></div>
            </div>

            <div className="SF-impact-card">
              <div className="SF-impact-card-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <h3 className="SF-impact-card-title">Développement Économique</h3>
              <p className="SF-impact-card-desc">Création d'emplois et stimulation de la croissance dans les territoires desservis.</p>
              <div className="SF-impact-card-bar"></div>
            </div>

            <div className="SF-impact-card SF-impact-card-accent">
              <div className="SF-impact-card-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="SF-impact-card-title">Connectivité Territoriale</h3>
              <p className="SF-impact-card-desc">Amélioration des liaisons inter-régionales et réduction des disparités.</p>
              <div className="SF-impact-card-bar"></div>
            </div>

            <div className="SF-impact-card SF-impact-card-wide">
              <div className="SF-impact-card-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
              </div>
              <h3 className="SF-impact-card-title">Souveraineté Technique</h3>
              <p className="SF-impact-card-desc">Montée en compétence nationale dans l'ingénierie ferroviaire de haut niveau.</p>
              <div className="SF-impact-card-bar"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VISION & AMBITIONS ==================== */}
      <section className="SF-vision-section SF-fade-in-section">
        <div className="SF-container">
          <div className="SF-section-header">
            <h2 className="SF-section-title">VISION & AMBITIONS STRATÉGIQUES</h2>
            <div className="SF-section-underline"></div>
          </div>

          <div className="SF-vision-quote-block">
            <div className="SF-vision-quote-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>
            <blockquote className="SF-vision-quote">
              Transformer les défis complexes en infrastructures durables, au service du développement national.
            </blockquote>
          </div>

          <div className="SF-vision-grid">
            <div className="SF-vision-card">
              <div className="SF-vision-card-num">01</div>
              <div className="SF-vision-card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44C3.21 17.21 3 16.88 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z"/>
                </svg>
              </div>
              <h4>Intégration des nouvelles technologies</h4>
              <p>Intégration des nouvelles technologies dans chaque projet ferroviaire.</p>
            </div>

            <div className="SF-vision-card">
              <div className="SF-vision-card-num">02</div>
              <div className="SF-vision-card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                </svg>
              </div>
              <h4>Renforcement des capacités</h4>
              <p>Face à des environnements complexes et contraignants.</p>
            </div>

            <div className="SF-vision-card">
              <div className="SF-vision-card-num">03</div>
              <div className="SF-vision-card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>
                </svg>
              </div>
              <h4>Formation des futurs ingénieurs</h4>
              <p>Développement des compétences des ingénieurs et techniciens du secteur ferroviaire.</p>
            </div>

            <div className="SF-vision-card">
              <div className="SF-vision-card-num">04</div>
              <div className="SF-vision-card-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-4h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"/>
                </svg>
              </div>
              <h4>Vision long terme</h4>
              <p>En phase avec les objectifs de développement de l'Algérie.</p>
            </div>
          </div>

          <div className="SF-vision-portfolio">
            <div className="SF-portfolio-content">
              <div className="SF-portfolio-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/>
                </svg>
              </div>
              <div className="SF-portfolio-text">
                <span className="SF-portfolio-value">121 Milliards DZD</span>
                <span className="SF-portfolio-label">Portefeuille de projets — Confiance des partenaires confirmée</span>
              </div>
            </div>
            <div className="SF-portfolio-bar">
              <div className="SF-portfolio-bar-fill"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact-section" className="SF-contact-section SF-fade-in-section">
        <div className="SF-container">
          <div className="SF-section-header">
            <h2 className="SF-section-title">CONTACTEZ-NOUS</h2>
            <div className="SF-section-underline"></div>
          </div>

          <div className="SF-contact-layout">
            <div className="SF-contact-map-container">
              <iframe
                className="SF-google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.2!2d3.054!3d36.752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb31d1e1d1d1d%3A0x1d1d1d1d1d1d1d1d!2sAlger%2C%20Alg%C3%A9rie!5e0!3m2!1sfr!2sdz!4v1700000000000!5m2!1sfr!2sdz"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation SNTP Ferroviaire"
              ></iframe>
            </div>

            <div className="SF-contact-info-wrapper">
              <div className="SF-contact-grid">
                <div className="SF-contact-item">
                  <div className="SF-contact-item-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="SF-contact-label">Adresse</h3>
                    <p className="SF-contact-info">Alger, Algérie</p>
                  </div>
                </div>

                <div className="SF-contact-item">
                  <div className="SF-contact-item-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="SF-contact-label">Téléphone</h3>
                    <p className="SF-contact-info">
                      <a href="tel:+21323000000">+213 (0) 23 XX XX XX</a>
                    </p>
                  </div>
                </div>

                <div className="SF-contact-item">
                  <div className="SF-contact-item-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="SF-contact-label">Email</h3>
                    <p className="SF-contact-info">
                      <a href="mailto:ferroviaire@sntp.dz">ferroviaire@sntp.dz</a>
                    </p>
                  </div>
                </div>
              </div>

              <button
                className="SF-cta-button"
                onClick={handleMapClick}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Ouvrir dans Google Maps
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SNTPFerroviaire;
