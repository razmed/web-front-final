// src/components/ProjectModal/ProjectModal.jsx
import React, { useEffect } from 'react';
import projetService from '../../services/projetService';
import './ProjectModal.css';

const ProjectModal = ({ project, category, isOpen, onClose }) => {
  // Bloquer le scroll du body quand le modal est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Fermer avec la touche Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  // Fermer en cliquant sur l'overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="ProjectModal-overlay" onClick={handleOverlayClick}>
      <div className="ProjectModal-container">
        {/* Bouton de fermeture */}
        <button
          className="ProjectModal-close"
          onClick={onClose}
          aria-label="Fermer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Image à gauche */}
        <div className="ProjectModal-image-wrapper">
          <img
            src={projetService.getImageUrl(project.id)}
            alt={project.titre}
            className="ProjectModal-image"
            onError={(e) => {
              e.target.src = '/placeholder.jpg';
            }}
          />
          <div className="ProjectModal-image-overlay"></div>
          
          {category && (
            <div className="ProjectModal-category-badge">
              {category.nom}
            </div>
          )}
        </div>

        {/* Contenu à droite */}
        <div className="ProjectModal-content">
          {/* En-tête */}
          <div className="ProjectModal-header">
            <div className="ProjectModal-meta">
              <span className="ProjectModal-location">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {project.location || 'Non spécifié'}
              </span>

              <span className="ProjectModal-year">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {project.year || 'N/A'}
              </span>

              <span className={`ProjectModal-status ProjectModal-status--${project.status}`}>
                {project.status === 'completed' ? 'Terminé' : 'En cours'}
              </span>
            </div>

            <h2 className="ProjectModal-title">{project.titre}</h2>
          </div>

          {/* Description scrollable */}
          <div className="ProjectModal-description-wrapper">
            <h3 className="ProjectModal-section-title">Description du projet</h3>
            <p className="ProjectModal-description">
              {project.description || 'Aucune description disponible pour ce projet.'}
            </p>
          </div>

          {/* Informations supplémentaires */}
          {(project.client || project.budget || project.duration) && (
            <div className="ProjectModal-info-grid">
              {project.client && (
                <div className="ProjectModal-info-item">
                  <span className="ProjectModal-info-label">Client</span>
                  <span className="ProjectModal-info-value">{project.client}</span>
                </div>
              )}
              {project.budget && (
                <div className="ProjectModal-info-item">
                  <span className="ProjectModal-info-label">Budget</span>
                  <span className="ProjectModal-info-value">{project.budget}</span>
                </div>
              )}
              {project.duration && (
                <div className="ProjectModal-info-item">
                  <span className="ProjectModal-info-label">Durée</span>
                  <span className="ProjectModal-info-value">{project.duration}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
