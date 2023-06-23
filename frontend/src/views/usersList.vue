<template>
  <div>
    <span>USER LIST</span>
    <ul>
      <li v-for="user in users" :key="user.id">
        <span>id = {{ user.id_user }}</span>
        <span>email = {{ user.email_user }}</span>
        <router-link :to="'/user-details/' + user.id_user">Details</router-link>
        <button @click="deleteUser(user.id_user)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>


<script>
import { getUsers, deleteUser } from '../utils/user_utils.js';

export default {
  name: 'usersList',
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.getUsers(); // Appeler la méthode pour récupérer les utilisateurs initiaux
  },
  methods: {
    getUsers() {
      getUsers()
        .then(users => {
          this.users = users; // Assigner les utilisateurs à une propriété du composant
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des utilisateurs:', error);
          // Gérer l'erreur de récupération des utilisateurs
        });
    },
    deleteUser(userId) {
      deleteUser(userId)
        .then(() => {
          console.log('Utilisateur supprimé avec succès');
          // Gérer la suppression réussie
          return getUsers(); // Retourner la promesse pour la chaîner
        })
        .then(users => {
          this.users = users; // Mettre à jour la liste des utilisateurs après la suppression
        })
        .catch(error => {
          console.error('Erreur lors de la suppression de l\'utilisateur:', error);
          // Gérer l'erreur de suppression de l'utilisateur
        });
    },
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
