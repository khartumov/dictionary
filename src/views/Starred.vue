<template>
  <div class="starred">
    <Search
      class="starred__search"
      @search-event="filterList"
    />
    <List
      class="starred__list"
      :part-of-word="searchData"
      :words="words"
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
      searchData: '',
      words: []
    }
  },

  methods: {
    filterList (searchData) {
      this.searchData = searchData
    }
  },

  created () {
    // TODO: get from LocalStorage

    this.words = [
      {
        title: 'apple',
        partOfSpeech: 'noun',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        isStarred: true
      },
      {
        title: 'dog',
        partOfSpeech: 'noun',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        isStarred: true
      },
      {
        title: 'international',
        partOfSpeech: 'noun',
        description: 'the quality or state of being free: such as',
        isStarred: true
      },
      {
        title: 'freedom',
        partOfSpeech: 'adjective',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, the quality or state of being free: such as. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        isStarred: true
      },
      {
        title: 'freequency',
        partOfSpeech: 'noun',
        description: 'the ddd or state of being free: such as',
        isStarred: true
      },
      {
        title: 'move',
        partOfSpeech: 'verb',
        description: 'Lorem ipsum dolor sit amet the ddd or state of being free: such as. Lorem ipsum dolor sit amet the ddd or state of being free: such asthe ddd or state of being free: such as',
        isStarred: true
      },
      {
        title: 'fight',
        partOfSpeech: 'verb',
        description: 'Lorem ipsum dolor sit amet the ddd or state of being free: such as. Lorem ipsum dolor sit amet the ddd or state of being free: such as',
        isStarred: true
      }
    ]
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
