<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.url">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '001',
          title: '洪崖丹井',
          desc: '景区大小适中，适合周末出游，游玩大约2小时左右。洪崖丹井是不多得的景观全面的景区。既有小瀑布，也有河流，有木栈道，有草坪，有拓展的绳索桥，有湖面，有石刻，有雕塑，有炼丹洞，有河谷，有挂满风车的通道，有音乐历史的展馆，有幽静的小亭，挺不错的。要是在终点的湖面上放上几条游船，就更完美了。',
          url: 'http://img1.qunarzz.com/sight/p0/1501/47/474be4661c4d7958.water.jpg_200x200_f47a701d.jpg'
        },
        {
          id: '002',
          title: '洪崖丹井',
          desc: '景区大小适中，适合周末出游，游玩大约2小时左右。洪崖丹井是不多得的景观全面的景区。既有小瀑布，也有河流，有木栈道，有草坪，有拓展的绳索桥，有湖面，有石刻，有雕塑，有炼丹洞，有河谷，有挂满风车的通道，有音乐历史的展馆，有幽静的小亭，挺不错的。要是在终点的湖面上放上几条游船，就更完美了。',
          url: 'http://img1.qunarzz.com/sight/p0/1501/47/474be4661c4d7958.water.jpg_200x200_f47a701d.jpg'
        },
        {
          id: '003',
          title: '洪崖丹井',
          desc: '景区大小适中，适合周末出游，游玩大约2小时左右。洪崖丹井是不多得的景观全面的景区。既有小瀑布，也有河流，有木栈道，有草坪，有拓展的绳索桥，有湖面，有石刻，有雕塑，有炼丹洞，有河谷，有挂满风车的通道，有音乐历史的展馆，有幽静的小亭，挺不错的。要是在终点的湖面上放上几条游船，就更完美了。',
          url: 'http://img1.qunarzz.com/sight/p0/1501/47/474be4661c4d7958.water.jpg_200x200_f47a701d.jpg'
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
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height  1.7rem
      padding .1rem
    .item-info
      min-width 0
      flex 1
      padding .1rem
      .item-title
        ellipsis()
        line-height .54rem
        font-size .32rem
      .item-desc
        ellipsis()
        line-height:.4rem
        color #ccc
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        border-radius .06rem
        color #ffffff
</style>
