import Vue from 'vue'
import Router from 'vue-router'
import Overview from '../pages/overview'
import hoseInfo from '../pages/hoseInfo'
import hoseMange from '../pages/hoseMange'
import staff from '../pages/staff'
import repertory from '../pages/repertory'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: '数据概览',
      component: Overview,
      // redirect: '/',
      icon: 'none',
      invisible: true
    },
    {
      path: '/hoseInfo',
      name: '房态信息',
      component: hoseInfo,
      icon: 'none',
      invisible: true
    },
    {
      path: '/hoseMange',
      name: '房态管理',
      component: hoseMange,
      // redirect: '/login',
      icon: 'none',
      invisible: true
    },
    {
      path: '/staff',
      name: '员⼯总览',
      component: staff,
      // redirect: '/login',
      icon: 'none',
      invisible: true
    },
    {
      path: '/repertory',
      name: '库存管理',
      component: repertory,
      // redirect: '/login',
      icon: 'none',
      invisible: true
    }
  ]
})
