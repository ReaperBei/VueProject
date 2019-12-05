<template>
  <div>
    <div class="container">
      <div class="flx justify-be flxalign-cent stair-nav">
        <router-link to>
          <div>
            <img class="max-w" src="../image/1a4cd606030f2e0b7d94d73a2aa0bf65.png" alt="加载中..." />
          </div>
        </router-link>
        <div class="nav-bulik">
          <ul class="flx nav-content">
            <li>
              <router-link to>
                <div class="flex list-content">网页首页</div>
              </router-link>
            </li>
            <li>
              <router-link to>
                <div class="flex list-content">
                  关于我们
                  <span class="el-icon-caret-bottom"></span>
                </div>
              </router-link>
              <ul class="nav-hov">
                <li>企业概况</li>
                <li>品牌故事</li>
                <li>资质荣誉</li>
                <li>视频短片</li>
              </ul>
            </li>
            <li>
              <router-link to>
                <div class="flex list-content">
                  产品中心
                  <span class="el-icon-caret-bottom"></span>
                </div>
              </router-link>
              <ul class="nav-hov">
                <li>人民小酒</li>
                <li>藏龙液</li>
                <li>人民小酒</li>
                <li>其他</li>
              </ul>
            </li>
            <li>
              <router-link to>
                <div class="flex list-content">网上商城</div>
              </router-link>
            </li>
            <li>
              <router-link to>
                <div class="flex list-content">
                  新闻中心
                  <span class="el-icon-caret-bottom"></span>
                </div>
              </router-link>
              <ul class="nav-hov">
                <li>公司新闻</li>
                <li>行业动态</li>
                <li>媒体聚焦</li>
                <li>市场活动</li>
              </ul>
            </li>
            <li>
              <router-link to>
                <div class="flex list-content">
                  服务支持
                  <span class="el-icon-caret-bottom"></span>
                </div>
              </router-link>
              <ul class="nav-hov">
                <li>招商加盟</li>
                <li>联系我们</li>
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
                      <span>网站首页</span>
                    </template>
                  </el-menu-item>
                  <el-submenu index="2">
                    <template slot="title">
                      <span>关于我们</span>
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
                      <span>产品中心</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="3-1">人民小酒</el-menu-item>
                      <el-menu-item index="3-2">藏龙液</el-menu-item>
                      <el-menu-item index="3-3">小窝酒</el-menu-item>
                      <el-menu-item index="3-4">其他</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-menu-item index="4">
                    <span slot="title">导航四</span>
                  </el-menu-item>
                  <el-submenu index="5">
                    <template slot="title">
                      <span>新闻中心</span>
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
                      <span>服务支持</span>
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
      show: false,
      isshow: false
    }
  }
}
</script>
<style scoped lang="less">
@import "./css/index.less";

</style>
