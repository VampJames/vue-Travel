<template>
  <div class="list">
     <ul>
       <li class="item" v-for="item in letters" :key="item" :ref="item"
       @click="handleLetterClick"
       @touchstart.prevent="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd"
       >{{item}}</li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: ['cities'],
  data () {
    return {
      touchStatus: false
    }
  },
  computed: {
    letters () {
      var letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 79
        const index = Math.floor((touchY - startY) / 22)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "'~styles/varibles.styl"
  .list
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    display flex
    flex-direction column
    justify-content center
    .item
      line-height .44rem
      font-size .2rem
      text-align center
      color $bgColor
</style>
