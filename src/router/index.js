import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'

Vue.use(Router)

//網址列
export default new Router({
  routes: [
    { //首頁
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
