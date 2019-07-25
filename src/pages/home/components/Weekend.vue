<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.url">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [
        {
          id: '001',
          title: '滕王阁',
          desc: '看山看水，看看历史对南昌的浸润',
          url: 'http://img1.qunarzz.com/sight/source/1505/74/a665dfecf12ae.jpg_r_640x214_5d22909a.jpg'
        },
        {
          id: '002',
          title: '滕王阁',
          desc: '看山看水，看看历史对南昌的浸润',
          url: 'http://img1.qunarzz.com/sight/source/1505/74/a665dfecf12ae.jpg_r_640x214_5d22909a.jpg'
        },
        {
          id: '003',
          title: '滕王阁',
          desc: '看山看水，看看历史对南昌的浸润',
          url: 'http://img1.qunarzz.com/sight/source/1505/74/a665dfecf12ae.jpg_r_640x214_5d22909a.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
    height 0
    overflow hidden
    padding-bottom 33.9%
    .item-img
      width 100%
  .item-info
    min-width 0
    padding .1rem
    .item-title
      ellipsis()
      line-height .54rem
      font-size .28rem
      color #212121
    .item-desc
      ellipsis()
      line-height:.4rem
      color #555
      font-size .24rem
</style>
