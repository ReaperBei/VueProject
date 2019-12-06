<template>
    <div>
        <div class="container foot-buliks">
            <div class="flx">
               <div class="foot-list col-md-2 col-sm-6 col-xs-6 list masonry-item item-show">
                   <h4 class="title">关于我们</h4>
                   <ul>
                       <li>企业简介</li>
                       <li>招商加盟</li>
                       <li>新闻动态</li>
                       <li>企业简介</li>
                   </ul>
               </div>
               <div class="foot-list col-md-2 col-sm-6 col-xs-6 list masonry-item item-show">
                   <h4 class="title">产品中心</h4>
                   <ul>
                       <li>人民小酒系列</li>
                       <li>藏龙液系列</li>
                       <li>小锅酒系列</li>
                       <li>其他系列</li>
                   </ul>
               </div>
               <div class="foot-list col-md-4 col-sm-12 col-xs-12 list masonry-item item-show">
                   <h4 class="title">联系我们</h4>
                   <ul>
                       <li>贵州岩博酒业有限公司</li>
                       <li>贵州省六盘水市盘州市淤泥河乡岩博村</li>
                       <li>400-623-1999（上午9点至下午17点）</li>
                       <li>hz@gzybjy.cn（仅商务合作</li>
                   </ul>
               </div>
               <div class="col-md-3 col-ms-12 col-xs-12 info masonry-item weixin-qrcode">
                   <div class="text-cent">
                       <router-link to="">
                           官方微信公众号
                       </router-link>
                   </div>
                   <ul class="flx justify-ar">
                       <li class="column-2">
                           <img class="column-6" src="../image/90abeb0cc59f54b23592f10cd0e77de5.jpg" alt="">
                       </li>
                       <li class="column-2">
                            <img class="column-6" src="../image/ca9ab0aefe707bfc88bee87098d9b5ed.jpg" alt="">
                       </li>
                   </ul>
               </div>
            </div>
        </div>
        <div>
            <div class="footer">
                <div class="gotop el-icon-arrow-up" v-show="gotop" @click="toTop"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      gotop: false
    }
  },
  mounted () {
　　// 此处true需要加上，不加滚动事件可能绑定不成功
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll () {
      let scrolltop = document.documentElement.scrollTop || document.body.scrollTop
      scrolltop > 800 ? (this.gotop = true) : (this.gotop = false)
    },
    toTop () {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      // 实现滚动效果 
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
    }
  }
}
</script>
<style lang="less" scoped>
@import './css/index.less';
</style>
