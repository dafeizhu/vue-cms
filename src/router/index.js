import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from 'components/tabbar/HomeContainer'
import MemberContainer from 'components/tabbar/MemberContainer'
import SearchContainer from 'components/tabbar/SearchContainer'
import ShopcarContainer from 'components/tabbar/ShopcarContainer'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    component: HomeContainer
  }, {
    path: '/member',
    component: MemberContainer
  }, {
    path: '/search',
    component: SearchContainer
  }, {
    path: '/shopcar',
    component: ShopcarContainer
  }],
  linkActiveClass: 'mui-active' // 设置路由高亮
})
