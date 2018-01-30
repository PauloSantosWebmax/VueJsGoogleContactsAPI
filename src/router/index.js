import Vue from 'vue'
import Router from 'vue-router'
import TesteComponent from '@/components/TesteComponent'
import TesteComponentWithPlugin from '@/components/TesteComponentWithPlugin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TesteComponent',
      component: TesteComponent
    },
    {
      path: '/plugin',
      name: 'TesteComponentWithPlugin',
      component: TesteComponentWithPlugin
    }
  ]
})
