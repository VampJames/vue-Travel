<template>
  <div>
    <detailBanner></detailBanner>
    <detailHeader></detailHeader>
    <div class="tontent"></div>
  </div>
</template>

<script>
import detailBanner from './components/Bannner'
import detailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    detailBanner,
    detailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .tontent
    height 50rem
</style>
