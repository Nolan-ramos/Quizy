<template>
    <nav class="nav">
      <router-link to="/user-list">Users list</router-link>
      <router-link to="/user-create">Users create</router-link>
      <router-link to="/product-page">Product page</router-link>
    </nav>
</template>
  
<script>
export default {
    name: 'NavBar'
}
</script>
  
<style lang="scss" scoped>
    .nav{
        background: #18181B;
        padding:24px;
        font-weight: 700;
        a{
            color:white;
            margin-right: 24px;
        }
    }
</style>
  