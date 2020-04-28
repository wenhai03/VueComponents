<template>
  <div class="content">
    <div>
      {{this.value}}
    </div>

    <!--  获取用户选择的数据  -->
    <Cascader :options="options" v-model="value"/>
  </div>
</template>
<script>
  import Cascader from 'components/cascader'
  export default {
    components: {
      Cascader,
    },
    data() {
      return {
        value: [],
        options: [
          {
            label: '肉类',
            children: [
              {
                label: '猪肉',
                children: [
                  {label: '鸡腿'}
                ]
              },
              {
                label: '五花肉',
                children: [
                  {label: '鸡翅'}
                ]
              }
            ]
          },
          {
            label: '蔬菜',
            children: [
              {
                label: '菠菜',
                children: [
                  {label: '菠菜111'}
                ]
              },
              {
                label: '上海菜',
                children: [
                  {label: '上海菜111'}
                ]
              }
            ]
          }
        ],
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
