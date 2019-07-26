import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/Home'
import city from '@/pages/cities/City'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/city',
      name: 'city',
      component: city
    }
  ]
})
