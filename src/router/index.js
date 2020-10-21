import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入页面
import Login from '../views/login/Login'
import Layout from '../views/layout/Index'
import Welcome from '../views/layout/welcome/Index'
import Chart from '../views/layout/chart/Index'
import User from '../views/layout/user/Index'
import Question from '../views/layout/question/Index'
import Enterprice from '../views/layout/enterprise/Index'
import Subject from '../views/layout/subject/Index'
import NotFound from '../views/404/NotFound'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/layout',
    component: Layout,
    children: [
      {
        path: 'welcome',
        component: Welcome
      },
      {
        path: '',
        redirect: 'welcome'
      },
      {
        path: 'chart',
        component: Chart
      },
      {
        path: 'user',
        component: User
      },
      {
        path: 'question',
        component: Question
      },
      {
        path: 'enterprise',
        component: Enterprice
      },
      {
        path: 'subject',
        component: Subject
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router