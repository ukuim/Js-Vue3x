import { createApp } from 'vue'
import App from './App.vue'
import  stroe from '@/store/index'
import route from './router'
const app = createApp(App)
app.use(route)
app.use(stroe)
app.mount('#app')

