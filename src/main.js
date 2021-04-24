import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Reset CSS to remove default styling
import '@/assets/css/reset.css'

// Global styling
import '@/assets/css/global.css'

createApp(App).use(store).use(router).mount('#app')
