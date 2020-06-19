import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './views/App.vue'
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Login from './components/Login.vue'
import Login1 from './components/Login1.vue'
import Table from './components/Table.vue'
import index from './components/index.vue'
import perfil from './components/perfil.vue'
import Cuenta from './components/Cuenta.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    name: 'login',
    path: '/login',
    component: Login
  },{
    name: 'bank',
    path: '/movimientos',
    component: Table
  },{
    name: 'index',
    path: '/',
    component: index
  },{
    name: 'login1',
    path: '/login1',
    component: Login1
  },{
    name: 'perfil',
    path:'/perfil',
    component: perfil
  },{
    name: 'cuenta',
    path: '/cuenta',
    component: Cuenta
  }]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
