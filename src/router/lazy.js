import Vue from 'vue'
import Router from 'vue-router'
import Overview from '../pages/overview'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: '数据概览',
      component: Overview,
      // redirect: '/login',
      icon: 'none',
      invisible: true
    },
    {
      path: '/a',
      name: '库存管理',
      component: Overview,
      // redirect: '/login',
      icon: 'none',
      invisible: true
    },
    {
      path: '/b',
      name: '员⼯总览',
      component: Overview,
      // redirect: '/login',
      icon: 'none',
      invisible: true
    },
    {
      path: '/',
      name: '房态管理',
      component: Overview,
      // redirect: '/login',
      icon: 'none',
      invisible: true
    },
    {
      path: '/',
      name: '房态信息',
      component: Overview,
      icon: 'none',
      invisible: true
    }
  ]
})
