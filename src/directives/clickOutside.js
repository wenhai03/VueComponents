export default { // 指令是一个方法 指令有自己的生命周期
  clickOutside: { // el真实的dom元素
    inserted(el, bindings, vnode) {
      console.log('el, bindings, vnode------', el, bindings, vnode)
      document.addEventListener('click', function (e) {
        if (e.target === el || el.contains(e.target)) {
          return
        }
        bindings.value() // close事件
      })
    },
    unbind(){
      document.removeEventListener('click', function (e) {
        console.log('e------', e)
      })
    }
  }
  
}
