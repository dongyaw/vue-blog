import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/home',
      component: resolve => require(['../components/home'], resolve),
      children: [{
        // 关于我
        path: 'about',
        component: resolve => require(['../components/home/about'], resolve)
      },
      {
        // 文章
        path: 'articlelist',
        name: 'articlelist',
        component: resolve => require(['../components/home/article'], resolve),
        meta: {
          keepAlive: true //需要被缓存
        }
      },
      {
        // 文章详情
        path: 'articleDetail',
        name: 'articleDetail',
        component: resolve => require(['../components/home/articleDetail'], resolve),
        meta: {
          keepAlive: false //需要被缓存
        }
      }]
    },
    {
      path: '*',
      redirect: '/home/articlelist'
    }],
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        if (from.meta.keepAlive) {
          from.meta.savedPosition = document.body.scrollTop
        }
        return { x: 0, y: to.meta.savedPosition || 0 }
      }
    }
})
