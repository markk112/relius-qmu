<template>
  <div id="install">
    <div class="banner">
      <div>
        <img src="../assets/images/views/install/install-icon-white.svg" alt="Install Icon White">
        <h1>Install</h1>
      </div>
      <p>Install content on your device</p>
    </div>
    <DragDropInstaller />
  </div>
</template>

<script>
import DragDropInstaller from '../components/DragDropInstaller.vue';

export default {
    name: 'Install',
    components: {
      DragDropInstaller,
    }
}
</script>

<style>
#install {
  display: flex;
  flex-direction: column;
  background-color: #1c1d1f;
  width: 100%;
  height: 100%;
}
#install p {
  font-size: 16px;
}
#install .banner {
  height: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  background-color: #007cfd;
}
#install .banner div img, #install .banner div h1 {
  display: inline;
}
#install .banner div h1 {
  font-size: 32px;
  margin-left: 20px;
}
</style>