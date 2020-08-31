import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '@/pages/Shouye'
import Us from '@/pages/Us'
import Coach from '@/pages/Coach'
import Joinus from '@/pages/Joinus'

Vue.use(Router)

export default new Router({
  // mode:'hash',
  routes: [
    {
      path:'/',
      name:'Shouye',
      component:Shouye
    },{
      path:'/Us',
      name:'Us',
      component:Us
    },{
      path:'/Coach',
      name:'Coach',
      component:Coach
    },{
      path:'/Joinus',
      name:'Joinus',
      component:Joinus
    }
  ]
})
