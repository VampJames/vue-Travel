<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://photocdn.sohu.com/20111207/Img328215620.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">产品编号2776143261</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe674;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import commonGallary from 'common/gallary/Gallary'
export default {
  name: 'detailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://photocdn.sohu.com/20111207/Img328215620.jpg',
        'http://photocdn.sohu.com/20111207/Img328215620.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    commonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    color white
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex 1
        font-style: .32rem
        padding 0 .2rem
      .banner-number
        height .32rem
        line-height .32rem
        margin-top: .14rem
        padding 0 .4rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
