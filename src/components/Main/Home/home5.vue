<template>
    <div>
        <div class="container home-list">
            <div class="home-list">
                <div class="title text-cent">
                    <h2>友情连接</h2>
                </div>
                <div class="home-line"></div>
            </div>
            <ul class="flx friendship-box justify-be">
                <li v-for="(ietm,index) in 8" :key="index" class="margin-b-10">
                    <div>
                        <img class="max-w" src="../../image/10704c7b94290eb35c255a2133566bb8.jpg" alt="">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less">
@import './css/index.less';
</style>
