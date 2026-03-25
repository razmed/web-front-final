import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProjectModal from '../components/ProjectModal/ProjectModal';
import projetService from '../services/projetService';
import categoryService from '../services/categoryService';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sectionRefs = useRef({});
  const lenisRef = useRef(null);
  const scrollTriggersRef = useRef([]);

  // Charger les catégories depuis la DB
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log('🔄 Chargement des catégories depuis la DB...');
        const response = await categoryService.getAll({ 
          actif: true,
          limit: 100 
        });
        
        if (response.success && response.data) {
          console.log('✅ Catégories chargées:', response.data);
          setCategories(response.data);
        }
      } catch (err) {
        console.error('❌ Erreur chargement catégories:', err);
      }
    };

    fetchCategories();
  }, []);

  // Charger les projets
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('🔄 Chargement des projets...');
        const response = await projetService.getAllProjets({
          limit: 100,
          sortBy: 'year',
          sortOrder: 'DESC'
        });

        if (response.success && response.data) {
          console.log('✅ Projets chargés:', response.data.length);
          setProjects(response.data);
        } else {
          throw new Error('Erreur lors du chargement des projets');
        }
      } catch (err) {
        console.error('❌ Erreur projets:', err);
        setError('Impossible de charger les projets.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const getProjectCategory = (project) => {
    return categories.find(cat => cat.slug === project.category) || null;
  }

  // Grouper les projets par catégorie
  const projectsByCategory = categories.reduce((acc, category) => {
    acc[category.slug] = projects.filter(p => p.category === category.slug);
    return acc;
  }, {});

  // Projets sans catégorie
  const projectsWithoutCategory = projects.filter(p => {
    const hasCategory = categories.some(cat => cat.slug === p.category);
    return !hasCategory;
  });

  if (projectsWithoutCategory.length > 0) {
    projectsByCategory['autres'] = projectsWithoutCategory;
  }

  // ✅ CORRECTION 1: Afficher TOUTES les catégories actives (même sans projets)
  // Si vous voulez filtrer uniquement celles avec projets, décommentez la ligne suivante
  const validCategories = [...categories]; // Toutes les catégories
  // const validCategories = categories.filter(cat => projectsByCategory[cat.slug]?.length > 0); // Seulement avec projets

  if (projectsWithoutCategory.length > 0) {
    validCategories.push({
      id: 'autres',
      slug: 'autres',
      nom: 'Autres Projets',
      description: 'Projets divers et non catégorisés',
      hasPhoto: 0
    });
  }

  console.log('📊 Catégories valides:', validCategories.map(c => ({
    nom: c.nom,
    hasPhoto: c.hasPhoto,
    nbProjets: projectsByCategory[c.slug]?.length || 0
  })));

  /**
   * ✅ CORRECTION 2: Logique d'image améliorée avec debug détaillé
   */
  const getCategoryImageUrl = (category) => {
    const categoryProjects = projectsByCategory[category.slug] || [];
    
    console.log(`🔍 getCategoryImageUrl pour "${category.nom}":`, {
      id: category.id,
      hasPhoto: category.hasPhoto,
      hasPhotoType: typeof category.hasPhoto,
      nbProjets: categoryProjects.length
    });
    
    // Vérifier explicitement si hasPhoto === 1 (ou true)
    const categoryHasImage = category.hasPhoto === 1 || category.hasPhoto === true;
    
    if (categoryHasImage && category.id && category.id !== 'autres') {
      const url = categoryService.getImageUrl(category.id, true);
      console.log(`✅ Utilisation image catégorie:`, url);
      return url;
    }
    
    // Fallback: Premier projet
    if (categoryProjects.length > 0 && categoryProjects[0].hasImage) {
      const url = projetService.getImageUrl(categoryProjects[0].id, true);
      console.log(`⚠️ Fallback image premier projet:`, url);
      return url;
    }
    
    // Placeholder
    console.log(`❌ Pas d'image disponible, placeholder`);
    return '/placeholder.jpg';
  };

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // ScrollTrigger sticky
  useEffect(() => {
    if (loading || validCategories.length === 0) return;

    const timer = setTimeout(() => {
      scrollTriggersRef.current.forEach(st => st.kill());
      scrollTriggersRef.current = [];

      validCategories.forEach(category => {
        const categoryProjects = projectsByCategory[category.slug] || [];

        const section = sectionRefs.current[category.slug];
        const visualWrapper = section?.querySelector('.Projects-sticky-visual-wrapper');
        const projectsList = section?.querySelector('.Projects-list');

        if (section && visualWrapper && projectsList) {
          const st = ScrollTrigger.create({
            trigger: section,
            start: 'top 140px',
            end: () => `+=${projectsList.offsetHeight - visualWrapper.offsetHeight}`,
            pin: visualWrapper,
            pinSpacing: false,
            anticipatePin: 1,
          });
          scrollTriggersRef.current.push(st);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      scrollTriggersRef.current.forEach(st => st.kill());
    };
  }, [loading, validCategories, projectsByCategory]);

  // Intersection Observer pour section active
  useEffect(() => {
    if (loading || validCategories.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const categoryId = entry.target.getAttribute('data-category');
          if (categoryId) setActiveCategory(categoryId);
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '-140px 0px -50% 0px',
    });

    Object.values(sectionRefs.current).forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      Object.values(sectionRefs.current).forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, [loading, validCategories]);

  // Animation fade-in cartes
  useEffect(() => {
    if (loading) return;

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('Projects-is-visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    });

    const cards = document.querySelectorAll('.Projects-card');
    cards.forEach(card => cardObserver.observe(card));

    return () => {
      cards.forEach(card => cardObserver.unobserve(card));
    };
  }, [loading, projects]);

  // Première catégorie active par défaut
  useEffect(() => {
    if (validCategories.length > 0 && !activeCategory) {
      setActiveCategory(validCategories[0].slug);
    }
  }, [validCategories, activeCategory]);

  const scrollToSection = (categorySlug) => {
    const element = sectionRefs.current[categorySlug];
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element.offsetTop + 340, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  if (loading) {
    return (
      <div className="Projects-page">
        <Header />
        <main className="Projects-main">
          <div className="Projects-loader">Chargement des projets...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="Projects-page">
        <Header />
        <main className="Projects-main">
          <div className="Projects-error">{error}</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (projects.length === 0 && categories.length === 0) {
    return (
      <div className="Projects-page">
        <Header />
        <main className="Projects-main">
          <section className="Projects-hero">
            <div className="Projects-hero-content">
              <h1 className="Projects-hero-title">Nos Réalisations</h1>
              <div className="Projects-hero-divider"></div>
              <p className="Projects-hero-description">
                Aucun projet disponible pour le moment.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="Projects-page">
      <Header />
      <main className="Projects-main">
        {/* Hero Section avec vidéo background */}
<section className="Projects-hero-section">
  <div className="Projects-hero-video-container">
    <video 
      className="Projects-hero-video" 
      autoPlay 
      loop 
      muted 
      playsInline
    >
      <source src="/videos/people-background.mp4" type="video/mp4" />
      Votre navigateur ne supporte pas la lecture de vidéos.
    </video>
    <div className="Projects-hero-overlay"></div>
  </div>
  
  <div className="Projects-hero-content">
    <div className="container">
      <h1 className="Projects-hero-title">Nos Réalisations</h1>
      <p className="Projects-hero-subtitle">
        Découvrez nos projets d'infrastructure qui façonnent l'avenir de l'Algérie
      </p>
      
    </div>
  </div>
</section>


        {/* Navigation Sticky */}
        {validCategories.length > 0 && (
          <nav className="Projects-nav">
            <div className="Projects-nav-container">
              {validCategories.map((category) => {
                const categoryProjects = projectsByCategory[category.slug] || [];
                // ✅ Afficher seulement les catégories avec projets dans la nav
                
                return (
                  <button
                    key={category.slug}
                    onClick={() => scrollToSection(category.slug)}
                    className={`Projects-nav-button ${
                      activeCategory === category.slug ? 'Projects-is-active' : ''
                    }`}
                  >
                    {category.nom}
                  </button>
                );
              })}
            </div>
          </nav>
        )}

        {/* Sections Container */}
        <div className="Projects-sections-container">
          {validCategories.map((category) => {
            const categoryProjects = projectsByCategory[category.slug] || [];
            
            // ✅ Skip les catégories sans projets dans l'affichage
           // if (categoryProjects.length === 0) {
           //   console.log(`⚠️ Catégorie "${category.nom}" sans projets, ignorée dans l'affichage`);
           //   return null;
           // }

            const imageKey = `${category.id}-${Date.now()}`;

            return (
              <section
                key={category.slug}
                ref={(el) => (sectionRefs.current[category.slug] = el)}
                data-category={category.slug}
                className="Projects-split-section"
              >
                {/* Colonne Gauche - Image & Description */}
                <div className="Projects-split-section-left">
                  <div className="Projects-sticky-visual-wrapper">
                    <div className="Projects-sticky-visual">
                      <div className="Projects-sticky-visual-image-wrapper">
                        <img
                          key={imageKey}
                          src={getCategoryImageUrl(category)}
                          alt={category.nom}
                          className="Projects-sticky-visual-image"
                          onLoad={() => {
                            console.log(`✅ Image chargée avec succès: ${category.nom}`);
                          }}
                          onError={(e) => {
                            console.error(`❌ Erreur chargement image pour "${category.nom}":`, e.target.src);
                            
                            const fallbackUrl = categoryProjects.length > 0 && categoryProjects[0].hasImage
                              ? projetService.getImageUrl(categoryProjects[0].id)
                              : '/placeholder.jpg';
                            
                            if (e.target.src !== fallbackUrl && e.target.src !== '/placeholder.jpg') {
                              console.log(`🔄 Tentative fallback: ${fallbackUrl}`);
                              e.target.src = fallbackUrl;
                            } else if (e.target.src !== '/placeholder.jpg') {
                              console.log(`🔄 Utilisation placeholder final`);
                              e.target.src = '/placeholder.jpg';
                            }
                          }}
                        />
                      </div>
                      <div className="Projects-sticky-visual-overlay"></div>
                      
                      <div className="Projects-sticky-visual-category-badge">
                        <span className="Projects-sticky-visual-category-name">
                          {category.nom}
                        </span>
                      </div>

                      <div className="Projects-sticky-visual-content">
                        <h2 className="Projects-sticky-visual-title">{category.nom}</h2>
                        <p className="Projects-sticky-visual-description">
                          {category.description || `Découvrez nos ${categoryProjects.length} projet(s)`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Colonne Droite - Liste Projets */}
                <div className="Projects-split-section-right">
                  <div className="Projects-list">
                    {categoryProjects.map((project) => (
                      <article key={project.id} className="Projects-card">
                        <div className="Projects-card-link">
                          <div className="Projects-card-image-container">
                            <img
                              src={projetService.getImageUrl(project.id)}
                              alt={project.titre}
                              className="Projects-card-image"
                              onError={(e) => {
                                e.target.src = '/placeholder.jpg';
                              }}
                            />
                            <div className="Projects-card-image-overlay"></div>
                          </div>

                          <div className="Projects-card-content">
                            <div className="Projects-card-header">
                              <span className="Projects-card-location">
                                {project.location || 'Non spécifié'}
                              </span>
                              <span className="Projects-card-year">
                                {project.year || 'N/A'}
                              </span>
                            </div>

                            <h3 className="Projects-card-title">{project.titre}</h3>
                            <p className="Projects-card-description">
                              {project.description || 'Aucune description disponible'}
                            </p>

                            <div className="Projects-card-footer">
                              <span className={`Projects-card-status Projects-status--${project.status}`}>
                                {project.status === 'completed' ? 'Terminé' : 'En cours'}
                              </span>
                              {
                                <button
                                  className="Projects-card-button"
                                  onClick={() => handleOpenModal(project)}
                                  aria-label={`Voir les détails de ${project.titre}`}
                                >
                                  Voir Plus
                                  <svg width='16' height='16' viewBox="0 0 24 24" fill='none' stroke='currentColor' strokeWidth='2'>
                                    <path d="M5 12h14M12 517 7-7 7"/>
                                  </svg>
                                </button>
                              }
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Scroll to Top */}
        <button
          className={`Projects-scroll-top-btn ${showScrollTop ? 'Projects-scroll-top-visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Retour en haut"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </main>
      <Footer />
      <ProjectModal 
        project={selectedProject}
        category={selectedProject ? getProjectCategory(selectedProject) : null}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Projects;
