<template>
  <div class="content">
    <div>
      {{this.value}}
    </div>
    <!--  获取用户选择的数据  -->
    <Cascader :options="options" v-model="value"/>
    <el-button @click="getInfo" >请求数据</el-button>

<!--    <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>-->
    <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>

    <Slider :value.sync="value1" range></Slider>
    <login-form></login-form>
  </div>
</template>
<script>
  import { getUserInfo } from '@/api/user'
  import { getFolderList, getFileList } from '@/api/data'
  import { putFileInFolder, transferFolderToTree } from '@/libs/util'
  import Cascader from 'components/cascader'
  import LoginForm from 'components/main/login-form'

  export default {
    components: {
      Cascader,
      LoginForm
    },
    data() {
      return {
        value: [],
        value1: [20, 50],
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
        treeData: [],

        defaultProps: {
          children: 'children',
          label: 'name'
        }
      };
    },
    mounted() {
      this.getList();
      Promise.all([getFolderList(), getFileList()]).then(res => {
        console.log('res[0]------', res[0])
        console.log('res[1]------', res[1])

        console.log('33333------', putFileInFolder(res[0], res[1]))
        console.log('44444------', transferFolderToTree(putFileInFolder(res[0], res[1])))

        this.treeData = transferFolderToTree(putFileInFolder(res[0], res[1]))
      })
    },
    methods: {
      handleNodeClick () {},
      getInfo () {
        console.log('000000000------')
        getUserInfo({ userId: 21 }).then(res => {
          console.log('res: ', res)
          // this.url = res.data.img
          // this.bgColor = res.data.color
        })
      },
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
