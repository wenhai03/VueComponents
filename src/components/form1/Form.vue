<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "Form",
    provide: {
      form: this
    },
    mounted () {
      console.log('this------', this)
      console.log('Vue------', new Vue)
    }
  }
</script>

<style scoped>

</style>
