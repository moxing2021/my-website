import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// tailwindcss 和 element-plus 放置位置  不然有样式冲突
import '@assets/tailwind/tailwind.css'
// import 'element-plus/dist/index.css'
import '@assets/index.scss' //自定义样式
import router from './router'
import svgIcon from '@components/icons/index.vue' //svg
import App from './App.vue'
import storage from './utils/storages'
const app = createApp(App)
app.config.globalProperties.$storage = storage// 全局挂载对象/函数 config.globalProperties
app.use(router)
app.use(ElementPlus)
app.component('svg-icon', svgIcon) // 全局挂在组件svg
app.mount('#app')
