import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import products from '../components/productMenu.vue'
import news from '../components/news.vue'
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
    { //news
      path: '/news',
      name: 'news',
      component: news
    },
    { //classicTrip
      path: '/trips',
      name: 'trips',
      component: trips
    }
  ]
})
