import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Notification from '@/components/Notification'
import History from '@/components/History'
import Settings from '@/components/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/notification',
      name: 'notification',
      component: Notification
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ]
})
