import Vue from 'vue'
import Router from 'vue-router'
import Overview from '../pages/overview'
import hoseInfo from '../pages/hoseInfo'
import hoseMange from '../pages/hoseMange'
import staff from '../pages/staff'
import repertory from '../pages/repertory'
import hoseDetail from '../pages/hoseDetail'

Vue.use(Router)
export const menus = [
  {
    path: '/',
    name: '数据概览',
    // redirect: '/',
    icon: 'none',
    invisible: true
  },
  {
    path: '/hoseInfo',
    name: '房态信息',
    icon: 'none',
    invisible: true,
    children: [
      {
        path: '/hoseInfo/hoseDetail',
        name: '房间详情',
        icon: 'none',
        invisible: false,
      }
    ]
  },

  {
    path: '/hoseMange',
    name: '房态管理',
    // redirect: '/login',
    icon: 'none',
    invisible: true
  },
  {
    path: '/staff',
    name: '员⼯总览',
    // redirect: '/login',
    icon: 'none',
    invisible: true
  },
  {
    path: '/repertory',
    name: '库存管理',
    icon: 'none',
    invisible: true
  }
]
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
      path: '/hoseInfo/hoseDetail',
      name: '房间详情',
      component: hoseDetail,
      icon: 'none',
      invisible: false,
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
