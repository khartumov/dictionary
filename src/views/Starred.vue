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
    flex-wrap: wrap;

    &__search {
      width: 27%;
    }

    &__list {
      width: 70%;
    }
  }

  @media (max-width: 768px) {
    .starred {
      flex-direction: column;

      &__search {
        width: 100%;
      }

      &__list {
        width: 100%;
        margin-top: 15px;
      }
    }
  }
</style>
