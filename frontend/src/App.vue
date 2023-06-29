<template>
  <div>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>


<script>
import NavBar from './components/navBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import url('assets/scss/reset.scss');
@import url('assets/scss/style.scss');
#app {
  
}
</style>
