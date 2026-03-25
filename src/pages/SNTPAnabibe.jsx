import React, { useEffect } from 'react';
import './SNTPAnabibe.css';

const SNTPAnabibe = () => {
  // Images - À remplacer par vos chemins réels
  const heroImage = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80';
  const logoAnabibe = 'https://via.placeholder.com/200x80/C1121F/ffffff?text=ANABIBE';
  const image1 = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80';
  const image2 = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80';
  const image3 = 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80';
  const image4 = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80';

  useEffect(() => {
    // Animation au scroll
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

    const animatedElements = document.querySelectorAll('.Anabibe-fade-in-section');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleMapClick = () => {
    window.open('https://www.google.com/maps/dir//35.9287,0.0899', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="Anabibe-page">
      {/* ==================== HERO SECTION ==================== */}
      <section className="Anabibe-hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="Anabibe-hero-overlay"></div>
        <div className="Anabibe-hero-content">
          <div className="Anabibe-hero-logo">
            <img src={logoAnabibe} alt="ANABIBE Logo" />
          </div>
          <h1 className="Anabibe-hero-title">CENTRE INDUSTRIEL D'EXCELLENCE</h1>
          <div className="Anabibe-hero-divider"></div>
          <p className="Anabibe-hero-description">
            Stratégiquement situé dans la zone industrielle de Fornaka (Mostaganem), l'installation de pointe d'ANABIB s'étend sur 12 hectares, spécialisée dans la fabrication de tuyaux en béton armé premium dotés d'une âme en acier et de joints d'étanchéité élastomères haute performance. Notre usine de fabrication avancée fournit des solutions de conduits robustes conçues spécifiquement pour les réseaux d'assainissement critiques et les infrastructures hydrauliques essentielles.
          </p>
        </div>
      </section>

      

      {/* ==================== SOLUTIONS TECHNIQUES HAUTE PERFORMANCE ==================== */}
      <section className="Anabibe-solutions-section Anabibe-fade-in-section">
        <div className="Anabibe-solutions-container">
          <h2 className="Anabibe-solutions-title">SOLUTIONS TECHNIQUES HAUTE PERFORMANCE</h2>
          
          <div className="Anabibe-solutions-grid">
            <div className="Anabibe-solution-card">
              <h3>Tuyaux en béton à âme en acier avancés</h3>
            </div>
            
            <div className="Anabibe-solution-card">
              <h3>Gamme complète : DN800 à DN2000</h3>
            </div>
            
            <div className="Anabibe-solution-card">
              <h3>Pression nominale supérieure : jusqu'à 25 bars (selon le modèle)</h3>
            </div>
            
            <div className="Anabibe-solution-card">
              <h3>Tests hydrostatiques rigoureux : 1,25 × pression nominale</h3>
            </div>
            
            <div className="Anabibe-solution-card">
              <h3>Conformité totale : EN 639, EN 641, EN 642, AWWA.C.301</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SPÉCIFICATIONS DES MATÉRIAUX ==================== */}
      <section className="Anabibe-specifications-section Anabibe-fade-in-section">
        <div className="Anabibe-specifications-container">
          <div className="Anabibe-specifications-text">
            <h2 className="Anabibe-spec-title">SPÉCIFICATIONS DES MATÉRIAUX</h2>
            <div className="Anabibe-spec-divider"></div>
            <div className="Anabibe-spec-list">
              <div className="Anabibe-spec-item">
                Acier de structure : S235 JR NF 100252
              </div>
              <div className="Anabibe-spec-item">
                Joints élastomères haute performance : classe 60 (NF 47307, NF6811)
              </div>
              <div className="Anabibe-spec-item">
                Ciment premium : CPJCEM II.42,5 – NA.442
              </div>
            </div>
          </div>
          <div className="Anabibe-specifications-image">
            <img src={image1} alt="Matériaux" />
          </div>
        </div>
      </section>

      {/* ==================== CONCEPTION MULTICOUCHE CERTIFIÉE ==================== */}
      <section className="Anabibe-multilayer-section Anabibe-fade-in-section">
        <div className="Anabibe-multilayer-container">
          <h2 className="Anabibe-multilayer-title">CONCEPTION MULTICOUCHE CERTIFIÉE</h2>
          <div className="Anabibe-multilayer-grid">
            <div className="Anabibe-layer-card">
              <div className="Anabibe-layer-num">1</div>
              <h3>PAROI INTÉRIEURE EN BÉTON HAUTE PERFORMANCE</h3>
              <ul>
                <li>Protection contre la corrosion renforcée par passivation</li>
                <li>Résistance supérieure à l'abrasion</li>
                <li>Résistance exceptionnelle au vide</li>
              </ul>
            </div>

            <div className="Anabibe-layer-card">
              <div className="Anabibe-layer-num">2</div>
              <h3>ÂME EN ACIER CONÇUE</h3>
              <ul>
                <li>Soudage longitudinal ou hélicoïdal de précision</li>
                <li>Intégrité d'étanchéité maximale</li>
                <li>Système d'auto-ancrage intégré du tuyau</li>
              </ul>
            </div>

            <div className="Anabibe-layer-card">
              <div className="Anabibe-layer-num">3</div>
              <h3>RENFORCEMENT EN ACIER STRUCTUREL</h3>
              <ul>
                <li>Technologie d'enroulement hélicoïdal avancée</li>
                <li>Fil d'acier à pas constant conçu</li>
              </ul>
            </div>

            <div className="Anabibe-layer-card">
              <div className="Anabibe-layer-num">4</div>
              <h3>BOUCLIER EXTÉRIEUR EN BÉTON ARMÉ</h3>
              <ul>
                <li>Protection complète contre les agents environnementaux</li>
                <li>Résistance supérieure à la charge de remblai</li>
                <li>Distribution améliorée des forces externes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== APPLICATIONS ÉPROUVÉES ==================== */}
      <section className="Anabibe-applications-section Anabibe-fade-in-section">
        <div className="Anabibe-applications-container">
          <div className="Anabibe-applications-image">
            <img src={image2} alt="Applications" />
          </div>
          <div className="Anabibe-applications-text">
            <h2 className="Anabibe-app-title">APPLICATIONS ÉPROUVÉES</h2>
            <div className="Anabibe-app-divider"></div>
            <ul className="Anabibe-app-list">
              <li>Circuits de refroidissement industriels (installations thermiques et nucléaires)</li>
              <li>Systèmes d'approvisionnement en eau potable critiques</li>
              <li>Prises d'eau aménagées et émissaires marins</li>
              <li>Réseaux d'assainissement à haute intégrité</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ==================== PROCESSUS DE FABRICATION ==================== */}
      <section className="Anabibe-process-section Anabibe-fade-in-section">
        <div className="Anabibe-process-container">
          <h2 className="Anabibe-process-title">PROCESSUS DE FABRICATION</h2>
          <div className="Anabibe-process-steps">
            <div className="Anabibe-step">
              <div className="Anabibe-step-number">01</div>
              <p>Fabrication avancée d'âme en acier par soudage contrôlé</p>
            </div>
            <div className="Anabibe-step">
              <div className="Anabibe-step-number">02</div>
              <p>Vérification complète des soudures par pénétration capillaire</p>
            </div>
            <div className="Anabibe-step">
              <div className="Anabibe-step-number">03</div>
              <p>Tests systématiques d'intégrité hydraulique</p>
            </div>
            <div className="Anabibe-step">
              <div className="Anabibe-step-number">04</div>
              <p>Renforcement conçu par enroulement hélicoïdal de précision</p>
            </div>
            <div className="Anabibe-step">
              <div className="Anabibe-step-number">05</div>
              <p>Moulage du béton en une seule opération sous vibration contrôlée</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTRÔLE QUALITÉ COMPLET ==================== */}
      <section className="Anabibe-quality-section Anabibe-fade-in-section">
        <div className="Anabibe-quality-layout">
          <div className="Anabibe-quality-text">
            <h2 className="Anabibe-quality-title">CONTRÔLE QUALITÉ COMPLET</h2>
            <div className="Anabibe-quality-divider"></div>
            <h3 className="Anabibe-quality-subtitle">PROTOCOLE DE TEST AVANCÉ</h3>
            <ul className="Anabibe-quality-list">
              <li>Contrôle hydrostatique systématique : 3 tuyaux pour 250 unités</li>
              <li>Vérification de pression maximale : 1,25 de la pression nominale</li>
              <li>Durée de test normalisée : 5 minutes</li>
              <li>Vérification dimensionnelle de précision à l'aide de gabarits calibrés</li>
              <li>Assurance qualité de laboratoire avancée</li>
              <li>Moulage du béton en une seule opération sous vibration contrôlée</li>
            </ul>
          </div>
          <div className="Anabibe-quality-image">
            <img src={image3} alt="Contrôle Qualité" />
          </div>
        </div>
      </section>

      {/* ==================== CARACTÉRISTIQUES DE PERFORMANCE CONÇUES ==================== */}
      <section className="Anabibe-performance-section Anabibe-fade-in-section">
        <div className="Anabibe-performance-container">
          <h2 className="Anabibe-performance-title">CARACTÉRISTIQUES DE PERFORMANCE CONÇUES</h2>
          <div className="Anabibe-performance-grid">
            <div className="Anabibe-perf-card">
              <p>Résistance supérieure aux contraintes externes</p>
            </div>
            <div className="Anabibe-perf-card">
              <p>Tolérance améliorée à la pression et au vide</p>
            </div>
            <div className="Anabibe-perf-card">
              <p>Longévité exceptionnelle du réseau</p>
            </div>
            <div className="Anabibe-perf-card">
              <p>Fabrication premium contrôlée en usine</p>
            </div>
            <div className="Anabibe-perf-card">
              <p>Métriques de performance des matériaux optimisées</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INTÉGRATION STRATÉGIQUE ==================== */}
      <section className="Anabibe-integration-section Anabibe-fade-in-section">
        <div className="Anabibe-integration-container">
          <div className="Anabibe-integration-image">
            <img src={image4} alt="Intégration SNTP" />
          </div>
          <div className="Anabibe-integration-text">
            <h2 className="Anabibe-int-title">INTÉGRATION STRATÉGIQUE</h2>
            <div className="Anabibe-int-divider"></div>
            <h3 className="Anabibe-int-subtitle">INTÉGRATION COMPLÈTE AU SEIN DES DÉPARTEMENTS SNTP</h3>
            <ul className="Anabibe-int-list">
              <li>Collaboration transparente avec SNTP Engineering</li>
              <li>Optimisation complète de la chaîne de valeur</li>
              <li>Intégration de solutions techniques avancées</li>
              <li>Système complet d'assurance qualité</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ==================== AVANTAGES STRATÉGIQUES ==================== */}
      <section className="Anabibe-advantages-section Anabibe-fade-in-section">
        <div className="Anabibe-advantages-container">
          <h2 className="Anabibe-advantages-title">AVANTAGES STRATÉGIQUES</h2>
          <div className="Anabibe-advantages-grid">
            <div className="Anabibe-adv-card">
              <p>Capacité de production nationale critique</p>
            </div>
            <div className="Anabibe-adv-card">
              <p>Capacité de fabrication substantielle</p>
            </div>
            <div className="Anabibe-adv-card">
              <p>Normes de qualité certifiées internationalement</p>
            </div>
            <div className="Anabibe-adv-card">
              <p>Expertise technique reconnue par l'industrie</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION CONTACT ==================== */}
      <section id="contact-section" className="Anabibe-contact-section Anabibe-fade-in-section">
        <h2 className="Anabibe-contact-title">Retrouvez-Nous</h2>
        <div className="Anabibe-contact-layout">
          <div className="Anabibe-contact-map-container">
            <iframe
              className="Anabibe-google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.8!2d0.0899!3d35.9287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDU1JzQzLjQiTiAwwrAwNScyMy42IkU!5e0!3m2!1sfr!2sdz!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ANABIBE Location"
            ></iframe>
          </div>

          <div className="Anabibe-contact-info-wrapper">
            <div className="Anabibe-contact-grid">
              <div className="Anabibe-contact-item">
                <div className="Anabibe-contact-label">Adresse</div>
                <div className="Anabibe-contact-info">
                  Zone Industrielle, lot n°16, Fornaka<br />
                  Mostaganem, Algérie, 27160
                </div>
              </div>

              <div className="Anabibe-contact-item">
                <div className="Anabibe-contact-label">Contact</div>
                <div className="Anabibe-contact-info">
                  <a href="tel:+213XXXXXXXXX">Tél: +213 XX XX XX XX</a><br />
                  <a href="mailto:anabibe@sntp.dz">anabibe@sntp.dz</a>
                </div>
              </div>
            </div>

            <button 
              onClick={handleMapClick}
              className="Anabibe-cta-button Anabibe-primary-button"
            >
               Obtenir l'itinéraire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SNTPAnabibe;
