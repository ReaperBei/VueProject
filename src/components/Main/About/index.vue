<template>
  <div>
    <div>
      <comImg />
      <div class='about-nav'>
        <ul class='flx justify-cent'>
          <li class='padding-10'>
            <router-link name="Summarize" to='/Summarize'>企业概述</router-link>
          </li>
          <li class='padding-10'>
            <router-link name="Brand" to='/About/Brand'>品牌故事</router-link>
          </li>
          <li class='padding-10'>
            <router-link name="Honor" to='/About/Honor'>资质荣誉</router-link>
          </li>
          <li class='padding-10'>
            <router-link name="Video" to='/About/Video'>资质视频</router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import comImg from './common/index'
export default {
  components: {
    comImg
  }
}
</script>
<style lang='less'>
@import './css/index.less';
</style>
