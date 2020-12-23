import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/components/views/register'
import First from '@/components/First'
Vue.use(Router)



export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/first',
      name:'First',
      component:First
    }
    
  ]
})
