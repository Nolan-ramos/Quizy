import axios from 'axios';

export const userVariables = {
    variable1: 'Valeur de la variable 1 pour les utilisateurs',
    variable2: 'Valeur de la variable 2 pour les utilisateurs',
    // ...
  };
  
export const userFunctions = {
    getUsers() {
        return axios.get('http://localhost:3000/api/users')
          .then(response => {
            return response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des utilisateurs:', error);
            throw error;
          });
    },
    deleteUser(userId) {
        return axios.delete('http://localhost:3000/api/users/' + userId)
          .then(() => {
            console.log('Utilisateur supprimé avec succès');
          })
          .catch(error => {
            console.error("Erreur lors de la suppression de l'utilisateur:", error);
            throw error;
          });
    },
    createUser(email, password) {
      return axios.post('http://localhost:3000/api/users/', { email, password })
        .then(response => {
          console.log('Utilisateur créé avec succès:', response.data);
          return response.data;
        })
        .catch(error => {
          console.error('Erreur lors de la création de l\'utilisateur:', error);
          throw error;
        });
    },
    getUserDetails(userId) {
        return axios.get('http://localhost:3000/api/users/' + userId)
          .then(response => {
            return response.data;
          })
          .catch(error => {
            console.error("Erreur lors de la récupération des détails de l'utilisateur:", error);
            throw error;
          });
    }      
};
  