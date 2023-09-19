import { createApp } from 'vue'
import Application from './Application.vue'
import router from './router/index' // Importez le routeur depuis './router'
import { createPinia } from 'pinia'
import 'uno.css'


const pinia = createPinia()
const application = createApp(Application)

application.use(pinia)
application.use(router)
application.mount('#app')