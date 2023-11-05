import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Login = () => import('@/views/login')
const article = () => import('@/views/article')

const Layout = () => import('@/views/layout')

const dashboard = () => import('@/views/dashboard')

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard', // 重定向
    children: [{
      path: 'dashboard',
      component: dashboard
    },
    {
      path: 'article',
      component: article
    }
    ]
  }

]
const router = new VueRouter({
  routes
})
export default router
