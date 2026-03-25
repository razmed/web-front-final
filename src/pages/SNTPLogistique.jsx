import React from 'react';
import './SNTPLogistique.css';
import { FaMapPin } from 'react-icons/fa';

const SNTPLogistique = () => {
  
  // Fonction pour ouvrir Google Maps
  const handleMapClick = (e) => {
    e.preventDefault();
    window.open(
      'https://www.google.com/maps/dir//SNTP+-+Si%C3%A8ge+Social,+Route+Nationale+N%C2%B005,+R%C3%A9ghaia/@36.7538161,3.0421608,17z',
      '_blank'
    );
  };

  return (
    <div className="SNTPLogistique-page">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="SNTPLogistique-hero">
        <div className="SNTPLogistique-hero-overlay"></div>
        <div className="SNTPLogistique-hero-particles"></div>
        <div className="SNTPLogistique-container">
          <div className="SNTPLogistique-hero-content">
            <div className="SNTPLogistique-hero-logo">
              <img 
                src="/images/sntp-logo.png" 
                alt="SNTP Logistique & Maintenance Logo" 
                className="SNTPLogistique-logo-img"
              />
            </div>
            <h1 className="SNTPLogistique-hero-title">
              SNTP LOGISTIQUE & MAINTENANCE
            </h1>
            <div className="SNTPLogistique-hero-subtitle">
              Maintenance industrielle, location d'engins et gestion de parc
            </div>
            <p className="SNTPLogistique-hero-description">
              Expertise complète en entretien, réparation et gestion du matériel de travaux publics
            </p>
          </div>
        </div>
      </section>

      {/* ==================== INTRODUCTION ==================== */}
      <section className="SNTPLogistique-intro-section">
        <div className="SNTPLogistique-container">
          <div className="SNTPLogistique-intro-content">
            <div className="SNTPLogistique-intro-badge">EXCELLENCE OPÉRATIONNELLE</div>
            <h2 className="SNTPLogistique-intro-title">
              Votre partenaire en maintenance et logistique industrielle
            </h2>
            <div className="SNTPLogistique-intro-underline"></div>
            <p className="SNTPLogistique-intro-text">
              SNTP Logistique & Maintenance assure la <strong>disponibilité optimale</strong> de vos équipements industriels 
              et engins de travaux publics. De la <strong>maintenance préventive et curative</strong> à la gestion complète 
              du parc matériel, nous garantissons la <strong>performance</strong> et la <strong>fiabilité</strong> de vos 
              infrastructures opérationnelles.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES PRINCIPAUX ==================== */}
      <section className="SNTPLogistique-services-section">
        <div className="SNTPLogistique-container">
          <div className="SNTPLogistique-section-header">
            <h2 className="SNTPLogistique-section-title">NOS DOMAINES D'EXPERTISE</h2>
            <div className="SNTPLogistique-section-underline"></div>
            <p className="SNTPLogistique-section-subtitle">
              Solutions complètes de maintenance et gestion de matériel
            </p>
          </div>

          <div className="SNTPLogistique-services-grid">
            
            {/* Service 1 - Maintenance */}
            <div className="SNTPLogistique-service-card">
              <div className="SNTPLogistique-service-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
              </div>
              <h3 className="SNTPLogistique-service-title">Maintenance & Entretien</h3>
              <p className="SNTPLogistique-service-description">
                Maintenance préventive et curative de l'ensemble du parc matériel et engins de chantier pour garantir leur disponibilité maximale.
              </p>
              <ul className="SNTPLogistique-service-list">
                <li>Maintenance préventive planifiée</li>
                <li>Interventions curatives rapides</li>
                <li>Entretien des engins TP</li>
                <li>Révisions périodiques</li>
                <li>Diagnostics techniques avancés</li>
              </ul>
            </div>

            {/* Service 2 - Réparation */}
            <div className="SNTPLogistique-service-card">
              <div className="SNTPLogistique-service-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zm0 2c3.51 0 5.96.48 6.93 1.5H5.07C6.04 4.48 8.49 4 12 4zM7.5 17c-.83 0-1.5-.67-1.5-1.5v-1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5zm9 0c-.83 0-1.5-.67-1.5-1.5v-1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
              <h3 className="SNTPLogistique-service-title">Réparation d'Engins</h3>
              <p className="SNTPLogistique-service-description">
                Atelier spécialisé en réparation de tous types d'engins de travaux publics avec équipe technique qualifiée et outillage adapté.
              </p>
              <ul className="SNTPLogistique-service-list">
                <li>Réparation mécanique complète</li>
                <li>Hydraulique et pneumatique</li>
                <li>Électronique embarquée</li>
                <li>Remise en conformité</li>
                <li>Pièces de rechange d'origine</li>
              </ul>
            </div>

            {/* Service 3 - Location */}
            <div className="SNTPLogistique-service-card">
              <div className="SNTPLogistique-service-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
              <h3 className="SNTPLogistique-service-title">Location de Matériel</h3>
              <p className="SNTPLogistique-service-description">
                Parc diversifié d'engins et matériels disponibles à la location avec service complet d'assistance et maintenance incluse.
              </p>
              <ul className="SNTPLogistique-service-list">
                <li>Engins de terrassement</li>
                <li>Matériel de manutention</li>
                <li>Équipements spécialisés TP</li>
                <li>Location courte et longue durée</li>
                <li>Livraison et récupération</li>
              </ul>
            </div>

            {/* Service 4 - Gestion Parc */}
            <div className="SNTPLogistique-service-card">
              <div className="SNTPLogistique-service-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="SNTPLogistique-service-title">Gestion du Parc Roulant</h3>
              <p className="SNTPLogistique-service-description">
                Gestion complète et optimisée du parc véhicules et engins avec suivi informatisé, planification et reporting détaillé.
              </p>
              <ul className="SNTPLogistique-service-list">
                <li>Suivi informatisé du parc</li>
                <li>Planification des maintenances</li>
                <li>Gestion des affectations</li>
                <li>Contrôles réglementaires</li>
                <li>Reporting et indicateurs</li>
              </ul>
            </div>

            {/* Service 5 - Contrats */}
            <div className="SNTPLogistique-service-card">
              <div className="SNTPLogistique-service-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>
              <h3 className="SNTPLogistique-service-title">Gestion des Contrats</h3>
              <p className="SNTPLogistique-service-description">
                Administration complète des contrats spécifiques de matériel, locations et prestations avec suivi rigoureux des échéances.
              </p>
              <ul className="SNTPLogistique-service-list">
                <li>Contrats de location</li>
                <li>Contrats de maintenance</li>
                <li>Suivi des échéances</li>
                <li>Renouvellements automatiques</li>
                <li>Facturation et reporting</li>
              </ul>
            </div>

            {/* Service 6 - Supply Chain */}
            <div className="SNTPLogistique-service-card">
              <div className="SNTPLogistique-service-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"/>
                </svg>
              </div>
              <h3 className="SNTPLogistique-service-title">Supply Chain Matériel</h3>
              <p className="SNTPLogistique-service-description">
                Gestion optimisée de la chaîne d'approvisionnement en pièces détachées, consommables et équipements pour garantir la continuité.
              </p>
              <ul className="SNTPLogistique-service-list">
                <li>Gestion des stocks pièces</li>
                <li>Approvisionnement optimisé</li>
                <li>Logistique des pièces</li>
                <li>Fournisseurs agréés</li>
                <li>Traçabilité complète</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== MATÉRIEL & ENGINS ==================== */}
      <section className="SNTPLogistique-equipment-section">
        <div className="SNTPLogistique-container">
          <div className="SNTPLogistique-section-header">
            <h2 className="SNTPLogistique-section-title SNTPLogistique-section-title-light">
              MATÉRIEL & ENGINS SPÉCIALISÉS
            </h2>
            <div className="SNTPLogistique-section-underline SNTPLogistique-section-underline-light"></div>
            <p className="SNTPLogistique-section-subtitle SNTPLogistique-section-subtitle-light">
              Expertise sur l'ensemble des équipements de travaux publics
            </p>
          </div>

          <div className="SNTPLogistique-equipment-grid">
            
            {/* Catégorie 1 */}
            <div className="SNTPLogistique-equipment-card">
              <h3 className="SNTPLogistique-equipment-title">Engins de Terrassement</h3>
              <ul className="SNTPLogistique-equipment-list">
                <li>Pelles hydrauliques</li>
                <li>Bulldozers</li>
                <li>Niveleuses</li>
                <li>Compacteurs</li>
              </ul>
            </div>

            {/* Catégorie 2 */}
            <div className="SNTPLogistique-equipment-card">
              <h3 className="SNTPLogistique-equipment-title">Centrales à Béton</h3>
              <ul className="SNTPLogistique-equipment-list">
                <li>Centrales fixes</li>
                <li>Centrales mobiles</li>
                <li>Malaxeurs</li>
                <li>Systèmes de dosage</li>
              </ul>
            </div>

            {/* Catégorie 3 */}
            <div className="SNTPLogistique-equipment-card">
              <h3 className="SNTPLogistique-equipment-title">Stations d'Enrobage</h3>
              <ul className="SNTPLogistique-equipment-list">
                <li>Stations fixes</li>
                <li>Stations mobiles</li>
                <li>Finisseurs</li>
                <li>Équipements auxiliaires</li>
              </ul>
            </div>

            {/* Catégorie 4 */}
            <div className="SNTPLogistique-equipment-card">
              <h3 className="SNTPLogistique-equipment-title">Manutention</h3>
              <ul className="SNTPLogistique-equipment-list">
                <li>Chariots élévateurs</li>
                <li>Grues mobiles</li>
                <li>Nacelles élévatrices</li>
                <li>Transpalettes</li>
              </ul>
            </div>

            {/* Catégorie 5 */}
            <div className="SNTPLogistique-equipment-card">
              <h3 className="SNTPLogistique-equipment-title">Équipements Carrières</h3>
              <ul className="SNTPLogistique-equipment-list">
                <li>Concasseurs</li>
                <li>Cribles</li>
                <li>Convoyeurs</li>
                <li>Équipements extraction</li>
              </ul>
            </div>

            {/* Catégorie 6 */}
            <div className="SNTPLogistique-equipment-card">
              <h3 className="SNTPLogistique-equipment-title">Parc Roulant</h3>
              <ul className="SNTPLogistique-equipment-list">
                <li>Camions benne</li>
                <li>Camions toupie</li>
                <li>Véhicules légers</li>
                <li>Remorques</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== AVANTAGES ==================== */}
      <section className="SNTPLogistique-advantages-section">
        <div className="SNTPLogistique-container">
          <div className="SNTPLogistique-section-header">
            <h2 className="SNTPLogistique-section-title">NOS ATOUTS</h2>
            <div className="SNTPLogistique-section-underline"></div>
          </div>

          <div className="SNTPLogistique-advantages-grid">
            
            <div className="SNTPLogistique-advantage-card">
              <div className="SNTPLogistique-advantage-number">01</div>
              <div className="SNTPLogistique-advantage-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="SNTPLogistique-advantage-title">Équipe Technique Qualifiée</h3>
              <p className="SNTPLogistique-advantage-text">
                Mécaniciens, techniciens et ingénieurs spécialisés en maintenance industrielle et engins TP
              </p>
            </div>

            <div className="SNTPLogistique-advantage-card">
              <div className="SNTPLogistique-advantage-number">02</div>
              <div className="SNTPLogistique-advantage-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
                </svg>
              </div>
              <h3 className="SNTPLogistique-advantage-title">Atelier Moderne Équipé</h3>
              <p className="SNTPLogistique-advantage-text">
                Installations techniques de pointe avec outillage spécialisé et bancs de diagnostic
              </p>
            </div>

            <div className="SNTPLogistique-advantage-card">
              <div className="SNTPLogistique-advantage-number">03</div>
              <div className="SNTPLogistique-advantage-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="SNTPLogistique-advantage-title">Disponibilité Maximale</h3>
              <p className="SNTPLogistique-advantage-text">
                Interventions rapides 7j/7 et maintenance préventive pour réduire les temps d'arrêt
              </p>
            </div>

            <div className="SNTPLogistique-advantage-card">
              <div className="SNTPLogistique-advantage-number">04</div>
              <div className="SNTPLogistique-advantage-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"/>
                </svg>
              </div>
              <h3 className="SNTPLogistique-advantage-title">Gestion Digitalisée</h3>
              <p className="SNTPLogistique-advantage-text">
                Système informatisé de suivi en temps réel du parc et des interventions
              </p>
            </div>

            <div className="SNTPLogistique-advantage-card">
              <div className="SNTPLogistique-advantage-number">05</div>
              <div className="SNTPLogistique-advantage-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 12H9v-2h6v2zm5-7H4V4h16v3z"/>
                </svg>
              </div>
              <h3 className="SNTPLogistique-advantage-title">Stock Pièces Détachées</h3>
              <p className="SNTPLogistique-advantage-text">
                Magasin fourni en pièces d'origine pour toutes marques et modèles
              </p>
            </div>

            <div className="SNTPLogistique-advantage-card">
              <div className="SNTPLogistique-advantage-number">06</div>
              <div className="SNTPLogistique-advantage-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </div>
              <h3 className="SNTPLogistique-advantage-title">Contrats Flexibles</h3>
              <p className="SNTPLogistique-advantage-text">
                Solutions adaptées : location courte/longue durée, maintenance forfaitaire ou à l'acte
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== PROCESSUS ==================== */}
      <section className="SNTPLogistique-process-section">
        <div className="SNTPLogistique-container">
          <div className="SNTPLogistique-section-header">
            <h2 className="SNTPLogistique-section-title SNTPLogistique-section-title-light">
              NOTRE PROCESSUS
            </h2>
            <div className="SNTPLogistique-section-underline SNTPLogistique-section-underline-light"></div>
          </div>

          <div className="SNTPLogistique-process-timeline">
            
            <div className="SNTPLogistique-process-step">
              <div className="SNTPLogistique-process-number">01</div>
              <h3 className="SNTPLogistique-process-title">Diagnostic Initial</h3>
              <p className="SNTPLogistique-process-text">
                Évaluation complète de l'état du matériel et identification des besoins
              </p>
            </div>

            <div className="SNTPLogistique-process-arrow">→</div>

            <div className="SNTPLogistique-process-step">
              <div className="SNTPLogistique-process-number">02</div>
              <h3 className="SNTPLogistique-process-title">Planification</h3>
              <p className="SNTPLogistique-process-text">
                Élaboration du planning d'intervention et commande des pièces nécessaires
              </p>
            </div>

            <div className="SNTPLogistique-process-arrow">→</div>

            <div className="SNTPLogistique-process-step">
              <div className="SNTPLogistique-process-number">03</div>
              <h3 className="SNTPLogistique-process-title">Intervention</h3>
              <p className="SNTPLogistique-process-text">
                Réalisation des travaux de maintenance ou réparation par nos équipes
              </p>
            </div>

            <div className="SNTPLogistique-process-arrow">→</div>

            <div className="SNTPLogistique-process-step">
              <div className="SNTPLogistique-process-number">04</div>
              <h3 className="SNTPLogistique-process-title">Contrôle & Suivi</h3>
              <p className="SNTPLogistique-process-text">
                Vérification qualité, tests de fonctionnement et mise à jour du dossier technique
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== CHIFFRES CLÉS ==================== */}
      {/*<section className="SNTPLogistique-stats-section">
        <div className="SNTPLogistique-container">
          <div className="SNTPLogistique-section-header">
            <h2 className="SNTPLogistique-section-title">PERFORMANCE EN CHIFFRES</h2>
            <div className="SNTPLogistique-section-underline"></div>
          </div>

          <div className="SNTPLogistique-stats-grid">
            
            <div className="SNTPLogistique-stat-card">
              <div className="SNTPLogistique-stat-icon">
                <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
              </div>
              <div className="SNTPLogistique-stat-number">500</div>
              <div className="SNTPLogistique-stat-unit">+</div>
              <div className="SNTPLogistique-stat-label">Engins maintenus annuellement</div>
            </div>

            <div className="SNTPLogistique-stat-card">
              <div className="SNTPLogistique-stat-icon">
                <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="SNTPLogistique-stat-number">95</div>
              <div className="SNTPLogistique-stat-unit">%</div>
              <div className="SNTPLogistique-stat-label">Disponibilité du parc</div>
            </div>

            <div className="SNTPLogistique-stat-card">
              <div className="SNTPLogistique-stat-icon">
                <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <div className="SNTPLogistique-stat-number">24</div>
              <div className="SNTPLogistique-stat-unit">H</div>
              <div className="SNTPLogistique-stat-label">Intervention d'urgence</div>
            </div>

          </div>
        </div>
      </section>*/}

      {/* ==================== SECTION CONTACT ==================== */}
      <section className="SNTPLogistique-contact-section SNTPLogistique-fade-in-section">
        <div className="SNTPLogistique-container">
          <div className="SNTPLogistique-section-header">
            <h2 className="SNTPLogistique-section-title">CONTACTEZ-NOUS</h2>
            <div className="SNTPLogistique-section-underline"></div>
          </div>

          <div className="SNTPLogistique-contact-layout">
            
            {/* Google Maps */}
            <div className="SNTPLogistique-contact-map-container">
              <iframe
                className="SNTPLogistique-google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.2572476557594!2d3.0421608!3d36.7538161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb266371a29d9%3A0x1d26846e0ddcddc6!2sSNTP%20-%20Si%C3%A8ge%20Social!5e0!3m2!1sfr!2sdz!4v1234567890123!5m2!1sfr!2sdz"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation SNTP Logistique & Maintenance"
              ></iframe>
            </div>

            {/* Informations de contact */}
            <div className="SNTPLogistique-contact-info-wrapper">
              <div className="SNTPLogistique-contact-grid">
                
                <div className="SNTPLogistique-contact-item">
                  <h3 className="SNTPLogistique-contact-label">Adresse</h3>
                  <p className="SNTPLogistique-contact-info">
                    Route Nationale N°05, BP 50<br />
                    Réghaia, Alger, Algérie
                  </p>
                </div>

                <div className="SNTPLogistique-contact-item">
                  <h3 className="SNTPLogistique-contact-label">Téléphone</h3>
                  <p className="SNTPLogistique-contact-info">
                    <a href="tel:+21323851270">+213 23 85 12 70</a><br />
                    <a href="tel:+21323851280">+213 23 85 12 80</a>
                  </p>
                </div>

                <div className="SNTPLogistique-contact-item">
                  <h3 className="SNTPLogistique-contact-label">Email</h3>
                  <p className="SNTPLogistique-contact-info">
                    <a href="mailto:logistique@sntp.dz">logistique@sntp.dz</a><br />
                    <a href="mailto:maintenance@sntp.dz">maintenance@sntp.dz</a>
                  </p>
                </div>
              </div>

              <button 
                className="SNTPLogistique-cta-button SNTPLogistique-primary-button SNTPLogistique-map-button"
                onClick={handleMapClick}
              >
                <FaMapPin className="SNTPLogistique-btn-icon" />
                Voir sur Google Maps
              </button>

              
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default SNTPLogistique;
