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
// 服务支持
import Merchants from 'cmp/Main/Service/merchants.vue'
import Relation from 'cmp/Main/Service/relation.vue'
// 公司新闻
import Company from 'cmp/Main/News/company.vue'
import Industry from 'cmp/Main/News/industry.vue'
import Bazaar from 'cmp/Main/News/bazaar.vue'
import Media from 'cmp/Main/News/media.vue'

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
      redirect: '/Summarize',
      children: [
        {
          path: '/Summarize',
          name: 'Summarize',
          component: Summarize
        }, {
          path: 'Brand',
          name: 'Brand',
          component: Brand
        }, {
          path: 'Honor',
          name: 'Honor',
          component: Honor
        }, {
          path: 'Video',
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
      component: News,
      redirect: '/Company',
      children: [{
        path: '/Company',
        component: Company
      }, {
        path: '/Industry',
        component: Industry
      }, {
        path: '/Bazaar',
        component: Bazaar
      }, {
        path: '/Media',
        component: Media
      }]
    }, {
      path: '/Service',
      name: 'Service',
      component: Service,
      redirect: '/Merchants',
      children: [{
        path: '/Merchants',
        component: Merchants
      }, {
        path: '/Relation',
        component: Relation
      }]
    }
  ]
})
