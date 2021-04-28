<template>
  <Frame />
  <div id="content">
    <div id="sidebar">
      <Nav :currentView="currentRoute.view" @changeCurrentView="changeCurrentView" />
    </div>
    <component :is="currentRoute.component" />
  </div>
</template>

<script>
import Nav from "@/components/Sidebar/Nav.vue";
import Frame from "@/components/Frame.vue";

import Dashboard from "@/views/Dashboard.vue";
import Sideload from "@/views/Sideload.vue";
import Settings from "@/views/Settings.vue";


export default {
  name: "App",
  components: {
    Dashboard,
    Sideload,
    Settings,
    Nav,
    Frame,
  },
  data () {
    return {
      routes: [
        {
          view: 'dashboard',
          component: Dashboard
        },
        {
          view: 'sideload',
          component: Sideload
        },
        {
          view: 'settings',
          component: Settings
        },
      ],
      currentRoute: {
        view: 'dashboard',
        component: Dashboard
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
  background-color: #000000;
}
</style>
