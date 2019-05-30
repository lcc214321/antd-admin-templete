import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../views/layout/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index/button'
    },

    {
      path: '/login',
      component: () => import('@/views/login/index')
    },
    {
      path: '/index',
      component: Layout,
      name: 'index',
      redirect: '/index/button',
      meta: { title: '首页' },
      children: [
        {
          path: 'button',
          name: 'button',
          component: () => import('../views/Button/index.vue'),
          meta: { title: '按钮' }
        },
        {
          path: 'form',
          name: 'form',
          component: () => import('../views/Form/index.vue'),
          meta: { title: '表单' }
        }
      ]
    }
  ]
})
