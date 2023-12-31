import { createApp } from 'vue'
import { createPinia } from 'pinia'

//ESSE O ROOT COMPONENT ,IGUAL O APP COMPONENT DO ANGULAR
import App from './App.vue'
import router from './router'

const app = createApp(App)
//AQUI ESTAMOS CRAINDO NOSSO APP E MONTANDO ELE
//COMO NO SETUP COLOCAMOS O PINIA
//E O ROUTER
app.use(createPinia())
app.use(router)
//ESTAMOS ESPECIFICANDO O ID QUE VIA SER MONTADO[
// LA NO INDEX HTML TEM O ID LA

app.mount('#app')
