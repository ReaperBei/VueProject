<template>
  <div>
    <div class="container">
      <div class="flx justify-be flxalign-cent stair-nav">
        <router-link to="/">
          <div>
            <img class="max-w" src="../image/1a4cd606030f2e0b7d94d73a2aa0bf65.png" alt="加载中..." />
          </div>
        </router-link>
        <div class="nav-bulik">
          <ul class="flx nav-content">
            <li>
              <router-link to="/">
                <div class="list-content">网页首页</div>
              </router-link>
            </li>
            <li>
              <router-link to="About">
                <div class="list-content" @click="addIndex(index)">
                  <span>关于我们</span>
                  <span class="el-icon-caret-bottom"></span>
                </div>
              </router-link>
              <ul class="nav-hov">
                <li
                  v-for="(ietm, index) in Summarize"
                  :key="index"
                  v-on:click="addClass(index,$event)">
                  <router-link :to="ietm.dizhi">
                    {{ietm.title}}
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="Product">
                <div class="list-content" @click="addInd(index)">
                  产品中心
                  <span class="el-icon-caret-bottom"></span>
                </div>
              </router-link>
              <ul class="nav-hov">
                <li
                  v-for="(ietm, index) in Total"
                  :key="index"
                  v-on:click="addtabIndex(index,$event)">
                  <router-link :to="ietm.dizhi">
                    {{ietm.title}}
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="Shopping">
                <div class="list-content">网上商城</div>
              </router-link>
            </li>
            <li>
              <router-link to="News">
                <div class="list-content">
                  新闻中心
                  <span class="el-icon-caret-bottom"></span>
                </div>
              </router-link>
              <ul class="nav-hov">
                <router-link to="/Company"><li>公司新闻</li></router-link>
                <router-link to="/Industry"><li>行业动态</li></router-link>
                <router-link to="/Bazaar"><li>媒体聚焦</li></router-link>
                <router-link to="/Media"><li>市场活动</li></router-link>
              </ul>
            </li>
            <li>
              <router-link to="Service">
                <div class="list-content" @click="addIndex(index)">
                  服务支持
                  <span class="el-icon-caret-bottom"></span>
                </div>
              </router-link>
              <ul class="nav-hov">
                <li
                  v-for="(ietm, index) in Merchants"
                  :key="index"
                  v-on:click="addClass(index,$event)">
                  <router-link :to="ietm.dizhi">
                    {{ietm.title}}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="breadcrumbs">
          <span @click="show = !show" class="el-icon-s-fold"></span>
        </div>
      </div>
    </div>
    <div class="second-nav">
      <transition name="draw">
        <div v-if="show">
          <ul class="second-list">
            <li>
              <el-col :span="24">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  background-color="#fff"
                  text-color="#000"
                  active-text-color="#ffd04b"
                >
                  <el-menu-item index="1">
                    <template slot="title">
                      <router-link to="/"><span>网站首页</span></router-link>
                    </template>
                  </el-menu-item>
                  <el-submenu index="2">
                    <template slot="title">
                      <router-link to="/About"><span>关于我们</span></router-link>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="2-1">企业概况</el-menu-item>
                      <el-menu-item index="2-2">品牌故事</el-menu-item>
                      <el-menu-item index="2-3">资质荣誉</el-menu-item>
                      <el-menu-item index="2-4">视频短片</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="3">
                    <template slot="title">
                      <router-link to="/Product"><span>产品中心</span></router-link>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="3-1">人民小酒</el-menu-item>
                      <el-menu-item index="3-2">藏龙液</el-menu-item>
                      <el-menu-item index="3-3">小窝酒</el-menu-item>
                      <el-menu-item index="3-4">其他</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-menu-item index="4">
                    <router-link to="/Shopping"><span>商城</span></router-link>
                  </el-menu-item>
                  <el-submenu index="5">
                    <template slot="title">
                      <router-link to="/News"><span>新闻中心</span></router-link>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="5-1">公司新闻</el-menu-item>
                      <el-menu-item index="5-2">行业动态</el-menu-item>
                      <el-menu-item index="5-3">媒体聚焦</el-menu-item>
                      <el-menu-item index="5-4">市场活动</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="6">
                    <template slot="title">
                      <router-link to="/Service"><span>服务支持</span></router-link>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="5-1">招商加盟</el-menu-item>
                      <el-menu-item index="5-2">联系我们</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
              </el-col>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      show: false,
      isshow: false,
      Summarize: [{
        title: '企业概况', dizhi: 'Summarize'
      }, {
        title: '品牌故事', dizhi: 'Brand'
      }, {
        title: '资质荣誉', dizhi: 'Honor'
      }, {
        title: '视频短片', dizhi: 'Video'
      }],
      Total: [{
        title: '人名小酒', dizhi: 'Bistro'
      }, {
        title: '藏龙液', dizhi: 'Liquid'
      }, {
        title: '小锅酒', dizhi: 'Alveolus'
      }, {
        title: '其他', dizhi: 'Rests'
      }],
      Merchants: [{
        title: '招商加盟', dizhi: 'Merchants'
      }, {
        title: '联系我们', dizhi: 'Relation'
      }]
    }
  },
  methods: {
    addClass (index, event) {
      this.current = index
      this.$store.commit('chang', index)
    },
    addIndex (index,event) {
      var index = 0
      this.$store.commit('chang', index)
    },
    addtabIndex (index, event) {
      this.current = index
      this.$store.commit('chang', (index+1))
    },
    addInd (index,event) {
      var index = 0
      this.$store.commit('chang', index)
    }
  }
}
</script>
<style scoped lang="less">
@import "./css/index.less";
</style>
