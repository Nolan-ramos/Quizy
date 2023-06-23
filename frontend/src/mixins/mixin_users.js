// mixin.js
import axios from 'axios';
import router from '../router';

export const userMixin = {
  methods: {
    getUsers() {
      axios.get('http://localhost:3000/api/users')
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des utilisateurs:', error);
          throw error;
        });
    },
    deleteUser(userId) {
      axios.delete('http://localhost:3000/api/users/' + userId)
        .then(() => {
          console.log('Utilisateur supprimé avec succès');
          this.$route.name === 'usersList' ? this.getUsers() : router.push('/user-list');
        })
        .catch(error => {
          console.error("Erreur lors de la suppression de l'utilisateur:", error);
        });
    },
    getUserDetails() {
      axios.get('http://localhost:3000/api/users/' + this.$route.params.id)
        .then(response => {
          this.user = response.data;
        })
        .catch(error => {
          console.error("Erreur lors de la récupération des détails de l'utilisateur:", error);
        });
    },
  }
};
