<template>
  <div
    v-if="message.length"
  >
    <div
      v-for="m in message"
      :key="m.id"
    >
      {{m.message}}

    </div>
  </div>


</template>

<script>
  export default {
    name: "message",
    data () {
      return {
        message: []
      }
    },

    mounted () {
      this.id = 0 // 表示当前弹层的唯一标识
    },
    methods: {
      add (options) {
        let id = this.id++ // 这是弹窗id号
        let layer = {...options, id}

        this.message.push(layer)

        layer.timer = setTimeout(() => { // 时间到了将自己移除
            this.remove(layer)
        }, options.duration)
      },
      remove(layer){
        clearTimeout(layer.timer)
        this.message = this.message.filter(message => message.id !== layer.id)
      }
    },
  }
</script>

<style scoped>

</style>
