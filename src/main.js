import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './routes/router'

import { makeServer } from './server'

const pinia = createPinia()

const app = createApp(App);

makeServer()

app.use(pinia)
app.use(router)

app.mount('#app')
