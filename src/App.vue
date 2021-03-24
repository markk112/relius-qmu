<template>
  <div id="sidebar">
    <DeviceConnStatus />
    <Nav />
  </div>
  <router-view />
</template>

<script>
import Nav from "@/components/Nav.vue";
import DeviceConnStatus from "@/components/DeviceConnStatus.vue";

export default {
  name: "App",
  components: {
    Nav,
    DeviceConnStatus,
  },
};
</script>

<style>
#app {
  display: flex;
  height: 100vh;
  width: 100vw;
}
#sidebar {
  height: 100%;
  background-color: #000;
}
</style>
