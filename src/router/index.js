import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' // added
import Router from 'vue-router'
import Top from "@/components/Top"
import album from '@/components/album'
import song from '@/components/song'
import info from '@/components/info'

Vue.use(Router)
Vue.use(BootstrapVue) // added

import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Top',
            component: Top
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