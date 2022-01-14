import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import './api.js'

const app = createApp(App)
app.use(store)
app.use(router)

store.dispatch('auth/me').then(() => {
  app.mount('#app')
})
