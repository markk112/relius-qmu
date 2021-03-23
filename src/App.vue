<template>
  <Nav />
  <router-view />
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
#app {
  display: flex;
  background: green;
  height: 100vh;
  width: 100vw;
}
</style>
