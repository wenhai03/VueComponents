<template>
  <div>
    <!--  自定义组件要实现v-model，必须实现 :value, @input  -->
    <input :value="value" @input="onInput" v-bind="$attrs">
  </div>
</template>

<script>
  export default {
    name: "input",
    props: {
      value: {
        type: String,
        default: ''
      },
    },
    methods: {
      onInput (e) {
        this.$emit('input', e.target.value)
      }
    },
  }
</script>

<style scoped>

</style>
