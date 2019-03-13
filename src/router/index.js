import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(element)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index')
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('@/views/layout/index'),
      children: [
        {
          path: '/layout/search',
          component: () => import('@/views/search/index')
        }
      ]
    }
  ]
})
