<template>
  <div>
    <span>USER LISTE</span>
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

export default {
  name: 'usersList',
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers(){
      this.$userFunctions.getUsers()
        .then(users => {
          this.users = users;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des utilisateurs:', error);
        });
    },
    deleteUser(userId) {
      this.$userFunctions.deleteUser(userId)
        .then(() => {
          console.log('Utilisateur supprimé avec succès');
          // Mettre à jour la liste des utilisateurs après la suppression
          this.getUsers();
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
