import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// CSS reset
// https://piccalil.li/blog/a-modern-css-reset
import '@/assets/css/reset.css'

// Global styles
import '@/assets/css/global.css'

createApp(App).use(store).use(router).mount('#app')
