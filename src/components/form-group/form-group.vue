<template>
  <el-form
    ref="form"
    v-if="Object.keys(valueList).length"
    :label-width="labelWidth"
    :model="valueList"
    :rules="rules"
  >
    <el-form-item
      v-for="(item, index) in list"
      :label="item.label"
      :prop="item.name"
      :error="errorStore[item.name]"
      :key="`${_uid}_${index}`"
      @click.native="handleFocus(item.name)"
    >
      <component :is="item.type" :range="item.range" v-model="valueList[item.name]" :placeholder="item.placeholder">
        <template v-if="item.children">
          <component
            v-for="(child, i) in item.children.list"
            :is="item.children.type"
            :key="`${_uid}_${index}_${i}`"
            :label="child.label"
            :value="child.value">{{ child.title }}
          </component>
        </template>
      </component>
    </el-form-item>

    <el-form-item>
      <el-button @click="handleSubmit" type="primary">提交</el-button>
      <el-button @click="handleReset" type="primary">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import clonedeep from 'clonedeep'
  // import { sentFormData } from '@/api/data'
  export default {
    name: 'FormGroup',
    data () {
      return {
        initValueList: [],
        rules: {},
        valueList: {},
        errorStore: {}
      }
    },
    props: {
      list: {
        type: Array,
        default: () => []
      },
      labelWidth: {
        type: String,
        default: '150px'
      },
      url: {
        type: String,
        required: true
      }
    },
    watch: {
      list () {
        this.setInitValue()
      }
    },
    methods: {
      setInitValue () {
        let rules = {}
        let valueList = {}
        let initValueList = {}
        let errorStore = {}
        this.list.forEach(item => {
          rules[item.name] = item.rule
          valueList[item.name] = item.value
          initValueList[item.name] = item.value
          errorStore[item.name] = ''
        })
        this.rules = rules
        this.valueList = valueList
        this.initValueList = initValueList
        this.errorStore = errorStore
      },
      handleSubmit () {
        this.$refs.form.validate(valid => {
          if (valid) {
            // sentFormData({
            //   url: this.url,
            //   data: this.valueList
            // }).then(res => {
            //   this.$emit('on-submit-success', res)
            // }).catch(err => {
            //   this.$emit('on-submit-error', err)
            //   for (let key in err) {
            //     this.errorStore[key] = err[key]
            //   }
            // })
          }
        })
      },
      handleReset () {
        this.valueList = clonedeep(this.initValueList)
      },
      handleFocus (name) {
        this.errorStore[name] = ''
      }
    },
    mounted () {
      this.setInitValue()
    }
  }
</script>

<style>

</style>
