<template>
  <div>
    <span>USER CREATE</span>
    <input v-model="email" type="email" placeholder="Email" required>
    <input v-model="password" type="password" placeholder="Password" required>
    <button @click="createUser">Créer utilisateur</button>
  </div>
</template>

<script>
import router from '../router';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    createUser() {
      this.$userFunctions.createUser(this.email, this.password)
        .then(() => {
          console.log('Utilisateur créé avec succès');
          router.push('/user-list');
        })
        .catch(error => {
          console.error('Erreur lors de la création de l\'utilisateur:', error);
        });
    }
  }
};
</script>

<style>
/* Styles spécifiques à la vue */
</style>
