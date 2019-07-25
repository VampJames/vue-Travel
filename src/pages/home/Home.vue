<template>
  <div>
    <homeHeader></homeHeader>
    <homeSwiper></homeSwiper>
    <homeIcons></homeIcons>
  </div>
</template>

<script>
import homeHeader from './components/Header'
import homeSwiper from './components/Swiper'
import homeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons
  }
}
</script>
<style>

</style>
