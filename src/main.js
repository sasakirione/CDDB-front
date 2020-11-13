import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue' // added
import Router from 'vue-router'
import top from '@/components/Top'
import album from '@/components/album'
import song from '@/components/song'
import info from '@/components/info'

Vue.use(Router)
Vue.use(BootstrapVue) // added

import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

var r = new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: top
    },
    {
      path: '/album',
      name: 'album',
      component: album
    },
    {
      path: '/song',
      name: 'song',
      component: song
    },
    {
      path: '/info',
      name: 'info',
      component: info
    }
  ]
})

new Vue({
  router: r,
  render: h => h(App)
}).$mount('#app')



