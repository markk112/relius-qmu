<template>
  <div id="install" class="view">
    <HeadingBanner
      title="Install"
      subhead="Install content on your device"
      :icon="require('../assets/images/views/install/install-icon-white.svg')"
    />
    <div class="installer">
      <DragDropInstaller />
    </div>
  </div>
</template>

<script>
import DragDropInstaller from "../components/DragDropInstaller/Controller.vue";
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
#install .installer {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: 1px dashed #fff;
    border-radius: 10px;
    margin: 30px;
}
</style>
