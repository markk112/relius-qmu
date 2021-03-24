<template>
  <NativeBar />
  <div id="content">
    <div id="sidebar">
      <DeviceConnStatus />
      <Nav />
    </div>
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import DeviceConnStatus from "@/components/DeviceConnStatus.vue";
import NativeBar from "@/components/NativeBar.vue";


export default {
  name: "App",
  components: {
    Nav,
    DeviceConnStatus,
    NativeBar,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}
#content {
  display: flex;
  height: 100%;
  width: 100%;
}
#sidebar {
  height: 100%;
  background-color: #000;
}
</style>
