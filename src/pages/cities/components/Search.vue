<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    height .72rem
    padding .1rem
    background $bgColor
    .search-input
      box-sizing border-box
      padding .1rem
      width 100%
      height .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666666
</style>
