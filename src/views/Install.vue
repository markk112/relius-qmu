<template>
  <div id="install" class="view">
    <HeadingBanner
      title="Install"
      subhead="Install content on your device"
      :icon="require('../assets/images/views/install/install-icon-white.svg')"
    />
    <DragDropInstaller />
  </div>
</template>

<script>
import DragDropInstaller from "../components/DragDropInstaller.vue";
import HeadingBanner from "../components/HeadingBanner.vue";

export default {
  name: "Install",
  components: {
    DragDropInstaller,
    HeadingBanner,
  },
};
</script>

<style>
#install {
  display: flex;
  flex-direction: column;
}
</style>
