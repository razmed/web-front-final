// src/components/admin/CategoryList.jsx
import React, { useState, useEffect } from 'react';
import categoryService from '../../services/categoryService';
import Pagination from '../Pagination';
import './CategoryList.css';

const CategoryList = ({ onEdit, onDelete, refreshTrigger }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterActif, setFilterActif] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const limit = 10;

  useEffect(() => {
    loadCategories();
  }, [currentPage, filterActif, refreshTrigger]);

  const loadCategories = async () => {
    try {
      setLoading(true);
      const response = await categoryService.getAll({
        page: currentPage,
        limit: limit,
        actif: filterActif !== '' ? filterActif : undefined
      });

      if (response.success) {
        setCategories(response.data);
        setTotalPages(response.pagination.totalPages);
        setTotalItems(response.pagination.total);
      }
    } catch (err) {
      setError('Erreur lors du chargement des catégories');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredCategories = categories.filter(cat => {
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (
        cat.nom?.toLowerCase().includes(searchLower) ||
        cat.description?.toLowerCase().includes(searchLower) ||
        cat.slug?.toLowerCase().includes(searchLower)
      );
    }
    return true;
  });

  if (loading) {
    return (
      <div className="category-list-loading">
        <div className="spinner"></div>
        <p>Chargement des catégories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="category-list-error">
        <p>{error}</p>
        <button className="btn-retry" onClick={loadCategories}>
          Ressayer
        </button>
      </div>
    );
  }

  return (
    <div className="category-list-container">

      <div className="list-filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Rechercher une catégorie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${filterActif === '' ? 'active' : ''}`}
            onClick={() => {
              setFilterActif('');
              setCurrentPage(1);
            }}
          >
            Toutes
          </button>
          <button
            className={`filter-btn ${filterActif === 'true' ? 'active' : ''}`}
            onClick={() => {
              setFilterActif('true');
              setCurrentPage(1);
            }}
          >
            Actives
          </button>
          <button
            className={`filter-btn ${filterActif === 'false' ? 'active' : ''}`}
            onClick={() => {
              setFilterActif('false');
              setCurrentPage(1);
            }}
          >
            Inactives
          </button>
        </div>
      </div>

      {filteredCategories.length === 0 ? (
        <div className="empty-state">
          <p>Aucune catégorie trouvée</p>
          <small>Essayez de modifier vos critères de recherche</small>
        </div>
      ) : (
        <>
          <div className="results-info">
            {filteredCategories.length} résultat{filteredCategories.length > 1 ? 's' : ''} sur {totalItems}
          </div>

          <div className="table-responsive">
            <table className="categories-table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Nom</th>
                  <th>Slug</th>
                  <th>Description</th>
                  <th>Ordre</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCategories.map(cat => (
                  <tr key={cat.id}>
                    <td data-label="Photo">
                      <div className="category-photo-thumb">
                        {cat.hasPhoto ? (
                          <img
                            src={categoryService.getImageUrl(cat.id, true)}
                            alt={cat.nom}
                            onError={(e) => e.target.src = 'https://via.placeholder.com/80x60?text=Pas+d\'image'}
                          />
                        ) : (
                          <div className="no-photo">
                            <i className="fas fa-image"></i>
                          </div>
                        )}
                      </div>
                    </td>
                    <td data-label="Nom">
                      <span className="category-name">{cat.nom}</span>
                    </td>
                    <td data-label="Slug">
                      <code className="slug-code">{cat.slug}</code>
                    </td>
                    <td data-label="Description">
                      <span className="description-preview">
                        {cat.description ? 
                          (cat.description.length > 80 ? `${cat.description.substring(0, 80)}...` : cat.description)
                          : 'Aucune description'}
                      </span>
                    </td>
                    <td data-label="Ordre">
                      <span className="ordre-badge">{cat.ordre}</span>
                    </td>
                    <td data-label="Statut">
                      <span className={`statut-badge ${cat.actif ? 'statut-actif' : 'statut-inactif'}`}>
                        {cat.actif ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td data-label="Actions">
                      <div className="action-buttons">
                        <button
                          className="btn-action btn-edit"
                          onClick={() => onEdit(cat)}
                        >
                          Modifier
                        </button>
                        <button
                          className="btn-action btn-delete"
                          onClick={() => onDelete(cat.id)}
                        >
                          Supprimer
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default CategoryList;
