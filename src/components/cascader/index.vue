<template>

  <div class="cascader" v-click-outside="close">
    <div class="title" @click="toggle">
      {{this.result}}
    </div>
    <div class="content" v-if="isVisible">
      <CascaderItem :options="options" @change="change" :level="0"  :value="value"/>

    </div>
  </div>
</template>

<script>
  import clickOutside from "../../directives/clickOutside"
  import CascaderItem from "./cascaderItem"

  export default {
    name: "index",
    components: {
      CascaderItem
    },
    props: {
      options: {
        type: Array,
        default: () => []
      },
      value: {
        type: Array,
        default: () => []
      },
    },
    data () {
      return {
        isVisible: true,
      }
    },
    computed: {
      result () {
        return this.data
      }
    },
    directives: { // 指令是一个方法 指令有自己的生命周期
      clickOutside
    },
    methods: {
      toggle () {
        this.isVisible = !this.isVisible
      },
      change(value){
        this.$emit('input', value)
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
    border: 1px solid #ccc;
    min-height: 150px;
    max-height: 150px;
    overflow-y scroll;

  .label
    width 80px;
    padding-left 5px;

  .label:hover
    background: #999;
    cursor pointer

  .title
    line-height 30px;
</style>
