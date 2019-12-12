<template>
  <div>
    <div>
      <div>
        <img
          src="../../image/b07c285f4a372313e256a98a5c83cf4d.jpg"
          alt
          class="column-6 vertical-mod"
        />
      </div>
    </div>
    <div class="flx justify-cent">
      <div
        class="flx justify-cent relation-tab padding-10"
        v-for="(ietm, index) in list"
        :key="index"
        v-on:click="addClass(index,$event)"
        v-bind:class="{ blue:index==($store.state.login.tabIndex)}"
      >
        <router-link :to="ietm.dizhi" class="nav-tab font-16">{{ietm.text}}</router-link>
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      current: 0,
      list: [{
        text: '全部', dizhi: 'Total'
      }, {
        text: '人名小酒', dizhi: 'Bistro'
      }, {
        text: '藏龙液', dizhi: 'Liquid'
      }, {
        text: '小锅酒', dizhi: 'Alveolus'
      }, {
        text: '其他', dizhi: 'Rests'
      }]
    }
  },
  methods: {
    addClass: function (index, event) {
      this.$store.state.login.tabIndex = index
    }
  }
}
</script>
<style lang="less">
@import '../Home/css/index.less';
@import './css/index.less';
</style>
