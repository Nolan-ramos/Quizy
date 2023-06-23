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
import { userMixin } from '../mixins/mixin_users.js';

export default {
  name: 'usersList',
  mixins: [userMixin],
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
