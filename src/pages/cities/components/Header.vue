<template>
<div class="header">
  <router-link to="/">
    <div class="iconfont header-back">&#xe624;</div>
  </router-link>
  城市选择
</div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import "'~styles/varibles.styl"
  .header
    position relative
    overflow hidden
    height .86rem
    line-height .86rem
    text-align center
    color #ffffff
    background-color $bgColor
    font-size .32rem
    .iconfont
      width .64rem
      position absolute
      color white
      top 0
      left .1rem
      font-size .4rem
</style>
