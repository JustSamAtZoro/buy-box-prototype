import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@fortawesome/fontawesome-free/css/all.css'

createApp(App)
  .use(vuetify)
  .mount('#app')
