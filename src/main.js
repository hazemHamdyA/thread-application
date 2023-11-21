import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/style.css'
import router from './router'
import App from './App.vue'
import FountAwesome from './plugins/fa'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import clickoutside from '@/plugins/ClickOutSide'
import pageScroll from './plugins/pageScroll.js'
import VuePagination from './plugins/VuePagination.js'
import VueValidate from './plugins/VueValidate.js'

const config = {
  apiKey: 'AIzaSyAr_cyVfZVQ3T-WQTKtir9RgyTc5mbcVCk',
  authDomain: 'thread-forum.firebaseapp.com',
  projectId: 'thread-forum',
  storageBucket: 'thread-forum.appspot.com',
  messagingSenderId: '1032469506718',
  appId: '1:1032469506718:web:d9baafd80a09af1de1a98f'
}
firebase.initializeApp(config)

const mainApp = createApp(App)
mainApp.use(createPinia())
mainApp.use(FountAwesome)
mainApp.use(clickoutside)
mainApp.use(pageScroll)
mainApp.use(VuePagination)
mainApp.use(VueValidate)

mainApp.use(router)
mainApp.mount('#app')
