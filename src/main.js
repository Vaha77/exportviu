import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from "vue-query"
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)
const pinia = createPinia();

pinia.use(({ store }) => {
   store.router = markRaw(router)
})

app.use(pinia)
app.use(VueQueryPlugin)
app.use(router)

app.mount('#app')
