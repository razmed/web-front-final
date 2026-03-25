// src/services/categoryService.js
import api from '../config/api';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const APIURL = `${API_URL}/categories`;

const categoryService = {
  /**
   * Récupérer toutes les catégories
   */
  async getAll(filters = {}) {
    try {
      const params = new URLSearchParams();
      
      if (filters.actif !== undefined) params.append('actif', filters.actif);
      if (filters.search) params.append('search', filters.search);
      if (filters.page) params.append('page', filters.page);
      if (filters.limit) params.append('limit', filters.limit);

      const response = await api.get(`${APIURL}?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Erreur getAll categories:', error);
      throw error;
    }
  },

  /**
   * Récupérer toutes les catégories (alias)
   */
  async getAllCategories(filters = {}) {
    return this.getAll(filters);
  },

  /**
   * Récupérer une catégorie par ID
   */
  async getById(id) {
    try {
      const response = await api.get(`${APIURL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erreur getById category:', error);
      throw error;
    }
  },

  /**
   * ✅ CORRECTION: Obtenir l'URL de l'image avec timestamp pour éviter le cache
   */
  getImageUrl(categoryId, bustCache = false) {
    const timestamp = bustCache ? `?t=${Date.now()}` : '';
    return `${API_URL}/categories/${categoryId}/image${timestamp}`;
  },

  /**
   * Vérifier si une catégorie a une photo
   */
  hasImage(category) {
    if (!category) return false;
    return category.hasPhoto === 1 || category.hasPhoto === true;
  },

  /**
   * Créer une nouvelle catégorie
   */
  async create(categoryData, photoFile) {
    try {
      const token = sessionStorage.getItem('adminToken');
      if (!token) {
        throw new Error('Vous devez être connecté pour créer une catégorie');
      }

      const formData = new FormData();
      formData.append('nom', categoryData.nom);
      if (categoryData.description) formData.append('description', categoryData.description);
      if (categoryData.slug) formData.append('slug', categoryData.slug);
      if (categoryData.ordre !== undefined) formData.append('ordre', categoryData.ordre);
      
      // ✅ CORRECTION: Toujours envoyer actif (true ou false)
      formData.append('actif', categoryData.actif ? 'true' : 'false');
      
      if (photoFile) formData.append('photo', photoFile);

      const response = await fetch(APIURL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la création de la catégorie');
      }

      return data;
    } catch (error) {
      console.error('Erreur create category:', error);
      throw error;
    }
  },

  /**
   * ✅ CORRECTION: Mettre à jour une catégorie
   */
  async update(id, categoryData, photoFile) {
    try {
      const token = sessionStorage.getItem('adminToken');
      if (!token) {
        throw new Error('Vous devez être connecté pour modifier une catégorie');
      }

      const formData = new FormData();
      formData.append('nom', categoryData.nom);
      if (categoryData.description) formData.append('description', categoryData.description);
      if (categoryData.slug) formData.append('slug', categoryData.slug);
      if (categoryData.ordre !== undefined) formData.append('ordre', categoryData.ordre);
      
      // ✅ CORRECTION: Toujours envoyer actif explicitement (true ou false)
      formData.append('actif', categoryData.actif ? 'true' : 'false');
      
      if (photoFile) formData.append('photo', photoFile);

      const response = await fetch(`${APIURL}/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la modification de la catégorie');
      }

      return data;
    } catch (error) {
      console.error('Erreur update category:', error);
      throw error;
    }
  },

  /**
   * Supprimer une catégorie
   */
  async delete(id) {
    try {
      const token = sessionStorage.getItem('adminToken');
      if (!token) {
        throw new Error('Vous devez être connecté pour supprimer une catégorie');
      }

      const response = await api.delete(`${APIURL}/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      return response.data;
    } catch (error) {
      console.error('Erreur delete category:', error);
      throw error;
    }
  }
};

export default categoryService;
