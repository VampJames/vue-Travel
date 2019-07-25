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
          url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/818f6cc784ae6669b74bbbb255414a53.jpg_750x200_66ca5873.jpg'
        },
        {
          id: '002',
          url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
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
    height: 0
    padding-bottom: 26.65%
    overflow: hidden
    .swiper-img
      width 100%
</style>
