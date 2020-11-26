<template>
  <div class="content">

    <FormGroup
      :list="formList"
    />

  </div>
</template>
<script>
  import FormGroup from './form-group'
  // import Upload from './upload-file'

  export default {
    components: {
      FormGroup
    },
    data() {
      return {
        openList: [],
        openListValue: [],
        formList: [
          {
            name: 'name',
            type: 'el-input',
            value: '',
            label: '姓名',
            placeholder: "请填写姓名",
            rule: [
              { required: true, message: 'The name cannot be empty', trigger: 'blur' }
            ]
          },
          {
            name: 'sex',
            type: 'el-select',
            value: '',
            label: '性别(下拉单选)',
            children: {
              type: 'el-option',
              list: [
                { value: 'man', title: '男' },
                { value: 'woman', title: '女' }
              ]
            }
          },

          {
            name: 'education',
            type: 'el-radio-group',
            value: 1,
            label: '学历(单选)',
            children: {
              type: 'el-radio',
              list: [
                { label: 1, title: '本科' },
                { label: 2, title: '研究生' },
                { label: 3, title: '博士' }
              ]
            }
          },

          /*{
            name: 'img',
            type: Upload,
            value: 1,
            label: '上传图片',
            placeholder: "请上传图片",
            rule: [
              { required: true, message: 'The img cannot be empty', trigger: 'blur' }
            ]
          },*/
        ]
      };
    },
    mounted() {
      this.getList();
    },
    methods: {
      getList() {
      }
    }
  };
</script>
<style scoped>
  .content {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    width: 1000px;
  }
</style>
