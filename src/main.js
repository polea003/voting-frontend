import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'

//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'jquery/src/jquery.js'
//import 'bootstrap/dist/js/bootstrap.min.js'
//import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';

//Global Variables
// 1. Assign app to a variable
let app = createApp(App)

// 2. Assign the global variable before mounting
app.config.globalProperties.adminFlag = false

/*const changeFlag=this.vue.observable ({
    flag:{
        adminFlag: false,
        adminChange(adminFlag){
            changeFlag.flag.adminFlag=!adminFlag
        }
    }
})
this.vue.prototype.$changeFlag*/

// 3. Use router and mount app
app.use(router).mount('#app')

//Orginal Version
//createApp(App).use(router).mount('#app')