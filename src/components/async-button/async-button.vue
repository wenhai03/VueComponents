<template>
  <Button :loading="loading" :type="type" :long="long" :size="size" @click="handleClick">
    <slot></slot>
  </Button>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      size: {
        type: String,
        default: 'default'
      },
      long: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        loading: false
      }
    },

    methods: {
      handleClick(evt) {
        if (!this.loading) {
          this.loading = true;
          this.$emit('click', evt, () => {
            this.loading = false;
          });
        }
      }
    }
  }
</script>

<style scoped>

</style>
