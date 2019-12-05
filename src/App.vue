<template>
  <div id="app">
    <Header />
      <router-view/>
    <Foot />
  </div>
</template>

<script>
import Header from 'cmp/Header/index'
import Foot from 'cmp/Foot/index'
export default {
  name: 'App',
  components: {
    Header,
    Foot
  }
}
</script>

<style lang="less">
// @import './css/public.less';
</style>
