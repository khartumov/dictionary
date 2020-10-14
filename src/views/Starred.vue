<template>
  <div class="starred">
    <Search
      class="starred__search"
      @search-event="filterList"
    />
    <List
      class="starred__list"
      :filter-params="searchData"
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
      searchData: {
        text: '',
        partsOfSpeech: []
      }
    }
  },

  computed: {
    starredWords () {
      return this.$store.state.starredWords
    }
  },

  methods: {
    filterList (searchParams) {
      this.searchData = searchParams
    }
  }
}
</script>

<style lang="less">
  .starred {
    display: flex;
    justify-content: space-between;

    &__search {
      width: 25%;
    }

    &__list {
      width: 70%;
    }
  }
</style>
