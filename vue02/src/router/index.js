import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 注册路由
// eslint-disable-next-line no-unused-vars
import Ling from '@/components/Ling'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/hello',
      name: 'Ling',
      component: Ling
    }
  ]
})
