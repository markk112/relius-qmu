<template>
  <div id="setup" class="view">
    <HeadingBanner
      title="Setup"
      subhead="Install essential components to ensure smooth connection"
      :icon="require('../assets/images/views/setup/sliders-icon.svg')"
    />
    <div class="components">
      <SetupSoftwareItem
        title="Oculus ADB Drivers"
        description="This download contains the drivers required to use ADB with Android-based Oculus devices."
        :icon="require('../assets/images/views/setup/oculus-logo.svg')"
      />
      <SetupSoftwareItem
        title="Android SDK Platform Tools"
        description="This download is a component of the Android SDK which includes tools that interface with the Android platform."
        :icon="require('../assets/images/views/setup/android-logo.svg')"
      />
    </div>
  </div>
</template>

<script>
import HeadingBanner from "../components/HeadingBanner.vue";
import SetupSoftwareItem from "../components/SetupSoftwareItem.vue";

export default {
  name: "Setup",
  components: {
    HeadingBanner,
    SetupSoftwareItem,
  },
};
</script>

<style>
#setup .components {
  padding: 30px;
}
</style>
