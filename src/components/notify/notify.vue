<template>
  <div class="notify">
    {{value}}
  </div>

</template>

<script>
  export default {
    name: "notify",
    data () {
      return {
        value: '哈哈哈哈哈'
      }
    },
    components: {},
    methods: {},

  }
</script>

<style scoped>
.notify{
  width: 100px;
  height: 40px;
  background: rgba(0,0,0,.45);
  border-radius: 15px;
  line-height: 40px;
  text-align: center;
  color: #fff;
}
</style>
