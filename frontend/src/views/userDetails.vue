<template>
  <div>
    <span>USER DETAIL</span>
    <ul>
      <li v-for="user in user" :key="user.id">
        <span>id = {{ user.id_user }}</span>
        <span>email = {{ user.email_user }}</span>
        <button @click="deleteUser(user.id_user)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>


<script>
import router from '../router';
import { deleteUser, getUserDetails } from '../utils/user_utils.js';

export default {
  name: 'userDetails',
  data() {
    return {
      user: []
    };
  },
  mounted() {
    getUserDetails(this.$route.params.id)
        .then(user => {
          this.user = user; // Assigner les détails de l'utilisateur à une propriété du composant
        })
        .catch(error => {
          console.error("Erreur lors de la récupération des détails de l'utilisateur:", error);
          // Gérer l'erreur de récupération des détails de l'utilisateur
        });
  },
  methods: {
    deleteUser(userId) {
      deleteUser(userId)
        .then(() => {
          console.log('Utilisateur supprimé avec succès');
          // Gérer la suppression réussie
          router.push('/user-list');
        })
        .catch(error => {
          console.error("Erreur lors de la suppression de l'utilisateur:", error);
          // Gérer l'erreur de suppression de l'utilisateur
        });
    },
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
