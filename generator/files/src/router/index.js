import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: resolve =>
      require(['@/views/home'], resolve).catch(() => {
        location.reload()
      }),
    meta: {
      title: 'Home',
      keepAlive: true
    }
  }
]
const router = new Router({
  linkActiveClass: 'active', // 当前路由默认添加的类名
  routes: routes
})
router.beforeEach((to, from, next) => {
  // 匿名页
  // keep-alive记录滚动位置
  // 身份验证
  next()
})
router.afterEach(route => {
  // 设置title
  // 记录访问日志
})

export default router
