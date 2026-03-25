// src/pages/NosDirections.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NosDirections.css';
import DirectionCard from '../components/DirectionCard/DirectionCard';
import directionsData from '../data/directionsData';
import { Map, ArrowRight } from 'lucide-react';
import directionHero from '../images/direction.png';

const NosDirections = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  // Séparation Siège Social / Directions régionales
  const siegeSocial = directionsData[0];
  const directionsRegionales = directionsData.slice(1);

  return (
    <div className={`nos-directions-page ${isLoaded ? 'loaded' : ''}`}>

      {/* Hero Section */}
      <section
        className="directions-hero"
        style={{ backgroundImage: `url(${directionHero})` }}
      >
        <div className="directions-hero-overlay"></div>
        <div className="directions-hero-content">
          <h1 className="directions-hero-title">Nos Directions</h1>
          <p className="directions-hero-subtitle">
            Découvrez nos implantations à travers le territoire national
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="directions-content">
        <div className="directions-container">

          <div className="directions-intro">
            <h2 className="directions-section-title">
              Notre Réseau National
            </h2>
            <p className="directions-section-description">
              La SNTP dispose d'un réseau de directions régionales stratégiquement
              implantées sur tout le territoire national pour mieux servir ses clients
              et accompagner le développement des infrastructures en Algérie.
            </p>
          </div>

          {/* ── Siège Social : pleine largeur ── */}
          <div
            className="direction-grid-item direction-grid-item--featured"
            style={{ animationDelay: '0.1s' }}
          >
            <DirectionCard direction={siegeSocial} />
          </div>

          {/* ── Directions Régionales : grille 3 colonnes ── */}
          <div className="directions-grid">
            {directionsRegionales.map((direction, index) => (
              <div
                key={direction.id}
                className="direction-grid-item"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <DirectionCard direction={direction} />
              </div>
            ))}
          </div>

          {/* Section Nos Implantations */}
          <div className="directions-implantations-section">
            <div className="directions-implantations-content">
              <div className="implantations-icon">
                <Map size={48} />
              </div>
              <div className="implantations-text">
                <h2>Découvrez Toutes Nos Implantations</h2>
                <p>
                  Explorez l'ensemble de nos sites à travers le territoire national sur une carte interactive
                </p>
              </div>
              <Link to="/implantations" className="implantations-button">
                <span>Voir la Carte</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Section Info */}
          <div className="directions-footer-info">
            <div className="footer-info-card">
              <h3>Besoin d'informations ?</h3>
              <p>
                Contactez la direction la plus proche de votre région pour
                obtenir des renseignements sur nos services et projets.
              </p>
            </div>
            <div className="footer-info-card">
              <h3>Horaires d'ouverture</h3>
              <p>
                Du dimanche au jeudi : 08h00 - 16h30<br />
                Fermé les vendredis et jours fériés
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default NosDirections;
