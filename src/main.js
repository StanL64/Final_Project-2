import './assets/main.css'
import store from '@/components/data/index'
import { createApp } from 'vue'
import App from './App.vue'


import router from './routes'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap";


const app = createApp(App);
app.use(store);  // Pasang Vuex store sebelum mount
app.use(router); // Pasang router
app.mount('#app'); // Mount setelah semua plugin dipasang