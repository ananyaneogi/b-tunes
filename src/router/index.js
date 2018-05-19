import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/layout/Index'
import Favourites from '@/components/Favourites'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/favourites',
      name: 'Favourites',
      component: Favourites
    }
  ]
})
