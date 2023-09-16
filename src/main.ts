import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

console.log(import.meta.env.VITE_SOME_KEY)
// console.log(process.env.VUE_APP_NOT_SECRET_CODE)
createApp(App).mount('#app')
