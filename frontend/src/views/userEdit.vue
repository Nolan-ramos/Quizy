<template>
    <div>
      <span>EDIT USER</span>
      <input v-model="email" type="email" :placeholder="this.email" required>
      <input v-model="password" type="password" :placeholder="this.password" required>
      <button @click="updateUser">Modifier utilisateur</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'userEdit',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    mounted() {
      const userId = this.$route.params.userId;
      this.getUserDetails(userId);
    },
    methods: {
      getUserDetails(userId) {
        this.$userFunctions.getUserDetails(userId)
          .then(user => {
            this.email = user.email_user;
            this.password = user.password_user;
          })
          .catch(error => {
            console.error("Erreur lors de la récupération des détails de l'utilisateur:", error);
          });
      },
      updateUser() {
        const userId = this.$route.params.userId;
        this.$userFunctions.updateUser(userId, this.email, this.password)
          .then(() => {
            console.log('Utilisateur mis à jour avec succès');
            // Rediriger vers la page de détails de l'utilisateur après la mise à jour
            this.$router.push('/user-details/' + userId);
          })
          .catch(error => {
            console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques à la vue */
  </style>
  