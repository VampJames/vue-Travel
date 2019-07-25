<template>
  <div>
    <homeHeader></homeHeader>
    <homeSwiper></homeSwiper>
    <homeIcons></homeIcons>
    <homeRecommend></homeRecommend>
    <homeWeekend></homeWeekend>
  </div>
</template>

<script>
import homeHeader from './components/Header'
import homeSwiper from './components/Swiper'
import homeIcons from './components/Icons'
import homeRecommend from './components/Recommend'
import homeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeekend
  }
}
</script>
<style>

</style>
