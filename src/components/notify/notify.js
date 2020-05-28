import modal from './notify.vue'

let nofify = { // 需要在此对象中拥有一个install方法

}

nofify.install = function (Vue, options={delay: 3000}) {
  // console.log('Vue, option------', Vue, options)
  if (nofify.el) return
  
  Vue.prototype.$notify = function (message, opt = {}) {
    // 用自己调用插件是传递过来的属性 覆盖掉默认设置好的
    options = {...options, ...opt}
    
    // 返回的是一个构造函数的子类，参数是包含组件选项的对象
    let V = Vue.extend(modal)
    
    let vm = new V
    // 创建一个div将实例挂载到元素上
    let oDiv = document.createElement('div')
    vm.$mount(oDiv)
    nofify.el = vm.$el
    
    vm.value = message
    // 将当前实例这个真实对象扔到元素上
    document.body.appendChild(vm.$el)
    
    // 延迟多少秒 将dom元素移除掉
    setTimeout(() => {
      // 将实例的元素删除掉
      document.body.removeChild(vm.$el)
    }, options.delay)
  }
}

// 导出这个包含install的对象，如果使用Vue.use就会调用这个install 方法

export default nofify
