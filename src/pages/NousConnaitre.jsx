import React, { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { 
  FaLightbulb, 
  FaHandshake, 
  FaShieldAlt, 
  FaTrophy,
  FaChevronLeft,
  FaChevronRight,
  FaBuilding,
  FaDownload 
} from 'react-icons/fa';
import './NousConnaitre.css';
import propoVideo from '../video/propo.mp4';
import couvertureImage from '../images/couverture.png';
import visionImage from '../images/vision.png';
import brochurePDF from '../document/broch.pdf';
// Fonction pour télécharger la brochure
const downloadBrochure = () => {
  const link = document.createElement('a');
  link.href = brochurePDF;
  link.download = 'SNTP-Brochure-Presentation.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const NousConnaitre = () => {
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);


  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };


    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('NousConnaitre-animate-in');
        }
      });
    };


    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const animatedElements = document.querySelectorAll(
      '.NousConnaitre-value-card, .NousConnaitre-stat-item, .NousConnaitre-mission-card, .NousConnaitre-value-item, .NousConnaitre-animate-on-scroll'
    );
    
    animatedElements.forEach(element => observer.observe(element));


    return () => {
      animatedElements.forEach(element => observer.unobserve(element));
    };
  }, []);


  // Données de la timeline convertie en pages de livre - CONTENU DU FICHIER 1977.docx
  const historyPages = [
    {
      year: '1977',
      title: 'Établissement Institutionnel',
      subtitle: 'Fondation de l\'Entreprise',
      bullets: [
        'Fondée par Décret Présidentiel No. 184/77',
        'Mission Principale : Développement des Infrastructures Publiques',
        'Objectif Principal : Travaux Publics Avancés et Développement d\'Infrastructures Critiques',
        'L\'entreprise a initié ses activités dans le développement des infrastructures publiques, établissant son cadre opérationnel fondamental'
      ]
    },
    {
      year: '1987-1989 - Transformation Structurelle',
      title: '1987 : Réalignement Stratégique',
      subtitle: 'Réalignement Stratégique',
      bullets: [
        'Restructuration de l\'Entreprise : Transfert de l\'Unité de Fabrication de Signalisation vers ENPS',
        'Redéfinition du Périmètre Opérationnel',
        'Mise en Œuvre du Cadre Organisationnel',
        'Cette restructuration a marqué une approche ciblée sur les activités principales du génie civil'
      ]
    },
    {
      year: '1987-1989 - Transformation Structurelle',
      title: '1989 : Évolution de la Structure entreprise',
      subtitle: 'Évolution de la Structure d\'Entreprise',
      bullets: [
        'Décision CNP No. 139 (5 août 1989)',
        'Statut Juridique : Transition vers Entreprise Publique Économique (EPE)',
        'Cadre Opérationnel : Autonomie Commerciale Renforcée',
        'Cette transition a établi une nouvelle structure de gouvernance, permettant une prise de décision opérationnelle directe'
      ]
    },
    {
      year: '2016-2023 - Transformation & Croissance Opérationnelle & Excellence',
      title: 'Transformation & Croissance',
      subtitle: 'Leadership Stratégique du Marché',
      bullets: [
        'Expansion géographique progressive et stratégique',
        'Amélioration de l\'Expertise Stratégique et Diversification',
        'Croissance du Portefeuille de Projets d\'Infrastructure à Grande Échelle',
        'Performance Opérationnelle Record',
        'Impact Économique Régional Transformateur',
        'Initiative de Développement Social Durable',
        'Création de 1 200+ Opportunités d\'Emploi Qualifié'
      ]
    },
    {
      type: 'stats',
      year: '2016-2023 - Transformation & Croissance Opérationnelle & Excellence',
      title: 'Trajectoire de Croissance 2019-2023',
      subtitle: 'Trajectoire de Performance Exceptionnelle',
      stats: [
        { number: '7,68 Mds', label: 'DZD - 2019' },
        { number: '7,48 Mds', label: 'DZD - 2020' },
        { number: '9,43 Mds', label: 'DZD - 2021' },
        { number: '12,20 Mds', label: 'DZD - 2022' },
        { number: '16,16 Mds', label: 'DZD - 2023' },
        { number: '110%', label: 'Croissance sur 4 ans' }
      ]
    },
    
    {
      year: 'Projets d\'Infrastructure Emblématiques',
      title: '1. Liaison Ferroviaire Stratégique Bechar-Tindouf:',
      subtitle: 'Transformer la Connectivité Régionale',
      bullets: [
        'Infrastructure Ferroviaire Avancée',
        'Actif Stratégique National Critique',
        'Solutions Pionnières d\'Ingénierie Désertique',
        'Technologies Résilientes au Climat Avancées',
        'Catalyseur pour le Développement Minier Régional'
      ]
    },
    {
      year: 'Projets d\'Infrastructure Emblématiques',
      title: '2. Autoroute Trans-Saharienne Tindouf-Zouerate ',
      subtitle: 'Connecter les Nations',
      bullets: [
        'Merveille d\'Ingénierie de 320 kilomètres',
        'Corridor Commercial International Stratégique',
        'Technologies de Construction Avancées',
        'Solutions Innovantes d\'Ingénierie Désertique',
        'Moteur de Développement Économique Transfrontalier',
        'Pierre Angulaire de l\'Intégration Régionale'
      ]
    },
    {
      year: 'Projets d\'Infrastructure Emblématiques',
      title: '3. Complexe du Stade Olympique de Douera :',
      subtitle: 'Établir de Nouveaux Standards en Infrastructure Sportive',
      bullets: [
        'Développement de Réseaux d\'Accès et de Services pour le Stade de 40 000 places',
        'Solutions d\'Infrastructure Avancées',
        'Optimisation de la Performance Environnementale',
        'Systèmes Utilitaires de Haute Performance',
        'Référence pour le Développement d\'Infrastructure Durable'
      ]
    },
    {
      year: '2024-2025 - Innovation Redéfinie',
      title: 'Unité d\'Ingénierie SNTP',
      subtitle: 'Moteur de l\'Innovation Technique',
      bullets: [
        'Expertise Technique Intégrée',
        'Capacités d\'Ingénierie Internes',
        'Solutions Techniques Avancées',
        'Équipes d\'Ingénierie Spécialisées'
      ]
    },
    {
      year: '2024-2025 - Innovation Redéfinie',
      title: 'Intégration ANABIB',
      subtitle: 'Redéfinir l\'Excellence Industrielle',
      bullets: [
        'Capacités de Fabrication Avancées',
        'Standards de Qualité de Premier Ordre',
        'Intégration Verticale Stratégique',
        'Innovation des Processus de Fabrication'
      ]
    },
    {
      year: '2024-2025 - Innovation Redéfinie',
      title: 'Expansion Opérationnelle',
      subtitle: 'Renforcement de la Prestation sur le Terrain',
      bullets: [
        'Unité de Maintenance et Logistique : Créée pour améliorer la disponibilité, la fiabilité et les performances de la flotte',
        'Direction Régionale de Tindouf : Ouverte pour ancrer notre présence opérationnelle dans le Sud-Ouest',
        'Direction Régionale d\'Annaba : En cours d\'établissement pour renforcer notre présence dans l\'Est'
      ]
    },
    {
      type: 'stats',
      year: '2025',
      title: 'Excellence en Chiffres',
      subtitle: 'Performance Opérationnelle 2025',
      stats: [
        { number: '2,4 Mds', label: 'Capital Social DZD' },
        { number: '51 Mds', label: 'Total Actifs DZD' },
        { number: '27 Mds', label: 'Revenus 2025 DZD' },
        { number: '121+ Mds', label: 'Portefeuille DZD' },
        { number: '2700+', label: 'Professionnels' },
        { number: '17', label: 'Wilayas' }
      ]
    },
    {
      year: '2024-2025 - Innovation Redéfinie',
      title: 'Compétences Clés & Leadership du Marché',
      subtitle: 'Compétences Clés',
      bullets: [
        'Infrastructures Routières et de Transport Avancées',
        'Solutions d\'Ingénierie Ferroviaire Spécialisées',
        'Structures d\'Ingénierie Complexes',
        'Infrastructures Sportives de Haute Performance',
        'Développement Maritime et Portuaire Avancé'
      ]
    },
    {
      year: '2024-2025 - Innovation Redéfinie',
      title: 'Standards Internationaux & Certifications',
      subtitle: 'Certifications & Qualifications',
      bullets: [
        'ISO 9001:2015 : Excellence en Gestion de la Qualité',
        'ISO 14001:2015 : Gestion Environnementale',
        'ISO 45001:2018 : Standards Mondiaux de Sécurité',
        'Qualification Catégorie 9 - Travaux publics',
        'Qualification Catégorie 9 - Hydraulique',
        'Qualification Catégorie 9 - Construction de bâtiments'
      ]
    },
    {
      year: '2024-2025 - Innovation Redéfinie',
      title: 'Excellence Professionnelle & Développement',
      subtitle: 'Investissement dans le Leadership Futur',
      bullets: [
        'Programmes de Développement Professionnel Avancés',
        'Partenariats Stratégiques Internationaux',
        'Cadre de Transfert de Connaissances Complet',
        'Méthodologies de Formation Innovantes'
      ]
    },
    {
      year: 'VISION 2026-2030',
      title: 'Leadership Technologique',
      subtitle: 'Vision 2026-2030 : Objectifs Stratégiques',
      bullets: [
        'Moteur de l\'innovation industrielle',
        'Établissement de nouveaux standards de référence',
        'Solutions pionnières'
      ]
    },
    {
      year: 'VISION 2026-2030',
      title: 'Excellence Opérationnelle',
      subtitle: 'Vision 2026-2030 : Objectifs Stratégiques',
      bullets: [
        'Standards de performance de classe mondiale',
        'Livraison de projets de meilleure classe',
        'Optimisation avancée des ressources'
      ]
    },
    {
      year: 'VISION 2026-2030',
      title: 'Développement Durable',
      subtitle: 'Vision 2026-2030 : Objectifs Stratégiques',
      bullets: [
        'Gestion environnementale',
        'Responsabilité sociale',
        'Durabilité économique'
      ]
    },
    {
      year: 'VISION 2026-2030',
      title: 'Expansion Mondiale',
      subtitle: 'Vision 2026-2030 : Objectifs Stratégiques',
      bullets: [
        'Partenariats internationaux stratégiques',
        'Capacités de projets transfrontaliers',
        'Leadership du marché régional'
      ]
    },
    {
      year: 'VISION 2026-2030',
      title: 'Innovation Continue',
      subtitle: 'Vision 2026-2030 : Objectifs Stratégiques',
      bullets: [
        'Technologies de construction de nouvelle génération',
        'Pratiques d\'ingénierie avancées'
      ]
    }
  ];


  // Valeurs pour le FlipBook
  const valuesForBook = [];


  // Statistiques
  const stats = [
    { number: '50+', label: 'Années d\'Expérience' },
    { number: '500+', label: 'Projets Réalisés' },
    { number: '2000+', label: 'Collaborateurs' },
    { number: '15', label: 'Wilayas Couvertes' }
  ];


  // Calculer le nombre total de pages
  const allPagesCount = 1 + historyPages.length + valuesForBook.length + 1 + 1;


  // Gestion du changement de page
  const onPageFlip = (e) => {
    setCurrentPage(e.data);
  };


  // Navigation vers la page précédente
  const goToPrevPage = () => {
    if (bookRef.current && currentPage > 0) {
      bookRef.current.pageFlip().flipPrev();
    }
  };


  // Navigation vers la page suivante
  const goToNextPage = () => {
    if (bookRef.current && currentPage < allPagesCount - 1) {
      bookRef.current.pageFlip().flipNext();
    }
  };


  // Navigation vers une page spécifique
  const goToPage = (pageNumber) => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flip(pageNumber);
    }
  };


  // Initialisation du nombre total de pages
  useEffect(() => {
    setTotalPages(allPagesCount);
  }, [allPagesCount]);


  return (
    <div className="NousConnaitre-nos-engagements-page">
      {/* Hero Section with Video */}
      <section className="NousConnaitre-engagements-hero">
        <div className="NousConnaitre-hero-video-container">
          <video 
            className="NousConnaitre-hero-video"
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
          >
            <source src={propoVideo} type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
          <div className="NousConnaitre-hero-overlay"></div>
        </div>
        
        
      </section>


      


      {/* FlipBook Section */}
      <section className="NousConnaitre-flipbook-section NousConnaitre-section">
        <div className="container">
          <div className="NousConnaitre-section-header">
            <h2 className="NousConnaitre-section-title">Feuilletez notre histoire </h2>
            <p className="NousConnaitre-section-subtitle">
              Découvrez les moments clés qui ont façonné notre parcours
            </p>
          </div>


          <div className="NousConnaitre-book-container">
            <HTMLFlipBook
              ref={bookRef}
              width={465}
              height={640}
              size="fixed"
              minWidth={315}
              maxWidth={1000}
              minHeight={400}
              maxHeight={1533}
              drawShadow={true}
              flippingTime={1000}
              usePortrait={true}
              startZIndex={0}
              autoSize={true}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              onFlip={onPageFlip}
              className="NousConnaitre-flipbook"
              style={{}}
            >
              {/* Cover Page */}
<div className="NousConnaitre-book-page NousConnaitre-cover-page">
  <div 
    className="NousConnaitre-cover-background"
    style={{ backgroundImage: `url(${couvertureImage})` }}
  ></div>
  <div className="NousConnaitre-cover-overlay"></div>
  <div className="NousConnaitre-cover-content">
    <h1 className="NousConnaitre-cover-title">Notre Histoire</h1>
    
    
  </div>
</div>



              {/* History Pages */}
              {historyPages.map((page, index) => (
                page.type === 'stats' ? (
                  <div key={`history-${index}`} className="NousConnaitre-book-page NousConnaitre-stats-page">
                    <div className="NousConnaitre-page-content">
                      <div className="NousConnaitre-page-header">
                        <span className="NousConnaitre-page-label">{page.year}</span>
                        <div className="NousConnaitre-year-decoration"></div>
                      </div>
                      <div className="NousConnaitre-page-body">
                        <h3 className="NousConnaitre-page-title" style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.4rem' }}>
                          {page.title}
                        </h3>
                        <p style={{ color: '#ccc', marginBottom: '1.5rem', fontSize: '0.85rem' }}>{page.subtitle}</p>
                        <div className="NousConnaitre-stats-grid-book">
                          {page.stats.map((stat, statIndex) => (
                            <div key={statIndex} className="NousConnaitre-stat-item-book">
                              <div className="NousConnaitre-stat-number-book">{stat.number}</div>
                              <div className="NousConnaitre-stat-label-book">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="NousConnaitre-page-footer">
                        <span className="NousConnaitre-page-number">Page {index + 2}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={`history-${index}`} className="NousConnaitre-book-page">
                    <div className="NousConnaitre-page-content">
                      <div className="NousConnaitre-page-header">
                        <div className="NousConnaitre-page-year">{page.year}</div>
                        <div className="NousConnaitre-year-decoration"></div>
                      </div>
                      <div className="NousConnaitre-page-body">
                        <h3 className="NousConnaitre-page-title">{page.title}</h3>
                        {page.subtitle && (
                          <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                            {page.subtitle}
                          </p>
                        )}
                        <div className="NousConnaitre-page-divider"></div>
                        <ul style={{ 
                          listStyle: 'none', 
                          padding: 0, 
                          margin: 0,
                          fontSize: '0.8rem',
                          lineHeight: '1.5'
                        }}>
                          {page.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} style={{ 
                              marginBottom: '0.7rem',
                              paddingLeft: '1.2rem',
                              position: 'relative'
                            }}>
                              <span style={{
                                content: '•',
                                position: 'absolute',
                                left: 0,
                                color: '#c41e3a',
                                fontWeight: 'bold',
                                fontSize: '1.2rem'
                              }}>•</span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="NousConnaitre-page-footer">
                        <span className="NousConnaitre-page-number">Page {index + 2}</span>
                      </div>
                    </div>
                  </div>
                )
              ))}


              {/* Values Pages */}
              {valuesForBook.map((value, index) => (
                <div key={`value-${index}`} className="NousConnaitre-book-page NousConnaitre-value-page">
                  <div className="NousConnaitre-page-content">
                    <div className="NousConnaitre-page-header">
                      <span className="NousConnaitre-page-label">Nos Valeurs</span>
                      <div className="NousConnaitre-year-decoration"></div>
                    </div>
                    <div className="NousConnaitre-page-body">
                      <div className="NousConnaitre-value-icon-large">
                        {value.icon}
                      </div>
                      <h3 className="NousConnaitre-page-title">{value.title}</h3>
                      <div className="NousConnaitre-page-divider"></div>
                      <p className="NousConnaitre-page-description">{value.description}</p>
                    </div>
                    <div className="NousConnaitre-page-footer">
                      <span className="NousConnaitre-page-number">Page {historyPages.length + index + 2}</span>
                    </div>
                  </div>
                </div>
              ))}


              {/* Stats Page */}
              <div className="NousConnaitre-book-page NousConnaitre-stats-page">
                <div className="NousConnaitre-page-content">
                  <div className="NousConnaitre-page-header">
                    <span className="NousConnaitre-page-label">Chiffres Clés</span>
                    <div className="NousConnaitre-year-decoration"></div>
                  </div>
                  <div className="NousConnaitre-page-body">
                    <h3 className="NousConnaitre-page-title" style={{ color: '#fff', marginBottom: '2rem' }}>
                      Plus de 50 ans d'excellence au service du développement des infrastructures en Algérie
                    </h3>
                    <div className="NousConnaitre-stats-grid-book">
                      {stats.map((stat, index) => (
                        <div key={index} className="NousConnaitre-stat-item-book">
                          <div className="NousConnaitre-stat-number-book">{stat.number}</div>
                          <div className="NousConnaitre-stat-label-book">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="NousConnaitre-page-footer">
                    <span className="NousConnaitre-page-number">Page {historyPages.length + valuesForBook.length + 2}</span>
                  </div>
                </div>
              </div>


              {/* Back Cover */}
<div 
  className="NousConnaitre-book-page NousConnaitre-back-cover-page"
  onClick={() => goToPage(0)}
  style={{ cursor: 'pointer' }}
>
  <div className="NousConnaitre-back-cover-content">
    <h2 className="NousConnaitre-back-cover-title">
      Notre histoire est riche d'enseignements et de réalisations qui font aujourd'hui notre fierté.
    </h2>
    <p className="NousConnaitre-back-cover-text">
      Découvrez comment notre expérience et notre expertise peuvent donner vie à vos projets
    </p>
    <div className="NousConnaitre-back-cover-logo">SNTP</div>
    <p style={{ 
      fontSize: '0.85rem', 
      marginTop: '2rem', 
      opacity: 0.7,
      fontStyle: 'italic' 
    }}>
      Cliquez pour revenir au début
    </p>
  </div>
</div>

            </HTMLFlipBook>


            {/* Navigation Controls */}
            <div className="NousConnaitre-flipbook-navigation">
              <button
                className={`NousConnaitre-nav-button NousConnaitre-prev-button ${currentPage === 0 ? 'NousConnaitre-disabled' : ''}`}
                onClick={goToPrevPage}
                disabled={currentPage === 0}
              >
                <FaChevronLeft className="NousConnaitre-nav-icon" />
                <span className="NousConnaitre-nav-text">Précédent</span>
              </button>


              <div className="NousConnaitre-pagination-dots">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    className={`NousConnaitre-dot ${currentPage === i ? 'NousConnaitre-active' : ''}`}
                    onClick={() => goToPage(i)}
                    aria-label={`Page ${i + 1}`}
                  />
                ))}
              </div>


              <button
                className={`NousConnaitre-nav-button NousConnaitre-next-button ${currentPage === totalPages - 1 ? 'NousConnaitre-disabled' : ''}`}
                onClick={goToNextPage}
                disabled={currentPage === totalPages - 1}
              >
                <span className="NousConnaitre-nav-text">Suivant</span>
                <FaChevronRight className="NousConnaitre-nav-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Vision Section */}
<section className="NousConnaitre-vision-section NousConnaitre-section" id="vision">
  <div className="container">
    <div className="NousConnaitre-section-header">
      <h2 className="NousConnaitre-section-title">Notre Vision</h2>
      <div className="NousConnaitre-section-divider"></div>
    </div>

    <div className="NousConnaitre-vision-content">
      <div className="NousConnaitre-vision-text">
        <p className="NousConnaitre-vision-paragraph">
          Notre vision est de devenir le leader incontesté du secteur de la construction et des travaux publics en Algérie, 
          reconnu comme le moteur de l'innovation industrielle. Nous aspirons à définir de nouveaux standards d'excellence 
          et à développer des solutions avant-gardistes qui transformeront le paysage des infrastructures nationales.
        </p>
        <p className="NousConnaitre-vision-paragraph">
          En visant l'excellence opérationnelle, nous nous engageons à atteindre des standards de performance de classe mondiale, 
          à assurer une exécution de projets d'excellence et à optimiser l'efficacité de nos ressources. Parallèlement, notre 
          engagement envers le développement durable se traduit par une gestion environnementale exemplaire, un renforcement de 
          notre responsabilité sociale et la pérennité économique de nos activités.
        </p>
        <p className="NousConnaitre-vision-paragraph">
          Notre ambition d'expansion mondiale passe par le développement de partenariats internationaux stratégiques et le 
          renforcement de nos capacités sur les projets transfrontaliers. En intégrant les technologies de construction de 
          nouvelle génération et en adoptant des pratiques d'ingénierie innovantes, nous créons de la valeur durable pour 
          toutes nos parties prenantes : clients, collaborateurs, partenaires et la société algérienne dans son ensemble.
        </p>
      </div>

      <div className="NousConnaitre-vision-image-wrapper">
          <img 
          src={visionImage} 
          alt="Notre Vision SNTP" 
          className="NousConnaitre-vision-image"
        />
      </div>
    </div>
  </div>
</section>
{/* Excellence Engagement Section */}
<section className="NousConnaitre-excellence-section NousConnaitre-section">
  <div className="container">
    <div className="NousConnaitre-excellence-wrapper">
      <div className="NousConnaitre-excellence-decoration-top"></div>
      
      <div className="NousConnaitre-excellence-content">
        <h2 className="NousConnaitre-excellence-title">
          NOTRE ENGAGEMENT ENVERS L'EXCELLENCE
        </h2>
        
        <div className="NousConnaitre-excellence-divider">
          <span className="NousConnaitre-excellence-divider-line"></span>
          <span className="NousConnaitre-excellence-divider-dot"></span>
          <span className="NousConnaitre-excellence-divider-line"></span>
        </div>
        
        <p className="NousConnaitre-excellence-text">
          Chaque projet SNTP met en valeur notre capacité à repousser les limites de l'innovation 
          tout en maintenant une excellence opérationnelle inébranlable. Nous livrons systématiquement 
          des solutions d'infrastructure qui répondent aux normes internationales les plus élevées 
          tout en relevant les défis complexes des besoins de développement de demain.
        </p>
      </div>
      
      <div className="NousConnaitre-excellence-decoration-bottom"></div>
    </div>
  </div>
</section>



      {/* Mission Section */}
      <section className="NousConnaitre-mission-section NousConnaitre-section">
        <div className="container">
          <div className="NousConnaitre-section-header">
            <h2 className="NousConnaitre-section-title">
              Notre mission est de fournir des solutions de construction innovantes et durables
            </h2>
            <div className="NousConnaitre-section-divider"></div>
          </div>


          <div className="NousConnaitre-mission-grid">
            <div className="NousConnaitre-mission-card">
              <div className="NousConnaitre-mission-icon">
                <FaTrophy />
              </div>
              <h3 className="NousConnaitre-mission-title">Qualité</h3>
              <p className="NousConnaitre-mission-text">
                Garantir la qualité et la durabilité de chacune de nos réalisations en appliquant les meilleurs standards internationaux.
              </p>
            </div>


            <div className="NousConnaitre-mission-card">
              <div className="NousConnaitre-mission-icon">
                <FaHandshake />
              </div>
              <h3 className="NousConnaitre-mission-title">Service Client</h3>
              <p className="NousConnaitre-mission-text">
                Placer nos clients au cœur de nos préoccupations en offrant un service personnalisé et réactif.
              </p>
            </div>


            <div className="NousConnaitre-mission-card">
              <div className="NousConnaitre-mission-icon">
                <FaLightbulb />
              </div>
              <h3 className="NousConnaitre-mission-title">Durabilité</h3>
              <p className="NousConnaitre-mission-text">
                Intégrer les principes du développement durable dans tous nos projets pour minimiser notre empreinte environnementale.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Core Values Section */}
      <section className="NousConnaitre-core-values-section NousConnaitre-section">
        <div className="container">
          <div className="NousConnaitre-section-header">
            <h2 className="NousConnaitre-section-title">Les valeurs qui nous définissent</h2>
            <div className="NousConnaitre-section-divider"></div>
          </div>


          <div className="NousConnaitre-values-container">
            <div className="NousConnaitre-value-item">
              <div className="NousConnaitre-value-number">01</div>
              <div className="NousConnaitre-value-content">
                <h3 className="NousConnaitre-value-title">Excellence</h3>
                <p className="NousConnaitre-value-description">
                  Nous poursuivons l'excellence dans chaque aspect de notre travail, de la conception à la livraison finale. 
                  Notre engagement envers la qualité se reflète dans chaque détail de nos projets.
                </p>
              </div>
            </div>


            <div className="NousConnaitre-value-item">
              <div className="NousConnaitre-value-number">02</div>
              <div className="NousConnaitre-value-content">
                <h3 className="NousConnaitre-value-title">Innovation</h3>
                <p className="NousConnaitre-value-description">
                  L'innovation est au cœur de notre stratégie de développement. Nous investissons dans la recherche et le développement 
                  pour adopter les technologies les plus avancées.
                </p>
              </div>
            </div>


            <div className="NousConnaitre-value-item">
              <div className="NousConnaitre-value-number">03</div>
              <div className="NousConnaitre-value-content">
                <h3 className="NousConnaitre-value-title">Intégrité</h3>
                <p className="NousConnaitre-value-description">
                  L'intégrité guide toutes nos décisions et actions. Nous opérons avec transparence, honnêteté et respect envers 
                  tous nos partenaires.
                </p>
              </div>
            </div>


            <div className="NousConnaitre-value-item">
              <div className="NousConnaitre-value-number">04</div>
              <div className="NousConnaitre-value-content">
                <h3 className="NousConnaitre-value-title">Sécurité</h3>
                <p className="NousConnaitre-value-description">
                  La sécurité de nos collaborateurs et partenaires est notre priorité absolue. Nous mettons en place des protocoles 
                  stricts sur tous nos chantiers.
                </p>
              </div>
            </div>


            <div className="NousConnaitre-value-item">
              <div className="NousConnaitre-value-number">05</div>
              <div className="NousConnaitre-value-content">
                <h3 className="NousConnaitre-value-title">Collaboration</h3>
                <p className="NousConnaitre-value-description">
                  Le travail d'équipe et la collaboration sont essentiels à notre réussite. Nous favorisons un environnement où 
                  chacun peut contribuer et grandir professionnellement.
                </p>
              </div>
            </div>


            <div className="NousConnaitre-value-item">
              <div className="NousConnaitre-value-number">06</div>
              <div className="NousConnaitre-value-content">
                <h3 className="NousConnaitre-value-title">Responsabilité</h3>
                <p className="NousConnaitre-value-description">
                  Nous assumons pleinement nos responsabilités envers la société et l'environnement. Notre engagement va au-delà 
                  de la simple conformité réglementaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Heritage Section */}
      <section className="NousConnaitre-heritage-section NousConnaitre-section">
        <div className="NousConnaitre-heritage-content">
          <div className="NousConnaitre-heritage-text">
            <h2 className="NousConnaitre-section-title" style={{ color: '#fff' }}>Notre Héritage</h2>
            <p className="NousConnaitre-heritage-paragraph">
              Fondée en 1977, la SNTP a su transcender son rôle d'entreprise de construction pour s'affirmer comme un acteur incontournable du développement infrastructurel national.
               Notre société représente aujourd'hui une référence en matière d'ingénierie innovante, capable de concrétiser des projets d'envergure même face aux contraintes naturelles et économiques les plus sévères.
            </p>
            <p className="NousConnaitre-heritage-paragraph">
              Qu'il s'agisse de voies ferrées, de réseaux autoroutiers, d'installations portuaires, d'infrastructures aéroportuaires ou de grands ouvrages publics,
               nos accomplissements illustrent notre expertise à convertir des problématiques techniques majeures en solutions durables qui bénéficient directement à notre pays et à sa population.
            </p>
          </div>
        </div>
      </section>
      {/* Section Téléchargement Brochure */}
      <section className="NousConnaitre-brochure-section NousConnaitre-section">
        <div className="container">
          <div className="NousConnaitre-brochure-container">
            <div className="NousConnaitre-brochure-content">
         
              <h2 className="NousConnaitre-brochure-title">
                Téléchargez notre Brochure de Présentation
              </h2>
              <p className="NousConnaitre-brochure-text">
                Découvrez l'ensemble de nos services, réalisations et expertises dans notre catalogue complet de présentation de l'entreprise.
              </p>
              <button 
                className="NousConnaitre-brochure-btn"
                onClick={downloadBrochure}
              >
                <FaDownload className="NousConnaitre-btn-icon" />
                <span>Télécharger le Catalogue Entreprise</span>
              </button>
              
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};


export default NousConnaitre;
