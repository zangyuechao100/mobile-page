import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('./pages/main')
    },
    {
      path: '/view',
      name: 'view',
      component: () => import('./pages/view')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./pages/test')
    }
  ]
})
