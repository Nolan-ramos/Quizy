<template>
  <div class="view">
    <span class="view__title">USER LISTE PAGE</span>
    <ul class="element_list">
      <li class="element" v-for="user in users" :key="user.id">
        <div class="element_infos">
          <span>id = {{ user.id_user }}</span>
          <span>email = {{ user.email_user }}</span>
        </div>
        <div class="element_link">
          <router-link class="link" :to="'/user-details/' + user.id_user">Details</router-link>
          <router-link class="link" :to="'/user-edit/' + user.id_user">Modifier</router-link>
        </div>
        <div class="element_buttons">
          <button class="button button_delete_user" @click="deleteUser(user.id_user)">Supprimer</button>
        </div>
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
  .button_delete_user{
    width:100%;
  }
</style>
