<template>
  <div id="setup" class="view">
    <HeadingBanner
      title="Setup"
      subhead="Install essential components to ensure smooth connection"
      :icon="require('../assets/images/views/install/install-icon-white.svg')"
    />
  </div>
</template>

<script>
import HeadingBanner from "../components/HeadingBanner.vue";

export default {
  name: "Setup",
  components: {
    HeadingBanner,
  },
};
</script>

<style></style>
