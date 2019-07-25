<template>
  <div>
    <homeHeader></homeHeader>
    <homeSwiper></homeSwiper>
  </div>
</template>

<script>
import homeHeader from './components/Header'
import homeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper
  }
}
</script>
<style>

</style>
