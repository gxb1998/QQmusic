import Vue from 'vue'
import Router from 'vue-router'
import Public from '@/components/public'
import Recommend from '@/components/recommend'
import Rank from '@/components/rank'
import Search from '@/components/search'
import Play from '@/components/play'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/public',
      component:Public,
      children:[
        {
          path: '/recommend',
          component: Recommend
        },
        {
          path:'/rank',
          component:Rank
        },
        {
          path:'/search',
          component : Search
        }
      ]
    },
    {
      path:'/play',
      component:Play
    },
    {
      path:'*',
      redirect:'/recommend'
    }

  ]
})
