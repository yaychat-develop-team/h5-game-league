import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import "amfe-flexible";
import VConsole from "vconsole";
createApp(App).use(router).mount('#app')
