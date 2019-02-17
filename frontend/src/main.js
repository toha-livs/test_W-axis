import Vue from 'vue'
import Updating from './Updating'
import App from './App'
import store from './store'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: App },
  { path: '/order/:id', component: Updating }
]

const router = new VueRouter({
  routes
})
const app = new Vue({
  router, store
}).$mount('#app')
