<template>
  <aside class="search">
    <form
      action=""
      @submit.prevent="submitHandler"
    >
      <input
        type="text"
        class="search__field"
        placeholder="Type text..."
        v-model.trim="search"
        @input="$emit('search-event', search)"
      >
    </form>
  </aside>
</template>

<script>
export default {
  name: 'Search',

  data () {
    return {
      search: ''
    }
  },

  methods: {
    submitHandler (e) {
      if (this.$route.path === '/starred') {
        return false
      }

      if (this.$route.path === '/') {
        this.$emit('find-word', this.search)
      }
    }
  }
}
</script>

<style lang="less">
  .search {
    background: #EFEFEF;
    border-radius: 5px;
    padding: 15px;
    min-height: 100px;

    &__field {
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #2c3e50;
      width: 100%;
      box-sizing: border-box;
      font-size: 17px;

      &:focus {
        outline:none;
        box-shadow: 0 0 10px 0px rgba(50, 50, 50, 0.3);
      }
    }
  }
</style>
