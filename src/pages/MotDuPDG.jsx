import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './About.css';
import pdgImage from '../images/pdg.jpg';

const About = () => {
  return (
    <div className="About-page">
      <section className="About-ceo-section">
        <div className="About-ceo-container">
          {/* Header simplifié - Uniquement le badge */}
          <motion.div 
            className="About-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="About-header-badge">
              <Quote size={24} />
              <span>MESSAGE DU PRÉSIDENT-DIRECTEUR GÉNÉRAL</span>
            </div>
          </motion.div>

          <div className="About-content-wrapper">
            {/* SECTION SUPÉRIEURE : 2 colonnes (Photo + Intro/Citation) */}
            <div className="About-top-section">
              {/* Colonne gauche : Photo PDG */}
              <motion.aside 
                className="About-sidebar"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="About-pdg-card">
                  <div className="About-pdg-image-wrapper">
                    <img
                      src={pdgImage}
                      alt="YAHI Hacene - PDG SNTP"
                      className="About-pdg-image"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x500/0D1B2A/FFFFFF?text=YAHI+Hacene';
                      }}
                    />
                    <div className="About-pdg-overlay">
                      <div className="About-pdg-badge">PDG</div>
                    </div>
                  </div>
                  <div className="About-pdg-info">
                    <h2 className="About-pdg-name">YAHI Hacene</h2>
                    <p className="About-pdg-title">Président-Directeur Général</p>
                    <div className="About-pdg-divider"></div>
                    <p className="About-pdg-company">Société Nationale des Travaux Publics</p>
                    <p className="About-pdg-date">En fonction depuis novembre 2025</p>
                  </div>
                </div>
              </motion.aside>

              {/* Colonne droite : Titre + Introduction + Citation */}
              <motion.div 
                className="About-top-content"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Introduction avec titre intégré */}
                <div className="About-message-intro">
                  <Quote className="About-quote-icon" size={40} />
                  
                  {/* Titre déplacé ici */}
                  <h1 className="About-intro-title">
                    Un Nouveau Chapitre Fondé sur la Confiance et la Responsabilité
                  </h1>
                  
                  <p>
                    Le 5 novembre 2025, j'ai eu l'honneur d'assumer la direction de la Société Nationale des Travaux Publics (SNTP), investi d'une lourde responsabilité et d'une noble mission : <strong>poursuivre la construction des fondations de l'Algérie moderne</strong> et transformer notre expertise accumulée en un nouvel élan vers le leadership et l'innovation.
                  </p>
                </div>

                {/* Citation highlight */}
                <div className="About-highlight-box">
                  <div className="About-highlight-border"></div>
                  <p className="About-highlight-text">
                    Dans un secteur où les réalisations parlent plus fort que les mots, et où la crédibilité se mesure par des résultats concrets obtenus sur le terrain, <strong>la confiance demeure l'actif le plus précieux que nous puissions bâtir.</strong>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* SECTION INFÉRIEURE : Pleine largeur (Sections + Conclusion + Signature) */}
            <motion.main 
              className="About-main-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Section 01 */}
              <div className="About-message-section">
                <div className="About-section-header">
                  <span className="About-section-number">01</span>
                  <h3 className="About-section-title">Un Héritage de Réalisations et une Expertise de Terrain Éprouvée</h3>
                </div>
                <div className="About-section-content">
                  <p>
                    Depuis sa création en <strong>1977</strong>, notre entreprise a démontré qu'elle est bien plus qu'une simple entreprise de construction. La SNTP s'est imposée comme un <strong>pilier national</strong> dans le développement des infrastructures stratégiques et comme un véritable terrain d'innovation en ingénierie, même dans les conditions naturelles et économiques les plus exigeantes.
                  </p>
                  <p>
                    Nos réalisations dans les domaines des <strong>chemins de fer, des autoroutes, des ports, des aéroports</strong> et des grands réseaux d'infrastructures témoignent clairement de notre capacité à relever des défis complexes et à les transformer en réalisations concrètes à fort impact, au service de la nation et de ses citoyens.
                  </p>
                </div>
              </div>

              {/* Section 02 */}
              <div className="About-message-section">
                <div className="About-section-header">
                  <span className="About-section-number">02</span>
                  <h3 className="About-section-title">Accélérer la Modernisation et l'Expansion Stratégique</h3>
                </div>
                <div className="About-section-content">
                  <p>
                    Aujourd'hui, alors que nous entamons une nouvelle phase de croissance, nos priorités stratégiques s'articulent autour de deux axes complémentaires : la <strong>modernisation en profondeur de nos systèmes internes</strong> et une <strong>expansion géographique stratégique</strong> visant à renforcer notre présence opérationnelle et à consolider notre empreinte nationale.
                  </p>
                  <p>
                    Dans ce cadre, nous mettons en place une unité dédiée de <strong>Maintenance et Logistique SNTP</strong>, chargée de gérer un parc de plus de <strong className="About-stat">2 000 équipements</strong> de production, en conformité avec les normes les plus élevées de qualité et d'efficacité opérationnelle.
                  </p>
                  <p>
                    Sur le terrain, nous avons inauguré une direction régionale à <strong>Tindouf</strong>, servant de point d'ancrage stratégique pour les grands projets dans la région sud-ouest. Parallèlement, nous finalisons la mise en place d'une direction régionale à <strong>Annaba</strong>, afin d'étendre notre présence dans l'est du pays.
                  </p>
                </div>
              </div>

              {/* Section 03 */}
              <div className="About-message-section">
                <div className="About-section-header">
                  <span className="About-section-number">03</span>
                  <h3 className="About-section-title">Vision 2030 : Leadership Technologique et Avenir Durable</h3>
                </div>
                <div className="About-section-content">
                  <p>
                    Notre vision pour la période <strong>2026–2030</strong> est claire : être un <strong>leader de l'innovation</strong>, consolider notre position de référence nationale dans la réalisation d'infrastructures stratégiques et contribuer efficacement à la construction d'une Algérie plus forte et plus moderne.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <div className="About-conclusion">
                <div className="About-conclusion-inner">
                  <Quote className="About-conclusion-quote-left" size={48} />
                  <p className="About-conclusion-text">
                    Nous ne construisons pas simplement pour livrer des projets.
                  </p>
                  <p className="About-conclusion-emphasis">
                    Nous construisons avec maîtrise et détermination, afin d'établir une présence durable au service de la nation et des générations futures.
                  </p>
                  <Quote className="About-conclusion-quote-right" size={48} />
                </div>
              </div>

              {/* Signature */}
              <div className="About-signature">
                <div className="About-signature-line"></div>
                <div className="About-signature-content">
                  <div className="About-signature-name">YAHI Hacene</div>
                  <div className="About-signature-title">Président-Directeur Général</div>
                  <div className="About-signature-company">Société Nationale des Travaux Publics (SNTP)</div>
                </div>
              </div>
            </motion.main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
