<template>
  <div class="starred">
    <Search
      class="starred__search"
      @search-event="filterList"
    />
    <List
      class="starred__list"
      :part-of-word="searchData"
      :words="starredWords"
    />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import List from '@/components/List.vue'

export default {
  name: 'Starred',
  components: {
    Search,
    List
  },

  data () {
    return {
      searchData: ''
    }
  },

  computed: {
    starredWords () {
      return this.$store.state.starredWords
    }
  },

  methods: {
    filterList (searchData) {
      this.searchData = searchData
    }
  }
}
</script>

<style lang="less">
  .starred {
    display: flex;
    justify-content: space-between;

    &__search {
      width: 26%;
    }

    &__list {
      width: 70%;
    }
  }
</style>
