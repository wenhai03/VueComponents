<template>
  <div>
    <input type="text" :value="value" @input="onInput" v-bind="$attrs">
  </div>

</template>

<script>
  export default {
    name: "Input",
    // inheritAttrs: false,
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    methods: {
      onInput(e) {
        this.$emit('input', e.target.value)
        console.log('yyyy------', this.$parent)

        this.$parent.$emit('validate')
      }
    }
  }
</script>

<style scoped>

</style>
