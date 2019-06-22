import Vue from 'vue'
import VueRouter from 'vue-router'
// import MSite from '../pages/MSite/MSite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'

//路由组件懒加载
const MSite=()=>import('../pages/MSite/MSite.vue')
const Search=()=>import('../pages/Search/Search.vue')
const Order=()=>import('../pages/Order/Order.vue')
const Profile=()=>import('../pages/Profile/Profile.vue')

import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component: MSite,
      meta:{
        showfooter:true
      }
    },
    {
      path:'/search',
      component: Search,
      meta:{
        showfooter:true
      }
    },
    {
      path:'/order',
      component: Order,
      meta:{
        showfooter:true
      }
    },
    {
      path:'/profile',
      component: Profile,
      meta:{
        showfooter:true
      }
    },
    {
      path:'/login',
      component: Login,
    },
    {
      path:'/',
      component: MSite,
      meta:{
        showfooter:true
      }
    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'/shop/ratings',
          component:ShopRatings
        },
        {
          path:'/shop/goods',
          component:ShopGoods
        },
        {
          path:'/shop/info',
          component:ShopInfo
        },
        {
          path:'',
          redirect:'/shop/goods'
        },
      ]
    }
  ]
})
