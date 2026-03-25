// src/pages/admin/CategoriesPage.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import CategoryList from '../../components/admin/CategoryList';
import CategoryForm from '../../components/admin/CategoryForm';
import categoryService from '../../services/categoryService';
import './CategoriesPage.css';

const CategoriesPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleCreate = () => {
    setSelectedCategory(null);
    setShowForm(true);
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setShowForm(true);
  };

  const handleSubmit = async (categoryData, photoFile) => {
    try {
      setLoading(true);

      if (selectedCategory) {
        // Modification
        const response = await categoryService.update(
          selectedCategory.id,
          categoryData,
          photoFile
        );

        if (response.success) {
          toast.success('Catégorie modifiée avec succès');
          setShowForm(false);
          setSelectedCategory(null);
          setRefreshTrigger(prev => prev + 1);
        }
      } else {
        // Création
        const response = await categoryService.create(categoryData, photoFile);

        if (response.success) {
          toast.success('Catégorie créée avec succès');
          setShowForm(false);
          setRefreshTrigger(prev => prev + 1);
        }
      }
    } catch (error) {
      toast.error(error.message || 'Une erreur est survenue');
      console.error('Erreur submit:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ? Cette action est irréversible.')) {
      return;
    }

    try {
      const response = await categoryService.delete(id);

      if (response.success) {
        toast.success('Catégorie supprimée avec succès');
        setRefreshTrigger(prev => prev + 1);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || 'Erreur lors de la suppression');
      console.error('Erreur delete:', error);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setSelectedCategory(null);
  };

  return (
    <div className="categories-page">
      <div className="page-header">
        <div className="page-title-section">
          <h1 className="page-title">Gestion des Catégories</h1>
          <p className="page-subtitle">Créez et gérez les catégories de projets</p>
        </div>
        {!showForm && (
          <button className="btn btn-create" onClick={handleCreate}>
            <i className="fas fa-plus"></i> Nouvelle Catégorie
          </button>
        )}
      </div>

      {showForm ? (
        <CategoryForm
          category={selectedCategory}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          loading={loading}
        />
      ) : (
        <CategoryList
          onEdit={handleEdit}
          onDelete={handleDelete}
          refreshTrigger={refreshTrigger}
        />
      )}
    </div>
  );
};

export default CategoriesPage;
