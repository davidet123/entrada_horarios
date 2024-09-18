import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Pinia
import { createPinia } from 'pinia'

// Router
import router from './router'

// Plugins
import { registerPlugins } from '@/plugins'


const pinia = createPinia()


const app = createApp(App)

registerPlugins(app)

app.use(pinia)
app.use(router)

app.mount('#app')

