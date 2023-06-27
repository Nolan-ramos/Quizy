import axios from 'axios';

export const productVariables = {
  variable1: 'Valeur de la variable 1 pour les produits',
  variable2: 'Valeur de la variable 2 pour les produits',
  // ...
};

export const productFunctions = {
  getProducts() {
    return axios.get('http://localhost:3000/api/products')
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des produits :', error);
        throw error;
      });
  },
  getProductDetails(productId) {
    return axios.get('http://localhost:3000/api/products/' + productId)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des détails du produit :', error);
        throw error;
      });
  },
  deleteProduct(productId) {
    return axios.delete('http://localhost:3000/api/products/' + productId)
      .then(() => {
        console.log('Produit supprimé avec succès');
      })
      .catch(error => {
        console.error('Erreur lors de la suppression du produit :', error);
        throw error;
      });
  },
  createProduct(name, price) {
    return axios.post('http://localhost:3000/api/products', { name, price })
      .then(response => {
        console.log('Produit créé avec succès:', response.data);
        return response.data;
      })
      .catch(error => {
        console.error('Erreur lors de la création du produit :', error);
        throw error;
      });
  },
  updateProduct(productId, name, price) {
    return axios.put('http://localhost:3000/api/products/' + productId, { name, price })
      .then(response => {
        console.log('Produit mis à jour avec succès:', response.data);
        return response.data;
      })
      .catch(error => {
        console.error('Erreur lors de la mise à jour du produit :', error);
        throw error;
      });
  },
};
