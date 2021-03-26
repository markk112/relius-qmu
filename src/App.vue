<template>
  <NativeBar />
  <div id="content">
    <div id="sidebar">
      <DeviceConnStatus />
      <Nav :currentView="currentRoute.view" @changeCurrentView="changeCurrentView" />
    </div>
    <component :is="currentRoute.component" />
  </div>
</template>

<script>

// Components
import Nav from "@/components/Nav.vue";
import DeviceConnStatus from "@/components/DeviceConnStatus.vue";
import NativeBar from "@/components/NativeBar.vue";

// Views
import Welcome from '@/views/Welcome.vue';
import Device from '@/views/Device.vue';
import Install from '@/views/Install.vue';
import Setup from '@/views/Setup.vue';

export default {
  name: "App",
  components: {
    Welcome,
    Device,
    Install,
    Setup,
    Nav,
    DeviceConnStatus,
    NativeBar,
  },
  data () {
    return {
      routes: [
        {
          view: 'welcome',
          component: Welcome
        },
        {
          view: 'device',
          component: Device
        },
        {
          view: 'install',
          component: Install
        },
        {
          view: 'setup',
          component: Setup
        },
      ],
      currentRoute: {
        view: 'welcome',
        component: Welcome
      },
    }
  },
  methods: {
    changeCurrentView (toRoute) {
      this.currentRoute = this.routes.find(route => route.view === toRoute)
    }
  }
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
