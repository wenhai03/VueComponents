<template>
  <div>
    <Scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    />
  </div>

</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: "demo",
    components: {
      Scroll
    },
    methods: {
      contentScroll (position) {
        this.isShowBackTop = (-position.y) > 1000
      },
      loadMore () {
        this.getHomeGoods(this.currentType)
      },

      getHomeGoods (type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      }
    },
  }
</script>

<style scoped>

</style>
