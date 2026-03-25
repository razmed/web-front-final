// src/components/admin/CategoryForm.jsx
import React, { useState, useRef, useEffect } from 'react';
import categoryService from '../../services/categoryService';
import './CategoryForm.css';

const CategoryForm = ({ category, onSubmit, onCancel, loading }) => {
  const [formData, setFormData] = useState({
    nom: '',
    description: '',
    ordre: 0,
    actif: true
  });

  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [existingPhoto, setExistingPhoto] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (category) {
      // ✅ CORRECTION: S'assurer que actif est bien un booléen
      const isActif = category.actif === true || category.actif === 1 || category.actif === '1';
      
      setFormData({
        nom: category.nom || '',
        description: category.description || '',
        ordre: category.ordre || 0,
        actif: isActif
      });
      
      console.log('📝 Formulaire initialisé:', {
        nom: category.nom,
        actif: isActif,
        actifOriginal: category.actif
      });
      
      // ✅ CORRECTION: Charger la photo avec timestamp pour éviter le cache
      if (category.hasPhoto && category.id) {
        const imageUrl = categoryService.getImageUrl(category.id, true); // bustCache = true
        setPhotoPreview(imageUrl);
        setExistingPhoto(true);
        console.log('📷 Photo existante chargée:', imageUrl);
      } else {
        setPhotoPreview(null);
        setExistingPhoto(false);
      }
    }
  }, [category]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
    
    console.log(`📝 Champ modifié: ${name} = ${newValue}`);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Le fichier ne doit pas dépasser 5MB');
        return;
      }

      if (!file.type.startsWith('image/')) {
        alert('Veuillez sélectionner une image valide');
        return;
      }

      setPhotoFile(file);
      setExistingPhoto(false);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setPhotoFile(null);
    setPhotoPreview(null);
    setExistingPhoto(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('📤 Soumission formulaire:', {
      ...formData,
      hasNewPhoto: !!photoFile
    });
    
    onSubmit(formData, photoFile);
  };

  return (
    <div className="category-form-container">
      <form onSubmit={handleSubmit} className="category-form">
        <div className="form-header">
          <h2>{category ? 'Modifier la catégorie' : 'Nouvelle catégorie'}</h2>
        </div>

        <div className="form-body">
          {/* Nom */}
          <div className="form-group">
            <label htmlFor="nom">
              Nom de la catégorie <span className="required">*</span>
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              disabled={loading}
              placeholder="Ex: Travaux Routiers"
              maxLength={100}
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              disabled={loading}
              placeholder="Décrivez cette catégorie..."
            />
          </div>

          {/* Photo */}
          <div className="form-group">
            <label>Photo de la catégorie</label>
            <div className="photo-upload-zone">
              {photoPreview ? (
                <div className="photo-preview-container">
                  <img 
                    src={photoPreview}
                    alt="Aperçu" 
                    className="photo-preview"
                    key={photoPreview} // ✅ Force le rechargement si l'URL change
                    onError={(e) => {
                      console.error('Erreur chargement photo');
                      e.target.src = '/placeholder.jpg';
                    }}
                  />
                  <div className="photo-overlay">
                    <button
                      type="button"
                      className="btn-remove-photo"
                      onClick={handleRemovePhoto}
                      disabled={loading}
                    >
                      <i className="fas fa-trash"></i> Supprimer
                    </button>
                    <button
                      type="button"
                      className="btn-change-photo"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={loading}
                    >
                      <i className="fas fa-sync"></i> Changer
                    </button>
                  </div>
                  {existingPhoto && !photoFile && (
                    <div className="photo-info">
                      <small>Photo actuelle de la catégorie</small>
                    </div>
                  )}
                  {photoFile && (
                    <div className="photo-info">
                      <small>Nouvelle photo sélectionnée: {photoFile.name}</small>
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className="upload-placeholder"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <i className="fas fa-cloud-upload-alt upload-icon"></i>
                  <p className="upload-text">Cliquez pour sélectionner une photo</p>
                  <p className="upload-hint">JPEG, PNG, GIF, WebP (max 5MB)</p>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </div>
          </div>

          {/* Ordre et Actif */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="ordre">Ordre d'affichage</label>
              <input
                type="number"
                id="ordre"
                name="ordre"
                value={formData.ordre}
                onChange={handleChange}
                disabled={loading}
                min="0"
              />
              <small className="form-help">
                Ordre de tri (plus petit = affiché en premier)
              </small>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="actif"
                  checked={formData.actif}
                  onChange={handleChange}
                  disabled={loading}
                />
                <span>Catégorie active</span>
              </label>
              {/* ✅ DEBUG: Afficher l'état actuel */}
              <small className="form-help" style={{ display: 'block', marginTop: '8px' }}>
                État actuel: {formData.actif ? '✓ Active' : '✗ Inactive'}
              </small>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="form-actions">
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-secondary"
            disabled={loading}
          >
            Annuler
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? 'Enregistrement...' : category ? 'Modifier' : 'Créer'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
