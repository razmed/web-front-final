import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import {
  FaCheckCircle, FaArrowRight, FaChevronLeft, FaChevronRight,
  FaMoneyBillWave, FaGraduationCap, FaTrophy, FaHome,
} from 'react-icons/fa';
import { getAllArticles } from '../services/articleService';
import './Home.css';
import propreImage from './images/propre.png';

import logo1 from './images/logo1.png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';
import logo5 from './images/logo5.png';
import logo6 from './images/logo6.png';
import logo7 from './images/logo7.png';
import logo8 from './images/logo8.png';
import logo9 from './images/logo9.png';
import logo10 from './images/logo10.png';
import logo11 from './images/logo11.png';
import logo12 from './images/logo12.png';

import equipmentImage from './images/equipment-parc.jpg';
import careerImage from './images/career-bg.jpg';

const calculateCompanyAge = () => {
  const creationDate = new Date('1977-12-17');
  const currentDate = new Date();
  let age = currentDate.getFullYear() - creationDate.getFullYear();
  const hasHadBirthdayThisYear =
    currentDate.getMonth() > creationDate.getMonth() ||
    (currentDate.getMonth() === creationDate.getMonth() &&
      currentDate.getDate() >= creationDate.getDate());
  if (!hasHadBirthdayThisYear) age -= 1;
  return age;
};

const Home = () => {
  const { t } = useTranslation(['common', 'home']);

  // ─── Refs ────────────────────────────────────────────────────────────────────
  const scrollerRef        = useRef(null);
  const capitalHumainRef = useRef(null);
  const equipmentSectionRef = useRef(null);
  const autoPlayRef        = useRef(null);
  const isHoveringRef      = useRef(false);

  // ─── States ──────────────────────────────────────────────────────────────────
  const [isCapitalHumainVisible, setIsCapitalHumainVisible] = useState(false);
  const [isEquipmentVisible, setIsEquipmentVisible] = useState(false);
  const [newsArticles, setNewsArticles]             = useState([]);
  const [loadingNews, setLoadingNews]               = useState(true);
  const [currentIndex, setCurrentIndex]             = useState(0);
  const [isTransitioning, setIsTransitioning]       = useState(true);

  const companyAge = calculateCompanyAge();

  // ─── Articles étendus pour le loop seamless ──────────────────────────────────
  // On ajoute les 3 premiers articles à la fin pour que la transition soit invisible au reset
  const extendedArticles =
    newsArticles.length > 0
      ? [...newsArticles, ...newsArticles.slice(0, 3)]
      : [];

  // currentIndex actif pour les dots (ramené dans [0, newsArticles.length - 1])
  const activeDot = currentIndex % newsArticles.length;

  // ─── Data ────────────────────────────────────────────────────────────────────
  const partnerLogos = [
    { id: 1,  src: logo1,  alt: 'CSTE'      },
    { id: 2,  src: logo2,  alt: 'Sonelgaz'  },
    { id: 3,  src: logo3,  alt: 'COSIDER'   },
    { id: 4,  src: logo4,  alt: 'Sonatrach' },
    { id: 5,  src: logo5,  alt: 'Sonelgaz'  },
    { id: 6,  src: logo6,  alt: 'ENTP'      },
    { id: 7,  src: logo7,  alt: 'Partner 7' },
    { id: 8,  src: logo8,  alt: 'Partner 8' },
    { id: 9,  src: logo9,  alt: 'Partner 9' },
    { id: 10, src: logo10, alt: 'Partner 10'},
    { id: 11, src: logo11, alt: 'Partner 11'},
    { id: 12, src: logo12, alt: 'Partner 12'},
  ];

  const equipmentData = [
    { id: 1, category: "Terrassement",  count: 650 },
    { id: 2, category: "Ouvrage d'art", count: 80  },
    { id: 3, category: "Chaussée",      count: 300 },
    { id: 4, category: "Bâtiment",      count: 120 },
    { id: 5, category: "Autres",        count: 500 },
  ];

  const maxCount = Math.max(...equipmentData.map(item => item.count));

  // ─── Chargement articles ─────────────────────────────────────────────────────
  useEffect(() => {
    const loadLatestNews = async () => {
      try {
        setLoadingNews(true);
        const response = await getAllArticles({
          statut: 'publie',
          page: 1,
          limit: 5,
          sortBy: 'datePublication',
          sortOrder: 'DESC',
        });
        setNewsArticles(response.data || []);
      } catch (error) {
        console.error('❌ Erreur chargement actualités:', error);
        setNewsArticles([]);
      } finally {
        setLoadingNews(false);
      }
    };
    loadLatestNews();
  }, []);
  // ─── Observer Capital Humain ────────────────────────────────────────────────
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsCapitalHumainVisible(true);
      });
    },
    { threshold: 0.15 }
  );
  if (capitalHumainRef.current) observer.observe(capitalHumainRef.current);
  return () => {
    if (capitalHumainRef.current) observer.unobserve(capitalHumainRef.current);
  };
}, []);
  // ─── Auto-play : avance d'1 article toutes les 3s ───────────────────────────
  useEffect(() => {
    if (loadingNews || newsArticles.length === 0) return;

    autoPlayRef.current = setInterval(() => {
      if (!isHoveringRef.current) {
        setCurrentIndex(prev => prev + 1);
      }
    }, 3000);

    return () => clearInterval(autoPlayRef.current);
  }, [loadingNews, newsArticles.length]);

  // ─── Reset seamless quand on atteint les clones ──────────────────────────────
  // Après la transition vers index = newsArticles.length, on désactive
  // la transition et on revient silencieusement à 0
  useEffect(() => {
    if (currentIndex === newsArticles.length && newsArticles.length > 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);   // coupe la transition CSS
        setCurrentIndex(0);          // revient à 0 sans animation visible
      }, 650); // légèrement > durée transition CSS (0.6s)
      return () => clearTimeout(timer);
    }
  }, [currentIndex, newsArticles.length]);

  // ─── Re-active la transition après le reset silencieux ──────────────────────
  useEffect(() => {
    if (!isTransitioning) {
      // Double rAF pour s'assurer que le DOM a appliqué le transform=0 avant
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setIsTransitioning(true))
      );
      return () => cancelAnimationFrame(id);
    }
  }, [isTransitioning]);

  // ─── Navigation manuelle ─────────────────────────────────────────────────────
  const handleNext = () => {
    setCurrentIndex(prev => {
      // Si on est dans la zone clone, reset d'abord
      if (prev >= newsArticles.length) return prev;
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex(prev => {
      if (prev === 0) {
        // Sauter aux clones de fin, puis reculer
        setIsTransitioning(false);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            setIsTransitioning(true);
            setCurrentIndex(newsArticles.length - 1);
          })
        );
        return newsArticles.length; // position temporaire (invisible)
      }
      return prev - 1;
    });
  };

  const handleDot = (index) => {
    setCurrentIndex(index);
  };

  // ─── Animation logos partenaires ─────────────────────────────────────────────
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let scrollPosition = 0;
    const scrollSpeed = 1;
    const itemWidth = 250;
    const totalWidth = itemWidth * partnerLogos.length;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= totalWidth) scrollPosition = 0;
      scroller.style.transform = `translateX(-${scrollPosition}px)`;
      requestAnimationFrame(scroll);
    };

    const id = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(id);
  }, [partnerLogos.length]);

  // ─── Observer équipement ─────────────────────────────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsEquipmentVisible(true);
        });
      },
      { threshold: 0.2 }
    );
    if (equipmentSectionRef.current) observer.observe(equipmentSectionRef.current);
    return () => {
      if (equipmentSectionRef.current) observer.unobserve(equipmentSectionRef.current);
    };
  }, []);

  // ─── Helpers ─────────────────────────────────────────────────────────────────
  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric', month: 'short', year: 'numeric',
    });
  };

  const getTypeLabel = (item) => {
    return item.typeContenu === 'mention_media'
      ? 'MENTION MÉDIAS'
      : 'ACTUALITÉS ENTREPRISE';
  };

  // ─── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="Home-page">

      {/* Hero */}
      <Hero />

      {/* About Preview */}
      <section className="Home-about-preview-section">
        <div className="container-fluid">
          <div className="Home-about-preview-grid">
            <div className="Home-about-preview-image">
              <img src={propreImage} alt="À propos SNTP" />
              <div className="Home-experience-badge">
                <div className="Home-experience-number">{companyAge}+</div>
                <div className="Home-experience-text">Ans d'excellence</div>
              </div>
            </div>
            <div className="Home-about-preview-content">
              <h3 className="Home-section-subtitle">FORCE NATIONALE, VISION TOURNÉE VERS L'AVENIR</h3>
              <h2 className="Home-section-title">L'excellence transcende les frontières</h2>
              <div className="Home-section-divider"></div>
              <p className="Home-about-preview-text">
                Grâce à des opérations stratégiques déployées à travers <strong>17 wilayas</strong>,
                la SNTP a établi un réseau territorial complet qui intègre harmonieusement la performance
                opérationnelle et l'intelligence du marché local. Cette empreinte nationale solide,
                construite au fil de <strong>48 années d'expansion stratégique</strong>, positionne
                l'entreprise comme un pilier incontournable du développement des infrastructures
                algériennes, en parfaite conformité avec les meilleures pratiques internationales
                en matière de construction et de génie civil.
              </p>
              <p className="Home-about-preview-text" style={{ marginTop: '15px' }}>
                <strong>De l'expertise locale aux normes internationales</strong>
              </p>
              <ul className="Home-about-features-list">
                <li>
                  <FaCheckCircle className="Home-check-icon" />
                  <span>Ingénierie de pointe et savoir-faire technique pionnier</span>
                </li>
                <li>
                  <FaCheckCircle className="Home-check-icon" />
                  <span>Équipes professionnelles leaders dans l'industrie</span>
                </li>
                <li>
                  <FaCheckCircle className="Home-check-icon" />
                  <span>Système de management certifié triple ISO (9001:2015, 14001:2015, 45001:2018)</span>
                </li>
              </ul>
              <Link to="/about" className="Home-btn-primary">
                En savoir plus
                <FaArrowRight className="Home-btn-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="Home-partners-section">
        <div className="container-fluid">
          <div className="Home-section-header-center">
            <h3 className="Home-section-subtitle">NOS RÉFÉRENCES</h3>
            <h2 className="Home-section-title">Ils nous font confiance</h2>
            <div className="Home-section-divider-center"></div>
          </div>
          <div className="Home-partners-carousel-wrapper">
            <div className="Home-partners-carousel-container">
              <div className="Home-partners-carousel-track" ref={scrollerRef}>
                {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
                  <div key={`logo-${index}`} className="Home-partner-logo-item">
                    <img src={logo.src} alt={logo.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moyens Matériels */}
      <section className="Home-equipment-section" ref={equipmentSectionRef}>
        <div className="container-fluid">
          <div className="Home-section-header-center">
            <h3 className="Home-section-subtitle">NOTRE PARC</h3>
            <h2 className="Home-section-title">Moyens Matériels</h2>
            <div className="Home-section-divider-center"></div>
            <p className="Home-section-description">
              Un parc moderne de plus de 2 000 engins pour répondre à tous vos besoins en travaux publics
            </p>
          </div>
          <div className="Home-equipment-content">
            <div className="Home-equipment-bars-container">
              {equipmentData.map((equipment, index) => {
                const percentage = (equipment.count / maxCount) * 100;
                return (
                  <div key={equipment.id} className="Home-equipment-bar-wrapper">
                    <div className="Home-equipment-bar-header">
                      <div className="Home-equipment-bar-label">
                        <span className="Home-equipment-category">{equipment.category}</span>
                      </div>
                      <div className="Home-equipment-bar-value">
                        <span className="Home-equipment-count">
                          {isEquipmentVisible ? `+${equipment.count}` : '0'}
                        </span>
                        <span className="Home-equipment-unit">engins</span>
                      </div>
                    </div>
                    <div className="Home-equipment-bar-track">
                      <div
                        className={`Home-equipment-bar-fill ${isEquipmentVisible ? 'animate' : ''}`}
                        style={{
                          width: isEquipmentVisible ? `${percentage}%` : '0%',
                          animationDelay: `${index * 0.15}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="Home-equipment-image-wrapper">
              <div className="Home-equipment-image-container">
                <img
                  src={equipmentImage}
                  alt="Parc d'engins SNTP"
                  className="Home-equipment-main-image"
                />
                <div className="Home-equipment-image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vidéo Background */}
      <section className="Home-people-video-section">
        <div className="Home-people-video-bg">
          <video className="Home-people-video" autoPlay loop muted playsInline>
            <source src="/videos/people-background.mp4" type="video/mp4" />
            <img src="/images/people-fallback.jpg" alt="Notre équipe" />
          </video>
          <div className="Home-people-video-overlay"></div>
        </div>
        <div className="container-fluid">
          <div className="Home-people-content-grid">
            <div className="Home-people-left">
              <h2 className="Home-people-title">
                SNTP n'est pas qu'une entreprise de construction :<br />
                nous bâtissons l'avenir pour l'Algérie.
              </h2>
            </div>
            <div className="Home-people-right">
              <p className="Home-people-description">
                L'excellence n'est pas un but à atteindre, mais une quête permanente d'innovation et de
                performance. Tel est le défi que nous embrassons quotidiennement avec passion et
                détermination, pour construire une Algérie plus solide et mieux connectée.
              </p>
              <Link to="/projects" className="Home-people-btn">
                <span className="Home-people-btn-icon"><FaArrowRight /></span>
                <span className="Home-people-btn-text">Découvrir nos projets</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== CAPITAL HUMAIN ==================== */}
<section className="Home-ch-section" ref={capitalHumainRef}>
  <div className="Home-ch-top-line"></div>
  <div className="container-fluid">

    {/* ── Header ── */}
    <div className="Home-ch-header-row">
      <div className="Home-ch-header-left">
        <span className="Home-section-subtitle">Ressources Humaines</span>
        <h2 className="Home-ch-title">
          CAPITAL HUMAIN<br />
          <span className="Home-ch-title-accent">LA FORCE DE L'ENGAGEMENT</span>
        </h2>
        <div className="Home-ch-divider"></div>
        <p className="Home-ch-intro">
          Plus de <strong>2 700 professionnels</strong> passionnés combinent expertise avérée,
          pensée innovante et engagement indéfectible pour façonner l'infrastructure de demain.
        </p>
      </div>
      <div className={`Home-ch-hero-stat ${isCapitalHumainVisible ? 'Home-ch-visible' : ''}`}>
        <div className="Home-ch-big-number">2 700<span>+</span></div>
        <div className="Home-ch-big-label">Professionnels<br />Dévoués</div>
        <div className="Home-ch-big-ring"></div>
      </div>
    </div>

    {/* ── Répartition RH ── */}
    <div className="Home-ch-rh-grid">
      {[
        { pct: 25, label: 'Ingénieurs & Cadres',     desc: 'Leadership technologique',  delay: '0s'    },
        { pct: 45, label: 'Techniciens Spécialisés', desc: 'Technologies de pointe',    delay: '0.15s' },
        { pct: 30, label: 'Support Opérationnel',    desc: 'Fluidité des opérations',   delay: '0.3s'  },
      ].map((item, i) => (
        <div
          key={i}
          className={`Home-ch-rh-card ${isCapitalHumainVisible ? 'Home-ch-visible' : ''}`}
          style={{ transitionDelay: item.delay }}
        >
          <div className="Home-ch-rh-pct">{item.pct}<span>%</span></div>
          <div className="Home-ch-rh-label">{item.label}</div>
          <div className="Home-ch-rh-desc">{item.desc}</div>
          <div className="Home-ch-rh-track">
            <div
              className="Home-ch-rh-fill"
              style={{ width: isCapitalHumainVisible ? `${item.pct * 2}%` : '0%' }}
            ></div>
          </div>
        </div>
      ))}
    </div>

    {/* ── Piliers ── */}
<div className="Home-ch-pillars-grid">
  {[
    { icon: <FaMoneyBillWave />, value: '140 MDA',    label: 'Investissement annuel en développement professionnel'          },
    { icon: <FaGraduationCap />, value: 'Formations', label: 'Excellence technique, leadership & compétences numériques'     },
    { icon: <FaTrophy />,        value: 'Performance', label: 'Récompense basée sur les résultats & management collaboratif' },
    { icon: <FaHome />,          value: 'Bien-être',  label: 'Hébergement, restauration de qualité & cadre stimulant'        },
  ].map((p, i) => (
    <div
      key={i}
      className={`Home-ch-pillar ${isCapitalHumainVisible ? 'Home-ch-visible' : ''}`}
      style={{ transitionDelay: `${0.1 * i + 0.4}s` }}
    >
      <div className="Home-ch-pillar-icon-wrap">
        <div className="Home-ch-pillar-icon">{p.icon}</div>
      </div>
      <div className="Home-ch-pillar-value">{p.value}</div>
      <div className="Home-ch-pillar-label">{p.label}</div>
      <div className="Home-ch-pillar-line"></div>
    </div>
  ))}
</div>

  </div>
</section>
      {/* Carrière */}
      <section className="Home-career-section">
        <div className="Home-career-image-bg">
          <img src={careerImage} alt="Carrière chez SNTP" className="Home-career-bg-img" />
          <div className="Home-career-overlay"></div>
        </div>
        <div className="container-fluid">
          <div className="Home-career-content">
            <div className="Home-career-accent-line"></div>
            <h2 className="Home-career-title">Carrières chez SNTP</h2>
            <p className="Home-career-description">
              Depuis plus de {companyAge} ans, les employés de SNTP contribuent à offrir aux collectivités
              des infrastructures durables, des moyens de transport sécuritaires et des ouvrages d'art
              exceptionnels. Chez SNTP, les équipes sont fières de leur travail, car il a un impact réel.
              Vous ferez partie d'équipes performantes, apprendrez aux côtés d'experts de l'industrie et
              aurez accès à des ressources et opportunités exceptionnelles pour développer votre carrière.
            </p>
            <Link to="/nous-rejoindre" className="Home-career-btn">
              Carrières chez SNTP
              <FaArrowRight className="Home-career-btn-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Notre Actualité ─────────────────────────────────────────────────── */}
      {!loadingNews && newsArticles.length > 0 && (
        <section
          className="Home-news-section"
          onMouseEnter={() => { isHoveringRef.current = true;  }}
          onMouseLeave={() => { isHoveringRef.current = false; }}
        >
          <div className="container-fluid">

            {/* Header : titre + dots + flèches */}
            <div className="Home-news-header">
              <h2 className="Home-news-title">Notre Actualité</h2>
              <div className="Home-news-navigation">
                <div className="Home-news-dots">
                  {newsArticles.map((_, index) => (
                    <button
                      key={index}
                      className={`Home-news-dot ${activeDot === index ? 'active' : ''}`}
                      onClick={() => handleDot(index)}
                      aria-label={`Aller à l'article ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="Home-news-arrows">
                  <button
                    className="Home-news-arrow-btn Home-news-prev"
                    onClick={handlePrev}
                    aria-label="Article précédent"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    className="Home-news-arrow-btn Home-news-next"
                    onClick={handleNext}
                    aria-label="Article suivant"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>

            {/* Carousel : overflow hidden + track qui slide */}
            <div className="Home-news-carousel-wrapper">
              <div
                className="Home-news-carousel-track"
                style={{
                  // Chaque carte = 1/3 du wrapper → translateX d'1/3 par step
                  transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                  transition: isTransitioning
                    ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    : 'none',
                  display: 'flex',
                }}
              >
                {/*
                  extendedArticles = [art1, art2, art3, art4, art5, art1, art2, art3]
                  - index 0 → 3 articles visibles : art1 art2 art3
                  - index 1 →                      art2 art3 art4
                  - index 2 →                      art3 art4 art5
                  - index 3 →                      art4 art5 art1 (clone)
                  - index 4 →                      art5 art1 art2 (clones)
                  - index 5 →                      art1 art2 art3 (clones) ← reset ici vers index 0
                */}
                {extendedArticles.map((article, index) => (
                  <div
                    key={`news-${article.id}-${index}`}
                    className="Home-news-card"
                    style={{ minWidth: 'calc(100% / 3)', maxWidth: 'calc(100% / 3)' }}
                  >
                    <div className="Home-news-card-image">
                      <img
                        src={article.imageUrl || '/images/default-news.jpg'}
                        alt={article.titre || 'Article SNTP'}
                        loading="lazy"
                        onError={(e) => { e.target.src = '/images/default-news.jpg'; }}
                      />
                    </div>
                    <div className="Home-news-card-content">
                      <div className="Home-news-card-category">{getTypeLabel(article)}</div>
                      <h3 className="Home-news-card-title">{article.titre}</h3>
                      <div className="Home-news-card-meta">
                        <span className="Home-news-card-location">SNTP</span>
                        <span className="Home-news-card-separator">|</span>
                        <span className="Home-news-card-date">{formatDate(article.datePublication)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="Home-news-cta">
              <Link to="/blog" className="Home-news-btn">
                Voir toutes les actualités
                <FaArrowRight className="Home-news-btn-arrow" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="Home-contact-section">
        <div className="container-fluid">
          <div className="Home-contact-content">
            <h2 className="Home-contact-title">Une Question ? Un Projet ?</h2>
            <p className="Home-contact-subtitle">Contactez-Nous</p>
            <p className="Home-contact-text">
              Notre équipe d'experts est à votre écoute pour répondre à toutes vos questions et vous
              accompagner dans la réalisation de vos projets d'infrastructures.
            </p>
            <Link to="/about-us" className="Home-btn-white-contact">
              Contactez-nous
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;