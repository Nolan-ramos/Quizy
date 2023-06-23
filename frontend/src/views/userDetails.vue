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
import { userMixin } from '../mixins/mixin_users.js';

export default {
  name: 'userDetails',
  mixins: [userMixin],
  data() {
    return {
      user: []
    };
  },
  mounted() {
    this.getUserDetails();
  },
  methods: {
    
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
