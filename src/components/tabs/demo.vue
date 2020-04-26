<template>
  <div class="content">
    <Tabs
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
    ></Tabs>
  </div>
</template>
<script>
  import Tabs from 'components/tabs'

  export default {
    components: {
      Tabs
    },
    data() {
      return {
        openList: [],
        openListValue: [],
        currentType: 'pop'
      };
    },
    mounted() {
      this.getList();
    },
    methods: {
      getList() {
      },
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
    }
  };
</script>
<style scoped>
  @import "assets/css/base.css";

  p{
    font-size: 40px;
  }

  p{
  }
  .content {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    width: 1000px;
  }
</style>
