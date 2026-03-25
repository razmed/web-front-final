// src/pages/Blog.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaTag, FaSearch, FaExternalLinkAlt, FaNewspaper, FaVideo, FaMicrophone, FaFileAlt } from 'react-icons/fa';
import { getAllArticles } from '../services/articleService';
import { toast } from 'react-toastify';
import blogVideo from '../video/blog.mp4'; // ✅ Import vidéo Vite
import './Blog.css';


const Blog = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypeContenu, setSelectedTypeContenu] = useState('');
  const [selectedTypeMedia, setSelectedTypeMedia] = useState('');

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 9,
    total: 0,
    totalPages: 0
  });

  useEffect(() => {
    loadItems();
  }, [pagination.page, selectedTypeContenu, selectedTypeMedia, searchTerm]);

  const loadItems = async () => {
    try {
      setLoading(true);
      const response = await getAllArticles({
        statut: 'publie',
        typeContenu: selectedTypeContenu,
        typeMedia: selectedTypeMedia,
        search: searchTerm,
        page: pagination.page,
        limit: pagination.limit,
        sortBy: 'datePublication',
        sortOrder: 'DESC'
      });

      setItems(response.data);
      setPagination(prev => ({
        ...prev,
        total: response.pagination.total,
        totalPages: response.pagination.totalPages
      }));
    } catch (error) {
      toast.error('Erreur lors du chargement du contenu');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTypeMediaIcon = (typeMedia) => {
    const icons = {
      article: <FaNewspaper />,
      video: <FaVideo />,
      podcast: <FaMicrophone />,
      interview: <FaMicrophone />,
      communique: <FaFileAlt />
    };
    return icons[typeMedia] || <FaNewspaper />;
  };

  const getTypeMediaLabel = (typeMedia) => {
    const labels = {
      article: 'Article',
      video: 'Vidéo',
      podcast: 'Podcast',
      interview: 'Interview',
      communique: 'Communiqué'
    };
    return labels[typeMedia] || 'Article';
  };

  const handleItemClick = (item) => {
    if (item.typeContenu === 'mention_media' && item.urlExterne) {
      window.open(item.urlExterne, '_blank', 'noopener,noreferrer');
    } else {
      const articleUrl = `/articles/${item.slug}`;
      window.open(articleUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, page: newPage }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPagination(prev => ({ ...prev, page: 1 }));
    loadItems();
  };

  const truncateText = (text, maxLength = 150) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const pargeTags = (tags) => {
    if (!tags) return [];
    if (Array.isArray(tags)) return tags;
    if (typeof tags === 'string') {
      try {
        const parsed = JSON.parse(tags);
        return Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        return tags.split(',').map(t => t.trim()).filter(t => t);
      }
    }
    return [];
  };

  return (
    <div className="blog-page">

      {/* =============================================
          HERO SECTION — VIDÉO BACKGROUND
          ============================================= */}
      <header className="blog-hero-section">

        {/* Vidéo background */}
        <video
          className="blog-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={blogVideo} type="video/mp4" />
        </video>

        {/* Overlay sombre */}
        <div className="blog-hero-overlay" />

        {/* Contenu */}
        <div className="blog-hero-content">
          
          <h1 className="blog-page-title">Actualités SNTP</h1>
          <p className="blog-hero-description">
            Découvrez nos dernières actualités, projets et ce que les médias disent de nous
          </p>
          
        </div>

      </header>

      {/* =============================================
          MAIN CONTENT
          ============================================= */}
      <section className="blog-main-section">
        <div className="container">

          {/* Barre de recherche et filtres */}
          <div className="blog-filters-section">
            <form onSubmit={handleSearch} className="blog-search-form">
              <div className="search-input-wrapper">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  className="blog-search-input"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-search">
                Rechercher
              </button>
            </form>

            {/* Filtres par type de contenu */}
            <div className="type-contenu-filters">
              <button
                className={`type-filter-btn ${selectedTypeContenu === '' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedTypeContenu('');
                  setSelectedTypeMedia('');
                  setPagination(prev => ({ ...prev, page: 1 }));
                }}
              >
                Tout
              </button>
              <button
                className={`type-filter-btn ${selectedTypeContenu === 'article' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedTypeContenu('article');
                  setSelectedTypeMedia('');
                  setPagination(prev => ({ ...prev, page: 1 }));
                }}
              >
                <FaNewspaper /> Articles
              </button>
              <button
                className={`type-filter-btn ${selectedTypeContenu === 'mention_media' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedTypeContenu('mention_media');
                  setPagination(prev => ({ ...prev, page: 1 }));
                }}
              >
                <FaExternalLinkAlt /> Mentions Médias
              </button>
            </div>

            {/* Sous-filtres mentions médias */}
            {selectedTypeContenu === 'mention_media' && (
              <div className="type-media-filters">
                <button
                  className={`type-media-btn ${selectedTypeMedia === '' ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedTypeMedia('');
                    setPagination(prev => ({ ...prev, page: 1 }));
                  }}
                >
                  Tous
                </button>
                <button
                  className={`type-media-btn ${selectedTypeMedia === 'article' ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedTypeMedia('article');
                    setPagination(prev => ({ ...prev, page: 1 }));
                  }}
                >
                  <FaNewspaper /> Articles
                </button>
                <button
                  className={`type-media-btn ${selectedTypeMedia === 'video' ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedTypeMedia('video');
                    setPagination(prev => ({ ...prev, page: 1 }));
                  }}
                >
                  <FaVideo /> Vidéos
                </button>
                <button
                  className={`type-media-btn ${selectedTypeMedia === 'podcast' ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedTypeMedia('podcast');
                    setPagination(prev => ({ ...prev, page: 1 }));
                  }}
                >
                  <FaMicrophone /> Podcasts
                </button>
                <button
                  className={`type-media-btn ${selectedTypeMedia === 'interview' ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedTypeMedia('interview');
                    setPagination(prev => ({ ...prev, page: 1 }));
                  }}
                >
                  <FaMicrophone /> Interviews
                </button>
              </div>
            )}

            <div className="blog-stats">
              <span className="stats-count">
                {pagination.total} {pagination.total > 1 ? 'éléments' : 'élément'}
              </span>
            </div>
          </div>

          {/* Contenu */}
          {loading ? (
            <div className="blog-loading">
              <div className="spinner"></div>
              <p>Chargement...</p>
            </div>
          ) : items.length === 0 ? (
            <div className="no-items">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3>Aucun contenu trouvé</h3>
              <p>
                {searchTerm || selectedTypeContenu
                  ? "Aucun contenu ne correspond à vos critères"
                  : "Aucun contenu disponible pour le moment."
                }
              </p>
              {(searchTerm || selectedTypeContenu) && (
                <button
                  className="btn-reset-search"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTypeContenu('');
                    setSelectedTypeMedia('');
                    setPagination(prev => ({ ...prev, page: 1 }));
                  }}
                >
                  Réinitialiser les filtres
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Grille des articles */}
              <div className="blog-grid">
                {items.map((item) => (
                  <article
                    key={item.id}
                    className={`blog-card ${item.typeContenu === 'mention_media' ? 'mention-media-card' : ''} ${item.featured ? 'featured' : ''}`}
                    onClick={() => handleItemClick(item)}
                  >
                    {/* Image ou Logo source */}
                    {item.typeContenu === 'mention_media' && item.logoSource ? (
                      <div className="blog-card-logo-wrapper">
                        <img
                          src={item.logoSource}
                          alt={item.sourceMedia || item.titre}
                          className="blog-card-logo"
                          loading="lazy"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      </div>
                    ) : item.imageUrl ? (
                      <div className="blog-card-image-wrapper">
                        <img
                          src={item.imageUrl}
                          alt={item.titre}
                          className="blog-card-image"
                          loading="lazy"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <div className="blog-card-overlay"></div>
                      </div>
                    ) : null}

                    <div className="blog-card-content">
                      <div className="blog-entry-meta">
                        {item.datePublication && (
                          <time className="blog-meta-date" dateTime={item.datePublication}>
                            {formatDate(item.datePublication)}
                          </time>
                        )}
                      </div>

                      <h2 className="blog-entry-title">{item.titre}</h2>

                      {item.extrait && (
                        <div className="blog-entry-excerpt">
                          <p>{truncateText(item.extrait, 120)}</p>
                        </div>
                      )}

                      {item.tags && Array.isArray(item.tags) && item.tags.length > 0 && (
                        <div className="blog-tags">
                          <FaTag className="tag-icon" />
                          <div className="blog-tags-list">
                            {item.tags.slice(0, 3).map((tag, index) => (
                              <span key={index} className="blog-tag">{tag}</span>
                            ))}
                            {item.tags.length > 3 && (
                              <span className="blog-tag blog-tag-more">
                                +{item.tags.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      <div className="blog-card-footer">
                        <button className="blog-read-more">
                          {item.typeContenu === 'mention_media' ? (
                            <>
                              Voir l'article
                              <FaExternalLinkAlt />
                            </>
                          ) : (
                            <>
                              Lire la suite
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {pagination.totalPages > 1 && (
                <div className="blog-pagination">
                  <button
                    className="pagination-btn pagination-prev"
                    disabled={pagination.page === 1}
                    onClick={() => handlePageChange(pagination.page - 1)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Précédent
                  </button>

                  <div className="pagination-numbers">
                    {[...Array(pagination.totalPages)].map((_, index) => {
                      const pageNum = index + 1;
                      if (
                        pageNum === 1 ||
                        pageNum === pagination.totalPages ||
                        (pageNum >= pagination.page - 1 && pageNum <= pagination.page + 1)
                      ) {
                        return (
                          <button
                            key={pageNum}
                            className={`pagination-number ${pagination.page === pageNum ? 'active' : ''}`}
                            onClick={() => handlePageChange(pageNum)}
                          >
                            {pageNum}
                          </button>
                        );
                      } else if (
                        pageNum === pagination.page - 2 ||
                        pageNum === pagination.page + 2
                      ) {
                        return <span key={pageNum} className="pagination-ellipsis">...</span>;
                      }
                      return null;
                    })}
                  </div>

                  <button
                    className="pagination-btn pagination-next"
                    disabled={pagination.page === pagination.totalPages}
                    onClick={() => handlePageChange(pagination.page + 1)}
                  >
                    Suivant
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}

        </div>
      </section>
    </div>
  );
};

export default Blog;
