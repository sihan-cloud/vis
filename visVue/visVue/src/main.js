import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import axios  from 'axios'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';


import * as echarts from 'echarts'


const app = createApp(App)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$echarts = echarts

//createApp(App)后追加.use(ElementPlus)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
