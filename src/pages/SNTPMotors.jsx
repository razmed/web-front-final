import React, { useEffect, useState } from 'react';
import './SNTPMotors.css';
import motorVideo from '../video/motor.mp4';
import heroVideo from '../video/heromotor.mp4';
import cam1 from '../images/cam.png';
import cam2 from '../images/cam2.png';
import cam3 from '../images/cam3.png';
import cam4 from '../images/cam4.png';

const SNTPMotors = () => {

  const camImages = [cam1, cam2, cam3, cam4];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -80px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sm-animate-in');
        }
      });
    }, observerOptions);
    const animatedElements = document.querySelectorAll('.sm-fade-section');
    animatedElements.forEach(el => observer.observe(el));
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Carrousel auto
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % camImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [camImages.length]);

  const handleMapClick = () => {
    window.open(
      'https://www.bing.com/maps/default.aspx?v=2&pc=FACEBK&mid=8100&where1=N%C2%B071%20Activity%20Zone%20Dar%20el%20Beida%2C%20Algiers%2C%20Algeria%2C%2016000',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const services = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      ),
      title: 'Vente de Camions SHACMAN',
      description: "Concession officielle et exclusive SHACMAN en Algérie. Vente de camions poids lourds, semi-remorques et porteurs pour tous les secteurs d'activité : BTP, transport, logistique et industrie."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: 'Pièces de Rechange Officielles',
      description: "Fourniture de pièces de rechange d'origine SHACMAN garanties. Stocks disponibles en permanence pour assurer la continuité d'exploitation de votre flotte sans interruption."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      ),
      title: 'Service Après-Vente (SAV)',
      description: "Service après-vente agréé SHACMAN assuré par des techniciens formés directement par le constructeur. Diagnostic, maintenance préventive et réparations réalisés selon les standards d'usine."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
      ),
      title: 'Location de Véhicules Lourds',
      description: "Mise à disposition de camions et engins lourds SHACMAN pour les chantiers du groupe SNTP et les entreprises de travaux publics. Solutions flexibles à court, moyen et long terme."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      title: 'Garantie Constructeur',
      description: "Chaque véhicule vendu bénéficie de la garantie officielle SHACMAN. Couverture complète des défauts de fabrication avec prise en charge par notre réseau SAV agréé sur le territoire national."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      title: 'Conseil & Accompagnement',
      description: "Notre équipe commerciale vous accompagne dans le choix du véhicule adapté à vos besoins opérationnels. Étude personnalisée, financement et livraison coordonnée sur chantier ou en concession."
    }
  ];

  const chiffres = [
    { value: '+50', label: "Ans d'expérience SHACMAN" },
    { value: 'N°1', label: 'Concessionnaire SHACMAN en Algérie' },
    { value: '100+', label: 'Modèles & Configurations' },
    { value: '24/7', label: 'Support technique disponible' }
  ];

  return (
    <div className="sm-page">

      {/* ==================== HERO ==================== */}
<section className="sm-hero">
  {/* Vidéo arrière-plan */}
  <video
    className="sm-hero-video-bg"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src={heroVideo} type="video/mp4" />
  </video>

  <div className="sm-hero-overlay" />

  <div className="sm-hero-content">
    
    <h1 className="sm-hero-title">
      SNTP <span className="sm-hero-accent">Motors</span>
    </h1>
    <p className="sm-hero-subtitle">
      Seul concessionnaire exclusif de la marque{' '}
      <strong style={{ color: '#fff' }}>SHACMAN</strong> en Algérie —
      l'un des plus grands constructeurs de véhicules utilitaires au monde depuis plus de 50 ans.
    </p>
    
  </div>

  <div className="sm-hero-scroll-indicator">
    <div className="sm-scroll-dot" />
  </div>
</section>


      {/* ==================== PRÉSENTATION ==================== */}
      <section className="sm-section sm-fade-section" id="sm-presentation">
        <div className="sm-container">
          <div className="sm-section-header">
            <h2 className="sm-section-title">SNTP Motors & SHACMAN</h2>
            <div className="sm-section-divider" />
          </div>
          <div className="sm-presentation-grid">
            <div className="sm-presentation-text">
              <p className="sm-lead">
                <strong>SNTP Motors</strong> est le{' '}
                <strong>seul concessionnaire officiel et exclusif de la marque SHACMAN en Algérie</strong>,
                désigné par le constructeur chinois pour représenter et distribuer sa gamme complète
                de véhicules industriels sur l'ensemble du territoire national.
              </p>
              <p>
                <strong>SHACMAN</strong> (Shaanxi Automobile Group), fondé il y a plus de{' '}
                <strong>50 ans</strong>, est aujourd'hui l'un des plus grands constructeurs de camions
                et véhicules utilitaires lourds au monde. Ses véhicules sont reconnus pour leur
                robustesse, leur fiabilité en conditions extrêmes et leur excellence technologique.
              </p>
              <p>
                À travers ce partenariat stratégique, SNTP Motors met à la disposition des entreprises
                algériennes — dans les secteurs du BTP, des travaux publics, de la logistique et de
                l'industrie — une gamme complète de solutions de transport lourd adaptées aux exigences
                des grands chantiers nationaux.
              </p>
              <ul className="sm-feature-list">
                <li><div className="sm-feature-dot" /><span>Concession officielle et exclusive SHACMAN en Algérie</span></li>
                <li><div className="sm-feature-dot" /><span>Gamme complète : camions, tracteurs routiers, bennes, semi-remorques</span></li>
                <li><div className="sm-feature-dot" /><span>Techniciens formés et certifiés par SHACMAN China</span></li>
                <li><div className="sm-feature-dot" /><span>Pièces de rechange d'origine garanties et disponibles en stock</span></li>
                <li><div className="sm-feature-dot" /><span>Couverture nationale pour les chantiers et livraisons sur site</span></li>
              </ul>
            </div>
            <div className="sm-presentation-video">
              <video
                className="sm-video-player"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={motorVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="sm-section sm-section-alt sm-fade-section" id="sm-services">
        <div className="sm-container">
          <div className="sm-section-header">
            <span className="sm-section-tag">Ce que nous offrons</span>
            <h2 className="sm-section-title">Nos Services</h2>
            <div className="sm-section-divider" />
          </div>
          <div className="sm-services-grid">
            {services.map((service, i) => (
              <div className="sm-service-card" key={i}>
                <div className="sm-service-icon">{service.icon}</div>
                <h3 className="sm-service-title">{service.title}</h3>
                <p className="sm-service-desc">{service.description}</p>
                <div className="sm-service-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== POURQUOI SHACMAN ==================== */}
      <section className="sm-section sm-engagement-section sm-fade-section">
        <div className="sm-container">
          <div className="sm-engagement-grid">
            <div className="sm-engagement-text">
              <span className="sm-section-tag">Pourquoi SHACMAN ?</span>
              <h2 className="sm-section-title">
                Un constructeur mondial,<br />une présence locale unique
              </h2>
              <div className="sm-section-divider sm-divider-left" />
              <p>
                Fondé en <strong>1968</strong> à Xi'an (Chine), SHACMAN (Shaanxi Automobile Group Co., Ltd.)
                s'est imposé comme l'un des constructeurs de référence pour les véhicules lourds destinés
                aux environnements exigeants : mines, chantiers de travaux publics, transport longue
                distance et secteurs industriels.
              </p>
              <p>
                Ses véhicules sont déployés dans plus de <strong>90 pays</strong> à travers le monde,
                reconnus pour leurs moteurs haute performance, leur robustesse structurelle et leurs
                faibles coûts de maintenance sur le long terme — des atouts essentiels pour les grands
                chantiers algériens.
              </p>
              
              
            </div>

            {/* CARROUSEL */}
            <div className="sm-engagement-visual">
              <div className="sm-carousel">
                <div className="sm-carousel-track">
                  {camImages.map((img, i) => (
                    <div
                      className={`sm-carousel-slide ${i === currentSlide ? 'active' : ''}`}
                      key={i}
                    >
                      <img
                        src={img}
                        alt={`SHACMAN véhicule ${i + 1}`}
                        className="sm-carousel-img"
                      />
                    </div>
                  ))}
                </div>
                <div className="sm-carousel-dots">
                  {camImages.map((_, i) => (
                    <button
                      key={i}
                      className={`sm-carousel-dot ${i === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(i)}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="sm-carousel-progress">
                  <div className="sm-carousel-progress-bar" key={currentSlide} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="sm-contact" className="sm-contact-section sm-fade-section">
        <div className="sm-container">
          <h2 className="sm-contact-title">Contactez-Nous</h2>
          <div className="sm-contact-layout">
            <div className="sm-contact-map-container">
              <iframe
                className="sm-google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.0!2d3.2167!3d36.7272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb0000000001%3A0x0!2sZone+d%27Activit%C3%A9+N71+Dar+el+Beida%2C+Alger!5e0!3m2!1sfr!2sdz!4v1708200000000!5m2!1sfr!2sdz"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation SNTP Motors"
              />
            </div>
            <div className="sm-contact-info-wrapper">
              <div className="sm-contact-grid">
                <div className="sm-contact-item">
                  <div className="sm-contact-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="sm-contact-label">Adresse</h3>
                    <p className="sm-contact-info">
                      N°71 Zone d'Activité, Dar el Beida<br />
                      Alger, Algérie — 16000
                    </p>
                  </div>
                </div>
                <div className="sm-contact-item">
                  <div className="sm-contact-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="sm-contact-label">Concessionnaire</h3>
                    <p className="sm-contact-info">
                      SNTP Motors — Distributeur Officiel Exclusif<br />
                      SHACMAN Algérie
                    </p>
                  </div>
                </div>
                <div className="sm-contact-item">
                  <div className="sm-contact-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="sm-contact-label">Réseaux Sociaux</h3>
                    <p className="sm-contact-info">
                      <a
                        href="https://www.facebook.com/p/SNTP-Motors-61564023038845/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm-social-link"
                      >
                        Facebook — SNTP Motors
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <button className="sm-btn-primary sm-map-btn" onClick={handleMapClick}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Ouvrir dans la carte
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SNTPMotors;
