<template>
    <div>
        <div class="container home-journalism">
            <div class="home-list">
                <div class="title text-cent">
                    <h2>新闻动态</h2>
                </div>
                <div class="home-line"></div>
                <div class="flx justify-be padding-t-30">
                    <div class="column-3 journalism-left">
                        <div class="padding-b-10">
                            <div class="title flx title-border justify-be  flxalign-cent">
                                <h2 class="journalism-title">要闻推荐</h2>
                                <span class="more">
                                    更多
                                </span>
                            </div>
                        </div>
                         <el-carousel class="journalism-text-box" indicator-position="outside">
                            <el-carousel-item v-for="item in 3" :key="item">
                                <div class="journalism-img"><img class="column-6" src="../../image/681e5c93a5ff9d99f274e765a7354b66.jpg" alt=""></div>
                                <div class="journalism-text">
                                    <h3 class="text">人民小酒|新时代•新民酒•新跨越•新启航</h3>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="column-3 journalism-right padding-l-30">
                        <div class="padding-b-10">
                            <div class="title flx title-border justify-be  flxalign-cent">
                                <h2 class="journalism-title">最新动态</h2>
                                <span class="more">
                                    更多
                                </span>
                            </div>
                        </div>
                        <div>
                            <ul class="news-list-bulik">
                                <li>
                                   <div>
                                        <div class="title flx margin-t-5">
                                            <span>12/02</span>
                                            <div class="margin-l-10">栉风沐雨二十载，春华秋实铸清酱</div>
                                        </div>
                                        <div class="content padding-tb-10">
                                            栉风沐雨二十载，春华秋实铸清酱。一路走来，岩博酒业一直坚持做好人是本源，酿好酒是基础，办好企业是目的。酒业的今天是昨天经历了无数个困难险阻
                                        </div>
                                   </div>
                                </li>
                                <li>
                                   <div>
                                        <div class="title flx margin-t-5">
                                            <span>12/02</span>
                                            <div class="margin-l-10">栉风沐雨二十载，春华秋实铸清酱</div>
                                        </div>
                                        <div class="content padding-tb-10">
                                            栉风沐雨二十载，春华秋实铸清酱。一路走来，岩博酒业一直坚持做好人是本源，酿好酒是基础，办好企业是目的。酒业的今天是昨天经历了无数个困难险阻
                                        </div>
                                   </div>
                                </li>
                                <li>
                                   <div>
                                        <div class="title flx margin-t-5">
                                            <span>12/02</span>
                                            <div class="margin-l-10">栉风沐雨二十载，春华秋实铸清酱</div>
                                        </div>
                                        <div class="content padding-tb-10">
                                            栉风沐雨二十载，春华秋实铸清酱。一路走来，岩博酒业一直坚持做好人是本源，酿好酒是基础，办好企业是目的。酒业的今天是昨天经历了无数个困难险阻
                                        </div>
                                   </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="news-bg">
                <img class="max-w" src="../../image/6ef2d38d3abcca4e787d3874dd19041b.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
@import './css/index.less';
</style>
