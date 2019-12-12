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
// 产品中心
import Total from 'cmp/Main/Product/total.vue'
import Bistro from 'cmp/Main/Product/bistro.vue'
import Liquid from 'cmp/Main/Product/liquid.vue'
import Alveolus from 'cmp/Main/Product/alveolus.vue'
import Rests from 'cmp/Main/Product/rests.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/About',
      component: About,
      redirect: '/Summarize',
      children: [
        {
          path: '/Summarize',
          component: Summarize
        }, {
          path: '/Brand',
          component: Brand
        }, {
          path: '/Honor',
          component: Honor
        }, {
          path: '/Video',
          component: Video
        }
      ]
    }, {
      path: '/Product',
      component: Product,
      redirect: '/Total',
      children: [{
        path: '/Total',
        component: Total
      }, {
        path: '/Bistro',
        component: Bistro
      }, {
        path: '/Liquid',
        component: Liquid
      }, {
        path: '/Alveolus',
        component: Alveolus
      }, {
        path: '/Rests',
        component: Rests
      }]
    }, {
      path: '/Shopping',
      component: Shopping
    }, {
      path: '/News',
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
