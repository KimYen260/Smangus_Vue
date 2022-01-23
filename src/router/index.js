import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'

Vue.use(Router)

//網址列
export default new Router({
  routes: [
    { //所有的進入點
      path: '/',
      name: 'index',
      component: index
    },
    { //所有的進入點
      path: '/home',
      name: 'index',
      component: home
    },{ //所有的進入點
      path: '/product',
      name: 'product',
      component: product
    }
  ]
})
