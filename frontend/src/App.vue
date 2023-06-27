<template>
  <div>
    <nav>
      <router-link to="/user-list">Users liste</router-link>
      <router-link to="/user-create">Users create</router-link>
      <router-link to="/product-page">Product page</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
