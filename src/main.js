import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import config from '@/config'

const app = createApp(App)
axios.get(config.mockApi + '/login').then(res=>{
    console.log(res);
})
app.use(router)
app.use(ElementPlus)
app.mount('#app')
