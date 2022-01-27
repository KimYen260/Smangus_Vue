import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import products from '../components/productMenu.vue'
import team from '../components/team.vue'
import trips from '../components/classicTrips.vue'

Vue.use(Router)

//網址列
export default new Router({
  routes: [
    { //首頁
      path: '/',
      name: 'index',
      component: index
    },
    { //商品首頁
      path: '/products',
      name: 'products',
      component: products
    },
    { //team
      path: '/team',
      name: 'team',
      component: team
    },
    { //classicTrip
      path: '/trips',
      name: 'trips',
      component: trips
    }
  ]
})
