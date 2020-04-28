<template>

  <div class="content" v-if="isVisible">
    <div class="left">
      <div v-for="(item, index) in options" :key="index">
        <div class="label" @click="select(item)">{{item.label}}</div>

      </div>
    </div>
    <div class="right">
      <CascaderItem :options="lists" v-if="lists && lists.length"/>
    </div>
  </div>

</template>

<script>
  export default {
    name: "CascaderItem", // 必须要给当前组件起个名字
    components: {},
    props: {
      level: {
        type: Number
      },
      value: {
        type: Array,
        default: () => []
      },
      options: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        isVisible: true,
        currentSelected: null
      }
    },
    computed: {
      lists () {
        // 点击左边 算出右边
        return this.currentSelected && this.currentSelected.children
      }
    },

    methods: {
      select(item) {
        // 把左边选中的这一项存储起来
        this.currentSelected = item
      },
      close() { // 关闭弹框
        this.isVisible = false
      },
      toggle() {
        this.isVisible = !this.isVisible
      }
    },

  }
</script>

<style lang="stylus" scoped>
  .cascader
    display inline-block;
  .title
    width 150px;
    height 30px;
    border 1px solid #ccc;
  .content
    display flex
  .content-left
    border:1px solid #ccc;
    min-height:150px;
    max-height:150px;
    overflow-y scroll;
  .label
    width 80px;
    padding-left 5px;
  .label:hover
    background:#999;
    cursor pointer
  .title
    line-height 30px;
</style>
