<template>
  <div>
    <div>
      <img class="column-6 vertical-mod" src="../../image/1f86578fad5d952007ddbb1eab6fe359.jpg" alt />
    </div>
    <div>
      <div class="flx justify-cent">
        <div
          class="flx justify-cent relation-tab padding-10"
          v-for="(ietm, index) in todos"
          :key="index"
          v-on:click="addClass(index,$event)"
          v-bind:class="{ blue:index==current}"
        >
          <router-link :to="ietm.dizhi" class="nav-tab">{{ietm.text}}</router-link>
        </div>
      </div>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      current: 0,
      todos: [
        {text: '招商加盟', dizhi: 'Merchants'},
        {text: '联系我们', dizhi: 'Relation'}
      ]
    }
  },
  methods: {
    addClass: function (index, event) {
      this.current = index
    }
  }
}
</script>
<style lang="less">
@import "./css/index.less";
</style>
