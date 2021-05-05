// Vue Main Imports
import { createApp } from 'vue'
import { initModules } from '@/modules'
import App from './App.vue'
import './registerServiceWorker'
import './styles/main.css'

// Create Vue app
const app = createApp(App)

// Initialize Modules
initModules(app)

// Mount Vue app
app.mount('#app')
