import axios from 'axios';

export function getUsers() {
  return axios.get('http://localhost:3000/api/users')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
      throw error;
    });
}

export function deleteUser(userId) {
  return axios.delete('http://localhost:3000/api/users/' + userId)
    .then(() => {
      console.log('Utilisateur supprimé avec succès');
    })
    .catch(error => {
      console.error("Erreur lors de la suppression de l'utilisateur:", error);
      throw error;
    });
}

export function getUserDetails(userId) {
  return axios.get('http://localhost:3000/api/users/' + userId)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error("Erreur lors de la récupération des détails de l'utilisateur:", error);
      throw error;
    });
}
