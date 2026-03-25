// src/pages/admin/Dashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import adminPaths from '../../config/adminConfig';
import AppelOffresList from '../../components/admin/AppelOffreList';
import AppelOffreForm from '../../components/admin/AppelOffreForm';
import ProjetsList from '../../components/admin/ProjetList';
import ProjetForm from '../../components/admin/ProjetForm';
import CategoryList from '../../components/admin/CategoryList';
import CategoryForm from '../../components/admin/CategoryForm';
import ArticlesList from '../../components/admin/ArticleList';
import categoryService from '../../services/categoryService';  // ✅ AJOUT
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('appels-offres');
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [loading, setLoading] = useState(false);  // ✅ AJOUT

  const handleLogout = () => {
    authService.logout();
  };

  const handleAdd = () => {
    // Pour les articles, rediriger vers la page de création dédiée
    if (activeTab === 'articles') {
      navigate(adminPaths.articlesNew);
      return;
    }
    
    setSelectedItem(null);
    setShowForm(true);
  };

  const handleEdit = (item) => {
    // Pour les articles, rediriger vers la page d'édition dédiée
    if (activeTab === 'articles') {
      navigate(adminPaths.articlesEdit(item.id));
      return;
    }
    
    setSelectedItem(item);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      `Êtes-vous sûr de vouloir supprimer cet élément ?`
    );

    if (confirmDelete) {
      try {
        let response;
        if (activeTab === 'appels-offres') {
          const appelOffreService = require('../../services/appelOffreService').default;
          response = await appelOffreService.delete(id);
        } else if (activeTab === 'projets') {
          const projetService = require('../../services/projetService').default;
          response = await projetService.deleteProjet(id);
        } else if (activeTab === 'categories') {
          response = await categoryService.delete(id);
        } else if (activeTab === 'articles') {
          const { deleteArticle } = require('../../services/articleService');
          response = await deleteArticle(id);
        }

        if (response && response.success) {
          alert('Élément supprimé avec succès');
          setRefreshTrigger(prev => prev + 1);
        } else {
          throw new Error(response?.message || 'Échec de la suppression');
        }
      } catch (error) {
        alert(error.message || 'Erreur lors de la suppression');
        console.error(error);
      }
    }
  };

  // ✅ NOUVELLE FONCTION: Gestion spécifique pour les catégories
  const handleCategorySubmit = async (categoryData, photoFile) => {
    try {
      setLoading(true);
      
      console.log('📤 Soumission catégorie:', {
        mode: selectedItem ? 'modification' : 'création',
        data: categoryData,
        hasPhoto: !!photoFile
      });

      let response;
      if (selectedItem) {
        // Mode modification
        response = await categoryService.update(selectedItem.id, categoryData, photoFile);
      } else {
        // Mode création
        response = await categoryService.create(categoryData, photoFile);
      }

      if (response && response.success) {
        setShowForm(false);
        setSelectedItem(null);
        setRefreshTrigger(prev => prev + 1);
        alert(
          selectedItem
            ? 'Catégorie modifiée avec succès'
            : 'Catégorie créée avec succès'
        );
      } else {
        throw new Error(response?.message || 'Erreur lors de l\'opération');
      }
    } catch (error) {
      console.error('❌ Erreur catégorie:', error);
      alert(error.message || 'Erreur lors de l\'opération');
    } finally {
      setLoading(false);
    }
  };

  // ✅ FONCTION GÉNÉRIQUE pour les autres entités (si nécessaire)
  const handleFormSuccess = () => {
    setShowForm(false);
    setSelectedItem(null);
    setRefreshTrigger(prev => prev + 1);
    alert(
      selectedItem
        ? 'Élément modifié avec succès'
        : 'Élément créé avec succès'
    );
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setSelectedItem(null);
  };

  return (
    <div className="Dashboard-container">
      <header className="Dashboard-header">
        <div className="Dashboard-header-content">
          <h1>Tableau de Bord SNTP</h1>
          <button className="Dashboard-btn-logout" onClick={handleLogout}>
            Déconnexion
          </button>
        </div>
      </header>

      <div className="Dashboard-content">
        {/* Onglets */}
        <div className="Dashboard-tabs">
          <button
            className={`Dashboard-tab-btn ${
              activeTab === 'appels-offres' ? 'Dashboard-active' : ''
            }`}
            onClick={() => {
              setActiveTab('appels-offres');
              setShowForm(false);
            }}
          >
            Appels d'Offres
          </button>
          <button
            className={`Dashboard-tab-btn ${
              activeTab === 'projets' ? 'Dashboard-active' : ''
            }`}
            onClick={() => {
              setActiveTab('projets');
              setShowForm(false);
            }}
          >
            Projets
          </button>
          <button
            className={`Dashboard-tab-btn ${
              activeTab === 'categories' ? 'Dashboard-active' : ''
            }`}
            onClick={() => {
              setActiveTab('categories');
              setShowForm(false);
            }}
          >
            Catégories
          </button>
          <button
            className={`Dashboard-tab-btn ${
              activeTab === 'articles' ? 'Dashboard-active' : ''
            }`}
            onClick={() => {
              setActiveTab('articles');
              setShowForm(false);
            }}
          >
            Articles
          </button>
        </div>

        {/* Bouton Ajouter (sauf pour les articles qui ont leur propre interface) */}
        {!showForm && activeTab !== 'articles' && (
          <div className="Dashboard-actions">
            <button className="Dashboard-btn-add" onClick={handleAdd}>
              + Ajouter
            </button>
          </div>
        )}

        {/* Contenu principal */}
        <div className="Dashboard-main">
          {/* Appels d'Offres */}
          {activeTab === 'appels-offres' && (
            <>
              {showForm ? (
                <AppelOffreForm
                  appelOffre={selectedItem}
                  onSuccess={handleFormSuccess}
                  onCancel={handleFormCancel}
                />
              ) : (
                <AppelOffresList
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  refreshTrigger={refreshTrigger}
                />
              )}
            </>
          )}

          {/* Projets */}
          {activeTab === 'projets' && (
            <>
              {showForm ? (
                <ProjetForm
                  projet={selectedItem}
                  onSuccess={handleFormSuccess}
                  onCancel={handleFormCancel}
                />
              ) : (
                <ProjetsList
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  refreshTrigger={refreshTrigger}
                />
              )}
            </>
          )}

          {/* ✅ CORRECTION: Section Catégories avec handler dédié */}
          {activeTab === 'categories' && (
            <>
              {showForm ? (
                <CategoryForm
                  category={selectedItem}
                  onSubmit={handleCategorySubmit}  
                  onCancel={handleFormCancel}
                  loading={loading}  
                />
              ) : (
                <CategoryList
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  refreshTrigger={refreshTrigger}
                />
              )}
            </>
          )}

          {/* Articles */}
          {activeTab === 'articles' && (
            <ArticlesList />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
