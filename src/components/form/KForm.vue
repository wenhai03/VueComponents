<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Form",
    provide () {
      return {
        form: this
      }
    },
    props: {
      model: {
        type: Number,
        require: true
      },
      rules: {
        type: Object
      }
    },
    mounted () {
      console.log('this.children------', this.$children)
    },
    methods: {
      validate (cb) {
        // map结果是若干个数组
        const tasks = this.$children.filter(item => item.prop).map(item => item.validate())
        // 所有任务必须全部成功才算校验通过
        Promise.all(tasks).then(() => cb(true)).catch(() => cb(false))
      }
    },
  }
</script>

<style scoped>

</style>
