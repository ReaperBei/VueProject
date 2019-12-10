<template>
  <div>
    <div>
      <comImg />
      <div class='about-nav'>
        <div class="flx justify-cent">
          <div
            class="flx justify-cent relation-tab padding-10"
            v-for="(ietm, index) in list"
            :key="index"
            v-on:click="addClass(index,$event)"
            v-bind:class="{ blue:index==current}"
          >
            <router-link :to="ietm.dizhi" class="nav-tab font-16">{{ietm.text}}</router-link>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import comImg from './common/index'
export default {
  data () {
    return {
      current: 0,
      list: [{
        text: '企业概述', dizhi: 'Summarize'
      }, {
        text: '品牌故事', dizhi: 'Brand'
      }, {
        text: '资质荣誉', dizhi: 'Honor'
      }, {
        text: '资质视频', dizhi: 'Video'
      }]
    }
  },
  components: {
    comImg
  },
  methods: {
    addClass: function (index, event) {
      this.current = index
      console.log(index)
    }
  }
}
</script>
<style lang='less' scoped>
@import './css/index.less';
</style>
