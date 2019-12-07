import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Main/Home'
import About from 'cmp/Main/About'
import Product from 'cmp/Main/Product'
import Shopping from 'cmp/Main/Shopping'
import News from 'cmp/Main/News'
import Service from 'cmp/Main/Service'
// 关于我们的子路由
import Summarize from 'cmp/Main/About/ChildRoute/summarize.vue'
import Brand from 'cmp/Main/About/ChildRoute/brand.vue'
import Honor from 'cmp/Main/About/ChildRoute/honor.vue'
import Video from 'cmp/Main/About/ChildRoute/video.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/About',
      name: 'About',
      component: About,
      redirect: '/About/Summarize',
      children: [
        {
          path: '/About/Summarize',
          name: 'Summarize',
          component: Summarize
        }, {
          path: '/About/Brand',
          name: 'Brand',
          component: Brand
        }, {
          path: '/About/Honor',
          name: 'Honor',
          component: Honor
        }, {
          path: '/About/Video',
          name: 'Video',
          component: Video
        }
      ]
    }, {
      path: '/Product',
      name: 'Product',
      component: Product
    }, {
      path: '/Shopping',
      name: 'Shopping',
      component: Shopping
    }, {
      path: '/News',
      name: 'News',
      component: News
    }, {
      path: '/Service',
      name: 'Service',
      component: Service
    }
  ]
})
