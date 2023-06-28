<template>
  <div>
    <span>USERR DETAIL</span>
    <ul>
      <li v-for="user in user" :key="user.id">
        <span>id = {{ user.id_user }}</span>
        <span>email = {{ user.email_user }}</span>
        <router-link :to="'/user-edit/' + user.id_user">Edit</router-link>
        <button @click="deleteUser(user.id_user)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>


<script>
import router from '../router';

export default {
  name: 'userDetails',
  data() {
    return {
      user: []
    };
  },
  mounted() {
    this.getUserDetails(this.$route.params.userId);
  },
  methods: {
    getUserDetails(userId){
      this.$userFunctions.getUserDetails(userId)
        .then(user => {
          this.user = user;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération de l\'utilisateurs:', error);
        });
    },
    deleteUser(userId) {
      this.$userFunctions.deleteUser(userId)
        .then(() => {
          console.log('Utilisateur supprimé avec succès');
          router.push('/user-list');
        })
        .catch(error => {
          console.error('Erreur lors de la suppression de l\'utilisateur:', error);
        });
    },
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
