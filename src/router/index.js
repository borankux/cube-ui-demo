import Vue from 'vue'
import Router from 'vue-router'

import index from '../pages/index'
import account from "../pages/account";
import collects from "../pages/collects";
import courses from "../pages/courses";
import courses_detail from "../pages/courses_detail";
import invite from "../pages/invite";
import login from "../pages/login";
import mine from "../pages/mine";
import orders from "../pages/orders";
import order_detail from "../pages/order_detail";
import my_orders from "../pages/my_orders";
import my_order_detail from "../pages/my_order_detail";
import profiles from "../pages/profiles";
import profile_details from "../pages/profile_details";
import register from "../pages/register";
import setting from "../pages/setting";
import visits from "../pages/visits";
import dashboard from "../pages/dashboard";
import search from '../pages/search'

Vue.use(Router);


export default new Router({
  mode:'history',
  routes: [
    {
      component: login,
      path:'/login',
      name:'login'
    },
    {
      component: register,
      path:'/register',
      name:'register'
    },
    {
      component: search,
      path: '/search',
      name: 'search'
    },
    {
      component: dashboard,
      path: '/',
      children:[
        {
          component: index,
          path:'/',
          name:'home'
        },
        {
          component: courses,
          path:'courses',
          name:'courses'
        },
        {
          component: orders,
          path:'orders',
          name:'orders'
        },
        {
          component:mine,
          path: 'mine',
          name:'mine'
        }
      ]
    }
  ]
})
