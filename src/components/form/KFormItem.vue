<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <!-- 校验信息 -->
    <p v-if="errorMessage"></p>
  </div>
</template>

<script>
  import Schema from "async-validator"

  export default {
    name: "input",
    inject: ['form'],
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: String
    },
    data () {
      return {
        errorMessage: ''
      }
    },
    mounted () {
      this.$on('validate', () => {
        this.validate()
      })
    },
    methods: {
      validate () {
        // 执行校验规则
        const rules = this.form.rules[this.prop]

        // 2.获取数据
        const value = this.form.model[this.prop]
        // 3.执行校验
        const desc = {
          [this.prop]: rules
        }
        const schema = new Schema(desc)
        //   参数1是值,参数2是校验错误对象数组
        //   返回的Promise<boolean>
        return schema.validate({[this.prop]: value}, errors => {
          if (errors) {
            // 有错
            this.errorMessage = errors[0].message
          } else {
            // 没错，清除错误信息
            this.errorMessage = ""
          }
        })
      }
    },
  }
</script>

<style scoped>

</style>
