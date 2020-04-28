<template>
  <div class="content">
    <NavBar>
      <div slot="center">首页</div>
    </NavBar>
    <Tabs
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
    />

    <h1>{{new Date | dateFormat}}</h1>

    <el-button @click="handleNotify" type="primary">buttonCont</el-button>
  </div>
</template>
<script>
  import Tabs from 'components/tabs'
  import NavBar from 'components/navbar'

  export default {
    props: {
      propName: {
        type: Number,
        default: 0
      },
    },
    components: {
      Tabs,
      NavBar
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
      handleNotify() {
        this.$notify('我很丑')
      },
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

</style>
