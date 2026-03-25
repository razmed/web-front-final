// src/services/imageUploadService.js
import axios from 'axios';
import authService from './authService';

const API_URL = 'http://localhost:5000/api/images';

/**
 * Upload une image pour le contenu de l'article
 * @param {File} file - Fichier image
 * @returns {Promise<string>} - URL de l'image uploadée
 */
export const uploadContentImage = async (file) => {
  try {

    const token = authService.getToken();

    if (!token) {
      throw new Error('Non authentifié. Veuillez vous connecter.');
    }

    const formData = new FormData();
    formData.append('image', file);

    const response = await axios.post(`${API_URL}/upload`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });

    // Retourner l'URL complète de l'image
    return response.data;
  } catch (error) {
    throw error.response?.data || {message: error.message};
  }
};

/**
 * Valider le type de fichier
 */
export const isValidImageFile = (file) => {
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
  return validTypes.includes(file.type); };
/**
 * Valider la taille du fichier (max 5MB)
 */
export const isValidImageSize = (file) => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  return file.size <= maxSize;
};

