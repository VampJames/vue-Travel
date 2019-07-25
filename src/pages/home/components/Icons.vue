<template>
<div class="icons">
  <swiper>
    <swiper-slide v-for="(page,index) in pages" :key="index">
      <div class="icon" v-for="item in page" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.src">
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </swiper-slide>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconsList: [
        {
          id: '001',
          src: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '002',
          src: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
          desc: '夏日玩水'
        },
        {
          id: '003',
          src: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
          desc: '自然风光'
        },
        {
          id: '004',
          src: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          desc: '亲子游'
        },
        {
          id: '005',
          src: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
          desc: '游乐场'
        },
        {
          id: '006',
          src: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
          desc: '玛雅乐园'
        },
        {
          id: '007',
          src: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/730646c021800ebd1385872fe6212476.png',
          desc: '狮子峰'
        },
        {
          id: '008',
          src: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
          desc: '水世界'
        },
        {
          id: '009',
          src: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '融创乐园'
        },
        {
          id: '0010',
          src: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '大象水世界'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icon
  position relative
  overflow hidden
  float left
  width 25%
  height 0
  padding-bottom 25%
  background-color white
  .icon-desc
    position absolute
    left 0
    right 0
    bottom 0
    height .44rem
    line-height .44rem
    color $darkTextColor
    text-align center
    ellipsis()
  .icon-img
    position absolute
    top 0
    left 0
    right 0
    bottom .44rem
    box-sizing border-box
    padding .1rem
    background-color blur
    .icon-img-content
      height 100%
      display block
      margin 0 auto
</style>
