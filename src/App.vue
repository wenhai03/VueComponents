<template>
  <div id="app">
   <!-- &lt;!&ndash;  获取用户选择的数据  &ndash;&gt;
    <Cascader :options="options" v-model="value"/>
    <el-button @click="getInfo" >请求数据</el-button>

&lt;!&ndash;    <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>&ndash;&gt;
    <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>

    <Slider :value.sync="value1" range></Slider>
    <login-form></login-form>-->
    <FormBuilder />

    <Form1 ref="vuForm" :formData="form_data" :formItme="form_item" :formHandler="form_handler"/>
  </div>
</template>
<script>
  // import { getUserInfo } from '@/api/user'
  // import { getFolderList, getFileList } from '@/api/data'
  // import { putFileInFolder, transferFolderToTree } from '@/libs/util'
  // import Cascader from 'components/cascader'
  // import LoginForm from 'components/main/login-form'
  import FormBuilder from 'components/form-group/demo'

  import Form1 from "components/form1"


  export default {
    components: {
      FormBuilder: FormBuilder,

      // Cascader,
      // LoginForm
      Form1
    },
    data() {
      let validatePass = (rule, value, callback) => {
        if(!value) {
          callback(new Error('请输入停车场名称'));
        }else{
          callback();
        }
      }
      let validateNumber = (rule, value, callback) => {
        const regNumber = /^[0-9]*$/;
        if(!value) {
          callback(new Error('请输入可停放车辆'));
        }else if(!regNumber.test(value)){
          callback(new Error('请输入数字'));
        }else{
          callback();
        }
      }
      return {
        // 表单数据配置
        form_data: {
          parkingName: "",
          area: "",
          address: "",
          type: "",
          carsNumber: "",
          status: "",
          lnglat: ""
        },
        form_handler: [
          { label: "确定", key: "submit",  type: "danger", handler: () => this.formValidate() },
          { label: "重置", key: "reset" },
        ],
        // 表单配置
        form_item: [
          {
            type: "Input",
            label: "停车场名称",
            placeholder: "请输入停车场名称",
            prop: "parkingName",
            width: "200px",
            validator: [{ validator: validatePass, trigger: 'change' }]
          },
          {
            type: "Slot",
            slotName: "city",
            prop:"area",
            label: "区域"
          },
          {
            type: "Input",
            label: "详细地址",
            placeholder: "请输入详细地址",
            prop: "address",
            required: true
          },
          /*{
            type: "Radio",
            label: "类型",
            prop: "type",
            options: this.$store.state.config.parking_type,
            required: true
          },*/
          {
            type: "Input", label: "可停放车辆", placeholder: "请输入数字类型", prop: "carsNumber",
            validator: [{ validator: validateNumber, trigger: 'change' }]
          },
          /*{
            type: "Radio",
            label: "禁启用",
            prop: "status",
            options: this.$store.state.config.radio_disabled
          },*/
          { type: "Slot", slotName: "amap", label: "位置" },
          { type: "Input", label: "经纬度", placeholder: "请输入详细地址", prop: "lnglat", disabled: true },
        ],


        value: [],
        value1: [20, 50],
        options: [
          {
            label: '肉类',
            children: [
              {
                label: '猪肉',
                children: [
                  {label: '鸡腿'}
                ]
              },
              {
                label: '五花肉',
                children: [
                  {label: '鸡翅'}
                ]
              }
            ]
          },
          {
            label: '蔬菜',
            children: [
              {
                label: '菠菜',
                children: [
                  {label: '菠菜111'}
                ]
              },
              {
                label: '上海菜',
                children: [
                  {label: '上海菜111'}
                ]
              }
            ]
          }
        ],
        treeData: [],

        defaultProps: {
          children: 'children',
          label: 'name'
        }
      };
    },
    mounted() {
      /*this.getList();
      Promise.all([getFolderList(), getFileList()]).then(res => {
        console.log('res[0]------', res[0])
        console.log('res[1]------', res[1])

        console.log('33333------', putFileInFolder(res[0], res[1]))
        console.log('44444------', transferFolderToTree(putFileInFolder(res[0], res[1])))

        this.treeData = transferFolderToTree(putFileInFolder(res[0], res[1]))
      })*/
    },
    methods: {
      handleNodeClick () {},
      /** 提交表单 */
      formValidate(){
        this.$refs.vuForm.$refs.form.validate((valid) => {
          if (valid) {
            // this.id ? this.editParking() : this.addParking();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      getInfo () {
        console.log('000000000------')
        /*getUserInfo({ userId: 21 }).then(res => {
          console.log('res: ', res)
          // this.url = res.data.img
          // this.bgColor = res.data.color
        })*/
      },
      handleNotify() {
        this.$notify('我很丑')
      },
      getList() {
      },
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
    }
  };
</script>
<style scoped>
  @import "assets/css/base.css";

  p{
    font-size: 40px;
  }

  p{
  }
  .content {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    width: 1000px;
  }
</style>
