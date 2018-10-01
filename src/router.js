import VueRouter from 'vue-router'

import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/memberContainer.vue'
import ShopcarContainer from '../components/tabbar/shopcarContainer.vue'
import SearchContainer from '../components/tabbar/searchContainer.vue'
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
{path: '/home' , component:HomeContainer},
{path: '/member', component:MemberContainer},
{path: '/shopcar',component:ShopcarContainer},
{path:'/search',component:SearchContainer}
  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router