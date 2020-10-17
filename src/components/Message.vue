<template>
  <div :class="['message', `message--${type}`]">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Message',

  props: {
    type: {
      type: String,
      default: 'success'
    },
    text: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style lang="less">
  .message {
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 15px;

    &--error {
      background: #ed9797
    }

    &--success {
      background: #98c899
    }
  }
</style>
