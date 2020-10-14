<template>
  <div class="home">
    <Search
      class="home__search"
      @find-word="fetchWord"
    />
    <List
      class="home__list"
      :part-of-word="searchData"
      :words="words"
    />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import List from '@/components/List.vue'
import axios from 'axios'
import { APIKEY } from '../apiKey'

export default {
  name: 'Home',
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
    fetchWord (searchData) {
      axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${searchData}?key=${APIKEY}`)
        .then(({ data }) => {
          this.words = [{
            title: data[0].hwi.hw.replace('*', ''),
            partOfSpeech: data[0].fl,
            description: data[0].shortdef[0],
            isStarred: false
          }]
        })
        .catch(error => {
          // TODO: show error
          console.log(error)
        })
    }
  }
}
</script>

<style lang="less">
  .home {
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
