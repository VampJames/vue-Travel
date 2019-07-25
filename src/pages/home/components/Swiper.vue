<template>
  <div class="swiper">
    <swiper :options="swiperOption">

      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '001',
          url: 'https://dimg04.c-ctrip.com/images/zg0o16000000zjlo37BAE.jpg'
        },
        {
          id: '002',
          url: 'https://dimg04.c-ctrip.com/images/zg0a15000000ypf1tBC70.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper >>> .swiper-pagination-bullet-active
    background-color #ffffff
  .swiper
    width: 100%
    /*height: 0*/
    /*padding-bottom: 31.25%*/
    overflow: hidden
    .swiper-img
      width 100%
</style>
