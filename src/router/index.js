import Vue from 'vue'
import Router from 'vue-router'
import ItemList from '@/components/ItemList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ItemList',
      component: ItemList
    }
  ]
})
