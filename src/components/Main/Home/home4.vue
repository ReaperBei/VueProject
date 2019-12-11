<template>
  <div>
    <div class="container">
      <div class="home-list">
        <div class="title text-cent">
          <h2>企业优势</h2>
        </div>
        <div class="home-line"></div>
      </div>
      <el-carousel
        class="journalism-text-box firm-box"
        indicator-position="outside"
        :autoplay="false"
      >
        <el-carousel-item v-for="item in 3" :key="item">
          <div class="flx firm-list">
            <div class="column-3 firm-left">
              <img class="column-6" src="../../image/945ce8ef2c6baef6f98f358635774d6c.jpg" alt />
            </div>
            <div class="column-3 firm-right home-there-box padding-l-25">
              <h3>
                独特地理环境
                <span>/01</span>
              </h3>
              <div class="line-height-30">岩博酒业酿造的“人民小酒”源于岩博村彝家600余年的酿酒技艺，将传统的酿酒工艺精华进行千载传承。小锅杉木甑子酿造，酒业采用木甑大口朝下小口朝上的工艺烤酒，将粮食原料里面的杂味去除，保证酒质更加净爽；天锅循坏水自然冷却技术，缓慢的物理降温，不轻易破坏酒分子结构，保证了酒的品质更加上乘；传统陶坛发酵，粮食在发酵中透过微孔更好的与空气中的微生物结合及吸附陶坛中的矿物质元素，保证了酒体成分更加丰满。传承中不断创新，传统酿制技术与现代科技成果巧妙结合，分质摘酒，长期贮存，精心勾调，酿造...</div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      lis: false
    }
  }
}
</script>
<style lang="less" scoped>
@import "./css/index.less";
</style>
