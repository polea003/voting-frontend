import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'jquery/src/jquery.js'
//import 'bootstrap/dist/js/bootstrap.min.js'
//import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(router).mount('#app')
