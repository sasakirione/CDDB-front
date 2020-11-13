import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' // added
import Router from 'vue-router'
import HelloWorld from '@/components/Top'
import album from '@/components/album'
import song from '@/components/song'
import info from '@/components/info'

Vue.use(Router)
Vue.use(BootstrapVue) // added

import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
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