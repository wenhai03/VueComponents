<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="errorMessage">{{errorMessage}}</p>
  </div>
</template>

<script>
  export default {
    name: "FormItem",
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String,
      }

    },
    data() {
      return {
        errorMessage: ''
      }
    },
    methods: {
      validate() {
        console.log('FormItem 监听到咯------')
      }
    }
  }
</script>

<style scoped>

</style>
