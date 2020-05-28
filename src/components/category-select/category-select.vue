<template>
  <Cascader :data="data" :value="value" @on-change="handleChange"></Cascader>
</template>

<script>
  export default {
    props: {
      value: {
        type: Array
      }
    },
    data() {
      return {
        data: []
      }
    },
    methods: {
      handleChange(value, selectedData){
        this.$emit('input', value);
        this.$emit('on-change', value, selectedData);
      }
    },
    mounted() {
      // this.$ajax({
      //     url: '/web/banner/getGoodsCatList',
      //     data: {shopsId: this.shopsId},
      //     success: ({data}) => {
      //         this.data = data;
      //     }
      // })
    },
    computed: {
      shopsId () {
        return this.$store.state.user.shopsId
      }
    },
  }
</script>
