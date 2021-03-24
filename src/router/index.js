import { createRouter, createWebHashHistory } from 'vue-router'

import Welcome from '../views/Welcome.vue';
import Device from '../views/Device.vue';
import Install from '../views/Install.vue';
import Setup from '../views/Setup.vue';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/device',
    name: 'Device',
    component: Device,
  },
  {
    path: '/install',
    name: 'Install',
    component: Install,
  },
  {
    path: '/setup',
    name: 'Setup',
    component: Setup,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
